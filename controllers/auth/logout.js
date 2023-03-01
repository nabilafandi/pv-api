const services = require('../../services/services');

const logout = async (req, res) => {
  const cookies = req.cookies;

  try {
    if (!cookies?.jwt) return res.status(401).json({error: "Invalid cookie"})
    const refreshToken = cookies.jwt;
    const foundUser = await services.user.findbyToken(refreshToken)
    if (!foundUser) return res.status(403).json({error: "Wrong refresh token"});

    // Revoke the refresh token
    await services.user.updateToken(foundUser._id, null);

    res.clearCookie('jwt');

    return res.json({ message: `${foundUser.username} Logged out successfully` });
  } catch (error) {
    return res.status(500).json({ error: 'Internal error'});
  }
};

module.exports = logout;