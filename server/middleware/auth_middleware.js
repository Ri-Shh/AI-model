const jwt = require('jsonwebtoken');

// checks if user is logged in or not
const requireLoggedIn = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    if(token) {
        jwt.verify(token, process.env.JWTSECRET || "secret-key-here", (err, decodedToken) => {
            if(err) {
                console.log(`Token could not be verified. Err: ${err.message}`);
                // res.setHeader('Access-Control-Allow-Origin', 'https://ai-model-client.vercel.app/login');
                // res.redirect('https://ai-model-client.vercel.app/login');
            } else {
                console.log(`Token verified successfully. ${decodedToken}`);
                next();
            }
        })
    } else {
        // res.setHeader('Access-Control-Allow-Origin', 'https://ai-model-client.vercel.app/login');
        // res.redirect('https://ai-model-client.vercel.app/login');
        res.send({
            error: "Could not verify token"
        });
    }
}


// checks 

module.exports = { requireLoggedIn };

