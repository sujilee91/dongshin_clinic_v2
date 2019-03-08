import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './sections/App';
import Header from './sections/Header'
import Subject from './sections/Department'
import Main from './sections/Main'
import About from './sections/About'
import Info from './sections/Info'
import Map from './sections/Map'
import Footer from './sections/Footer'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Main />, document.getElementById('main'));
ReactDOM.render(<About />, document.getElementById('about'));
ReactDOM.render(<Subject />, document.getElementById('dept'));
ReactDOM.render(<Info />, document.getElementById('info'));
ReactDOM.render(<Map />, document.getElementById('map'));
ReactDOM.render(<Footer />, document.getElementById('footer'));

serviceWorker.unregister();
