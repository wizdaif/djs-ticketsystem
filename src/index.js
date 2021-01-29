try {
    require('discord.js');
} catch {
    throw new Error('Unable to find discord.js, please install it.');
}

module.exports = {
    TicketSystem: require('./Core/TicketSystem.js'),
};
