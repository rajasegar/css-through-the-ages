<script>
 import { html as hardResetCode } from './md/hard-reset.md';
</script>
<section>
		<section>
				<h2 class="bebrush orange">2004</h2>
				<h1 class="bebrush">The Age of CSS Resets</h1>
				<aside class="notes">The year 2004 marked the beginning of the age of CSS resets</aside>
		</section>
		<section>
				<h1 class="bebrush">Why <span class="orange">resets?</span></h1>
				<ul>
						<li class="fragment">All browsers have presentation defaults</li>
						<li class="fragment">No browsers have the same defaults</li>
				</ul>
				<aside class="notes">
						Why we need resets in the first place? What problems they solve?
						The basic reason is that all browsers have presentation defaults, but no browsers have the same defaults. … We think of our CSS as modifying the default look of a document — but with a ‘reset’ style sheet, we can make that default look more consistent across browsers, and thus spend less time fighting with browser defaults.
				</aside>
		</section>
		<section>
				{@html hardResetCode }
				<aside class="notes"></aside>
		</section>
		<section>
				<h2 class="bebrush orange">Wellknown CSS Resets</h2>
				<ul class="fragment">
						<li>Eric Meyer's CSS Reset</li>
						<li>The Yahoo! User Interface CSS Reset</li>
				</ul>
				<aside class="notes">
						There were a lot of CSS resets available, but these two were used by the majority of web developers and very popular
						But CSS resets were not the right solution to a problem we were solving. We needed better approaches for cross-browser
						consistency
						Then came Normalize.css
				</aside>
		</section>
		<section>
				<h1 class="bebrush orange">Normalize.css</h1>
				<h2 class="bebrush">2012</h2>
				<aside class="notes">
						Normalize.css is a small CSS file that provides better cross-browser consistency
						in the default styling of HTML elements.
						It’s a modern, HTML5-ready, alternative to the traditional CSS reset.
				</aside>
		</section>
		<section>
				<h2 class="bebrush orange">Normalize.css</h2>
				<ul>
						<li class="fragment">Preserve useful browser defaults rather than erasing them.</li>
						<li class="fragment">Normalize styles for a wide range of HTML elements.</li>
						<li class="fragment">Correct bugs and common browser inconsistencies.</li>
						<li class="fragment">Improve usability with subtle improvements.</li>
				</ul>
				<aside class="notes">
						It’s worth understanding in greater detail how normalize.css differs from traditional CSS resets.
				</aside>
		</section>
		<section>
				<h3>Normalize.css - <span class="orange">where used?</span></h3>
				<ul>
						<li>Bootstrap</li>
						<li>HTML5 boilerplate</li>
						<li>Twitter</li>
				</ul>
				<aside class="notes">
						So, where normalize.css is used, it is used in frameworks like Bootstrap,
						in templates like HTML5 boilerplate and in websites like Twitter
				</aside>
		</section>
</section>

