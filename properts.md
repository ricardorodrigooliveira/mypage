Criação do site
	Criação do projeto React
		npm create vite@latest nome-da-pagina --template react
		cd nome-da-pagina
		npm install
		npm run dev
		nome-da-pagina/
		├── index.html           ← HTML principal
		├── src/
		│   ├── main.jsx         ← Ponto de entrada
		│   ├── App.jsx          ← Componente principal
		│   └── ...
		├── vite.config.js       ← Configuração do Vite
		└── package.json
		
		se estiver uzando gitignore não esqueça de retirar o dist, caso contrário a pagina não executa
		
	Para fazer o build (produção)
		npm run build
			Ele criará uma pasta dist/ com o site pronto para deploy.
		npm install gh-pages --save-dev
		Configure seu vite.config.js
			Abra o arquivo vite.config.js e adicione a base com o nome do repositório:
				import { defineConfig } from 'vite'
				import react from '@vitejs/plugin-react'

				export default defineConfig({
				  base: '/nome-do-repositorio/', // 👈 altere aqui
				  plugins: [react()],
				})
			Atualize o package.json
				"scripts": {
				  "dev": "vite",
				  "build": "vite build",
				  "preview": "vite preview",
				  "homepage": "https://seu-usuario.github.io/nome-do-repositorio",
				  "deploy": "gh-pages -d dist"
				}
			npm run deploy
		Ative o GitHub Pages
			Vá até seu repositório no GitHub
			Vá em Settings > Pages
			Em Branch, escolha gh-pages branch e pasta / (root)
			Salve
		
		Depois de cada deploy é necessário executar o job do action da sua pagina
		
		npm install react-router-dom
		npm install -D tailwindcss postcss autoprefixer
		npx tailwindcss init -p
		
backend
	subir o docker desktop (Administrador)
	abrir um cmd (administrador)
		executar: netstat -a -n -o | findstr :5432 (verifica se o bando está no ar)
		
		criar o container com postgre
			docker run --name mypg -e POSTGRES_PASSWORD=123456 -e POSTGRES_USER=postgres -e POSTGRES_DB=mypage -p 5432:5432 -d postgres 

	DB: host: switchback.proxy.rlwy.net
	    port: 40049
		DB:   railway
	    pass: GJocDIITXTHdTLWEdvqAAQwRkrNnbFLt
		
		CREATE TABLE t_usuario (
		  id SERIAL PRIMARY KEY,
		  name VARCHAR(100) NOT NULL,
		  email VARCHAR(100) NOT NULL UNIQUE,
		  password VARCHAR(255) NOT NULL,
		  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
		);

	Endpoint: https://mypage-backend-production.up.railway.app
		criar usuário: /auth/register
		
	JWT_SECRET: CHAVEjWTsECRETpARAaCESSARmYpAGE_123!@#
	
	