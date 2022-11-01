<script>
 import { html as scssCode } from './md/scss-code.md';
 import { html as sassCode } from './md/sass-code.md';
 import { html as cssCode } from './md/compiled-css.md';
</script>
<section class="/assets/backgrounds/bg5.jpg">
		<section>
				<h2 class="bebrush orange">2006</h2>
				<h1 class="bebrush">The Age of Preprocessors</h1>
				<img src="/assets/Sass_Logo_Color.svg.png"/>
				<aside class="notes">
						The year 2006 marked the beginning of CSS Preprocessors like Sass, Less and others
				</aside>
		</section>
		<section>
				<h3 class="bebrush">Syntactically Awesome Style Sheets</h3>
				<ul>
						<li>Preprocessor scripting language</li>
						<li>Interpreted or Compiled into CSS</li>
						<li>Selectors and pseudo-selectors that group rules that apply to them</li>
						<li>variables, nesting, mixins, and selector inheritance</li>
				</ul>
				<aside class="notes">
						Sass stands for syntactically awesome style sheets
						It is a preprocessor scripting language
						It can be either interpreted or compiled into css
						It contains a series of selectors and pseudo-selectors that group rules that apply to them
						It also has programmatic entities like variables, nesting, mixins and more
				</aside>
		</section>
		<section>
				<div id="code" class="flex">
						<div> {@html scssCode}</div>
						<div> {@html sassCode}</div>
				</div>
						<div> {@html cssCode}</div>
				<aside class="notes">
						This is a simple example of how you write CSS using SASS
						You can define variables and use these variables in your properties and class definitions
						There are mainly two formats that is supported by Sass compilers, SCSS and SASS
						There are only subtle differences like punctuations and indentations but more or less the idea
						is the same.
						And here is the compiled css of the same code.
				</aside>
		</section>
		</section>

<style>
 #code {
		 overflow-x: scroll;
 }

 #code div {
		 width: 50%;
 }
</style>
