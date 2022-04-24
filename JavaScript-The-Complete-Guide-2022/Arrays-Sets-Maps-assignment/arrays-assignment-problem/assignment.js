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

// let findMax = (task1Arguments) => Math.max(...task1Arguments);
// console.log(findMax(arrOfNums));

// 3

let findMax = (task1Arguments) => {
    let arrMaxMin = [];
    let max = Math.max(...task1Arguments);
    let min = Math.min(...task1Arguments);
    arrMaxMin.push(max);
    arrMaxMin.push(min);
    return arrMaxMin;
};
console.log(findMax(arrOfNums));

const [MAX,MIN] = findMax(arrOfNums);
console.log(MAX);
console.log(MIN);

// 4

const nonDuplicateList = Set();
nonDuplicateList.add('1');
nonDuplicateList.add('2');
nonDuplicateList.add('bri');
nonDuplicateList.add('bri');

console.log(nonDuplicateList);
