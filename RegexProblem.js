const prompt=require("prompt-sync")({sigint:true});
    let pinCodeRegex = /^[0-9A-Za-z]{6,}[^a-zA-Z]$/;
    let pinCode = parseInt(prompt("Enter The pincode"));

    if(pinCodeRegex.test(pinCode))
     {
        console.log(true)
     }else
     {
        console.log(false) 
      }