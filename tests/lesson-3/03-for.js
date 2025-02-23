// Tính tổng 1 đến 100
let i = 1;
let sum = 1;
for (i = 1; i <= 100; i++) {
    sum += i;
};
console.log(`Tổng là ${sum}`);

//In bảng cửu chương từ 2 đến 9
let m = 2;
let n = 1;
let q = 2;
for (m = 2; m <= 9; m++) {
    for (n = 1; n <= 10; n++) {
        q = m * n
        console.log(`${m} * ${n} = ${q}`);
    }
}

// Tạo ra mảng chứa các số lẻ từ 1-99 
const array = [];
for (let i = 1; i <= 99; i += 2) {
    array.push(i);
}
console.log(array);

// In ra 10 email 
const user = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
for (let i = 0; i < user.length; i++) {
    console.log(`${user[i]}${i}@gmail.com`)
};

// Tính tổng doanh thu theo tháng - Không làm được
let doanhthu = [
    { month: 1, total: 1 },
    { month: 2, total: 2 },
    { month: 3, total: 3 },
    { month: 4, total: 4 },
    { month: 5, total: 5 },
    { month: 6, total: 6 },
    { month: 7, total: 7 },
    { month: 8, total: 8 },
    { month: 9, total: 9 },
    { month: 10, total: 10 },
    { month: 11, total: 11 },
    { month: 12, total: 12 },
];
let tongdoanhthu = 0;
for (let i = 1; i < doanhthu.length; i++) {
    tongdoanhthu += doanhthu[i].total
    console.log(`Tổng doanh thu là ${tongdoanhthu}`)
}
