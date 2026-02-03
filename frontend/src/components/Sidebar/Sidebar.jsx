// src/components/Sidebar/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ setLogado }) => {
  
  const handleLogout = () => {
    setLogado(false); // Avisa o App.js que saiu
  };

  return (
    <nav className="sidebar">
      <div className="sidebar-logo">
        <h2>Gestão</h2>
      </div>

      <ul className="sidebar-menu">
        <li>
          <NavLink to="/mesas" className={({ isActive }) => (isActive ? "active" : "")}>
            🍽️ Mesas & Comandas
          </NavLink>
        </li>
        <li>
          <NavLink to="/pedidos" className={({ isActive }) => (isActive ? "active" : "")}>
            📝 Pedidos (Cozinha)
          </NavLink>
        </li>
        <li>
          <NavLink to="/cardapio" className={({ isActive }) => (isActive ? "active" : "")}>
            🍔 Cardápio
          </NavLink>
        </li>
        <li>
          <NavLink to="/funcionarios" className={({ isActive }) => (isActive ? "active" : "")}>
            👥 Funcionários
          </NavLink>
        </li>
      </ul>

      <div className="sidebar-footer">
        <button onClick={handleLogout} className="btn-logout">
          🚪 Sair
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;