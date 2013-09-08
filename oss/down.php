<?php
/**
 * 加载sdk包以及错误代码包
 */
require_once 'sdk.class.php';

$oss_sdk_service = new ALIOSS();

//设置是否打开curl调试模式
$oss_sdk_service->set_debug_mode(FALSE);

//设置开启三级域名，三级域名需要注意，域名不支持一些特殊符号，所以在创建bucket的时候若想使用三级域名，最好不要使用特殊字符
//$oss_sdk_service->set_enable_domain_style(TRUE);

/**
 * 测试程序
 * 目前SDK存在一个bug，在文中如果含有-&的时候，会出现找不到相关资源
 */
try{
	/**
	 * Service相关操作
	 */
	//get_service($oss_sdk_service);
	
	/**
	 * Bucket相关操作
	 */
	//create_bucket($oss_sdk_service);
	//delete_bucket($oss_sdk_service);
	//set_bucket_acl($oss_sdk_service);
	//get_bucket_acl($oss_sdk_service);
	
	/**
	 * Object相关操作
	 */
	//list_object($oss_sdk_service);
	//create_directory($oss_sdk_service);
    //upload_by_content($oss_sdk_service);
   	//upload_by_file($oss_sdk_service);
	//copy_object($oss_sdk_service);
	//get_object_meta($oss_sdk_service);   
	//delete_object($oss_sdk_service);    
	//delete_objects($oss_sdk_service);   
	//get_object($oss_sdk_service);       
	//is_object_exist($oss_sdk_service);   
	//upload_by_multi_part($oss_sdk_service); 
	//upload_by_dir($oss_sdk_service); 
	
	/**
	 * Object Group相关操作
	 */
	//create_object_group($oss_sdk_service);
	//get_object_group($oss_sdk_service);      
	//get_object_group_index($oss_sdk_service);  
	//get_object_group_meta($oss_sdk_service); 
	//delete_object_group($oss_sdk_service); 
	
	/**
	 * 外链url相关
	 */
	//get_sign_url($oss_sdk_service);
	
}catch (Exception $ex){
	die($ex->getMessage());
}


//获取object
function get_object($obj){
	$bucket = 'uniqueapp';
	$object = 'mentohust_0.3.4-1_amd64.deb';
	
	//$options = array(
	//	ALIOSS::OSS_FILE_DOWNLOAD => "d:\\cccccccccc.txt",
	//	//ALIOSS::OSS_CONTENT_TYPE => 'txt/html',
	//);	
	
	//$response = $obj->get_object($bucket,$object,$options);
	$response = $obj->get_object($bucket,$object);
	_format($response);
}
get_object($oss_sdk_service);  