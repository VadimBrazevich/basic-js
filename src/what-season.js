const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  if (arguments.length == 0) return 'Unable to determine the time of year!';
  if (date - new Date(date.getTime())!= 0 ) throw new Error("Error");
  let month = date.getMonth();
  // return month;
  switch (month){
    case 0:
    case 1:
    case 11:
      return "winter";
      break;
    case 2:
    case 3:
    case 4:
      return "spring";
      break;
    case 5:
    case 6:
    case 7:
      return "summer";
      break;
    case 8:
    case 9:
    case 10:
      return "autumn";
    }

};
