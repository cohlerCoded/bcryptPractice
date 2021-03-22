const bcrypt = require("bcrypt");

// const hashPassword = async (pw) => {
//   const salt = await bcrypt.genSalt(12);
//   const hash = await bcrypt.hash(pw, salt);
//   console.log(hash);
//   console.log(salt);
// };

// const hashPassword = async (pw) => {
//   const hash = await bcrypt.hash(pw, 12);
//   console.log(hash);
// };

const login = async (pw, hashpw) => {
  const res = await bcrypt.compare(pw, hashpw);
  if (res) console.log("SUCCESS!");
  else console.log("WRONG PASSWORD");
};

//hashPassword("password");
login(
  "password",
  "$2b$12$l3vN73TsGtK8EFWeIxyQI.qSRNNUSGOep9JIy6hh0hvkDC.CykSs."
);
