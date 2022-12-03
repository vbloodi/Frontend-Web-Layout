/*
Calculate(Вычисляем) the amount of apartments on the flat.
Given the amount of entrances/porches(подъездов), floors and apartments on one floor.
Needed to display the amount of apartments on one entrance and in all flat.
*/

// amount of entrances
let entrances = 4;
// amount of floors
let floors = 9;
// amount of apartments on floor
let flatsPerFloor = 4;

let flatsPerEntrance = floors * flatsPerFloor;
console.log("Apartments on entrance", flatsPerEntrance); // 36

let apartmentsAmount = entrances * flatsPerEntrance;
console.log("Apartments on the flat", apartmentsAmount); // 144

/*
Proportions/Ratio(Пропорции/Соотношение) for recipe of Bloody Mary.
Given the proportions of ingredients for Bloody Mary and volume(объём) of beverage that
we need to get. Calculate required(необходимый) volume of ingredients from this data.
*/

// igredient list
let vodka = 50;
let tomatoJuice = 120;
let lemonJuice = 10;
let tabasco = 1;
let worcester = 1; // Worcestershire sauce(Ворчестер соус)  --  shire/earldom/county(графство)

// needed volume
let volume = 500;

// coefficient(коэффициент) for getting volume of ingredient
let k = (vodka + tomatoJuice + lemonJuice + tabasco + worcester) / volume;

// how much vodka needed for given volume
console.log(vodka * k);

/*
Calculation of the discriminant(дискриминанта) for solving a quadratic equation(квадратного уравнения).
a*x*x + b*x + c = 0
Given values a, b, and c for quadratic equation.
Needed to display possible values of x for this equation.
*/

let a = 3;
let b = 5;
let c = 10;

let d = b * b - 4 * a * c;

// discriminant root
let dRoot = Math.sqrt(d);
console.log("x1 = ", (-b + dRoot) / (2 * a));
console.log("x2 = ", (-b - dRoot) / (2 * a));

/*
Calculate n Fibonacci sequence numbers (n чисел ряда Фибоначчи).
Every next number is sum of two previous.
*/

let n = 10;

let current = 0;
let prev = 1; // previous number
let prevPrev = 0; // previous previous number

while (n-- > 0) {
  prevPrev = prev; // 1 > 0 > 1 > 1 > 2
  prev = current; // 0 > 1 > 1 > 2 > 3
  current += prevPrev; // 0 + 1 > 1 + 0 > 1 + 1 > 2 + 1 > 3 + 2
  console.log(current); // 1 > 1 > 2 > 3 > 5
}

//STOPED ON 2.5!!!
