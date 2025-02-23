//BMI
function tinhBMI(height, weight) {
    const BMI = weight / (height * height);
    if (BMI < 18.5) {
        console.log('Thiếu cân');
    }
    if (BMI >= 18 && BMI < 25) {
        console.log('Bình thường');
    }
    if (BMI >= 25 && BMI < 30) {
        console.log('Thừa Cân');
    }
    if (BMI >= 30) {
        console.log('Béo phì');
    }
}
tinhBMI(1.75, 50);
tinhBMI(1.50, 60);
tinhBMI(1.70, 60);

// Chuyển đổi nhiệt độ
function convertUnit (unit, value){
    if (unit == 'C'){
       return value * 9 /5 +32;
    }
    if (unit == 'F'){
        return (value - 32) * 5/9;
    }
    if (unit === 'C' || unit === 'F')
        return ('nhập sai giá trị');
}
convertUnit('C',2);
console.log(convertUnit('C',2));
console.log(convertUnit('D',2));

// Tính tổng các phần tử của mảng

// Lọc ra các số nguyên tố của một mảng

// Cập nhật email

// Điểm TB của sinh viên

// Kiểm tra giá trị sản phẩm

// Giờ mở cửa
function openingStatus(hour) {
    if (hour >= 9 && hour <= 21) {
        console.log("Cửa hàng đang hoạt động");
    }
    if (hour > 0 && hour < 9) {
        console.log("Cửa hàng đã đóng cửa");
    }
    if (hour > 21 && hour <= 24) {
        console.log("Cửa hàng đã đóng cửa");
    }
}
openingStatus(24);
openingStatus(9);

// Vé vào
function price(age) {
    if (age <= 5) {
        console.log('free');
    }
    if (age >= 18) {
        console.log('Giá vé 100K');
    }
    if (age < 18 && age > 5) {
        console.log('Giá vé 50K');
    }
}
price(40);


// tên tháng - không làm được

// Điểm số
function phanLoaiHocSinh(diem) {
    if (diem >= 8) {
        console.log('giỏi');
    }
    if (diem >= 6.5 && diem < 8) {
        console.log('khá');
    }
    if (diem >= 5 && diem < 6.5) {
        console.log('trung bình');
    }
    if (diem < 5) {
        console.log('yếu');
    }
}

phanLoaiHocSinh(7.5);

// Nhiệt độ và trạng thái thời tiết
function thoiTiet(temp) {
    if (temp >= 30) {
        console.log('nóng');
    }
    if (temp < 30 && temp >= 20) {
        console.log('mát');
    }
    if (temp < 20) {
        console.log('lạnh');
    }

}
thoiTiet(22, 5);
thoiTiet(-5);