import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import 'bootstrap';
import Holder from 'holderjs'; // TODO remove/replace
// styling 
import './styles/index.scss';
// NO IDEA WHY THIS IS BEING USED FOR
/*
 * I didn't use arrow callback because in the current version of webpack
 * on production build it returns an error.
 */
// $(function onReady() { // eslint-disable-line prefer-arrow-callback
//   Holder.addTheme('thumb', {
//     background: '#55595c',
//     foreground: '#eceeef',
//     text: 'Thumbnail',
//   });
// });
