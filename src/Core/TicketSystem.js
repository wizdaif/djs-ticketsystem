const { Client } = require('discord.js');
const { TicketSystemOptions } = require('../Options');

class TicketSystem {
    constructor(client, options = {}) {
        if (!(client instanceof Client))
            throw new TypeError(
                'Expected a instance of Discord.Client for client param',
            );

        this._client = client;
        this._options = new TicketSystemOptions(options);

        require('../Client/Client.js')({
            client,
            ticketSystem: this,
        });
    }
}
}

module.exports = TicketSystem;
