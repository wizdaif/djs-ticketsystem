const { Client } = require('discord.js');
const { TicketSystem } = require('../../');

const client = new Client();

const ts = new TicketSystem(client, {});

test('check that client has ticketSystem prop', () => {
    expect(client.ticketSystem).toEqual(ts);
});

client.destroy();
