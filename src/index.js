import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { applyPolyfills } from '@bsmp/webcomponents/dist/loader';
import { defineCustomElements as defineBsmElements } from '@bsmp/webcomponents/dist/loader';
// import { defineCustomElements as defineIoniconsElements } from 'ionicons/dist/loader';
// import regeneratorRuntime from "regenerator-runtime";

applyPolyfills().then(() => {
  defineBsmElements(window);
  // defineIoniconsElements(window);
});


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
