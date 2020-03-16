`use strict`
var numArray = [2,8,4,5];
var num = 3;
function greateThan (numArray, num){
var count = 0;
for (var i =0; i < numArray.length; i++){
    if (numArray[i] > num){
count++;
    }
}
return count;
}
console.log(greateThan (numArray,num));