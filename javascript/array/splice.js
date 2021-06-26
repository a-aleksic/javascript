//splice() method can be used to add new elements
const lang = ["Javascript", "PHP", "CSS"];

//new lang begin from index 3 and no deleting
lang.splice(3, 0, "MySql", "Python", "Django");

//output resault
console.log(lang);

//slice() commonly used to remove one element from array
//Adding num 1
const num = [2, 4, 6, 8, 12, 14];
num.splice(0, 0, 1);

console.log(num);

//Mistake in even numbers
const evenNum = [4, 6, 7];
//replace number 7 with 8
evenNum.splice(2, 1, 8);
//remove num 6
evenNum.splice(1, 1);

console.log(evenNum); //4,8
