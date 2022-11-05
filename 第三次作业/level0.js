//方法1
let Aa = new Object()
Aa.one = 1;
Aa.two = 2;
Aa.three = "three"
console.log(Aa);
//方法2
let Bb = {
    one:1,
    two:2,
    three:"three"
}
console.log(Bb);
//方法3
function Num(x,y,z){
    this.one = x,
    this.two = y,
    this.three = z
    this.four = function sayone(){
        console.log(this.one);
    }
}
let Cc = new Num(1,2,3);
let Dd  = new Num(3,4,5);
console.log(Cc);
console.log(Dd);
//方法4
function OBJ(x,y,z){
    let O = new Object()
    O.one = x;
    O.two = y;
    O.three = z;
    return O;
}
let p = OBJ(8,9,10)
console.log(p);