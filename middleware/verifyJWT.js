const jwt = require('jsonwebtoken');


const verifyJWT = (req, res, next) => {
    const key = req.headers['authorization']
    if (!key) return res.status(401).json({message: "token required!"})
    const token = key
    try {
        const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        req.user = verified
        next()
    } catch (error) {
        res.status(403).json({error})
    }
}

module.exports = { verifyJWT }