const { create } = require('venom-bot');

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

    // Espera 10 segundos para garantir que o WhatsApp Web tenha carregado
    setTimeout(async () => {
      try {
        // Listar todos os chats
        const chats = await client.getAllChats();

        console.log('Todos os chats encontrados:', chats); // Exibe todos os chats

        if (chats.length === 0) {
          console.log('Nenhum chat encontrado!');
          return;
        }

        let foundGroup = false;

        chats.forEach((chat) => {
          console.log(`Chat encontrado: ${chat.name} | ID: ${chat.id._serialized}`); // Log de todos os chats encontrados
          if (chat.isGroup) {
            console.log(`Grupo encontrado: "${chat.name}" | ID do grupo: "${chat.id._serialized}"`);
            foundGroup = true;
          }
        });

        if (!foundGroup) {
          console.log('Nenhum grupo encontrado!');
        }
      } catch (err) {
        console.error('Erro ao obter chats:', err);
      }
    }, 10000); // Espera 10 segundos antes de buscar os chats
  })
  .catch((err) => console.error('Erro ao iniciar Venom Bot:', err));
