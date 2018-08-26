<?php include_once("../includes/header.php"); ?>

<article class="single">
	<h1>Spot On Agency</h1>
	<a href="http://www.spotonagency.nl">spotonagency.nl</a>
	<p>For my internship at Studio Stomp I was assigned to a team of two other interns to fully develop a website for Spot On Agency. Meaning the content, the design and the development over a period of two months. When I started there, there already was some progress on the project, and much of the content was decided. Only in time did I discuss the structure and content of the website.</p>
	<figure>
		<img src="../images/cases/spotonagency/actress-desktop.jpg" alt="">
		<figcaption>A nice overview on the desktop version</figcaption>
	</figure>
	<p>The design was partly decided at the time. A WordPress theme was chosen, but there was some trouble tweaking it to Spot On Agency's style. We came a long way, but after two weeks Michel Stomp, an employee and designer, helped us out in a major way. He took our designs and improved them greatly with some minor tweaks. During this stage I mainly did research and started setting things up for development, occasionally helping out the team with some design choices.</p>
	<p>While developing I started learning a lot about WordPress. I had worked with WordPress before but didn't really grasp it. Now, after some reading I finally got some understanding of it. I didn't really enjoy developing a child theme (too much overrides to do), but it was pretty close to developing my own theme.</p>
	<p>One problem that really stuck out was the reflow of content when the viewport size changed. The mobile content for the actor page was perfectly well structured, as well as its HTML. But the content went complete bonkers when the user would view the desktop or even the tablet version. There was no more logic to be found in the flow of content. Ultimately this was fixed by some CSS and jQuery (in retrospect: I could've used plain JavaScript), but I felt a bit dirty after implementing it</p>
	<figure>
		<img src="../images/cases/spotonagency/actress-mobile.jpg" alt="">
		<figcaption>The mobile version, showing the bottom of the actress' page</figcaption>
	</figure>
	<p>Another issue was the WordPress admin interface. There was some functionality to link the actors to the different news articles and it worked perfectly fine, but it wasn't very intuitive for the user (the owners of the website). Something that hadn't even crossed our minds in all that time, that there was another user group to be considered. It was fixed after a day of work by using a part of the great Advanced Custom Fields plugin.</p>
	<p>It was truly a great website to work on where I learned a whole lot about WordPress, and a few fundamental things about development in general. Things like carefully reading documentation, and to not dabble too long on small decisions. The website was received with great praise, and no questions about how to use it ever arose. I'm very thankful to my fellow interns to have been a part of setting up this beauty.</p>
</article>

<?php include_once("../includes/cases.php"); ?>
<?php include_once("../includes/footer.php"); ?>