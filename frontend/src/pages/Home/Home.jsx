import React from 'react';
import './Home.css';

function Home({ nome }) {
  return (
    <div className="dashboard-container">
      <header className="home-header">
      </header>

      <div className="dashboard-grid">
        <div className="card welcome-card">
          <h3>Bem-vindo, {nome}!</h3>
          <p>Selecione uma opção no menu lateral para gerenciar o sistema.</p>
        </div>

      </div>
    </div>
  );
}

export default Home;