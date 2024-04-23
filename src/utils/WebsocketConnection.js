import * as config from '../../config.json';

export default class WebsocketConnection {
    constructor() {
        this.protocol = config.WS.protocol;
        this.host = config.WS.hostname;
        this.connection = this.uri = this.port = null;

        // To override
        this.events = {
            message(e) { console.log(e); },
            error(e) { console.log(e); },
            open(e) { console.log(e); },
            close(e) { console.log(e); }
        };
    }

    /**
     * Fetch missing informations (WS port)
     * @returns The current instance
     */
    async init() {
        if (this.port && this.uri) return;

        const portApiUrl = `${config.api.protocol}://${config.api.hostname}${config.api.path}/ports`;
        const response = await fetch(portApiUrl);
        const portData = await response.json();

        this.port = portData.ws;
        this.uri = `${this.protocol}://${this.host}:${this.port}`;
    }

    /**
     * Start the WS connection
     * @returns Promise of connection
     */
    async connect() {
        if (this.connection) return new Promise(resolve => resolve(this.connection));

        this.connection = new WebSocket(this.uri);

        // Add WS events
        for (const eventName in this.events) {
            const event = this.events[eventName];
            this.connection.addEventListener(eventName, event);
        }

        return new Promise((resolve, reject) => {
            const timer = setInterval(() => {
                if (!this.connection) {
                    clearInterval(timer);
                    reject('Connection null');
                }
                if(this.connection.readyState === 1) {
                    clearInterval(timer);
                    resolve(this.connection);
                }
            }, 10);
        });
    }

    /**
     * Send data through the WS connection
     * @param {Object} data Data to send
     */
    send(data) {
        const toSend = JSON.stringify(data);
        this.connection.send(toSend);
    }

    /**
     * Reset the current connection
     */
    reset() {
        if (this.connection) this.connection.close();
        this.connection = null;
    }
}