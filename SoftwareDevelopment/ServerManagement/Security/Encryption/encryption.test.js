```javascript
// encryption.test.js

const assert = require('assert');
const { encryptText, decryptText } = require('./encryption');

describe('Encryption and Decryption', function() {
    // Test data
    const plainText = 'This is a test text';
    const algorithm = 'aes-256-cbc';
    const key = crypto.randomBytes(32);
    const iv = crypto.randomBytes(16);

    it('should encrypt the text correctly', function() {
        const encryptedText = encryptText(plainText, algorithm, key, iv);
        assert.notEqual(encryptedText, plainText, 'Encrypted text should not be the same as the plain text');
        assert.equal(typeof encryptedText, 'string', 'Encrypted text should be a string');
    });

    it('should decrypt the text correctly', function() {
        const encryptedText = encryptText(plainText, algorithm, key, iv);
        const decryptedText = decryptText(encryptedText, algorithm, key, iv);
        assert.equal(decryptedText, plainText, 'Decrypted text should be the same as the plain text');
    });

    it('should not decrypt the text correctly with wrong key', function() {
        const encryptedText = encryptText(plainText, algorithm, key, iv);
        const wrongKey = crypto.randomBytes(32);
        assert.throws(() => decryptText(encryptedText, algorithm, wrongKey, iv), Error, 'Decryption should throw an error with wrong key');
    });

    it('should not decrypt the text correctly with wrong iv', function() {
        const encryptedText = encryptText(plainText, algorithm, key, iv);
        const wrongIv = crypto.randomBytes(16);
        assert.throws(() => decryptText(encryptedText, algorithm, key, wrongIv), Error, 'Decryption should throw an error with wrong iv');
    });
});
```
