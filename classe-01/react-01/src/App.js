import './App.css';
import {useState} from 'react';

const pratos = [
  {nome:"Dobradinha", preco: 25},
  {nome:"Feijoada", preco: 20},
  {nome:"Moqueca", preco: 73.25}
];

const Prato =({nome, preco, qtd = 0, setQtd}) => {
  return(
    <div>
      {nome}
      <br />
      <input 
      type="number"
      min={0}
      value ={qtd}
      onChange={(ev) => setQtd(ev.target.valueAsNumber)}
    />{""}
    &times; R${preco} = R${qtd * preco}
    </div>
  );
};


function App() {
  const [qtds, setQtds] = useState ({});
  pratos.sort((p1, p2) => (qtds[p2.nome] || 0) - (qtds[p1.nome || 0]));

  return (
    <div>
      <h1>Cardápio</h1>
      <ul>
        {pratos.map((prato) => (
          <li key={prato.nome}>
            <Prato 
            nome={prato.nome}
            preco={prato.preco}
            qtd={qtds[prato.nome] || 0}
            setQtd = {(qtd) =>
              setQtds((qtds) => ({ ...qtds, [prato.nome] : qtd }))
            }
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
