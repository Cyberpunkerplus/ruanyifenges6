
//let const

{
    let a = 1;
    var b = 2;
}
//a; a is not defined
b;


for (let i = 0; i < 10; i++) {

}
//i; not defined

/** */
var a = [];
for (let i = 0; i < 6; i++) {
    a[i] = function () {
        console.log(i);
    }
}
a[0]();// 0
/** */


/** */
for (let i = 0; i < 10 ; i++) {
    let i = 'hello'; // 独立作用域
    console.log(i);
}
/** */

/** */
console.log(aa);
var aa = 0; //undefined

//console.log(bb);
//let bb = 1; // reference error
/** */

/** */
var temp = 11;

{
    console.log(temp);
    //let temp; //ReferenceError: temp is not defined 封闭作用域
}
/** */

/** */
temp1 = 'ac';
console.log(temp1);
//let temp1; // ReferenceError: temp1 is not defined

{
    let temp1;
    console.log(temp1); //undefined
    temp1 = 123;
    console.log(temp1);//123
}
console.log(temp1);
/** */


/**typeof 高危操作 */
typeof x;
//let x; // ReferenceError: x is not defined
/** */

/** */
//var xy = xy;

//let xy = xy;//ReferenceError: xy is not defined
/** */


/** */
function func(arg){
    let arg; // func运行的时候报错
}

function func1(arg) {
    {
        let arg;//ok
    }
}

func1();

/** */

/** */
//const foo; //SyntaxError: Missing initializer in const declaration

{   console.log(max); //max is not defined
    const max = 1000;
}
console.log(max); //max is not defined
/** */




