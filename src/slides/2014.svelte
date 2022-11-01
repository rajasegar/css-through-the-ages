<script>
 import { html as code } from './md/styled-components.md';
</script>
<section>
		<section>
				<h2 class="bebrush orange">2014</h2>
				<h1 class="bebrush">The Age of CSS-in-JS</h1>
				<aside class="notes">
						How did the CSS-in-JS movement take off?
						Or, why are we even talking about writing CSS in JavaScript?
						Because in 2013, this happened?
				</aside>
		</section>
		<section>
				<p>2013</p>
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
        <ul>
            <li>JSS - 2014</li> 
            <li>Radium - 2015</li> 
            <li>react-styled - 2015</li> 
            <li>glamor - 2016</li> 
				<li>Styled components - 2016</li>
				<li>Emotion - 2017</li>
</ul> 
				<aside class="notes">
						From then on, the web development community has come up with a lot of CSS-in-JS solutions
						CSS-in-JS has been one of the biggest evolutions in the CSS world. Just like preprocessors bypassed CSS to introduce their own set of new features over a decade ago, CSS-in-JS libraries rely on JavaScript's power to make their own path.
				</aside>
		</section>
		<section>
        <p>Button using a Styled-component</p>
				{@html code}
        <img src="/assets/adapting-based-props.png" alt="adapting based props"/>
		</section>
		<section>
				<aside class="notes">
						This is the state of CSS survey results for 2021
				</aside>

				<img src="/assets/css-in-js-survey.png" alt="CSS survey"/>
		</section>
		<section data-background-color="#663399" style="position:relative;">
				<h1 class="bebrush">#663399</h1>
				<h3 class="fragment bebrush">rebeccapurple</h3>
        <div class="fragment fade-in-then-out" style="position:absolute; left: 35%;">
            <img src="/assets/eric-meyer.jpg"/>
            <h2>Eric Meyer</h2>
</div>
        <div class="fragment fade-in">
				<img  height="500" src="/assets/rebecca.jpeg" alt="rebecca"/>
        <p>Rebecca Alison Meyer (7 June 2008 - 7 June 2014)</p>
        </div>
<aside class="notes">
    You know history is also about some great people. This is one story about one such person. Do you know about this color? It is called rebeccapurple. There is a significant story around this particular color. How it became a CSS color?
</aside>
		</section>

</section>

