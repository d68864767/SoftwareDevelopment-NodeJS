```javascript
// scalability.js

// This file is for demonstrating the concept of scalability in software design.
// Scalability is the capability of a system, network, or process to handle a growing amount of work, or its potential to be enlarged to accommodate that growth.

// In this file, we will simulate a simple load balancer to distribute requests among multiple servers.

class Server {
    constructor(id) {
        this.id = id;
    }

    handleRequest(request) {
        console.log(`Server ${this.id} is handling request ${request}`);
    }
}

class LoadBalancer {
    constructor() {
        this.servers = [];
    }

    addServer(server) {
        this.servers.push(server);
    }

    distributeRequest(request) {
        const serverIndex = request % this.servers.length;
        this.servers[serverIndex].handleRequest(request);
    }
}

// Create a load balancer and add servers to it
const loadBalancer = new LoadBalancer();
for (let i = 0; i < 5; i++) {
    loadBalancer.addServer(new Server(i));
}

// Simulate incoming requests
for (let i = 0; i < 100; i++) {
    loadBalancer.distributeRequest(i);
}

module.exports = {
    Server,
    LoadBalancer
};
```
