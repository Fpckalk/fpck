<?php

// Get the current URL
$currentUrl = $_SERVER['REQUEST_URI'];

// Make a list of the items in the URL
$urlParts = explode("/", $currentUrl);
$page = end($urlParts);

?>

<nav id="main">
  <ul>
    <li><a class="<?= $page === "" ? 'active' : null; ?>" href="/">Home</a></li>
    <li><a class="<?= $page === "about" ? 'active' : null; ?>" href="about">About</a></li>
    <li><a class="<?= $page === "contact" ? 'active' : null; ?>" href="contact">Contact</a></li>
  </ul>
</nav>