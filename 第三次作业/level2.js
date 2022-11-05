let arr = [1, [2, 3] ,[4, 5, [6, 7, 8]], 9];
var arry = []
function flatten(A) {
    var Ay = [];
    for (var i = 0; i < A.length; i++) {
        if (Array.isArray(A[i])) {
            Ay = Ay.concat(flatten(A[i]))
        }
        else {
            Ay.push(A[i]);
        }
    }
    return Ay;
}
console.log(flatten(arr))
