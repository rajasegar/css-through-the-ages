import Highlight from 'reveal.js/plugin/highlight/highlight';
import RevealNotes from 'reveal.js/plugin/notes/notes';
// Import theme
import 'reveal.js/dist/theme/black.css';

// Import CSS for plugins
import 'reveal.js/plugin/highlight/monokai.css';

export default {
    // App Config
    app: {
        name: 'CSS through the ages',
    },
    // Reveal Config
    reveal: {
				width: 1280,
				height: 1024,
        plugins: [Highlight, RevealNotes],
        hash: true,
				pdfSeparateFragments: false
		},
};
