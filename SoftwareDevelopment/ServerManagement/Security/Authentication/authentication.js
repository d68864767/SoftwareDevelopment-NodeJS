```javascript
// authentication.js

// This file is for demonstrating authentication in server security.

// We will be using the bcrypt library for password hashing.
const bcrypt = require('bcrypt');

// Function to hash a password
async function hashPassword(password) {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        console.log("Password hashed successfully.");
        return hashedPassword;
    } catch (error) {
        console.error("Error hashing password: ", error);
    }
}

// Function to compare a password and a hash
async function comparePassword(password, hash) {
    try {
        const match = await bcrypt.compare(password, hash);
        if (match) {
            console.log("Password matches the hash.");
        } else {
            console.log("Password does not match the hash.");
        }
        return match;
    } catch (error) {
        console.error("Error comparing password and hash: ", error);
    }
}

module.exports = {
    hashPassword,
    comparePassword
};
```
