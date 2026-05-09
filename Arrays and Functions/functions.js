// function Decleration
// function fun1(arg1,arg2) {
//     return arg1 + arg2
// }


// fun1()


// function Expression
// const fun2 = function(arg1,arg2){
//     return arg1 + arg2
// }

// fun2()

// Arrow function Expression
// const fun3 = (arg1, arg2) =>  arg1 + arg2;

// fun3()


// let userName = 'Hania';

// (()=>{

//     document.getElementById('welcome').innerHTML = `Hello Welcome ${userName}`

// })();


// function(){

// }

// ()=>{

// }







// function myFun() {
//     // console.log(233)
//     return 233
// }

// console.log(myFun()+2)


// function getBirthYear(currentYear){

//     return function(birthYear){

//       return birthYear - currentYear

//     }
// }




function age(currentYear = new Date().getFullYear()) {
    return function(birthYear) {
        return currentYear - birthYear;
    }
}

let ageCall = age();

console.log(ageCall(2000))






























