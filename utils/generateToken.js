const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET || 'your_default_secret';

module.exports.GenerateToken = async (data) => {
    return jwt.sign(data, SECRET_KEY); // adjust expiration as needed
};
