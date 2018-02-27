/**数值 */

(function(){
    'use strict';
    //0o11 === 011; //SyntaxError: Octal literals are not allowed in strict mode.
})()

console.log(Number.isFinite('1.5'));//false
console.log(Number.isNaN('true'));//false  注意，如果参数类型不是数值，Number.isNaN一律返回false。

console.log(Number.isInteger(25));//true
console.log(Number.isInteger(25.0));//true JavaScript 内部，整数和浮点数采用的是同样的储存方法，所以 25 和 25.0 被视为同一个值。

console.log(Number.isInteger(25.001));//false
console.log(Number.isInteger(3.0000000000000002));
Number.isInteger(3.0000000000000002) // true

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1));

console.log(Math.trunc(undefined));

console.log(Math.sign(1.7));
console.log(Math.clz32(Infinity));
console.log(Math.imul(0x7fffffff, 0x7fffffff));//1

console.log(Math.hypot(3, 4));
console.log(2 ** 3);

let x11 = 2;
console.log(x11 **= 3);

console.log(Math.pow(99,99) === 99 ** 99);//false