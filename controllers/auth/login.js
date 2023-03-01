const services = require('../../services/services')
const { excludePassword } = require('../../services/user.service')

//login
const login = async (req, res) => {
  data = req.body
  try {
    //validation
    const { error } = services.validation.login.validate(data)
    if (error) { return res.status(400).json({ message: error.details[0].message }) }
    //cek req body username kosong
    if (!req.body.username) {
      return res.status(400).json({ message: "username is empty"})
    }
    //cek username ada di database
    const foundUsername = await services.user.findUsername(data.username)
    if (!foundUsername) {
      return res.status(404).json({ message: "wrong username" })
    }
    //cek password
    const matchPassword = await services.hash.comparePwd(data.password, foundUsername.password)
    if (!matchPassword) return res.status(400).json({ message: "wrong password try again!" })
    //login sukses
    else {
      //jwt
      const userid = foundUsername._id
      userlogin = await excludePassword(foundUsername._id)
      const accessToken = await services.token.createAccessToken(userid)
      const refreshToken = await services.token.createRefreshToken(userid)
      await services.user.updateToken(foundUsername._id, refreshToken)
      res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', secure: false, maxAge: 24 * 60 * 60 * 1000 })
      return res.json({
        accessToken,
        id: userlogin._id,
        username: userlogin.username,
        alamat: userlogin.alamat,
        no_hp: userlogin.no_hp,
        saldo: userlogin.saldo
      })
    }

  } catch (error) {
    res.status(500).json({ message: "error", error: error })
  }
}


module.exports = login