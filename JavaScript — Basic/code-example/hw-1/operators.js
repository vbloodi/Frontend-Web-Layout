let x = 10 + 5; // 15 summation/addition
let y = 10 - 5; // 5 subtraction
let z = 10 * 5; // 50 multiplication
let q = 10 / 5; // 2 division
let w = 10 % 3; // 1 modulo/remainder (of the division)

let complex = 10 + 5 * 10 - 8 / 2; // = 56 !PRIORITY! * then / then + then - (module same prio as * or /)
let complex2 = ((10 + 5) * (10 - 8)) / 2; // = 15 (parentheses/round brackets)

let a = 10;
a++; // 11 - increment(приращение) postfix
a--; // 10 - decrement(уменьшение) postfix
++a; // 11 - prefix
--a; // 10 - prefix

// difference in postfix & prefix entry(запись)
// postfix
console.log(a++); // 10
console.log(a); // 11
console.log(a--); // 11
console.log(a); // 10
// prefix
console.log(++a); // 11
console.log(a); // 11
console.log(--a); // 10
console.log(a); // 10

// Assignment Operator(Оператор Присваивания)
x += 5; // same as x = x + 5
x -= 5; // x = x - 5
x *= 3; // x = x * 3
x /= 4; // x = x / 4;
x %= 5; // x = x % 5;
