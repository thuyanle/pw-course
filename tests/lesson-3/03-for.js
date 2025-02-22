// Tính tổng 1 đến 100
let i = 1;
let sum = 1;
for (i = 1; i<= 100; i++) {
sum += i;
};
console.log(`Tổng là ${sum}`);

//In bảng cửu chương từ 2 đến 9
let m = 2;
let n = 1;
let q = 2;
for (m=2 ; m<=9; m++) {
    for (n=1; n<=10; n++){
        console.log (`Giá trị q= ${m} * ${n}`);
    }
}

// Tạo ra mảng chứa các số lẻ từ 1-99 
const array = [];
for (let i=1; i<=99; i+=2){
array.push(i);
}
console.log(array);

// In ra 10 email 
let user = "username";
for (let i=1; i<=10; i++){
    console.log (`${username}${i}@gmail.com`)
};

// Tính tổng doanh thu theo tháng - Không làm được
let doanhthu = [
    {month:1, total: 100},
    {month:2, total: 100},
    {month:3, total: 100},
    {month:4, total: 100},
    {month:5, total: 100},
    {month:6, total: 100},
    {month:7, total: 100},
    {month:8, total: 100},
    {month:9, total: 100},
    {month:10, total: 100},
    {month:11, total: 100},
    {month:12, total: 100},
];
let tongdoanhthu = 1;
for (let i=1; i<doanhthu.length; i++){
 console.log (`Tổng doanh thu là ${tongdoanhthu}`)
}
