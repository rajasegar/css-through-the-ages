<section>
		<section>
				<h2 class="bebrush orange">Problems with CSS-in-JS</h2>
				<ul>
						<li>JS runtime</li>
						<li>Bundled as part of JS</li>
						<li>Needs separate parser</li>
						<li>Performance</li>
						<li>SSR</li>
				</ul>
				<aside class="notes">
						Your CSS won't work without the JS runtime of whatever CSS-in-JS library you are using.
						Your CSS get's bundled as part of JS and need a separate parser to parse the styles in
						the browser which add to the bundle size
						You might face issues like FOUC with slow networks
				</aside>
		</section>
		<section>
				<img src="/assets/fouc.gif"/>
				<aside class="notes">
						Have you ever noticed an annoying "flash of unstyled content" (FOUC) when a web page first loads?
						That happens because browsers render things as quickly as possible,
						often BEFORE your JavaScript executes the first time.
						So what if some of your initial styles are set via JavaScript…
				</aside>
		</section>

		<section>
				<h1 class="bebrush">Solution</h1>
				<aside class="notes">
						What is the solution to these problems?
				</aside>
		</section>
		<section>
				<h1 class="bebrush orange">2017 - present</h1>
				<h2 class="fragment bebrush">The Age of Zero-runtime CSS-in-JS</h2>
				<aside class="notes">
						From 2017 till now, marked the age of zero-runtime css-in-js.
						So what all these zero-runtime or near zero-runtime css-in-js libraries were doing
						is that, they extract all your css-in-js at build time and then ship them as plain css to the browser
						So which means we don't need a runtime to parse styles inside JS
				</aside>
		</section>

		
		<section>
				<aside class="notes"></aside>
				<h2>Linaria - 2017</h2>
				<h2>Astroturf - 2018</h2>
				<h2>Reshadow - 2018</h2>
				<h2>Stitches.dev - 2020</h2>
				<h2>vanilla-extract - 2021</h2>
				<aside class="notes">
						So from 2017, there were a lot of zero-runtime or near zero-runtime CSS-in-JS gaining popularity.
				</aside>
		</section>

		<section>
				<img src="/assets/npm-trends-css-in-js.png"/>
				<footer>https://npmtrends.com/@linaria/react-vs-@stitches/react-vs-@vanilla-extract/css-vs-astroturf-vs-reshadow</footer>
				<aside class="notes">
						As you can see, stitches and vanilla-extract are fighting for the top spot in the zero-runtime CSS-in-JS category.
						We have still a lot of new libraries popping up on a daily basis
						I think it will take some more time for the tooling to consolidate in this space.
				</aside>
		</section>

</section>

<style>
 footer {
		 font-size: 12px;
 }
</style>

