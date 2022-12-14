import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu.js';
import './tabelas.css';
import { useState, useEffect } from 'react';

function Tabelass() {
	
	const [date, setDate] = useState(new Date());
  
	function refreshClock() {
		setDate(new Date());
	}
	
	useEffect(() => {
		const timerId = setInterval(refreshClock, 1000);
		return function cleanup() {
			clearInterval(timerId);
		};
	}, []);
	
  return (
		<div>
            <Menu />
			<table id="tabela1">
					<caption> Sábado (1/12/2018) </caption>
					<tbody>
						<tr id="cordefundo">
							<td className="esquerda">Horário</td>
							<td className="meio">Local</td>
							<td className="direita">Atividade</td>
						</tr>
						<tr>
							<td className="esquerda">08h00 às 09h30</td>
							<td className="meio">Salão principal</td>
							<td className="direita">Abertura com show</td>
						</tr>
						<tr>
							<td className="esquerda">09h30 às 12h00</td>
							<td className="meio">Centro de eventos</td>
							<td className="direita">Abertura dos estandes</td>
						</tr>
						<tr>
							<td className="esquerda">12h00 às 13h00</td>
							<td className="meio">Salão adjunto</td>
							<td className="direita">Criação das mesas</td>
						</tr>
						<tr>
							<td className="esquerda">13h00 às 22h00</td>
							<td className="meio">Salão adjunto</td>
							<td className="direita">Interação entre os participantes</td>
						</tr>
						<tr>
							<td className="esquerda">22h00 às 22h30</td>
							<td className="meio">Salão Principal</td>
							<td className="direita">Show de encerramento</td>
						</tr>
					</tbody>
				</table>
		<br /><br /><br />

				<table id="tabela2">
					<caption>Domingo (2/12/2018)</caption>
					<tbody>
						<tr>
							<td className="esquerda">Horário</td>
							<td className="meio">Local</td>
							<td className="direita">Atividade</td>
						</tr>
						<tr>
							<td className="esquerda">11h00 às 12h00</td>
							<td className="meio">Salão principal</td>
							<td className="direita">Palestra com Gary Gygax</td>
						</tr>
						<tr>
							<td className="esquerda">12h00 às 13h00</td>
							<td className="meio">Salão principal</td>
							<td rowSpan={2} className="direita">Sessões de perguntas com Gary Gygax</td>
						</tr>
						<tr>
							<td className="esquerda">13h30 às 14h00</td>
						<td className="meio">Salão principal</td>
						</tr>
						<tr>
							<td className="esquerda">13h00 às 22h00</td>
							<td className="meio">Salão adjunto</td>
							<td className="direita">Interação entre os participantes</td>
						</tr>
					</tbody>
				</table>
				
				<span>
					{date.toLocaleTimeString()}
				</span>
        </div>
  );
}

export default Tabelass;
