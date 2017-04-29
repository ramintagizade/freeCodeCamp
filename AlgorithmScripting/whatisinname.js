function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  var temp = [];
  // Only change code below this line
  for(var i=0;i<collection.length;i++){
    var cnt = 0;
    var len = Object.keys(source).length;
    Object.keys(source).forEach(function(key){
      Object.keys(collection[i]).forEach(function (key2){
        if(source[key]===collection[i][key2] && key===key2){
          cnt++;
          //console.log(key+" -> "+source[key]+" "+key2+" => "+collection[i][key2]);
        }
      });
    });
    if(cnt==len){
      arr.push(collection[i]);
    }
  }
  // Only change code above this line
  return arr;
}

//whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
//whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }) ;
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 });
