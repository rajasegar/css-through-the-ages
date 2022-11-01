<section>
		<section >
				<h1 class="bebrush orange">2013</h1>
						<h2 class="bebrush">PostCSS</h2>
						<img src="/assets/PostCSS_Logo.svg.png">
				<aside class="notes">
						In 2013, PostCSS was launched.
				</aside>
		</section>
		<section>
				<h2 class="bebrush orange">PostCSS</h2>
				<p>JS based plugins to automate routine CSS operations.</p>
				<p class="fragment">PostCSS is <span class="cyan">Babel</span> for CSS.</p>
				<aside class="notes">
						PostCSS became the defacto standard for creating CSS tooling or plugins.
						Because the presence of a robust compiler toolchain, developers were able
						to solve more complex problems with custom plugin implementations by composing
						existing plugins and saving time and effort.
				</aside>
		</section>
		<section data-background-color="#fff">
				<p>PostCSS  workflow</p>
				<img src="/assets/PostCSS_scheme.svg.png">
				<aside class="notes">
						This is an example of a postcss workflow.
						The initial CSS is passed to the Parser and then through a series of plugins
						to transform the CSS and then at the end, with a stringifier the final css output is generated.
						The main idea is to make use of the composition of various plugins with the PostCSS pipeline
				</aside>
		</section>
		<section>
				<h1 class="bebrush orange">Atomic CSS</h1>
				<h2 class="fragment">Functional CSS</h2>
						<p class="fragment">Small, single-purpose class names based on function</p>
						<aside class="notes">
						The approach to CSS architecture that favors small, single-purpose classes with names based on visual function.
						</aside>
		</section>
		<section><h2>Variations of Atomic CSS</h2>
				<ul>
						<li>Static</li>
						<li>Programmatic</li>
				</ul>
		</section>
		<section>
				<h2>Static</h2>
				<pre>
						<code>
								{`
								.text-center {
										text-align: center;
								}
								.float-left {
										float: left;
								}
								`}
						</code>
				</pre>
		</section>
		<section>
				<h2>Programmatic</h2>
				<p>For example, given this</p>
				<pre>
						<code>
								{`
								<div class="Bgc(#0280ae) C(#fff) P(20px)">Lorem ipsum</div>
								`}
						</code>
				</pre>
				<p>The following CSS would be generated:</p>
				<pre><code>
						{`
						.Bgc\(#0280ae\) { background-color: #0280ae; }
						.C\(#fff\) { color: #fff; }
						.P\(20px\) { padding: 20px; }
						`}
				</code></pre>


		</section>
</section>
