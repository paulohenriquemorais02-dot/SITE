# Configuração para Deploy no Vercel

Este projeto está configurado para ser hospedado no Vercel.

## Estrutura

- **Frontend**: React app na pasta `frontend/`
- **Backend**: FastAPI adaptado para funções serverless na pasta `api/`

## Variáveis de Ambiente Necessárias

Configure as seguintes variáveis de ambiente no painel do Vercel:

1. `MONGO_URL` - URL de conexão do MongoDB
2. `DB_NAME` - Nome do banco de dados
3. `CORS_ORIGINS` - (Opcional) Origens permitidas para CORS, separadas por vírgula. Padrão: `*`

## Como Fazer Deploy

1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente no painel do Vercel
3. O Vercel detectará automaticamente a configuração do `vercel.json`

## Estrutura de Rotas

- `/api/*` - Rotas da API (FastAPI serverless)
- `/*` - Frontend React (SPA)

## Notas Importantes

- O backend foi adaptado para funcionar como função serverless usando Mangum
- Eventos de startup/shutdown do FastAPI estão desabilitados (não suportados em serverless)
- As variáveis de ambiente devem ser configuradas no painel do Vercel, não via arquivo `.env`

