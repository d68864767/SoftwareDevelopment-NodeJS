```javascript
// authentication.test.js

const assert = require('assert');
const { hashPassword, comparePassword } = require('./authentication');

describe('Authentication', () => {
    describe('#hashPassword()', () => {
        it('should return a hashed password', async () => {
            const password = 'password123';
            const hashedPassword = await hashPassword(password);
            assert.notEqual(hashedPassword, password);
        });

        it('should throw an error when no password is provided', async () => {
            try {
                await hashPassword();
            } catch (error) {
                assert.equal(error.message, 'Error hashing password: No password provided');
            }
        });
    });

    describe('#comparePassword()', () => {
        it('should return true when the password matches the hash', async () => {
            const password = 'password123';
            const hashedPassword = await hashPassword(password);
            const match = await comparePassword(password, hashedPassword);
            assert.equal(match, true);
        });

        it('should return false when the password does not match the hash', async () => {
            const password = 'password123';
            const hashedPassword = await hashPassword(password);
            const match = await comparePassword('wrongpassword', hashedPassword);
            assert.equal(match, false);
        });

        it('should throw an error when no password or hash is provided', async () => {
            try {
                await comparePassword();
            } catch (error) {
                assert.equal(error.message, 'Error comparing password: No password or hash provided');
            }
        });
    });
});
```
