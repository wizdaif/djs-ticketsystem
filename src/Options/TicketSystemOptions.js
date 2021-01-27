const defaults = {
    name: ({ owner }) => `ticket-${owner.user.username.slice(0, 10)}`,
};

class TicketSystemOptions {
    constructor(options = {}) {
        this.name = options.name || defaults.name;
    }
}

module.exports = TicketSystemOptions;
