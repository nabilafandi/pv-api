const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.config');
const Token = require('../models/tokens');

async function createAccessToken(userid) {
    const data = { userid };
    const token = jwt.sign(
        { data: data },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: authConfig.jwtExpiration }
    );
    return token;
}

async function createRefreshToken(userid) {
    const data = { userid };
    const token = jwt.sign(
        { data: data },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: authConfig.jwtRefreshExpiration }
    );
    return token;
}

async function deleteTokenByUserId(id) {
    deletedToken = Token.findOneAndDelete({user: id});
    return deletedToken

}
// async function decodeToken(refreshToken) {
//     try {
//         const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET)
//         if (foundUser.username !== decoded.username)  return res.sendStatus(400)
//         const accessToken = await services.token.createAccessToken(decoded.username)
//         res.json({accessToken})
//       } catch (error) {
//         res.status(403).json({error})
//       }
// }



module.exports = { createAccessToken, createRefreshToken, deleteTokenByUserId};