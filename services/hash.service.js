const bcrypt = require('bcrypt')

async function hashPwd(pwd) {
    const salt = await bcrypt.genSalt(10)
    const hashedPwd = await bcrypt.hash(pwd, salt)
    return hashedPwd
}

async function comparePwd(pwd, hash) {
    const pwdMatch = await bcrypt.compare(pwd, hash)
    return pwdMatch
}

module.exports = {
    hashPwd,
    comparePwd
}