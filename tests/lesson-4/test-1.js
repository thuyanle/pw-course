//1
let departurePlanet = "Trái Đất";
const mission = "Khám phá vũ trụ K12";
const crew = ["Trang", "Chau", "Jade", "Khanh", "Uyen", "Anh", "Ngoc", "Vy", "Hien", "Tuan", "Tung", "Thien", "Van", "Minh", "Hanh", "Thong", "An"];
function launchShip(crew) {
    return crew;
}
launchShip(crew);
console.log(`"Chuẩn bị khởi động! Phi hành đoàn gồm:${crew} sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}!".`);

//2
let speed = 1000;
let time = 24;
function calculateDistance(speed, time) {
    let distance = speed * time;
    return distance;
}

console.log(`Khoảng cách đến hành tinh bí ẩn là ${calculateDistance(speed, time)} Km`);

//3
let decimalNumber = 120;
function convertTimeToHex(time) {
    let hexadecimalNumber = decimalNumber.toString(16);
    return hexadecimalNumber;

}
console.log(`Thời gian 120s ở hành tinh bí ẩn là ${convertTimeToHex(time)}s`);

//4
let code = "K12 Challenge";
function decryptCode(code) {
    let result = "";
    for (let i = 0; i < code.length; i++) {
        let eachCharacter = code[i];
        if (eachCharacter === eachCharacter.toUpperCase()) {
            result += eachCharacter.toLowerCase();
        } else {
            result += eachCharacter.toUpperCase();
        }
    }
    return result;
}
console.log(`Mật mã đã được giải mã thành: ${decryptCode(code)}`);

//5
function returnToEarth() {
    console.log("Chuẩn bị trở về Trái Đất!")
}
returnToEarth();