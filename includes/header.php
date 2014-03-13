<?php include_once("settings.php"); ?>
<!DOCTYPE html>
<html lang="nl">
<!--<?= $copyright ?>-->

<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />

	<title><?= $title ?></title>
	<meta name="author" content="<?= $author ?>" />
	<meta name="description" content="<?= $desc ?>" />
	
	<meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1">
	<link type="text/css" rel="stylesheet" media="screen" href="css/css.css">
	<link type="text/css" rel="stylesheet" href="http://fonts.googleapis.com/css?family=Oswald">
	<link type="image/ico" rel="icon" href="favicon.ico" />

</head>

<body>
	<div id="wrapper">
		<header>
			<?php 
				$urlCheck = $_SERVER['REQUEST_URI'];
				$urlExplode = explode("/", $urlCheck);
				$page = $urlExplode[4];
			?>
			<nav>
				<ul>
					<li><a class="<?php if ($page == "") { echo('active');}?>" href="../fpck/">Home</a></li>
					<li><a class="<?php if ($page == "about") { echo('active');}?>" href="about">About</a></li>
					<li><a class="<?php if ($page == "contact") { echo('active');}?>" href="contact">Contact</a></li>
				</ul>
			</nav>

		</header>
		<hr>
		<div id="main">