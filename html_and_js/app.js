let userName = 'Josu';
let age = 32;
let hobbies = ['Sports', 'Cooking', 'Reading'];
let job = {
    title: 'Developer',
    place: 'Usurbil',
    salary: 1000000 
};

let totalAdultYears;

function calculateAdultYears(userAge) {
    let result;
    result = userAge -18;
    return result
}

totalAdultYears = calculateAdultYears(age);
console.log(totalAdultYears);
age = 45;
totalAdultYears = calculateAdultYears(age)

console.log(totalAdultYears);

let person = {
    name: 'Max', //property
    greet() { //method
        console.log('Hello!');
    }
};

person.greet();




