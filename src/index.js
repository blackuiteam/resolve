import React 				from 'react';
import ReactDOM 			from 'react-dom';
import { HashRouter } 		from 'react-router-dom';
import App 					from './components/App';
import AppCar 				from './_code_snipets/AppCar';
import './fonts/fonts.css';
import './css/main.css';

ReactDOM.render(
	<HashRouter>
		<App />
	</HashRouter>,
	document.getElementById('root')
);
