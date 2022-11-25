const prompt=require("prompt-sync")({sigint:true});
let pinCodeRegex = /^[0-9]{3}[ ]?[0-9]{3}$/;
let pinCode = (prompt("Enter The pincode   "));


if(pinCodeRegex.test(pinCode))
 {
    console.log("true");
 }else
 {
    console.log("false");
  }