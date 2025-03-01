//1
const student = {
    name: "alex",
    age: 10
};
for (let property in student) {
    console.log(`${property} = ${student[property]}`);
};


//2
let total = 0;
const student1 = {
    name: 'alex',
    age: 10,
    salary: 20
};
for (let property1 in student1) {
    if (student1[property1] >= 0) {
        total += student1[property1];
    }
}
console.log(`Tổng: ${total}`)

//3
const arr = [];
const student2 = {
    name: 'alex',
    age: 10,
}
for (let property2 in student2) {
    arr.push(property2);
}
console.log(arr);
