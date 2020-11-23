/* eslint-disable node/no-unsupported-features/es-syntax */
// eslint-disable-next-line node/no-unsupported-features/es-syntax
import { Elm } from './Main.elm';
import * as serviceWorker from './serviceWorker.js';
//assets
import home from './assets/claudia.jpg';
import oracle from './assets/oraculo.jpg';
import yoga from './assets/yoga.jpg';
import mentorship from './assets/mentoria.jpg';

const assets = [home, oracle, yoga, mentorship];

Elm.Main.init({
  node: document.getElementById('root'),
  flags: {
    width: window.innerWidth,
    height: window.innerHeight,
    assets,
  },
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
