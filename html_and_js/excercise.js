
let courseName = 'rubiks cube';
let price = 49;
let result = ['becoming sub 10','nigga','bitch'];

let onlineCourse = {
    name: 'rubiks cube',
    price: 49,
    goals:['becoming sub 10', 'nigga', 'bitch'] 
};

alert(onlineCourse.name);
alert(onlineCourse.price);
alert(onlineCourse.goals);

function getListItem(array, arrayIndex){
    let arrayElement = array[arrayIndex];
    return arrayElement;
}

let firstGoal = getListItem(onlineCourse.goals, 0); 
alert(firstGoal);