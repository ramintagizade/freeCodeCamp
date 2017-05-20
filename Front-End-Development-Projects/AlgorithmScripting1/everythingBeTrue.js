
function truthCheck(collection, pre) {
  // Is everyone being true?
  var all = true;
  for(var i=0;i<collection.length;i++){
    console.log(typeof(collection[i][pre]));
    if(!collection[i].hasOwnProperty(pre))
      all = false;
    else if(!isTrue(collection[i][pre])) {
      all = false;
    }
  }
  return all;
}
function isTrue(value) {
  switch (typeof(value)) {
    case "string":
      return !(value === '0' || value === 'false' ) && value.length>0;
    case "number": (value!==0);
    case "boolean":
      return !!value ;
    case "object":
      return (value!==null) && Object.keys(value).length > 0;
  }
}
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat");
truthCheck([{"single": ""}, {"single": "double"}], "single");
