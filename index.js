var age = 28; //we can use letter A-z , numbers 0-9, underscore _, $ for variable name but can't use number at first place
var name = 'Tisha'
//console.log("My age is " + age);
//console.log(typeof age); // variable type dekhar jnno

//' ' or " " for string
//true or false for boolean, undefined means a variable has been declared but not yet assigned a value, while null is an assignment value that represents the intentional absence of any value.


//###parseFloat parseInt

// var num1 = 10.5;
// var num2 = 5;

// var sum = num1 + num2;
// console.log(parseFloat(sum)); //parseFloat for decimal number
// console.log(parseInt(sum));//parseInt for integer number



//###if else statement
// var name = 'Tasnia Ahmed Tisha';
// if (name == 'Tisha') {
//     console.log('Name is Tisha');
// }

// else {
//     console.log('Name is not Tisha');

// }




//###Object declaration
var person = {
    name: 'Tisha',
    age: 28,
    gender: 'Female',
}
//console.log(person.name);



//###Array declaration
var colors = ['red', person, 'green', 'blue'];

colors.push('yellow'); //push for adding new value in array at the end
colors.pop(); //pop for removing last value from array
colors.shift(); //shift for removing first value from array
colors.unshift('black'); //unshift for adding new value in array at the first place

//console.log(colors)

//###for loop
// for(var i = 0; i < colors.length; i++){
//     console.log(colors[i]);
// }


//function declaration
function add(num1, num2){
    return(num1 + num2);
}

add(5, 10); //function call




