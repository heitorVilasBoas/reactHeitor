import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu.js';
import TransformText from './components/TransformText';


function Sobre() {
  return (
		<div>
            <Menu />
            <div id="imagem2">
				<figure>
					<img src={require('./D&D2.jpg')}/>
				</figure>
			</div>
			
			<div id="texto">
				<TransformText text ="O evento é uma reunião que Acontecerá entre jogadores, tanto novatos"/>
				<TransformText text ="quanto veteranos no Jogo Dungeons and dragons, cujo objetivo é compartilhar"/>
				<TransformText text ="experiencias passadas, assim como permitir que todos possam se divertir"/>
				<TransformText text ="enquanto jogam, ou simplesmente assistirem outros jogando."/>
				<TransformText text ="O evento ja ocorreu em anos passados, mas este ano iremos Inovar"/>
				<TransformText text ="pois traremos livros para compra, assim como palestras com"/>
				<TransformText text ="os criadores do jogo."/>
				<h1> Mas o que é D&amp;D</h1>
				<TransformText text ="Dungeons &amp; Dragons (abreviado como D&amp;D ou DnD) é um RPG de alta fantasia desenvolvido originalmente por Gary Gygax e Dave Arneson,"/>
				<TransformText text ="e publicado pela primeira vez em 1974 nos Estados Unidos pela TSR, Inc., empresa de Gary Gygax. Hoje o jogo é publicado pela Wizards of the Coast."/>
				<TransformText text ="Suas origens são os wargames de miniaturas (principalmente o Chainmail). A publicação do D&amp;D é considerada como a origem dos RPGs modernos e foi lançada no Brasil pela Grow e em "/>
				<TransformText text ="Portugal pela Sociedade Tipográfica S.A."/>
				<TransformText text ="Jogadores de D&amp;D criam personagens que embarcam em aventuras imaginárias em que eles enfrentam monstros,"/>
				<TransformText text ="reúnem tesouros, interagem entre si e ganham pontos de experiência para se tornarem incrivelmente poderosos à medida que o jogo avança."/>
				<TransformText text ="O D&amp;D se destaca dos wargames tradicionais por permitir que cada jogador controle um personagem específico, ao invés de um exército."/>
				<TransformText text ="Miniaturas ou marcadores em um tabuleiro quadriculado são usados ocasionalmente para representar esses personagens."/>
				<TransformText text ="O D&amp;D também apresentou o conceito de Mestre de Jogo (Dungeon Master ou DM, no original), que atua como juiz e"/>
				<TransformText text ="narrador e é responsável por manter o cenário ficcional do jogo e aplicar as regras a cada situação descrita."/>

				
			</div>

					   
        </div>
  );
}

export default Sobre;
