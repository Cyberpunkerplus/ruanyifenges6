/**变量的解构 */

let [a, b, c] = [1, 2, 3];
console.log(a);

let [, , third] = ['one', 'two', 'three'];
console.log(third);

let [head, ...tail] = [1, 2, 3, 4]
console.log(tail);

let [x, y, ...z] = ['a'];
console.log(x);
console.log(y);
console.log(z); // []

//let [foo] = 1; //TypeError: 1 is not iterable

let [x1, y1, z1] = new Set([1, 2, 3]);
console.log(x1);

function* fibs() {
    let a = 0;
    let b = 1;
    while(true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

let [one, two, tree, four, ,six] = fibs();
console.log(one);
console.log(tree);
console.log(four);
console.log(six);

let [x2, y2 = 'aa'] = [1];
console.log(y2);

let [x3 = 1] = [undefined];
console.log(x3);//1
let [x4 = 1] = [null];
console.log(x4);//null

function f1(){
    console.log('i am called');
}
let [x5 = f1()] = [1]; // f1不执行
let [x6 = f1()] = [undefined]; // f1执行


let [x7 = 1, y7 = x7] = [2];
console.log(y7);

let {baz} = {far: 1};
console.log(baz);

let {foo: baz2} = {foo: 'aa', bar: 'bb'};
console.log(baz2);


let obj1 = {
    p: [
        'Hello',
        {
            y: 1
        }
    ]
};

let {p:[x8, {y8}]} = obj1;
//console.log(p); //ReferenceError: p is not defined  , p是模式？
console.log(x8);

const node = {
    loc: {
      start: {
        line: 1,
        column: 5
      }
    }
  };
  
let { loc, loc: { start }, loc: { start: { line }} } = node; //冒号左边是模式
console.log(loc);


let x9;
//{x9} = {x9:1} // syntax error


let {0:x10, 2:y10} = [1, 2, 3];
console.log(x10, y10);

let [a1, b1, c1, d1, e1] = 'hello';
console.log(a1, b1 , c1, d1, e1);
let {length: len} = 'hello';
console.log(len);

let {toString: s} = 123;
console.log(s === Number.prototype.toString);

[1, undefined, 3].map((x = 'yes') => {
    console.log(x);
});

let jsonData = {
    id: 42,
    status: "OK",
    data: [867, 5309]
  };
  
let { id, status, data} = jsonData;
console.log(data);

const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');
for(let [key, value1] of map) {
    console.log(key, value1);
}