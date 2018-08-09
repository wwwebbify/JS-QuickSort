function quickSort(array){

if(array.length <= 1){return array;}

var pivot = array[0];
var lower = [];
var equal = [];
var higher = [];

array.forEach(function(item){
 if (item < pivot){
  lower.push(item)
 } else if (item === pivot){
  equal.push(item)
 } else {
  higher.push(item)
 }
});

return quickSort(lower).concat(equal, quickSort(higher));
}
