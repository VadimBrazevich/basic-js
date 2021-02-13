const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let result = members.filter(x=> typeof(x) == "string");
  if (result == null) return false;
  return result.map(x=> x.toString().trim()[0].toUpperCase()).sort().join("");
};
