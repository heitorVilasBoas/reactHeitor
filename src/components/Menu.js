import React, { useState, useEffect } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import './menu.css';

const Menu = () => {

    return (
        <div>
            <header id="imagem">
			<center>
				<figure>
					<img src={require('./dnd.jpg')} width="30%" height="30%" />
				</figure>
			</center>
		</header>
		
		<header id="cabeçalho">
			<h1>D&amp;D: a taverna na caverna</h1>
		</header>

		<header id="menu">
			<section id="menu1">
				<nav id="menu2">
					<ul>
						<NavItem>
                            <NavLink href="/Interface">Sobre</NavLink>
                        </NavItem>
						<NavItem>
                            <NavLink href="/tabelas">Programação</NavLink>
                        </NavItem>
						<NavItem>
                            <NavLink href="/Imagens">Fotos</NavLink>
                        </NavItem>
						<NavItem>
                            <NavLink href="/Sobre">Informações</NavLink>
                        </NavItem>
					</ul>
				</nav>
			</section>
		</header>
	
	
		<br />
			<header id="linha" />
		<br /><br />	
        </div>
    );
}

export default Menu