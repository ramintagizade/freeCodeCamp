
function telephoneCheck(str) {
  // Good luck!
  var regex = /(\d)/g;
  var phoneRegex = [];
  phoneRegex[0] =  /^(\([0-9]{3})\)-\([0-9]{3}\)-[0-9]{4}$/;  //(555)-(555)-5555
  phoneRegex[1] = /^(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;  // (555)555-5555
  phoneRegex[2] = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;  //555-555-5555
  phoneRegex[3] = /^1 ?[0-9]{3}-[0-9]{3}-[0-9]{4}$/; //1 555-555-5555
  phoneRegex[4] = /^1 ?\([0-9]{3}\) [0-9]{3}-[0-9]{4}$/; //1 (555) 555-5555
  phoneRegex[5] = /^[0-9]{10}$;/ //5555555555
  phoneRegex[6] = /^1?\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/;
  phoneRegex[7] = /^1 ?[0-9]{3} [0-9]{3} [0-9]{4}$/;
  //console.log("regex " + str.match(phoneRegex[5]));
  arr = str.match(regex);
  for(var i =0;i<arr.length;i++){
    if(arr.length==11 && arr[0]!=1){
      return false;
    }
    else if(arr.length>11 || arr.length<10){
      return false;
    }
  }
  var ok = false;
  for(var i=0;i<8;i++){
    if(str.match(phoneRegex[i])) ok = true;
  }
  return ok;
}
telephoneCheck("1 555 555 5555");
telephoneCheck("1(555)555-5555");
telephoneCheck("5555555555");
telephoneCheck("1 (555) 555-5555");
telephoneCheck("1 555-555-5555");
telephoneCheck("555-555-5555");
telephoneCheck("(555)-(555)-5555");
telephoneCheck("(555)555-5555");
