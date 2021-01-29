try {
    require('discord.js');
} catch {
    throw new Error('Unable to find discord.js, please install it.');
}

require('./Structures/Guild.js');

module.exports = {
    TicketSystem: require('./Core/TicketSystem.js'),
};
