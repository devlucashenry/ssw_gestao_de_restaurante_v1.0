import React, { useState } from 'react';
import './Mesas_Comandas.css';

const Mesas_Comandas = () => {
  // Cria um array de 1 a 20 para representar as mesas
  const mesas = Array.from({ length: 20 }, (_, i) => i + 1);

  // Exemplo simples de estado para saber qual mesa foi clicada
  const [mesaSelecionada, setMesaSelecionada] = useState(null);

  const handleMesaClick = (numero) => {
    setMesaSelecionada(numero);
    alert(`Você clicou na Mesa ${numero}`);
    // Aqui no futuro você abrirá a comanda desta mesa
  };

  return (
    <div className="mesas-container">
      <header className="mesas-header">
        <h1>Mapa de Mesas</h1>
        <div className="legenda">
          <span className="status-livre">Livre</span>
          <span className="status-ocupada">Ocupada</span>
        </div>
      </header>

      <div className="mesas-grid">
        {mesas.map((numero) => (
          <div 
            key={numero} 
            className={`mesa-card ${mesaSelecionada === numero ? 'ativa' : ''}`}
            onClick={() => handleMesaClick(numero)}
          >
            <div className="mesa-icon">🍽️</div>
            <h3>MESA {numero}</h3>
            <span className="mesa-status">Livre</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mesas_Comandas;