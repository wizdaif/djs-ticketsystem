const { Structures } = require('discord.js');

Structures.extend('Guild', (Class) => {
    return class Guild extends Class {
        constructor(client, data) {
            super(client, data);
        }
    };
});
