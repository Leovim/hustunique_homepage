-- MySQL dump 10.13  Distrib 5.5.24, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: hustunique
-- ------------------------------------------------------
-- Server version	5.5.24-0ubuntu0.12.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `members`
--

DROP TABLE IF EXISTS `members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `members` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `job` int(11) DEFAULT NULL,
  `renren` varchar(9) DEFAULT NULL,
  `weibo` varchar(10) DEFAULT NULL,
  `school` int(11) DEFAULT NULL,
  `word` varchar(100) DEFAULT NULL,
  `src` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=90 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `members`
--

LOCK TABLES `members` WRITE;
/*!40000 ALTER TABLE `members` DISABLE KEYS */;
INSERT INTO `members` VALUES (19,'李倩文',3,'331848213','',1,'【UI设计一只 ，向往交互设计，还在修炼逻辑思维】，爱小动物~~爱旅游~~~爱美食~~~~',28),(20,'蔡蔚',3,'336945253','1650731284',1,'designer@unique studio 想做产品设计师，热爱生活，乐观向上~~ a lucky dog',34),(21,'潘传盛',3,'','',2,'',30),(22,'万龙雨',3,'347276441','1986979983',3,'',35),(23,'赖夏伦',3,'336893677','618310999',3,'有些事情现在不做这辈子也许都不会做了，希望自己能做点改变，别后悔了｡◕‿◕｡',29),(24,'王薇',3,'342952390','1848225390',1,' 谁不想让自己的青春牛逼闪闪？',36),(25,'赵蔺',7,'254642334','1959739111',2,'',40),(26,'周世伟',7,'728328376','',4,'',41),(27,'邓宏才',7,'','',5,'',27),(28,'佘东冬',7,'','',5,'',31),(29,'樊栖江',7,'349811517','2606939147',2,'清华大学网管会，Pythoner，Learning Erlang，e.pypi.python.org维护者',26),(32,'肖弘',4,'','1619523880',6,'HUSTer Majoring in SE/各种控/UniqueStudio/异次元软件世界客串作者',37),(34,'杨振越',6,'385594087','2461752642',8,'让心沉静是最强的能力',38),(35,'杜昊',6,'','',2,'不论在什么位置，生活的姿态由自己决定',32),(37,'程能力',6,'416637402','',2,'',25),(38,'肖力凡',6,'412282470','',9,'',1),(39,'陈庆',5,'343452786','1771444801',7,'',2),(40,'胡子豪',5,'391157605','',5,'',3),(41,'周全',2,'278705503','1620931185',6,'一只求知若渴的程序猿，最热爱开源，最讨厌广告，最钟情后台，最重视交互，最排斥学霸，最喜欢疯子。',4),(42,'余谦',2,'328699382','1912619114',2,'做个吃货做个傻逼的日子最好了～～ ',5),(43,'张佳乐',1,'343954906','2250717244',10,'$(\"jialezhang\").css(\"hobbies\":\"sports coding journey...\",\"skill\":\"html javascript css ror ...\")',6),(44,'陆德锋',1,'345982726','2430722340',6,'',7),(45,'谷利云',1,'','2003063045',2,'这是一个尚能思考的地球生物 ',8),(46,'李权',1,'438973023','2099451730',2,'做自己想做的事情，追求自己想追求的未来',9),(47,'马振超',2,'361945541','1936255804',2,'',10),(48,'刘长通',1,'422153965','2350992433',6,'信息决定一切！',11),(49,'路少德',2,'264537870','2830538642',2,'男，大二，程序员，思想健康，喜欢翻墙，为梦想在奋斗！ ',12),(50,'赵明灿',3,'353644160','',2,'跟着心走，勇敢尝试',13),(51,'邓哲',5,'','',12,'',14),(52,'邓波',2,'296195086','165704342',2,'',15),(54,'冷宏坤',2,'','',5,'',17),(65,'王莞茹',3,'349173329','2279582501',1,'',18),(66,'恽瑛',3,'333874320','2055345297',13,'培养自由以及自由培养之精神',19),(67,'范斌',3,'426416088','',6,'',20),(68,'赵帅',2,'339972312','',2,'动漫控，单机控，对二次元萌属性毫无抵抗力，但是我不是死宅！',21),(69,'罗志文',2,'339972312','',5,'1993中国制造，长170cm，人工智能，属国家免检产品.。',22),(70,'钟华',2,'389647898','',6,'',23),(71,'李子潼',3,'438629665','',6,'',24),(88,'张成',7,'327658084','2618270753',5,'simple life，loving basketball，orange\'s，hack to be a linux hacker',39),(89,'巫明翰',3,NULL,NULL,2,'吉他宅|GEEK|TwitterNewbie|emacer|各种语言懂一点厨|v家控|伪宅|装13爱好者|纯洁|努力天天向上|讨厌虫子和毛|喵~',42);
/*!40000 ALTER TABLE `members` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `new`
--

DROP TABLE IF EXISTS `new`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `new` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `sex` varchar(4) DEFAULT NULL,
  `school` varchar(30) DEFAULT NULL,
  `year` varchar(10) DEFAULT NULL,
  `phone` varchar(12) DEFAULT NULL,
  `mail` varchar(40) DEFAULT NULL,
  `reason` varchar(300) DEFAULT NULL,
  `award` varchar(200) DEFAULT NULL,
  `internet` varchar(300) DEFAULT NULL,
  `others` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `new`
--

LOCK TABLES `new` WRITE;
/*!40000 ALTER TABLE `new` DISABLE KEYS */;
INSERT INTO `new` VALUES (1,'蔡蔚','女','机械科学与工程学院','2012级','13125172325','wcai@hustunique.com','design','','','');
/*!40000 ALTER TABLE `new` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `works`
--

DROP TABLE IF EXISTS `works`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `works` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `word` varchar(200) DEFAULT NULL,
  `src` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `works`
--

LOCK TABLES `works` WRITE;
/*!40000 ALTER TABLE `works` DISABLE KEYS */;
INSERT INTO `works` VALUES (1,'city eye',1,'使用了Windows Azure,SilverLight等技术，在给予司机实惠的同时，达到减少汽车尾气的排放的目的。',1),(2,'cocare',1,'Cocare是一个旨在关爱留守儿童身体和心理健康、联系留守儿童和父母的公益平台。主要功能是向家长发送关于健康、教育和紧急事件的短信。',2),(3,'codoc',1,'一套远程医疗的解决方案，通过较廉价的嵌入式终端，可以使偏远郊区、农村的病人接受专业的治疗方案',3),(4,'cootrading',1,'基于全球碳交易、旨在改善全球变暖问题的系统，从而快速的、低成本的推动全民节能减排',4),(5,'IＴ大挑战',1,'在给定时间内完成既定任务，获得了中国区第一',5),(6,'hi-word',1,' 基于Multipoint（多鼠标）技术的语言教学系统，旨在利用有限的教学资源和设备，改善发展中国家课堂教学效果，激发儿童的学习兴趣和潜能。',6),(7,'family tree',2,'用html5实现的团队家谱，记录了团队从创始到现在的团队成员',1),(8,'团队分享',2,'团队分享网站，通过浏览器插件来分享网站',2),(9,'booklib',2,'团队图书系统，用来管理团队内部书籍，方便借还',3),(10,'一块儿去',2,' 基于webqq的应用，可以查看和创建基于地点的活动，然后召集参与者来参与活动',4),(11,'CMS',2,'一款有联创特色的CMS系统,CMS即Content Management System的缩写，它具有许多基于模板的优秀设计，可以加快网站开发的速度和减少开发的成本',5),(12,'with in',3,'一款针对于女性的手机防盗软件',1),(13,'snoozz',3,'一款专为小憩量身打造的方便简洁的闹钟软件',2),(14,'wifile',3,'便捷的无线网内传输工具',3),(15,'meeno',3,'对短信信息进行提取以便备忘，智能的手机短信小助手',4),(16,'fuubo',3,'Fuubo是一款专注于提升新浪微博发送体验的发送助手,提供定时发微薄，离线发微薄等功能',5),(17,'tetris',3,'改进俄罗斯方块，加入了老鼠推石头和不断上涨的水面的障碍，使游戏更加有趣',6),(18,'uniquepic',3,'一款基于Google Android 操作系统开发的图像处理软件。具备大部分用户所需功能。',7),(19,'shake-joy',3,'带有图像处理功能的手机娱乐软件。无需任何复杂的操作，简单的摇一摇就可让图片产生各种随机效果',8),(20,'南极大冒险',3,'益智闯关类游戏',9),(21,'图像拼接',5,'利用图像拼接技术将不同的图片拼接起来',1),(22,'magic-touch',3,'用手机发送命令，pc客户端接收手势和键盘输入，来控制PC上的鼠标和键盘，可以用作遥控ppt，或者游戏手柄',10),(23,'copyright',3,'一款交互体验极佳的临时笔记和文件管理软件，帮助用户快速存放和定位所需资源',11),(24,'unique-meeting',3,'一款会议软件，可以在线看office，同时可以接受实时图文新闻',12),(25,'unique-vote',3,'一款手机版的问卷星，主要用于制作调查表，进行问卷调查',13),(26,'hust-cs',3,'HustCs是计算机科学与技术学院学院网站的手机客户端，通过它可以在android手机上直接访问学院网站',14),(27,'打地鼠',3,'打地鼠游戏的android电子版，可以帮助渡过无聊的时间，同时练下反应',17),(28,'hi-us',3,'一款针对年轻人聚会出游的应用软件，它致力解决聚会时娱乐食宿等场所的查找和选定，以及聚会后AA现金分账的难题',16),(29,'地铁路路通',3,'一款可以让你轻松获得你想要的有关特定城市的各路地铁信息，不用再迷路了',15),(30,'列车时刻表',3,'提供站站查询和车次查询的功能，帮助用户随时随地获取列车信息，方便用户的出行',18),(31,'变脸',5,'利用人脸检测技术开发的一个有趣的应用，通过算法提取出人脸位置信息，然后将脸谱画到指定位置，输出图像',2),(32,'BSP',5,'基于linux arm的板级开发应用',3),(33,'嵌入式家居',5,'操作可视化的智能家居控制系统，可以根据家居大小灵活配置，实现对环境的无线遥控，并且可与pc交互，实现物联网的“互联”',4),(34,'Palm Server',5,'基于Windows Mobile平台的服务器实时监控系统，必须对局域网内的被监测的子节点服务器进行正确的IP设置以及对主节点进行正确的外网设置，以提供相应的手机服务',5),(35,'ic算法机器人比赛',5,'在模拟环境中，通过一定的算法去控制火星车完成一些任务',6),(36,'泡泡',5,'本系统将人脸检测与3D渲染完美的结合在了一起，通过人脸的位置来改变三维物体的视角，提供了浸入式的3D展示',7),(37,'桌面壁纸',4,'unique studio专属桌面',1),(38,'海报',4,'2011年宣讲会海报',2),(39,'卡贴',4,'geek风格的联创专属卡贴',3),(40,'名片',4,'imagine cup比赛名片设计',4),(41,'海报',4,'十周年系列宣传海报',5),(42,'海报',4,'十周年系列宣传海报',6),(43,'海报',4,'十周年系列宣传海报',7),(44,'海报',4,'2010年招新海报',8),(45,'海报',4,'Android组',9),(46,'海报',4,'Design组',10),(47,'海报',4,'IT组',11),(48,'海报',4,'PM组',12),(49,'海报',4,'软件设计组',13),(50,'海报',4,'算法组',14);
/*!40000 ALTER TABLE `works` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2012-09-12 13:17:31
