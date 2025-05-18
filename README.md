# 🧩 Perpetual Tasks – Frontend (React + TypeScript + Tailwind)

Este projeto é o **frontend** do sistema Perpetual Tasks, uma aplicação de gerenciamento de tarefas com autenticação JWT. Ele foi desenvolvido com **React + TypeScript** e utiliza **TailwindCSS** para o estilo.

---

## 🚀 Funcionalidades

- Registro de novos usuários
- Login com autenticação JWT
- Redirecionamento para área logada após login
- Listagem de tarefas protegida por token
- Criação de nova tarefa com título e descrição
- Visualização de detalhes da tarefa
- Marcar tarefa como concluída (efeito de risco)
- Atualização de tarefa na tela de detalhes
- Exclusão de tarefa
- Logout com limpeza de token
- Estilo moderno, responsivo e adaptado via TailwindCSS

---

## 🗂️ Estrutura de Pastas

```
src/
├── assets/                  # Imagens e arquivos públicos
├── components/              # Componentes reutilizáveis
│   ├── addTask.tsx
│   ├── protectedRoute.tsx
│   └── taskList.tsx
├── pages/                   # Páginas de navegação
│   ├── introductionPage.tsx
│   ├── loginPage.tsx
│   ├── registerPage.tsx
│   ├── taskPage.tsx
│   └── userPage.tsx
├── services/
│   └── authService.ts       # Funções de autenticação (login, registro)
├── App.tsx                  # Definição de rotas e layout principal
├── config.ts                # Constantes de URLs da API
├── index.css                # Estilo base do Tailwind
└── main.tsx                 # Entrada principal do app
```

---

## 🔐 Integração com Backend

A comunicação com o backend é feita por meio de requisições `fetch` autenticadas com **JWT** (armazenado no `localStorage`). O token é enviado no header `Authorization` para rotas protegidas como `/tasks`, `/tasks/:id`.

O backend está disponível em:  
`https://backend-express-mongodb-one.vercel.app/`

---

## Hospedagens

Confira o front-end e o back-end hospedados no vercel:

🔗 [Front-end](https://react-login-crud.vercel.app/)

🔗 [Back-end](https://backend-express-mongodb-one.vercel.app)

🔗 [Back-end (Repositório)](https://github.com/GabsFMA/backend-express-mongodb)

---

## 🧪 Fluxo do Usuário

1. O usuário acessa a tela de **login** ou **registro**
2. Após login, é redirecionado para a **área logada** (`userPage.tsx`)
3. Pode criar, marcar como concluída, visualizar detalhes e deletar tarefas
4. Na tela de detalhes (`taskPage.tsx`), pode **editar** a tarefa
5. O botão “Sair” remove o token e redireciona para login

---

## 🎨 Estilo

Todo o layout foi feito com **TailwindCSS**, inspirado no estilo escuro da tela de login:

- Fundo escuro `#1E1A1A`
- Botões com transições e cores vibrantes
- Componentes centralizados e responsivos

---

## 📦 Instalação

```bash
npm install
npm run dev
```

> Certifique-se de que o backend está rodando corretamente com a URL de API configurada no `src/config.ts`.

---

## 📌 Observações

- O token é persistido em `localStorage` e validado em todas as operações protegidas
- A tela de tarefas está desacoplada em componentes para reutilização
- O projeto pode ser facilmente adaptado para outras APIs REST

---

## 📁 Arquivo de Configuração

```ts
// src/config.ts
export const BACK_END_API_URL = 'https://backend-express-mongodb-one.vercel.app/users/';
export const BACK_END_API_TASKS_URL = 'https://backend-express-mongodb-one.vercel.app/tasks/';
```

---

## 📽️ Demonstração em Vídeo

Assista à demonstração da aplicação funcionando localmente e em produção:

🔗 [Clique aqui para assistir ao vídeo](https://youtu.be/eOhYPwFWfDE)

---

## 👨‍💻 Desenvolvido para fins educacionais e práticos com foco em autenticação e consumo de APIs REST.
