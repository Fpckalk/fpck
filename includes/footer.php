	</main>

	<footer>
		<?php 
			$lines = array(
				"Radical!",
				"Gnarly!",
				"I only have 487 more messages for you, sit tight",
				"My favorite band is The Knife",
				"What do you think of violins?",
				"Yes, you should definitely wear a hat",
				"Ain't nothing but a G thang",
				"All Daves reading this say 'woaho'!",
				"I'd rather <a target='_blank' href='https://www.youtube.com/watch?v=xqKPe9w5bUs'>eat Randy</a>",
				"I broke the dam",
				"Just saying, <a target='_blank' href='https://www.youtube.com/watch?v=Xcs3OwrkcR4'>this</a> is the best video on YouTube",
				"I take my coffee black, you? <input id='coffee' type='text' />",
				"Don't you dare put on that hat!",
				"I hope you have a lovely day.<br>Except if it's " . date('l'),
				"My common sense is tingling",
				"Keep your head still, trying to collect thoughts here"
				);

			// Get a random key from the given array
			// And echo it in a paragraph
			// Using mt_rand for best practice purposes and better randomness
			$random_key = mt_rand(0, count($lines) - 1);
			// echo "<p>". $lines[$random_key] . "</p>";
		?>
	</footer>
</div>
	
</body>

<script type="text/javascript" src="dist/scripts/main.js"></script>

</html>