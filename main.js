// Import directly from the dist ESM files in node_modules:
import Reveal from './node_modules/reveal.js/dist/reveal.esm.js';
import Markdown from './node_modules/reveal.js/plugin/markdown/markdown.esm.js';
import Highlight from './node_modules/reveal.js/plugin/highlight/highlight.esm.js';
import Notes from './node_modules/reveal.js/plugin/notes/notes.esm.js';

const deck = new Reveal({ hash: true, slideNumber: 'c/t' });
deck.initialize({ plugins: [Markdown, Highlight, Notes] });
