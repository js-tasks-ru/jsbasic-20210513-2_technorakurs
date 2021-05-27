let arr = [5, 3, 8, 1];
function filterRange(arr, a, b){
  return arr.filter((el)=>el>=a && el<=b)
}

let filtered = filterRange(arr, 1, 4);
alert( filtered );
