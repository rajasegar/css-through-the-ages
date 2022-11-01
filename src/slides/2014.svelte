<script>
 import { html as code } from './md/styled-components.md';
</script>
<section>
		<section>
				<h1 class="bebrush orange">2014</h1>
				<h2 class="bebrush">The Age of CSS-in-JS</h2>
				<aside class="notes">
						How did the CSS-in-JS movement take off?
						Or, why are we even talking about writing CSS in JavaScript?
						Because in 2013, this happened?
				</aside>
		</section>
		<section>
				<h1 class="bebrush">React</h1>
				<img src="/assets/React-icon.svg.png" width="500" />
				<aside class="notes">
						React became a game-changer in the JS framework arena and
						the Component methodology became a paradigm shift.
						People started to think in terms of components for front-end
						and a lot of tools and technologies started to surface around React
						And CSS-in-JS is one of those technologies that started to challenge
						the conventional notion of separation of concerns and traditional thinking
						of writing CSS in separate CSS files.
				</aside>
		</section>
		<section>
				<img width="600" src="/assets/vjeux-talk.png" alt="CSS infographic"/>
				<aside class="notes">
						As far as I can remember it all started in November 2014,
						when Christopher Chedeau from the Facebook Front-end Infrastructure team gave
						a very thought-provoking talk that attempts to show that CSS has fundamental flaws
						and writing styling in JS solves most of the problems.
				</aside>
		</section>
		<section>
				<img width="600" src="/assets/vjeux-slide.png" alt="CSS infographic"/>
				<aside class="notes">
						He talked about problems of using CSS at scale such as Global Namespace, Dependencies,
						Dead Code elimination and so on. He also showed us how we can use CSS in JS to solve
						these problems without bringing in any kind of hacky solutions.
				</aside>
		</section>
		<section>
				<h2>JSS - 2014</h2>
				<h2>Styled components - 2016</h2>
				<h2>Emotion - 2017</h2>
				<aside class="notes">
						From then on, the web development community has come up with a lot of CSS-in-JS solutions
						CSS-in-JS has been one of the biggest evolutions in the CSS world. Just like preprocessors bypassed CSS to introduce their own set of new features over a decade ago, CSS-in-JS libraries rely on JavaScript's power to make their own path.
				</aside>
		</section>
		<section>
				{@html code}
		</section>
		<section>
				<aside class="notes">
						This is the state of CSS survey results for 2021
				</aside>

				<img src="/assets/css-in-js-survey.png" alt="CSS survey"/>
		</section>
		<section data-background-color="#663399">
				<h1 class="bebrush">#663399</h1>
				<h2 class="fragment bebrush">rebeccapurple</h2>
				<img class="fragment" height="500" src="/assets/rebecca.jpeg" alt="rebecca"/>
		</section>

</section>

