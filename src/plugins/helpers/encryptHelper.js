const md5 = require('md5');
const bcrypt = require('bcrypt');

const encryptMD5CipherWithBcrypt = (plain) => {
  const salt = parseInt(process.env.SALT);
  return bcrypt.hashSync(md5(plain), salt);
};

const decryptCipher = (plain, cipher) => {
  return bcrypt.compareSync(md5(plain), cipher);
};

module.exports = { encryptMD5CipherWithBcrypt, decryptCipher };
