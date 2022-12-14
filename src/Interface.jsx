import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu.js';
import TransformText from './components/TransformText';



function Interface() {
  return (
		<div>
            <Menu />
			
			<div id="imagem2">
				<figure>
					<img src={require('./D&D2.jpg')}/>
				</figure>
			</div>
			
			<div className ="texto">
				<TransformText text ="Este é um evento cujo objetivo é ensinar as pessoas menos experientes "/>
				<TransformText text ="a jogar D&amp;D, assim como disponibilzar ferramentas para isto." />
				<TransformText text ="Este evento fornece acesso aos livros básicos, assim como espaços" />
				<TransformText text ="para discussão com jogadores veteranos." />
				<TransformText text ="O evento também conta com um espaço" />
				<TransformText text ="para interação entre jogadores." />
				<TransformText text ="E um espaço para a jogatina" />
			</div>
					   
        </div>
  );
}

export default Interface;
