const bscrypt = require("bcrypt");

let pwd = bscrypt.hashSync("test123", 9);
console.log(pwd);
