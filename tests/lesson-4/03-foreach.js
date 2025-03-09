//1
const arr = [1, 2, 3];
arr.forEach((number) => {
    console.log(number);
})

//2 - 
const array = [1, 2, 3];
let sum = 0;
let max = array[0];
let min = array[0];

for (let i = 0; i < array.length; i++) {
    sum += array[i];
    if (array[i] < min) {
        min = array[i];
    }
    if (array[i] > max) {
        max = array[i];
    }
}
console.log(`Tổng: ${sum}`);
console.log(`Min: ${min}`);
console.log(`Max: ${max}`);

//3
const arr1 = [1, 2, 3];
const arr2 = [];
for (i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i] * 2);
}
console.log(arr2);
