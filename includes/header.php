<?php include_once("settings.php"); ?>
<!DOCTYPE html>
<html lang="en">
<!--<?php echo 'Copyleft ' . date('Y') . ' info(at)fpck.nl'; ?>-->
<!--
Hey, thanks for taking an interest in the code!
The full code is available on GitHub and is commented to the best of my extent.
Starting out developing can be pretty daunting, I hope my code can help you out a bit.
If you're not a learning one, then I'm flattered by the interest.
-->

<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	
	<!-- Change when live -->
	<base href="/git/repos/fpck/">

	<title>Frank Kalk - Portfolio</title>
	<meta name="author" content="Frank Kalk" />
	<meta name="description" content="Frank Kalk's portfolio" />
	
	<meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1">
	<link type="text/css" rel="stylesheet" media="screen" href="css/icons.css">
	<link type="text/css" rel="stylesheet" media="screen" href="css/css.css">
	<link type="image/ico" rel="icon" href="favicon.ico" />

</head>

<body>
	<div id="wrapper">
		<header>
			<h1 id="title"><a href="../fpck/">fpck</a></h1>
			<?php
				// Checking which page we're on, later to be used in the main menu

				// Get the current URL
				$urlCheck = $_SERVER['REQUEST_URI'];

				// Make a list of the items in the URL
				$urlExplode = explode("/", $urlCheck);

				// Targeting the last item in the $urlExplode array
				// Which in this case is the current page
				$page = end($urlExplode);
			?>
			<nav id="main">
				<ul>
					<!-- Using the $page variable here to check if the menu item should be highlighted -->
					<li><a class="<?php if ($page == "") { echo('active');}?>" href="../fpck/">Home</a></li>
					<li><a class="<?php if ($page == "about") { echo('active');}?>" href="about">About</a></li>
					<li><a class="<?php if ($page == "contact") { echo('active');}?>" href="contact">Contact</a></li>
				</ul>
			</nav>

		</header>
		<hr>
		<div id="main">