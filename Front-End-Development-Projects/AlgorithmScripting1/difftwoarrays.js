
function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  var len1 = arr1.length;
  var len2 = arr2.length;
  var ok = false;
  for(var i =0;i<len1;i++){
    ok = false;
    for(var j=0;j<len2;j++){
         if(arr1[i]==arr2[j]){
           ok = true;
         }
    }
    if(!ok){
      newArr.push(arr1[i]);
    }
  }
  for(i =0;i<len2;i++){
    ok = false;
    for(j=0;j<len1;j++){
         if(arr2[i]==arr1[j]){
           ok = true;
         }
    }
    if(!ok){
      newArr.push(arr2[i]);
    }
  }
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
