const prompt=require("prompt-sync")({sigint:true});
    let pinCodeRegex = /^[0-9]{6}$/;
    let pinCode = parseInt(prompt("Enter The pincode"));

    if(pinCodeRegex.test(pinCode))
     {
        console.log(true)
     }else
     {
        console.log(false) 
      }