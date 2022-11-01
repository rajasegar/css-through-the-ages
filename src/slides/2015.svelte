<section>
<section>
<h1 class="bebrush orange">2015</h1> 
<h2 class="bebrush">The Age of Local CSS</h2> 
<h3 class="bebrush">and The End of global CSS</h3> 
<aside class="notes">
		CSS selectors all exist within the same global scope.

		Anyone who has worked with CSS long enough has had to come to terms with its aggressively global nature — a model clearly designed in the age of documents, now struggling to offer a sane working environment for today’s modern web applications.
		Writing maintainable CSS is now encouraged,
		not by careful adherence to a naming convention, but by style encapsulation during development.
</aside>
</section>
<section>
		<h1 class="bebrush orange">CSS Modules</h1> 
		<p>All class names and animation names are scoped locally by default</p>
				<aside class="notes">
				A CSS Module is a CSS file in which all class names and animation names are scoped locally by default. 
		</aside>
</section>
<section>
		<img src="/assets/css-modules.png"/>
		<aside class="notes">
				CSS Modules let you write styles in CSS files but consume them as JavaScript objects for additional processing and safety.
		</aside>
</section>
<section>
		<img src="/assets/css-modules-2.png"/>
		<aside class="notes">
				When importing the CSS Module from a JS Module, it exports an object with all mappings from local names to global names.
		</aside>
</section>

</section>
