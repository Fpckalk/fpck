<?php include_once("settings.php"); ?>
<!DOCTYPE html>
<html lang="nl">
<!--<?= $copyright ?>-->
  
  <head>
      
    <title><?= $title ?></title>   
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <meta name="author" content="<?php= $author ?>" />
    <meta name="description" content="<?php= $desc ?>" /> 
    <link type="text/css" rel="stylesheet" media="screen" href="css/css.css" />
	<link href="http://fonts.googleapis.com/css?family=Oswald" rel="stylesheet" type="text/css">
    <link type="image/ico" rel="icon" href="favicon.ico" />
    
  </head>

  <body>
		<div id="wrapper">
			<header>
				<a id="logo" href="/">
					<h1><img src="images/logo.png" alt="Frank Kalk logo" width="160"/></h1>
				</a>
				<?php 
					$urlCheck = $_SERVER['REQUEST_URI'];
					$urlExplode = explode("/", $urlCheck);
					$page = $urlExplode[4];
				?>
				<nav>
					<ul>
						<li><a class="<?php if ($page == "") { echo('active');}?>" href="/">Home</a></li>
						<li><a class="<?php if ($page == "about") { echo('active');}?>" href="about">About</a></li>
						<li><a class="<?php if ($page == "contact") { echo('active');}?>" href="contact">Contact</a></li>
					</ul>
				</nav>
				<div class="clear"></div>
				
			</header>
			<hr>
			<div id="content">