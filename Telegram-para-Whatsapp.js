const TelegramBot = require('node-telegram-bot-api');
const { create } = require('venom-bot');

// Configurações do Telegram
const TELEGRAM_TOKEN = 'SEU_TELEGRAM_TOKEN';
const TELEGRAM_GROUP_ID = 'SEU_TELEGRAM_GROUP_ID'; // ID do grupo para monitorar

// Configurações do WhatsApp
const WHATSAPP_GROUP_ID = 'SEU_WHATSAPP_GROUP_ID'; // Substitua pelo ID exato do grupo no WhatsApp

// Inicializar Telegram Bot
const telegramBot = new TelegramBot(TELEGRAM_TOKEN, { polling: true });

// Inicializar Venom Bot
let venomClient = null;
create({
  session: 'my-session',
  headless: true, // Sem interface gráfica
  browserArgs: ['--no-sandbox', '--disable-setuid-sandbox'], // Configurações do navegador
})
  .then((client) => {
    venomClient = client;
    console.log('Venom Bot iniciado!');
    // Listar todos os grupos para obter os IDs
    client.getAllChats().then((chats) => {
      chats.forEach((chat) => {
        if (chat.isGroup) {
          console.log(`Chat Name: "${chat.name}" | ID: "${chat.id._serialized}"`);
        }
      });
    });
  })
  .catch((err) => console.error('Erro ao iniciar Venom Bot:', err));

// Escutar mensagens no Telegram
telegramBot.on('message', async (msg) => {
  console.log('Mensagem recebida no Telegram:', msg); // Log da mensagem recebida

  if (msg.chat.id.toString() === TELEGRAM_GROUP_ID.toString()) {
    console.log('Mensagem recebida no grupo monitorado.');

    const mensagem = msg.text || 'Mensagem sem texto';
    console.log(`Mensagem recebida no Telegram: ${mensagem}`);

    if (venomClient) {
      try {
        // Encontrar o grupo pelo ID
        const chats = await venomClient.getAllChats();
        const grupo = chats.find((chat) => chat.id._serialized === WHATSAPP_GROUP_ID);

        if (grupo) {
          console.log('Grupo encontrado:', grupo.name);
          await venomClient.sendText(grupo.id._serialized, mensagem);
          console.log('Mensagem enviada ao WhatsApp!');
        } else {
          console.error('Grupo do WhatsApp não encontrado!');
        }
      } catch (err) {
        console.error('Erro ao enviar mensagem para o WhatsApp:', err);
      }
    } else {
      console.error('Venom Bot não está pronto!');
    }
  } else {
    console.log('Mensagem não pertence ao grupo monitorado.');
  }
});
