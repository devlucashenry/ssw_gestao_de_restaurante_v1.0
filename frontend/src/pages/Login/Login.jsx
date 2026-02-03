import React, { useState, useEffect } from 'react';
import './Login.css';

// 1. Verifique se 'ip' está aqui nas chaves
function Login({ setLogado, setNome, ip }) {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [status, setStatus] = useState('');

  // DEBUG: Isso vai mostrar um alerta na tela do celular assim que abrir
  useEffect(() => {
    // Se aparecer "IP recebido: undefined", o erro está no App.js
    // Se aparecer "IP recebido: 192.168.0.11", está certo!
    // alert(`DEBUG: IP do Servidor é ${ip}`); 
  }, [ip]);

  const realizarLogin = async () => {
    setStatus(''); // Limpa mensagens antigas
    
    try {
      // 2. AQUI ESTÁ O SEGREDO
      // Se o 'ip' vier vazio, usa localhost. Se vier preenchido, usa o IP.
      const host = ip ? ip : 'localhost';
      
      console.log(`Tentando conectar em: http://${host}:5000/login`);

      const resp = await fetch(`http://${host}:5000/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome: user, senha: pass })
      });

      const data = await resp.json();

      if (resp.ok) { // Status 200
        setNome(data.usuario); 
        setLogado(true); 
      } else {
        setStatus(data.msg || "Usuário ou senha incorretos");
      }
    } catch (e) {
      console.error(e);
      setStatus(`Erro de conexão. Tentando acessar: http://${ip || 'localhost'}:5000`);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>

        <input 
            type="text" 
            placeholder="Usuário" 
            onChange={e => setUser(e.target.value)} 
        />
        <input 
            type="password" 
            placeholder="Senha" 
            onChange={e => setPass(e.target.value)} 
        />
        
        <button onClick={realizarLogin}>Entrar</button>
        
        {status && <p className="error-msg">{status}</p>}
      </div>
    </div>
  );
}

export default Login;