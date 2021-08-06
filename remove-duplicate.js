
function removeDuplicate(a){
    var newArr = [];
    for (var i = 0; i < a.length; i++) {
        if (newArr.indexOf(a[i]) == -1) {
            newArr.push(a[i]);
        }
    }
  return newArr;
}
a = [1,1,2,2,2,5,6];
console.log((removeDuplicate(a)))


dup = true;
function deleteduplicates(arr) {

    var newarr = [];

    for (var i = 0; i < arr.length; i++) {

    var dup = false;
     for (var x = 0; x < newarr.length; x++) {
        if (arr[i] == newarr[x]) {
            dup = true;
        }
     }
    if (!dup) {
        newarr.push(arr[i])
    }

    }

    return newarr
}

arr = [3, 4, 7, 1, 3, 1, 1, 1, 4]

console.log((deleteduplicates(arr)))