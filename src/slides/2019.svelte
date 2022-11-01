<script>
 import { html as css } from './md/tailwindcss.md';
</script>
<section>
		<section>
				<h2 class="bebrush orange">2019</h2>
				<h1 class="fragment bebrush">The Age of Utility-first css</h1>
				<aside class="notes">
						2019 became the age of utility-first Css
						and TailwindCSS became a phenomenon
				</aside>
		</section>
		<section>
				<h1 class="bebrush orange">TailwindCSS</h1>
				<ul class="fragment">
						<li>Documentation</li>
						<li>Adoption</li>
						<li>Tooling</li>
						<li>Community</li>
				</ul>
				<ul class="fragment">
						<li>Framework Agnostic</li>
						<li>Responsive</li>
						<li>Dark mode</li>
						<li>State-based modifiers</li>
						<li>Arbitrary values</li>
						<li>Flexible configurations</li>
				</ul>
				<aside class="notes">
						Do you know that TailwindCSS is not the first utility CSS library
						There has been many attempts in the past like Tachyons, BassCss and so on
						But what made TailwindCSS special?
						Is it good documentation, adoption, tooling, community?
						Yes, basically all of them
						Because it is also simple to learn, intuitive, good naming conventions, covers almost all the use-cases,
						responsive design, dark mode support, state based modifiers, arbitrary values, flexible configurations
				</aside>
		</section>
		<section>
				{@html css}
		</section>
		<section>
				<img src="/assets/tailwind-bad.webp"/>
				<aside class="notes">
						Every new solution comes with its own set of new problems to solve.
						With Tailwind we were able to solve the reusability problem, we don't have to write a single line of css,
						we don't have any performance problems, FOUC, SSR and all the unused styles are stripped away from the final bundle.
						But we lost the battle for separation of concerns, we are polluting our HTML markup with extraneous number of utility classes.
						The more features like dark mode, responsive design, state based styling we want, the more utility classes we need to
						squeeze into our markup which is kind of wierd a thing to do.
				</aside>
		</section>
		<section>
				<img src="/assets/adam-wathan-tweet.png"/>
				<aside class="notes">
						This is a tweet from Adam Wathan, the creator of TailwindCSS
						The author himself offering some paradoxical opinions about the capabilities present in TailwindCSS
						and recommending not to use it.
				</aside>
		</section>
</section>

