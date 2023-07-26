const bcrypt = require("bcrypt");

async function comparePasswords(plaintextPassword, hashedPassword) {
  try {
    const match = await bcrypt.compare(plaintextPassword, hashedPassword);
    return match;
  } catch (error) {
    throw error;
  }
}

module.exports = comparePasswords;
