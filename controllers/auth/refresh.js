const services = require('../../services/services')
const jwt = require('jsonwebtoken')

const refresh = async (req, res) => {
    try {
        const cookies = req.cookies;
        if (!cookies?.jwt) return res.status(401).json({error: "Invalid cookie"})
        const refreshToken = cookies.jwt;
        const foundUser = await services.user.findbyToken(refreshToken)
        if (!foundUser) return res.status(403).json({error: "Wrong refresh token"});
        try {
          const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET)
            if (foundUser._id === decoded.data.userid)  return res.status(400).json({founduser: foundUser._id, decoduser: decoded.userid})
            const accessToken = await services.token.createAccessToken(decoded.data.userid)
            res.json({accessToken})
          } catch (error) {
            res.status(403).json({error})
          }
    } catch (error) {
        res.status(500).json({error})
    }
}

module.exports = refresh