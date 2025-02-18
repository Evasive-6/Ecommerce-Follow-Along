const jwt = require('jsonwebtoken');

const authentication = (req, res, next) => {
    const token = req.headers?.authorization?.split(" ")[1];
    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET); 
            req.user = decoded; 
            next();
        } catch (error) {
            res.status(401).json({ message: 'Invalid or expired token' });
        }
    } else {
        res.status(401).json({ message: 'Authorization token is required' });
    }
};

module.exports = authentication;
