function mypush(x) {
    A[A.length] = x;
}
var A = new Array(0)
for (i = 1; ; i++) {
    let lastdata = prompt('请向数组末尾增加的数字');
    lastdata = Number(lastdata);
    mypush(lastdata);
    let copyA = Array.from(A);
    let check = prompt('是否继续？（键入yes/no）')
    if (check == 'yes');
    else {
        console.log(copyA);
        break;
    };
}
