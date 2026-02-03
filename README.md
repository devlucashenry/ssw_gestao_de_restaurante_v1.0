🍴 SSW (Saga Sistema Web) - Sistema de Gestão para Restaurantes Versão: 1.0.0

Status: Em Desenvolvimento 🚧

O SSW é um protótipo Full Stack que esta sendo desenvolvida para otimizar o fluxo de atendimento em restaurantes.

Essa primeira parte foi desenvolvida usando operações CRUD e boas práticas de desenvolvimento de software.

As fases consistiram em:
Requisitos do sistema;
Requisitos do Software;
Análise;
Design do Programa;
Programação;
Teste;
Operações.

De acordo com o livro "Desenvolvimento Ágil Limpo" de Robert C. Martin

🚀 Funcionalidades

Autenticação: Sistema de login validando credenciais no MySQL.
Conexão Mobile-Desktop: Arquitetura configurada para permitir acesso via Rede Local (Wi-Fi), transformando o PC em um servidor central acessível por celulares.
Dashboard Responsivo: Interface com Menu Lateral Fixo.
Performance de Banco: Implementação de Connection Pools no Node.js para gerenciar múltiplas conexões simultâneas.

🛠 Arquitetura e Tecnologias

O projeto segue a arquitetura Cliente-Servidor (REST API).

Frontend (Cliente):
React.js (Single Page Application)
React Router Dom (Navegação)
CSS Modules / Grid Layout

Backend (Servidor):
Node.js & Express
MySQL2 (com Promises e Connection Pool)
Dotenv (Gerenciamento de variáveis de ambiente)
Clean Code Principles (Async/Await)
Banco de Dados: MySQL 

🔐 Ambiente (.env)

Por segurança, as credenciais do banco não ficam no código. Criei um arquivo chamado .env e essas informações são importadas no backend.

# Configuração do Servidor
PORT=5000

# Configuração do Banco de Dados
DB_HOST=localhost
DB_USER=root
DB_PASS=sua_senha_mysql
DB_NAME=gestao









