//Dependencies
import React from 'react';
import { render } from 'react-dom';

// Components
import App from './components/App.jsx';

// Stylesheets
import '../public/styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free';

render(<App />, document.getElementById('root'));
