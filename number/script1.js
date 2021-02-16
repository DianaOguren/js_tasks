let number = +prompt('Введите 5чное число:');
const ten = 10; 
let n1 = number % ten;
let a = parseInt(number / 10);
let n2 = a % ten;
let b = parseInt(a / 10);
let n3 = b % ten;
let c = parseInt(b / 10);
let n4 = c % ten;
let n5 = parseInt(c / 10);

let proiz = n1 * n2 * n3 * n4 * n5 
let middle = ((n1 + n2 + n3 + n4 + n5 ) / 5 );
console.log(n1);
console.log(a);
console.log(n2);
console.log(b);
console.log(n3);
console.log(c);
console.log(n4);
console.log(n5);

alert(`Произведение цифр: ${proiz}\nСреднее арифметическое: ${middle}`);

