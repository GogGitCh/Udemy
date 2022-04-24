// 1
let arrOfNums = [0, 0, 1, 2, 3, 5, 8, 13, 21, 34];

let filtered = arrOfNums.filter((num) => num > 5);
console.log(filtered);

let storedNumObj = {};
let maped = filtered.map((num, idx) => {
  storedNumObj[`Number ${idx}`] = num;
});
console.log(storedNumObj);

let multipyArrOfNums = filtered.reduce((prev, curr) => prev * curr, 1);
console.log(multipyArrOfNums);

// 2 
