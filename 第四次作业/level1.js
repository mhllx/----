//for循环
function SUM(n) {
    let sum = 0;
    for (var i = 1; i <= n; i++) {
        sum = sum + i;
    }
    console.log(sum)
}

SUM(100)


//递归
const fn = (a) => {
    if (a == 1) {
        return a;
    }
    else {
        return a + fn(a - 1);
    }
}
console.log(fn(100))