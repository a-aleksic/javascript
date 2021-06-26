//Check if all the values in the ages array are 18 or over:

// First example:
// Numbers
let result = [8, 5, 28, 150].every(function (number) {
  return number < 188;
});

console.log(result); // true

//Second example:
//Age of users
const ages = [12, 17, 18, 22, 25, 35];

// Age limit to purchase tobacco
const purchaseItem = 21;

// Test users for who can purchase an item from store
let purchaseOk = ages.every(function (age) {
  return age >= purchaseItem;
});

console.log(purchaseOk);
