let list = require("./list.js");

function barcodeToZipcode (barcode){
  //step 1
  barcode = barcode.slice(1, -1);
  
  //step 2
  let barcodeArray = [];
  for (let i = 0; i < barcode.length; i += 5) {
    barcodeArray.push(barcode.slice(i, i + 5));
  }
  
  //step 3
  barcodeArray.pop();
  
  //step 4
  let numberToBarcodeObject = list();

  //step 5
  let zipcode = [];
  for (let valueA of barcodeArray) {
    for (let prop in numberToBarcodeObject) {
      if (valueA == numberToBarcodeObject[prop]) {
        zipcode.push(prop);
        break;
      }
    }
  }

  //step 6
  if (zipcode.length == 9) {
    zipcode.splice(5, 0, "-")
  }

  //step 7
  zipcode = zipcode.join("");

  return zipcode;
}

module.exports = barcodeToZipcode;
