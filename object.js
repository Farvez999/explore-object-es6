// Create a object
const player = {};
player.name = 'Fankha';
player.specelty = 'BatsMan';
player.bat = function () {
    console.log('Swing the bat');
}

console.log(player);
player.bat();


// OR 
const student = {
    name: 'Panda',
    job: 'Boller',
    ball: function () {
        console.log('Ball kore thus kore')
    },
    selary: 10000
}

console.log(student);


//Object constructor
const person = new Object();
console.log(person)

//Object create method
const item = Object.create(student);
console.log(item.name)

//Class
class Person {
    name = 'Abul';
    address = 'Sador Ghat';
    construction(age) {
        this.age = age;
    }
}

const person1 = new Person(56);
console.log(person1);