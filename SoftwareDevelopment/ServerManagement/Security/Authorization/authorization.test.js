```javascript
// authorization.test.js

const assert = require('assert');
const jwt = require('jsonwebtoken');
const { generateToken, verifyToken } = require('./authorization');

describe('Authorization', () => {
    describe('#generateToken()', () => {
        it('should return a token', () => {
            const user = {
                name: 'Test User',
                role: 'admin'
            };
            const token = generateToken(user);
            assert(token, 'Token not generated');
            console.log("Token generation test passed.");
        });
    });

    describe('#verifyToken()', () => {
        it('should verify the token and return decoded payload', () => {
            const user = {
                name: 'Test User',
                role: 'admin'
            };
            const token = generateToken(user);
            const decoded = verifyToken(token);
            assert(decoded, 'Token not verified');
            assert.strictEqual(decoded.name, user.name, 'Decoded name does not match');
            assert.strictEqual(decoded.role, user.role, 'Decoded role does not match');
            console.log("Token verification test passed.");
        });
    });
});
```
