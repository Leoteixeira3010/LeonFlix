# LeonFlix

Projeto front-end simples para demonstrar uma página de streaming fictícia.

## Testes

Os testes utilizam [Jest](https://jestjs.io/) com ambiente `jsdom`.

1. Instale as dependências uma vez:
   ```bash
   npm install
   ```
2. Execute os testes:
   ```bash
   npm test
   ```

O teste carrega `index.html`, verifica o texto do banner e confirma que a mensagem
`LeonFlix está pronto!` é registrada no console ao disparar o evento
`DOMContentLoaded`.
