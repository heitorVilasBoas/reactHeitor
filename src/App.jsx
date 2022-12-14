import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu.js';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Sobre from './Sobre';
import Interface from './Interface';
import reportWebVitals from './reportWebVitals';
import Tabelass from './tabelas.jsx';
import Imagenss from './Imagens.jsx';

function App() {
	
	return (
		<Router>
			<Routes>
				<Route path = "/Sobre" element ={<Sobre />}/>
				<Route path = "/Imagens" element ={<Imagenss />}/>
				<Route path = "/tabelas" element ={<Tabelass />}/>
				<Route path = "/Interface" element ={<Interface />}/>
			</Routes>
		</Router>
	);
}

export default App;
