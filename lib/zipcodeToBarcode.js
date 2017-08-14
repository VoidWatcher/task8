let list = require("./list.js");

function zipcodeToBarcode (zipcode) {
  //step 1
  zipcode = zipcode.split(``);

  //step 2
  if (zipcode.indexOf(`-`) != -1) {
    zipcode.splice(zipcode.indexOf(`-`), 1);
  }

  //step 3
  let sum = zipcode.reduce((a, b) => {
    return a + parseInt(b);
  }, 0);
  let checkCode = 0;
  if (sum % 10 != 0) {
    checkCode = 10 - (sum % 10);
  }
  zipcode.push(checkCode.toString());

  //step 4
  let barcode = [];
  let numberToBarcodeObject = list();
  for (let value of zipcode) {
    for (let prop in numberToBarcodeObject) {
      if (value == prop) {
        barcode.push(numberToBarcodeObject[prop]);
      }
    }
  }

  //step 5
  barcode.push('|');
  barcode.unshift('|');

  //step 6
  barcode = barcode.join(``);
  
  return barcode;
}

module.exports = zipcodeToBarcode;
