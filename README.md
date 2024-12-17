# Bot de Integração Telegram-WhatsApp

Este projeto contém dois scripts principais que utilizam as bibliotecas `node-telegram-bot-api` e `venom-bot` para criar uma integração entre grupos de Telegram e WhatsApp. O objetivo é monitorar mensagens em um grupo do Telegram e replicá-las em um grupo do WhatsApp, além de capturar códigos de grupo do WhatsApp.

## Requisitos

- Node.js
- Bibliotecas: `node-telegram-bot-api` e `venom-bot`

## Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
Navegue até o diretório do projeto:

bash
cd seu-repositorio
Instale as dependências:

bash
npm install node-telegram-bot-api venom-bot
Configuração
Abra os arquivos Telegram-para-Whatsapp.js e Captura-Codigo-Grupo-Whatsapp.js.

Substitua as seguintes variáveis com suas próprias informações:

TELEGRAM_TOKEN: Seu token de bot do Telegram.

TELEGRAM_GROUP_ID: O ID do grupo do Telegram que deseja monitorar.

WHATSAPP_GROUP_ID: O ID do grupo do WhatsApp que deseja integrar.

Uso
Script 1: Telegram-para-Whatsapp.js
Este script inicializa um bot do Telegram e um bot Venom (WhatsApp). Ele monitora mensagens em um grupo do Telegram especificado e as envia para um grupo do WhatsApp.

Execute o script:

bash
node Telegram-para-Whatsapp.js
O bot irá listar todos os grupos no WhatsApp para obter os IDs.

Envie mensagens no grupo do Telegram configurado para vê-las replicadas no grupo do WhatsApp.

Script 2: Captura-Codigo-Grupo-Whatsapp.js
Este script inicializa um bot Venom (WhatsApp) e lista todos os chats disponíveis para obter os IDs dos grupos.

Execute o script:

bash
node Captura-Codigo-Grupo-Whatsapp.js
Espere 10 segundos para que o WhatsApp Web seja carregado.

Veja a listagem de todos os chats e grupos disponíveis com seus respectivos IDs.

Contribuição
Contribuições são bem-vindas! Por favor, envie um pull request ou abra uma issue para discutir o que você gostaria de mudar.

Licença
Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para obter mais detalhes.


Copie o texto acima e cole em um arquivo chamado `README.md` no seu editor de texto favorito. Em seguida, salve o arquivo e pronto, você terá seu `README.md` para postar no GitHub! Se precisar de mais alguma coisa, estou por aqui. 😊
