"use strict";
let _ = require("lodash");
let chai = require("chai");
let sinon = require("sinon");
let sinonChai = require("sinon-chai");
let expect = chai.expect;

let barcodeToZipcode = require("../lib/barcodeToZipcode.js");


describe("测试描述", function(){

  it("1、求`|:::||::|:|::||::|::|:|:|::|:|:|`对应的邮编：`12345`", function(){

    let result = barcodeToZipcode(`|:::||::|:|::||::|::|:|:|::|:|:|`);
    let expect_string = `12345`;
        
    expect(result).to.equal(expect_string);

  });


  it("2、求`|:::||::|:|::||::|::|:|:|::||::|:::||::|:|:|:::|:|:|`对应的邮编：`12345-6789`", function(){

    let result = barcodeToZipcode(`|:::||::|:|::||::|::|:|:|::||::|:::||::|:|:|:::|:|:|`);
    let expect_string = `12345-6789`;
        
    expect(result).to.equal(expect_string);

  });


  it("3、求`||:|::|::|:|:::|:||:::|:|::|::|::||:::|:|:::||||::::|:|:|`对应的邮编：`9876543210`", function(){

    let result = barcodeToZipcode(`||:|::|::|:|:::|:||:::|:|::|::|::||:::|:|:::||||::::|:|:|`);
    let expect_string = `9876543210`;
        
    expect(result).to.equal(expect_string);

  });

});