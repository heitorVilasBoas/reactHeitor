import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu.js';
import './Imagens.css';
import IMAGES from './components/images.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState, useEffect } from 'react';

function Imagenss() {
	
	
	return React.createElement("div", null, React.createElement(Menu, null), IMAGES.map(index =>React.createElement("img", {
		src: index.image,
		className: "imagem",
		alt: "image",
		height: "250",
		width: "250",
		style: {
		margin: "5px",
		border: "5px solid red"
		}
  })));
}
export default Imagenss;
