<?php

/**
 * 定义 YucCaptcha 类
 * @link http://www.yucmedia.com/
 * @copyright Copyright (c) 2011-2012 宇初网络技术有限公司 {@link http://www.yucmedia.com/}
 * @version $Id:$
 * @author Administrator
 * @author $Author: $
 * $Date: 2012-07-10 09:46:31 +0800 (周二, 2012-07-10) $
 * @package YucCaptcha
 */


define('M_PRO_DIR', dirname(__FILE__)); //定义项目目录

//服务器地址
define('YUC_SERVICE_NAME', 'serv.yucmedia.com');
//服务器端口
define('YUC_SERVICE_PORT', '80');
//服务器验证码校验路径
define('YUC_VERIFY_PATH', '/verify.php');
//服务器远程请求超时设置
define('YUC_CLIENT_TIMEOUT', 3);
//站点的Key配置
define('YUC_SITE_KEY', '0A3FF05789295B03ABC1BDA03EB8809A');
//站点通信密钥
define('YUC_SECURE_KEY', '7668D7628E2BD3728B696C97AF5B06C5');
//日志类型 EMERG,DEBUG,INFO
define('YUC_LOG_TYPE', '');
//调试模式
define('YUC_IS_DEBUG', FALSE);

if (YUC_IS_DEBUG) {
    error_reporting(E_ALL);
    @ini_set('display_errors', 1);
} else {
    error_reporting(0);
    @ini_set('display_errors', 0);
}
/**
 * 直接记录日志
 * @param <type> $lvevel
 * @param string $level
 */
function Write($msg, $level) {
    $arr_level = explode(',', YUC_LOG_TYPE);
    if (in_array($level, $arr_level)) {
        $record = date('Y-m-d H:m:s') . " >>> " . number_format(microtime(TRUE), 5, ".", "") . ' ' . " : " . $level . "\t" . $msg;
        $base = M_PRO_DIR . "/Log";
        $dest = $base . "/" . date("YmdH", time()) . 'log.php';
        if (!file_exists($dest)) {
            @mkdir($base, 0777, TRUE);
            @file_put_contents($dest, "<?php die('Access Defined!');?>\r\n", FILE_APPEND);
        }
        if (file_exists($dest)) {
            @file_put_contents($dest, $record . "\r\n", FILE_APPEND);
        }
    }
}

class YucCaptcha {

    static private $_result = FALSE;
    static private $_details = '';
    static private $_code = '';

    /**
     *  获取校验结果
     * @param array $extra
     * @return type
     */
    static public function getVerifyResult($extra = array()) {
        $typhoon = self::getParams();
        if ($typhoon["_isValid"]) {
            $ssid = $typhoon["_ssid"];
            $name = $typhoon["_name"];
            $value = self::context($name, NULL, '');
            if (trim($value) != '') {
                if ($typhoon["_request_type"] == 1) {
                    self::sendVerifyRemoteRequest($ssid, $value, $typhoon["_diff_time"], $extra);
                } else {
                    self::sendVerifyLocalRequest($ssid, $value);
                }
            } else {
                self::$_result = 0;
                self::$_code = 'E_VALUEEMPTY_001';
                self::$_details = '验证码不可以为空';
            }
        } else {
            self::$_result = 0;
            self::$_code = 'E_PARAM_001';
            self::$_details = '重要参数传递错误';
        }
        return (self::$_result === 1 ? TRUE : FALSE);
    }

    /**
     *  获取校验结果
     * @param $ssid
     * @param $result
     * @param int $diff
     * @param array $extra
     * @return type
     */
    static public function sendVerifyRemoteRequest($ssid, $result, $diff = 0, $extra = array()) {
        $client = new YucRequest(YUC_SERVICE_NAME, YUC_SERVICE_PORT);
        $client->setTimeout(YUC_CLIENT_TIMEOUT); //设置超时
        $client->post(YUC_VERIFY_PATH, array(
            'site_key' => YUC_SITE_KEY,
            'secure_key' => YUC_SECURE_KEY,
            'ssid' => $ssid,
            'result' => $result,
            'diffsec_client' => $diff,
            'extra' => $extra,
        ));
        $post_req = json_decode($client->getContent(), TRUE);
        Write('远程验证完成,输入结果为：' . $result . '，返回状态 ：' . $client->getStatus() . ';' . 'POST 验证码正确性请求返回的数据：' . $client->getContent(), 'DEBUG');
        if ($client->getStatus() == 200 && is_array($post_req)) {
            self::$_code = $post_req['code'];
            self::$_details = $post_req['details'];
            self::$_result = $post_req['result'];
        } else {
            self::$_code = 'E_SEVERVALID_001';
            self::$_details = '服务器请求失败!';
            self::$_result = 0;
        }
    }

    /**
     *  本地验证
     * @param type $ssid
     * @param type $result
     * @return type
     */
    static public function sendVerifyLocalRequest($ssid, $result) {
        $mass = self::context('yuc_mass', NULL, '');
        $code = YucCrypt::decrypt(base64_decode(urldecode($mass)), YucMath::erypt_key());
        $code = str_replace(",", "", $code);
        if ($code != '' && strtolower($code) === strtolower($result)) {
            self::$_result = 1;
            self::$_code = '';
            self::$_details = '验证码输入正确';
        } else {
            self::$_result = 0;
            self::$_code = 'E_LOCALVALID_001';
            self::$_details = '验证码验证失败';
        }
        Write('本地验证完成,输入结果为：' . $result . ';' . '', 'DEBUG');
    }

    /**
     * 台风域的参数分析
     * @return array|bool
     */
    static public function getParams() {
        $ret = array();
        $_value = self::context('yuc_typhoon_west', NULL, '');
        $_params = explode(',', $_value);
        $_sid = isset($_params[0]) ? $_params[0] : '';
        $_cid = isset($_params[1]) ? $_params[1] : '';
        $_ssid = $_sid . ',' . $_cid;
        $_name = isset($_params[2]) ? $_params[2] : '';
        $_request_type = isset($_params[3]) ? $_params[3] : 0;
        $_diff_time = isset($_params[4]) ? $_params[4] : 0;
        $ret["_value"] = $_value;
        $ret["_sid"] = $_sid;
        $ret["_cid"] = $_cid;
        $ret["_ssid"] = $_ssid;
        $ret["_name"] = $_name;
        $ret["_request_type"] = $_request_type;
        $ret["_diff_time"] = $_diff_time;
        if ($_sid != '' && $_cid != '' && $_name != '' && $_request_type != '') {
            $ret["_isValid"] = TRUE;
        } else {
            $ret["_isValid"] = FALSE;
        }
        return $ret;
    }

    /**
     * 获取 设置参数
     * @param $key
     * @param null $value
     * @param null $default
     * @return null
     */
    static public function context($key, $value = NULL, $default = NULL) {
        if ($value == NULL) {
            if (isset($_GET[$key])) {
                return $_GET[$key];
            } else if (isset($_POST[$key])) {
                return $_POST[$key];
            } else {
                return $default;
            }
        } else {
            $_GET[$key] = $value;
            $_POST[$key] = $value;
        }
    }

    /**
     * 验证结果
     * @return type
     */
    static public function getResult() {
        return self::$_result;
    }

    /**
     * 验证编码
     * @return type
     */
    static public function getCode() {
        return self::$_code;
    }

    /**
     * 验证描述
     * @return type
     */
    static public function getDetails() {
        return self::$_details;
    }


}

/**
 * 定义 YucRequest 类
 * @link http://www.yucmedia.com/
 * @copyright Copyright (c) 2011-2012 宇初网络技术有限公司 {@link http://www.yucmedia.com/}
 * @version $Id:$
 * @author Administrator
 * @author $Author: $
 * $Date: 2012-07-10 09:46:31 +0800 (周二, 2012-07-10) $
 * @package YucRequest
 */
class YucRequest {

    private $_host;
    private $_port;
    private $_timeout = 3;
    private $_status = 200;
    private $_content = '';

    public function __construct($host, $port) {
        $this->_host = $host;
        $this->_port = $port;
    }

    /**
     * 设置超时时间
     * @param $timeout
     */
    public function setTimeout($timeout) {
        $this->timeout = $timeout;
    }

    /**
     * 批量判断函数存在性
     * @return bool
     */
    private function functionIsExists() {
        $args = func_get_args();
        foreach ($args as $arg) {
            if (!function_exists($arg)) {
                return FALSE;
            }
        }
        return TRUE;
    }

    /**
     * 处理post请求的方式 多种方式自动切换
     * @param $path
     * @param $data
     * @return mixed
     */
    public function post($path, $data) {
        if ($this->functionIsExists('curl_init', 'curl_setopt', 'curl_exec', 'curl_close')) {
            $ret = $this->postByCurl($path, $data);
        } elseif ($this->functionIsExists('fsockopen') || $this->functionIsExists('pfsockopen')) {
            $ret = $this->postBySocket($path, $data);
        } elseif ($this->functionIsExists('stream_socket_client')) {
            $ret = $this->postBySsc($path, $data);
        } elseif ($this->functionIsExists("file_get_contents", "stream_context_create")) {
            $ret = $this->postByFile($path, $data);
        }
        return $ret;
    }

    /**
     * Sockey 版本
     * @param $path
     * @param $data
     * @return array
     */
    private function postBySocket($path, $data) {
        $content = "";
        $post_string = http_build_query($data);
        if (function_exists('fsockopen')) {
            $fp = @fsockopen($this->_host, $this->_port, $errno, $err, $this->_timeout);
        } elseif (function_exists('pfsockopen')) {
            $fp = @pfsockopen($this->_host, $this->_port, $errno, $err, $this->_timeout);
        }

        if ($fp) {
            fwrite($fp, "POST {$path} HTTP/1.0\r\n");
            fwrite($fp, "Host: {$this->_host}:{$this->_port}\r\n");
            fwrite($fp, "Content-type: application/x-www-form-urlencoded\r\n");
            fwrite($fp, "Content-length: " . strlen($post_string) . "\r\n");
            fwrite($fp, "User-Agent : Yuc Media Agent" . "\r\n");
            fwrite($fp, "Accept:*/*\r\n");
            fwrite($fp, "Connection: close\r\n\r\n");
            fwrite($fp, $post_string);
            $atStart = TRUE;
            while (!feof($fp)) {
                $line = fgets($fp, 1028);
                if ($atStart) {
                    $atStart = FALSE;
                    if (!preg_match('/HTTP\/(\\d\\.\\d)\\s*(\\d+)\\s*(.*)/', $line, $m)) {
                        return FALSE;
                    }
                    $this->_status = $m[2];
                    continue;
                }
                $content .= $line;
            }
            fclose($fp);
        }
        $content = preg_replace("/^.*\r\n\r\n/Us", '', $content);
        $this->_content = trim($content);
        return $content;
    }

    /**
     * stream_socket_client版本
     * @param $path
     * @param $data
     * @return bool
     */
    private function postBySsc($path, $data) {
        $content = "";
        $remote_server = "{$this->_host}:{$this->_port}{$path}";
        $post_string = http_build_query($data);
        $fp = @stream_socket_client($remote_server, $errno, $err, $this->_timeout);
        if ($fp) {
            fwrite($fp, "POST {$path} HTTP/1.0\r\n");
            fwrite($fp, "Host: {$this->_host}:{$this->_port}\r\n");
            fwrite($fp, "Content-type: application/x-www-form-urlencoded\r\n");
            fwrite($fp, "Content-length: " . strlen($post_string) . "\r\n");
            fwrite($fp, "User-Agent : Yuc Media Agent" . "\r\n");
            fwrite($fp, "Accept:*/*\r\n");
            fwrite($fp, "Connection: close\r\n\r\n");
            fwrite($fp, $post_string);
            $atStart = TRUE;
            while (!feof($fp)) {
                $line = fgets($fp, 1028);
                if ($atStart) {
                    $atStart = FALSE;
                    if (!preg_match('/HTTP\/(\\d\\.\\d)\\s*(\\d+)\\s*(.*)/', $line, $m)) {
                        return FALSE;
                    }
                    $this->_status = $m[2];
                    continue;
                }
                $content .= $line;
            }
            fclose($fp);
            $content = preg_replace("/^.*\r\n\r\n/Us", '', $content);
        }
        $this->_content = $content;
    }

    /**
     * Curl版本
     * @param $path
     * @param $data
     * @return mixed
     */
    private function postByCurl($path, $data) {
        $remote_server = "http://{$this->_host}:{$this->_port}{$path}";
        $post_string = http_build_query($data);
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $remote_server);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_0);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $post_string);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
        curl_setopt($ch, CURLOPT_HEADER, TRUE);
        curl_setopt($ch, CURLOPT_USERAGENT, "Yuc Media Post Agent");
        curl_setopt($ch, CURLOPT_TIMEOUT, $this->_timeout);
        $content = curl_exec($ch);
        curl_close($ch);
        if (!preg_match('/HTTP\/(\\d\\.\\d)\\s*(\\d+)\\s*(.*)/', $content, $m)) {
            return FALSE;
        }
        $this->_status = $m[2];
        $content = preg_replace("/^.*\r\n\r\n/Us", '', $content);
        $this->_content = $content;
        return $content;
    }

    /**
     * file_get_contents 版本
     * @param $path
     * @param $data
     * @return string
     */
    private function postByFile($path, $data) {
        $remote_server = "http://{$this->_host}:{$this->_port}{$path}";
        $post_string = http_build_query($data);
        $context = array(
            'http' => array(
                'method' => 'POST',
                'header' => "Content-type: application/x-www-form-urlencoded\r\n" . "User-Agent : Yuc Media Agent\r\n" . "Content-length:" . strlen($post_string) . "\r\n" . "Accept:*/*\r\n" . "Connection: close\r\n\r\n",
                'content' => $post_string,
                'protocol_version' => 1.0,
                'timeout' => $this->_timeout,
            )
        );
        $stream_context = stream_context_create($context);
        $content = file_get_contents($remote_server, FALSE, $stream_context);
        if (is_array($http_response_header)) {
            $headers = implode("\r\n", $http_response_header);
            if (!preg_match('/HTTP\/(\\d\\.\\d)\\s*(\\d+)\\s*(.*)/', $headers, $m)) {
                return FALSE;
            }
            $this->_status = $m[2];
        }
        $this->_content = $content;
        return $content;
    }


    public function getContent() {
        return $this->_content;
    }


    public function getStatus() {
        return $this->_status;
    }

}