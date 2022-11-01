<script>
 import { html as markup } from './md/prehistory.md';
</script>
<section>
		<section>
				<h1 class="bebrush">1994</h1>
				<div class="flex">
						<div class="fragment"><img src="/assets/1994/1994_Winter_Olympics_logo.svg.png"/></div>
						<div class="fragment"><img src="/assets/1994/Nelson_Mandela_1994.jpg"/></div>
						<div class="fragment bg-white"><img src="/assets/1994/1994_FIFA_World_Cup.svg.png"/></div>
				</div>
				<aside class="notes">
						It all began in 1994
						So, what happened with the world in 1994
						The 1994 Winter Olympics were held in Lillehammer, Norway;
						Nelson Mandela casted his vote in the 1994 South African general election, in which he was elected South Africa's first president,
						The 1994 FIFA World Cup was held in the United States;
						you might be wondering why I am telling about the events in history here, which is no way
						related to CSS, please bear with me, I will tell you why at the end of the talk.
				</aside>
				
		</section>
		<section>
				<h2 class="bebrush orange">THE PROPOSAL</h2>
				<p>Håkon Wium Lie</p>
				<img src="/assets/wium-lie.jpg" alt="Håkon Wium Lie photo"/>
				<p class="fragment">a universal standardised style sheet for the World Wide Web. </p>
				<aside class="notes">
						It was in 1994, a Norwegian engineer Hakon Wium Lie proposed a universal standardised style sheet
						for the internet
				</aside>
		</section>
		<section>
				<p>Bert Bos</p>
				<img src="/assets/bert-bos.jpeg" alt="Bert Bos photo"/>
				<p>CERN</p>
				<aside class="notes">
						Among the people who responded to the first draft of CSS was Bert Bos. At that time, he was building Argo, a highly customizable browser with style sheets, and he decided to join forces with Håkon. 
						CERN, the European Organization for Nuclear Research, is one of the world's largest and most respected centres for scientific research.
				</aside>
		</section>
		<section>
				<h2 class="bebrush orange">THE PRESENTATIONAL MARKUP</h2>
				<p>Style tags and Style attributes</p>
				{@html markup}
				<aside class="notes">
						This is how we used to style and format content on the web before CSS stylesheets was introduced.
						We generally use a lot of style tags and style attributes, which together known as the presentational markup
				</aside>
		</section>
</section>
