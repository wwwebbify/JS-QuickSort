function quickSort(array, max, min){

if(array.length <= 1){return array;}

function findMax(arr){
 var max = arr[0];
 for(var i = 1; i<arr.length; i++){
  if(arr[i] > max){
   max = arr[i];
  }
 }
 return max;
}

function findMin(arr){
 var min = arr[0];
 for(var i = 1; i<arr.length; i++){
  if(arr[i] < min){
   min = arr[i];
  }
 }
 return min;
}

var max = typeof max === 'undefined' ? findMax(array) : max ;
var min = typeof min === 'undefined' ? findMin(array) : min;
var pivot = Math.floor((max - min)/2 + min);
var lower = [];
var lowerMax = 0;
var lowerMin = min
var equal = [];
var higher = [];
var higherMax = max;
var higherMin = max;

array.forEach(function(item){
 if (item < pivot){
  if(item > lowerMax){
   lowerMax = item;
  }
  lower.push(item)
 } else if (item === pivot){
  equal.push(item)
 } else {
if(item < higherMin){
   higherMin = item;
  }
  higher.push(item)
 }
});

return quickSort(lower, lowerMax, lowerMin).concat(equal, quickSort(higher, higherMax, higherMin));
}
