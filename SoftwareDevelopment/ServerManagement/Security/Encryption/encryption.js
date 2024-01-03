```javascript
// encryption.js

// This file is for demonstrating encryption in server security.

// We will be using the crypto library for encryption.
const crypto = require('crypto');

// Function to encrypt a text
function encryptText(plainText, algorithm, key, iv) {
    let cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(plainText, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    console.log("Text encrypted successfully.");
    return encrypted;
}

// Function to decrypt a text
function decryptText(encryptedText, algorithm, key, iv) {
    let decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    console.log("Text decrypted successfully.");
    return decrypted;
}

// Function to generate a random encryption key
function generateKey(byteLength) {
    return crypto.randomBytes(byteLength).toString('hex');
}

// Function to generate a random initialization vector
function generateIv(byteLength) {
    return crypto.randomBytes(byteLength).toString('hex');
}

module.exports = {
    encryptText,
    decryptText,
    generateKey,
    generateIv
};
```
