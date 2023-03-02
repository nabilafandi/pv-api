const services = require('../../services/services');

const changePassword = async (req, res) => {
  const { username, currentPassword, newPassword } = req.body;

  try {
    // Validate the request body
    const { error } = services.validation.changePassword.validate({
      username,
      currentPassword,
      newPassword,
    });

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    // Find the user by username
    const user = await services.user.findUsername(username);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Verify that the current password is correct
    const isMatch = await services.hash.comparePwd(currentPassword, user.password);

    if (!isMatch) {
      return res.status(400).json({ error: 'Current password is incorrect' });
    }
    if (req.body.newPassword !== req.body.repeatPassword)
    return res.status(400).json({error: 'Passwords dont match'})

    // Hash the new password
    const hashedPassword = await services.hash.hashPwd(newPassword);

    // Update the user's password in the database
    await services.user.updatePassword(user._id, hashedPassword);

    return res.json({ message: 'Password changed successfully' });
  } catch (error) {
    return res.status(500).json({ error});
  }
};

module.exports = changePassword;
