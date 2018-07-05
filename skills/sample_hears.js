/*

WHAT IS THIS?

This module demonstrates simple uses of Botkit's `hears` handler functions.

In these examples, Botkit is configured to listen for certain phrases, and then
respond immediately with a single line response.

*////

module.exports = function(controller) {
    
   controller.hears(['^oi$',"^ola$","^tudo bem$"], 'direct_message,direct_mention', function(bot, message) {
        bot.reply(message, "Oi tudo bem !!, meu nome é Samara sou um chatbot, vc precisa de ajuda ? ")
    });


   controller.hears(['^glpi$','^chamado$','^suporte$','^ajuda$'], ['direct_message','direct_mention','mention'], function(bot, message) {
     var message_options = [
    	"Olá você precisa de ajuda com alguma coisa",
    	"Quer abrir um chamado no GLPI ?",
        "Qual a sua duvida ?",
        "Precisa falar com alguma analista",
        "Equipe de Service Desk, 11º andar",
        "Analista Anderson Pirata",
	]
	var random_index = Math.floor(Math.random() * message_options.length)
	var chosen_message = message_options[random_index]

  bot.reply(message, chosen_message)

  });


};
