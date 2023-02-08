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
      return res.status(400).json({ message: error.details[0].message });
    }

    // Find the user by username
    const user = await services.user.findUsername(username);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Verify that the current password is correct
    const isMatch = await services.hash.comparePwd(currentPassword, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Current password is incorrect' });
    }

    // Hash the new password
    const hashedPassword = await services.hash.hashPwd(newPassword);

    // Update the user's password in the database
    await services.user.updatePassword(user._id, hashedPassword);

    return res.json({ message: 'Password changed successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Error changing password', error });
  }
};

module.exports = changePassword;
