const { EmbedBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder, ActionRowBuilder } = require('discord.js');

module.exports =  {
    data: new SlashCommandBuilder().setName('play_truth_or_dare').setDescription('starts truth or dare'),

    async execute(interaction) {

        // const profilePicture = new AttachmentBuilder('../../images/profilePicture.jpg');
        // const icon = new AttachmentBuilder('attachment:../../images/icon.png');

        const embed = new EmbedBuilder().setColor(0x0099FF).setTitle('Truth or Dare').setAuthor({name: `Requested by ${interaction.user.username}`}).setThumbnail('https://i.imgur.com/JtSHSuI.jpeg').setDescription('Welcome to truth or dare! Please select either truth or dare to play.').setTimestamp().setFooter({ text: 'Made by bo1l (Munchkin)', iconURL: 'https://i.imgur.com/Eyf9fu8.jpg' });

        const truthButton = new ButtonBuilder().setCustomId('truth').setLabel('Truth').setStyle(ButtonStyle.Success);
        const dareButton = new ButtonBuilder().setCustomId('dare').setLabel('Dare').setStyle(ButtonStyle.Danger);
        const randomButton = new ButtonBuilder().setCustomId('random').setLabel('Random').setStyle(ButtonStyle.Primary);

        const row = new ActionRowBuilder().addComponents(truthButton, dareButton, randomButton);

        await interaction.reply({embeds: [embed], components: [row]});
    },

    eventListener(client) {
        client.on('interactionCreate', async interaction => {

            if (!interaction.isButton()) return;

            const randomNumber = Math.floor(Math.random() * 35);
            const truthOrDareNumber = Math.floor(Math.random() * 2);
            const truthEmbed = new EmbedBuilder().setColor(0x32CD32).setAuthor({name: `Requested by ${interaction.user.username}`}).setTitle('Truth').setDescription(`${truths[randomNumber].description}`);
            const dareEmbed = new EmbedBuilder().setColor(0x880808).setAuthor({name: `Requested by ${interaction.user.username}`}).setTitle('Dare').setDescription(`${dares[randomNumber].description}`);

            if (interaction.customId == 'truth') {
                await interaction.reply({embeds: [truthEmbed]});
            } else if (interaction.customId == 'dare'){
                await interaction.reply({embeds: [dareEmbed]});
            }
            else {
                switch (truthOrDareNumber) {
                    case 0:
                        await interaction.reply({embeds: [truthEmbed]});
                        break;
                    case 1:
                        await interaction.reply({embeds: [dareEmbed]});
                        break;
                }
            }
        });
    }
}

const dares = [
    { "ID": 1, "description": "Do a silly dance in front of a mirror for 2 minutes." },
    { "ID": 2, "description": "Send a funny meme to the third person in your contact list." },
    { "ID": 3, "description": "Speak in an accent for the next three rounds." },
    { "ID": 4, "description": "Take a selfie with a funny face and set it as your profile picture for a day." },
    { "ID": 5, "description": "Send a text to your crush confessing your admiration (even if it's a joke)." },
    { "ID": 6, "description": "Wear socks on your hands for the next 10 minutes." },
    { "ID": 7, "description": "Make up a short rap about a random object in the room." },
    { "ID": 8, "description": "Tell a joke in a language other than your native language." },
    { "ID": 9, "description": "Eat a spoonful of a spicy condiment (if available)." },
    { "ID": 10, "description": "Do your best impression of a famous celebrity." },
    { "ID": 11, "description": "Create a funny acrostic poem using your name." },
    { "ID": 12, "description": "Act out a scene from a famous movie using household items as props." },
    { "ID": 13, "description": "Do 10 jumping jacks while reciting the alphabet backward." },
    { "ID": 14, "description": "Tell a fictional story about how you got a scar (real or imaginary)." },
    { "ID": 15, "description": "Text a friend using only emojis and see if they can understand the message." },
    { "ID": 16, "description": "Sing a verse from your favorite song in a funny voice." },
    { "ID": 17, "description": "Create a funny haiku about a common household item." },
    { "ID": 18, "description": "Do an interpretive dance to a random song chosen by the group." },
    { "ID": 19, "description": "Tell a funny childhood story that still makes you laugh." },
    { "ID": 20, "description": "Wear socks on your hands for the next 10 minutes." },
    { "ID": 21, "description": "Make up a short rap about a random object in the room." },
    { "ID": 22, "description": "Tell a joke in a language other than your native language." },
    { "ID": 23, "description": "Eat a spoonful of a spicy condiment (if available)." },
    { "ID": 24, "description": "Do your best impression of a famous celebrity." },
    { "ID": 25, "description": "Create a funny acrostic poem using your name." },
    { "ID": 26, "description": "Act out a scene from a famous movie using household items as props." },
    { "ID": 27, "description": "Do 10 jumping jacks while reciting the alphabet backward." },
    { "ID": 28, "description": "Tell a fictional story about how you got a scar (real or imaginary)." },
    { "ID": 29, "description": "Text a friend using only emojis and see if they can understand the message." },
    { "ID": 30, "description": "Sing a verse from your favorite song in a funny voice." },
    { "ID": 31, "description": "Create a funny haiku about a common household item." },
    { "ID": 32, "description": "Do an interpretive dance to a random song chosen by the group." },
    { "ID": 33, "description": "Tell a funny childhood story that still makes you laugh." },
    { "ID": 34, "description": "Wear socks on your hands for the next 10 minutes." },
    { "ID": 35, "description": "Make up a short rap about a random object in the room." }
];

const truths = [
    { "ID": 1, "description": "What is your most embarrassing moment?" },
    { "ID": 2, "description": "Have you ever cheated on a test?" },
    { "ID": 3, "description": "What is your biggest fear?" },
    { "ID": 4, "description": "If you could switch lives with someone for a day, who would it be and why?" },
    { "ID": 5, "description": "What is the most childish thing you still do?" },
    { "ID": 6, "description": "Have you ever had a crush on a fictional character? If so, who?" },
    { "ID": 7, "description": "If you could have any superpower, what would it be and why?" },
    { "ID": 8, "description": "What is the weirdest dream you've ever had?" },
    { "ID": 9, "description": "If you were stranded on a deserted island, what three items would you bring?" },
    { "ID": 10, "description": "What is your most embarrassing nickname?" },
    { "ID": 11, "description": "If you could meet any historical figure, who would it be and what would you ask them?" },
    { "ID": 12, "description": "What is the most adventurous thing you've ever done?" },
    { "ID": 13, "description": "If you could time travel, would you go to the past or the future? Why?" },
    { "ID": 14, "description": "What is your guilty pleasure TV show or movie?" },
    { "ID": 15, "description": "If you could have dinner with any celebrity, dead or alive, who would it be?" },
    { "ID": 16, "description": "What is the most embarrassing thing your parents have caught you doing?" },
    { "ID": 17, "description": "If you could swap lives with any animal for a day, which one would it be?" },
    { "ID": 18, "description": "What is your biggest pet peeve?" },
    { "ID": 19, "description": "If you could have any talent in the world, what would it be?" },
    { "ID": 20, "description": "What is the most unusual food you've ever tried?" },
    { "ID": 21, "description": "If you could be a character in any movie, which one would you choose?" },
    { "ID": 22, "description": "What is the most embarrassing thing you've done to impress someone you liked?" },
    { "ID": 23, "description": "If you could live in any fictional universe, where would you choose?" },
    { "ID": 24, "description": "What is your go-to dance move?" },
    { "ID": 25, "description": "If you could have any job in the world for one day, what would it be?" },
    { "ID": 26, "description": "What is the strangest talent you have?" },
    { "ID": 27, "description": "If you could witness any historical event, what would it be?" },
    { "ID": 28, "description": "What is your favorite childhood memory?" },
    { "ID": 29, "description": "If you could only eat one food for the rest of your life, what would it be?" },
    { "ID": 30, "description": "What is the most embarrassing thing you've Googled?" },
    { "ID": 31, "description": "If you could have any fictional character as your best friend, who would it be?" },
    { "ID": 32, "description": "What is your biggest regret?" },
    { "ID": 33, "description": "If you could be invisible for a day, what would you do?" },
    { "ID": 34, "description": "What is the most ridiculous rumor you've heard about yourself?" },
    { "ID": 35, "description": "If you could trade places with anyone for a day, who would it be?" }
];