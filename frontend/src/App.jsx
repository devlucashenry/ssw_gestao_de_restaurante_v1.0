import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Importação das Páginas
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Layout from './components/Layout/Layout'; 
import Mesas_Comandas from './pages/Mesas_Comandas/Mesas_Comandas';

// Importação de outras páginas (quando você criar)
// import Pedidos from './pages/Pedidos/Pedidos'; 

import './App.css';

function App() {
  const [logado, setLogado] = useState(false);
  const [nome, setNome] = useState('');

  // --- CONFIGURAÇÃO PARA ACESSO MOBILE ---
  // 1. Abra o CMD no Windows e digite: ipconfig
  // 2. Pegue o número em "Endereço IPv4" e coloque abaixo:
  const ipLocal = "192.168.0.11"; // <--- ATENÇÃO: VERIFIQUE SE O SEU IP É ESSE MESMO!

  return (
    <BrowserRouter>
      <Routes>
        
        {/* ROTA DE LOGIN */}
        <Route path="/" element={
          !logado ? (
            // Passamos o IP para o Login saber onde buscar o servidor
            <Login 
                setLogado={setLogado} 
                setNome={setNome} 
                ip={ipLocal} 
            />
          ) : (
            <Navigate to="/home" />
          )
        } />
        
        {/* ROTA HOME (Protegida) */}
        <Route path="/home" element={
          logado ? (
            <Layout setLogado={setLogado} nome={nome}>
               <Home />
            </Layout>
          ) : (
            <Navigate to="/" />
          )
        } />

        {/* ROTA MESAS (Protegida) */}
        <Route path="/mesas" element={
          logado ? (
            <Layout setLogado={setLogado} nome={nome}>
              <Mesas_Comandas />
            </Layout>
          ) : <Navigate to="/" />
        } />
        
        {/* Rota Coringa (Erro 404 volta pro inicio) */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;