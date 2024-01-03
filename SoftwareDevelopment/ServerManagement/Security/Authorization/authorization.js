```javascript
// authorization.js

// This file is for demonstrating authorization in server security.

// We will be using jsonwebtoken for handling JWTs
const jwt = require('jsonwebtoken');

// Function to generate a token
function generateToken(user) {
    // Payload
    const payload = {
        name: user.name,
        role: user.role
    };

    // Sign the token
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    console.log("Token generated successfully.");
    return token;
}

// Function to verify a token
function verifyToken(token) {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Token verified successfully.");
        return decoded;
    } catch (err) {
        console.log("Token verification failed.");
        return null;
    }
}

// Function to authorize a user based on role
function authorize(role) {
    return function(req, res, next) {
        const user = req.user;
        if (user && user.role === role) {
            next();
        } else {
            res.status(403).send('Unauthorized');
        }
    }
}

module.exports = { generateToken, verifyToken, authorize };
```
