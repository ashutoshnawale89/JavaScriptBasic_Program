function regecPattern(pattern){
let pinCodeRegex = /^[a-zA-Z]+[.+-]?[A-Za-z0-9]*[@#$&][A-Za-z0-9]+[.+-][A-Za-z0-9]{2,}[.]*[A-Za-z]*$/;
if(pinCodeRegex.test(pattern))
 {
    console.log("true");
 }else
 {
    console.log("false");
  }
}
regecPattern("abc@yahoo.com");
regecPattern("abc-100@yahoo.com");

regecPattern("abc.100@yahoo.com");
regecPattern("abc111@abc.com");
regecPattern("abc-100@abc.net");
regecPattern("abc.100@abc.com.au");
regecPattern("abc@1.com");
regecPattern("abc@gmail.com.com");
regecPattern("abc+100@gmail.com");