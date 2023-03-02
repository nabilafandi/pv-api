const jwt = require('jsonwebtoken');


const verifyJWT = (req, res, next) => {
    let key = req.headers.authorization
    if (!key) return res.status(401).json({message: "token required!"})
    key = key.split(" ");
    const token = key[1]
    try {
        const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        req.user = verified
        next()
    } catch (error) {
        res.status(403).json({error})
    }
}

module.exports = { verifyJWT }