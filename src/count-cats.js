const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let cats = 0;
  const ears = "^^"
  matrix.forEach(row => {
    row.forEach(x=> {
      if (x == ears) cats+=1;
    });
  });
  return cats;
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
