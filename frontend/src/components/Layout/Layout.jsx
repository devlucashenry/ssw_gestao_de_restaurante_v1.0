// src/components/Layout/Layout.jsx
import React from 'react';
import Sidebar from '../Sidebar/Sidebar'; // Importa o menu que criamos
import './Layout.css';

const Layout = ({ children, setLogado, nome }) => {
  return (
    <div className="layout-container">
      {/* 1. O Menu Fixo */}
      <Sidebar setLogado={setLogado} />

      {/* 2. A Área de Conteúdo (que muda conforme a rota) */}
      <main className="layout-content">
        {/* Cabeçalho superior simples */}
        <header className="top-bar">
          <div className="user-info">
            Olá, <strong>{nome}</strong>
          </div>
        </header>

        {/* Onde entra a Home, Funcionarios, etc */}
        <div className="page-content">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;