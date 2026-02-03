# 🍴 SSW (Saga Sistema Web) - Gestão para Restaurantes

> **Versão:** 1.0.0 (MVP - Authentication & Infrastructure)  
> **Status:** Em Desenvolvimento 🚧

O **SSW** é um protótipo Full Stack desenvolvido para otimizar o fluxo de atendimento em restaurantes. Esta primeira etapa focou na construção de uma base sólida utilizando operações CRUD e as melhores práticas de engenharia de software.

---

## 📖 Metodologia de Desenvolvimento

O projeto foi estruturado seguindo os princípios do livro **"Desenvolvimento Ágil Limpo" de Robert C. Martin**, garantindo um código sustentável e bem planejado. O ciclo de desenvolvimento consistiu em:

1.  **Requisitos do Sistema** (Necessidades do negócio)
2.  **Requisitos do Software** (Tradução técnica)
3.  **Análise** (Modelagem de dados)
4.  **Design do Programa** (Arquitetura de componentes)
5.  **Programação** (Implementação Clean Code)
6.  **Teste** (Validação de fluxos)
7.  **Operações** (Deploy e conectividade local)

---

## 🚀 Funcionalidades

* **Autenticação:** Sistema de login com validação de credenciais via MySQL.
* **Conexão Mobile-Desktop:** Arquitetura configurada para acesso via Rede Local (Wi-Fi), transformando o PC em um servidor central acessível por dispositivos móveis.
* **Dashboard Responsivo:** Interface moderna com Menu Lateral Fixo para navegação intuitiva.
* **Performance de Banco:** Implementação de `Connection Pools` no Node.js para gerenciamento eficiente de múltiplas conexões simultâneas.

---

## 🛠 Arquitetura e Tecnologias

O projeto segue o modelo **Cliente-Servidor** utilizando uma **REST API** para comunicação.

### **Frontend (Cliente)**
* **React.js:** Single Page Application (SPA) para uma experiência de usuário fluida.
* **React Router Dom:** Gerenciamento dinâmico de rotas e navegação.
* **CSS Modules / Grid Layout:** Estilização organizada e sistema de grades responsivo.

### **Backend (Servidor)**
* **Node.js & Express:** Ambiente de execução e framework para rotas de alta performance.
* **MySQL2:** Driver com suporte a *Promises* e *Connection Pool*.
* **Dotenv:** Segurança no gerenciamento de variáveis de ambiente.
* **Clean Code:** Aplicação de princípios de código limpo com *Async/Await*.

### **Banco de Dados**
* **MySQL:** Armazenamento relacional robusto.

---

## 🔐 Configuração de Ambiente (.env)

Por segurança, as credenciais sensíveis do banco de dados não são versionadas. Para rodar o projeto, crie um arquivo `.env` na raiz do backend seguindo o modelo:

```env
# Configuração do Servidor
PORT=5000

# Configuração do Banco de Dados
DB_HOST=localhost
DB_USER=root
DB_PASS=sua_senha_mysql
DB_NAME=gestao
