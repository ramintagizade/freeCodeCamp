
function steamrollArray(arr) {
 // I'm a steamroller, baby
 var temp = [];
 goDeeper(arr,temp);
 console.log(temp);
 return temp;
}
function goDeeper(arr,temp){
 for(var i=0;i<arr.length;i++){
   if(Array.isArray(arr[i])){
     goDeeper(arr[i],temp);
   }
   else {
     temp.push(arr[i]);
   }
 }
}
steamrollArray([1, [2], [3, [[4]]]]);
