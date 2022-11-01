<script>
 import { html as code } from './md/webpack-css.md';
</script>
<section>
		<section>
				<h1 class="bebrush orange">2011</h1>
				<aside class="notes">
						the independence of South Sudan, the world's newest country;
						Minecraft is released and goes on to become the best-selling video game;
						The U.S. national security team gathered in the White House Situation Room to monitor the progress of Operation Neptune Spear that killed Al-Qaeda leader Osama bin Laden;
				</aside>
				
				<div class="flex">
						<div class="fragment"><img src="/assets/2011/340px-A_South_Sudanese_girl_at_independence_festivities_(5926735716).jpg"/></div>
						<div class="fragment"><img src="/assets/2011/Minecraft_cover.png"/></div>
						<div class="fragment"><img src="/assets/2011/Obama_and_Biden_await_updates_on_bin_Laden.jpg"/></div>
				</div>
		</section>
		<section>
				<h1 class="bebrush orange">CSS 2.1</h1>
				<h2>Finally approved</h2>
				<aside class="notes">
						In 2011, css 2.1 finally got approved after many unsuccessfull attempts over the years.
				</aside>
		</section>

		<section>
				<h1 class="bebrush orange">Problem</h1>
				<h2 class="bebrush">No integrated solution</h2>
				<ul>
						<li>Resets</li>
						<li>Layouts and Grids</li>
						<li>Reusable UI patterns aka Components</li>
						<li>Patterns of dynamic behaviour</li>
				</ul>
				<aside class="notes">
						Until this point time, with CSS there were no integrated solutions that
						encompass all the previously available tooling like resets, layouts.
						There were no reusabale UI patterns aka component libraries and there
						were no pre-defined patterns for dynamic behaviour for components.
				</aside>
		</section>

		<section data-background="/assets/css-frameworks.png">
				<h1 class="bebrush orange">CSS Frameworks</h1>
				<aside class="notes">
						The year 2011 also marked the rise of CSS frameworks like Bootstrap, Foundation and so on.
						The frameworks brought an integrated tooling experience by including all the batteries.
						They had resets, grid layouts, typography helpers, utility classes, components and much more. They also came with a lot of JS
						plugins for components like tooltips, dropdowns, popovers and more.
				</aside>
		</section>
		<section>
				<h1 class="bebrush orange">The Age of Bundlers</h1>
				<ul class="">
						<li class="fragment">2011 - Webpack</li>
						<li class="fragment">2013 - Parcel</li>
						<li class="fragment">2015 - Rollup</li>
						<li class="fragment">2020 - Vite</li>
				</ul>
				<aside class="notes">
						It would be unfair to talk about the evolution of CSS without mentioning bundlers.
						The rise of integrated toolchains like bundlers allowed developers to build and maintain large 
						CSS codebases using the built-in capabilities offered by these tools through the use of various plugins.
				</aside>
		</section>
		<section>
				<h1 class="bebrush orange">Webpack</h1>
				<ul>
						<li>css-loader</li>
						<li>less-loader</li>
						<li>postcss-loader</li>
						<li>sass-loader</li>
						<li>style-loader</li>
						<li>stylus-loader</li>
				</ul>
				<aside class="notes">
						In webpack parlance, the CSS plugins are known as loaders.
						Webpack offers various loader plugins for using almost all the CSS preprocessors like sass, less, stylus, etc
				</aside>
		</section>
		<section>
				{@html code}
				<aside class="notes">
						It also offers the ability to directly import CSS files from your Javascript
						It is this particular ability that paved the way for writing CSS in JS at a later point in time
						which we will explore
				</aside>
		</section>

		
</section>
