```javascript
// scalability.test.js

// This file is for testing the scalability principles demonstrated in scalability.js.
// We will be using Jest for our testing framework.

const { Server, LoadBalancer } = require('./scalability');

describe('Server', () => {
    test('should handle request correctly', () => {
        const server = new Server(1);
        const consoleSpy = jest.spyOn(console, 'log');
        server.handleRequest('request1');
        expect(consoleSpy).toHaveBeenCalledWith('Server 1 is handling request request1');
    });
});

describe('LoadBalancer', () => {
    let loadBalancer;
    let consoleSpy;

    beforeEach(() => {
        loadBalancer = new LoadBalancer();
        consoleSpy = jest.spyOn(console, 'log');
    });

    afterEach(() => {
        consoleSpy.mockRestore();
    });

    test('should add server correctly', () => {
        const server = new Server(1);
        loadBalancer.addServer(server);
        expect(loadBalancer.servers).toContain(server);
    });

    test('should distribute request correctly', () => {
        const server1 = new Server(1);
        const server2 = new Server(2);
        loadBalancer.addServer(server1);
        loadBalancer.addServer(server2);
        loadBalancer.distributeRequest('request1');
        expect(consoleSpy).toHaveBeenCalledWith('Server 1 is handling request request1');
        loadBalancer.distributeRequest('request2');
        expect(consoleSpy).toHaveBeenCalledWith('Server 2 is handling request request2');
    });
});
```
