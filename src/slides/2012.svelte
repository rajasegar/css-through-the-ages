<script>
 import { html as oocss } from './md/oocss.md';
 import { html as oocss2 } from './md/oocss-2.md';
 import { html as itcss } from './md/itcss.md';

</script>
<section>
		<section>
				<h2 class="bebrush orange">2012</h2>
				<h1 class="bebrush">the age of modular architecture</h1>
				<aside class="notes">
						Modular CSS is a collection of principles for writing code that is performant and maintainable at scale.
						Modular CSS architecture gave rise a new set of CSS methodologies on how to write and
						organize your scalable and maintainable CSS.
				</aside>
		</section>

		<section>
				<h1 class="bebrush">OOCSS</h1>
				<img src="/assets/stubbornella.jpg"/>
				<aside class="notes">
						As with any object-based coding method, the purpose of OOCSS is to encourage code reuse and, ultimately,
						faster and more efficient stylesheets that are easier to add to and maintain.
				</aside>
		</section>
		<section>
				{@html oocss}
				<aside class="notes">
						Before modular CSS came into existence, we were using a lot of id selectors by encompassing both
						the structure and skin properties. 
				</aside>
		</section>
		<section>
				{@html oocss2}
				<aside class="notes">
						With a methodology like OOCSS, we would be writing the same css with a clear separation of structure and skin
				</aside>
		</section>
		<section>
				<h1 class="bebrush">BEM</h1>
				<img src="/assets/bem.jpg"/>
				<aside class="notes">
						BEM stands for block element modifier
				</aside>
		</section>
		
		<section>
				<h2 class="bebrush">Block Element Modifier</h2>
				<img src="/assets/minifig-2.png"/>
		</section>

		<section>
				<h1 class="bebrush">SMACSS</h1>
				<img src="/assets/snookca.jpg"/>
				<aside class="notes">
						SMACSS (pronounced “smacks”) is more of a style guide than a rigid framework.
						There is no library within here for you to download or install.
						It's is a way to examine your design process and as a way to fit those rigid frameworks into a flexible thought process. 
				</aside>
		</section>
		<section>
				<aside class="notes">
						At the very core of SMACSS is categorization. By categorizing CSS rules, we begin to see patterns and can define better practices around each of these patterns.
				</aside>
				<h2 class="bebrush orange">Categorization</h2>
						<ul>
						<li>Base</li>
						<li>Layout</li>
						<li>Module</li>
						<li>State</li>
						<li>Theme</li>
				</ul>
		</section>
		<section data-background-color="white">
				<h1 class="bebrush">ITCSS</h1>
				<img src="/assets/itcss.png"/>
				<aside class="notes">
						ITCSS stands for Inverted Triangle CSS. It helps you organize your project CSS files in such a way that you can better deal with CSS specifics like global namespace, cascade and selectors specificity.
						The main idea of ITCSS is that it separates your CSS codebase into several sections (called layers), which can be represented as sections of an inverted triangle
				</aside>
		</section>
		<section>
				<h3>iTCSS layers</h3>
				{@html itcss}
		</section>
</section>
