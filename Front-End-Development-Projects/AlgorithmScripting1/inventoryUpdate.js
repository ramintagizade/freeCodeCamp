
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!

    var map = [];
    for(var i =0;i<arr1.length;i++){
      map[arr1[i][1]] = arr1[i][0];
    }
    for(i = 0;i<arr2.length;i++){
      if(map[arr2[i][1]]>-1000)
        map[arr2[i][1]]+= arr2[i][0];
      else
        map[arr2[i][1]] = arr2[i][0];
    }
    var temp = [];
    for(var j =0;j<arr1.length;j++){
      if(map[arr1[j][1]]>-1000){
        temp.push([map[arr1[j][1]],arr1[j][1]]);
        map[arr1[j][1]] = -1000;
      }
    }
    for(j=0;j<arr2.length;j++){
      if(map[arr2[j][1]]>-1000){
        temp.push([map[arr2[j][1]],arr2[j][1]]);
        map[arr2[j][1]] = -1000;
      }
    }
    temp.sort(function(a,b){
      return a[1] > b[1];
    });
    console.log(temp);
    return temp;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
