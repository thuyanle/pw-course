//car
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
};
console.log(car.year);

//person
let person = {
    personName: "name",
    personAddress: {
        street: "street",
        city: "city",
        country: "country"
    }
};
console.log(person.personAddress.street);

//student
let student = {
    studentName: "name",
    studentGrades: {
        math: 5,
        english: 6
    }
};
console.log(student["studentGrades"]["math"]);

//product 
const product = {
    laptop: 20,
    TV: 50,
    monitor: 10
};
for (let property in product){
    console.log(property);
    console.log(product[property]);
}

//settings
let settings = {
    volume: 10,
    brightness: 5
}
settings.volume = 12;
console.log(settings.volume);

//bike
let bike = {
    brand: "Vinfast"
};
bike.color = "red";
console.log(bike);

//employee
let employee = {
    employeeName: "name",
    employeeAge: 40
}
delete employee.employeeAge;
console.log(employee);

//scholl
const school = {
    classA : ["An","Bình","Châu"],
    classB: ["Đào,","Hương","Giang"]
};
console.log(school);
