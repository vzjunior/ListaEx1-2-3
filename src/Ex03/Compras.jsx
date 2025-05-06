import React, { useState } from 'react';
import './Compras.css';

const Compras = () => {
  const [item, setItem] = useState('');
  const [lista, setLista] = useState([]);
  const [erro, setErro] = useState(''); 

  const adicionarItem = () => {
    if (item.trim() === '') {
      setErro(' Erro, preencha o campo antes de adicionar.');
      return;
    }

    setLista([...lista, { nome: item, comprado: false }]);
    setItem('');
    setErro(''); 
  };

  const removerItem = (index) => {
    const novaLista = lista.filter((_, i) => i !== index);
    setLista(novaLista);
  };

  const alternarComprado = (index) => {
    const novaLista = lista.map((item, i) =>
      i === index ? { ...item, comprado: !item.comprado } : item
    );
    setLista(novaLista);
  };

  return (
    <div className="compras-container">
      <h1>Compras</h1>

      <input
        type="text"
        placeholder="Digite um item"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button onClick={adicionarItem}>Adicionar</button>

      
      {erro && <p style={{ color: 'red' }}>{erro}</p>}

      <ol>
        {lista.length === 0 && <li>Nenhum item na lista.</li>}

        {lista.map((item, index) => (
          <li key={index}>
            {item.nome} {item.comprado && '(Comprado)'}
            <button onClick={() => alternarComprado(index)}>
              {item.comprado ? 'Desmarcar' : 'Marcar como comprado'}
            </button>
            <button onClick={() => removerItem(index)}>Remover</button>
          </li>
        ))}
      </ol>
      </div>
  );
};

export default Compras;
