const bcrypt = require("bcrypt");

async function hashPassword(plaintextPassword) {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(plaintextPassword, saltRounds);
    return hashedPassword;
  } catch (error) {
    throw error;
  }
}

module.exports = hashPassword;
