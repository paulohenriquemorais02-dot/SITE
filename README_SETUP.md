# Guia de Configuração do Projeto

## Frontend (React)

O frontend está configurado para rodar na porta **5175**.

### Instalação e Execução

1. **Instalar dependências:**
   ```bash
   cd frontend
   yarn install
   ```

2. **Executar o frontend:**
   ```bash
   npm run dev
   # ou
   cd frontend && yarn start
   ```

O site será aberto em: **http://localhost:5175**

## Backend (Python/FastAPI)

O backend precisa do Python instalado e configurado no sistema.

### Pré-requisitos

1. **Instalar Python:**
   - Baixe em: https://www.python.org/downloads/
   - Durante a instalação, marque "Add Python to PATH"

2. **Instalar dependências:**
   ```bash
   cd backend
   pip install -r requirements.txt
   # ou
   python -m pip install -r requirements.txt
   ```

3. **Configurar variáveis de ambiente:**
   - Crie um arquivo `.env` na pasta `backend/` baseado no `env.example`
   - Configure:
     - `MONGO_URL` - URL de conexão do MongoDB
     - `DB_NAME` - Nome do banco de dados
     - `CORS_ORIGINS` - http://localhost:5175

4. **Executar o backend:**
   ```bash
   npm run dev:backend
   # ou
   cd backend && uvicorn server:app --reload --port 8000
   ```

O backend será executado em: **http://localhost:8000**

## Executar Tudo Junto

Para executar frontend e backend simultaneamente:

```bash
# Terminal 1 - Frontend
npm run dev

# Terminal 2 - Backend
npm run dev:backend
```

Ou use o script que abre em janelas separadas:

```bash
npm run dev:all
```

## Portas Configuradas

- **Frontend**: 5175
- **Backend API**: 8000

