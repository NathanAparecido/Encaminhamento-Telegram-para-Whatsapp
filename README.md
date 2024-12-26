# Bot de Encaminhamento Telegram para WhatsApp

Este projeto contém dois scripts principais que utilizam as bibliotecas 'node-telegram-bot-api' e 'venom-bot' para criar uma integração entre grupos do Telegram e WhatsApp. O objetivo é monitorar mensagens em um grupo do Telegram e replicá-las em um grupo do WhatsApp, além de capturar códigos de grupo do WhatsApp.

> **Importante**: Para que o bot consiga ler as mensagens em um grupo do Telegram, é preciso que ele tenha permissões de Leitura de Mensagens. Caso o seu grupo do Telegram tenha um bot que escreva mensagens e você queira removê-lo, será necessário adicionar (ou manter) outro bot que tenha permissão para ler essas mensagens. Esse bot leitor será o responsável por encaminhar as mensagens para o WhatsApp.

## Requisitos
- Node.js
- Bibliotecas: node-telegram-bot-api e venom-bot

## Instalação

1. Clone este repositório:

'''bash
git clone https://github.com/seu-usuario/seu-repositorio.git

2. Navegue até o diretório do projeto:

'''bash
Copiar código
cd seu-repositorio
Instale as dependências:

bash
Copiar código
npm install node-telegram-bot-api venom-bot
Configuração
Abra os arquivos Telegram-para-Whatsapp.js e Captura-Codigo-Grupo-Whatsapp.js.
Substitua as seguintes variáveis com suas próprias informações:
TELEGRAM_TOKEN: Seu token de bot do Telegram.
TELEGRAM_GROUP_ID: O ID do grupo do Telegram que deseja monitorar.
WHATSAPP_GROUP_ID: O ID do grupo do WhatsApp que deseja integrar.
Dica: Certifique-se de que o bot adicionado ao grupo do Telegram possa ler as mensagens.

Uso
Script 1: Telegram-para-Whatsapp.js
Este script inicializa um bot do Telegram e um bot Venom (WhatsApp). Ele monitora mensagens em um grupo do Telegram especificado e as envia para um grupo do WhatsApp.

Execute o script:
bash
Copiar código
node Telegram-para-Whatsapp.js
O bot irá listar todos os grupos no WhatsApp para obter os IDs.
Envie mensagens no grupo do Telegram configurado para vê-las replicadas no grupo do WhatsApp.
Script 2: Captura-Codigo-Grupo-Whatsapp.js
Este script inicializa um bot Venom (WhatsApp) e lista todos os chats disponíveis para obter os IDs dos grupos.

Execute o script:
bash
Copiar código
node Captura-Codigo-Grupo-Whatsapp.js
Espere 10 segundos para que o WhatsApp Web seja carregado.
Veja a listagem de todos os chats e grupos disponíveis com seus respectivos IDs.
Contribuição
Contribuições são bem-vindas! Por favor, envie um pull request ou abra uma issue para discutir o que você gostaria de mudar.

Licença
Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para obter mais detalhes.

