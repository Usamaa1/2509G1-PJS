




// Arrays Methods


// Modify

// let numbers = [34,43,5,43,5,67]

// console.log(numbers)

// numbers[2] = "Hello"

// console.log(numbers)



// Delete

// let numbers = [34,43,"hello",43,5,67]

// console.log("Before : " + numbers)


// delete numbers[2]
// console.log("After : " + numbers)



// push

// let numbers = [34,43,5,43,5,67]

// console.log("Before : " + numbers)

// numbers.push(54)

// console.log("After : " + numbers)



// pop

// let numbers = [34,43,5,43,5,67]

// console.log("Before : " + numbers)

// numbers.pop()

// console.log("After : " + numbers)


// shift

// let numbers = [34,43,5,43,5,67]

// console.log("Before : " + numbers)


// numbers.shift()

// console.log("After : " + numbers)


// Unshift

// let numbers = [34,43,5,43,5,67]

// console.log("Before : " + numbers)


// numbers.unshift("hi")

// console.log("After : " + numbers)



// sort

// let numbers = [34,43,5,43,5,67]
// // let numbers = ["Farhan", "Zahid", "Kamran", "Imran", "Aslam","Saad", "Babar"]

// console.log("Before : " + numbers)

// numbers.sort((a,b)=> a - b)
// numbers.reverse()
// // numbers.sort()

// console.log("After : " + numbers)




// reverse

// let numbers = [34,43,5,43,5,67]

// console.log("Before : " + numbers)

// numbers.sort((a,b)=>{return a -b})
// numbers.reverse()

// console.log("After : " + numbers)



// slice

// let numbers = [34,43,5,43,5,67]

// console.log("Before : " + numbers)

// // let abc = numbers.slice(2)

// let abc = numbers.slice(2,4)



// console.log("After : " + numbers)
// console.log("ABC : " + abc)


// spread operator



// let a = [5,7,3,2,7,72,23,1];

// let b = [];

// // b = a
// b = [...a] //clone

// console.log("a : "  + a)
// console.log("b : " + b)


// b[2] = "Hello"

// console.log("a : "  + a)
// console.log("b : " + b)




// Example of coping variable

// let a = 23;

// let b;

// b = a

// console.log("a : "  + a)
// console.log("b : " + b)


// b = "Hello"

// console.log("a : "  + a)
// console.log("b : " + b)



// splice

// let numbers = [34,43,5,43,5,67]

// console.log("Before : " + numbers)

// numbers.splice(2,3)
// // numbers.splice(3,2)

// console.log("After : " + numbers)
// console.log("ABC : " + abc)


// ********Concat**********

// let carArrays = [];
// console.log("Before : " + carArrays)

// let carArrays2 = ["Honda", "Toyota", "Daihatsu"]
// let carArrays3 = ["Huyndai", "Mercedes", "Ferari"]
// let carArrays4 = ["Mira", "Prius", "Mehran"]

// carArrays = carArrays2.concat(carArrays3,carArrays4)

// carArrays = arrays.concat(arrays2, numberArrays);

// console.log("After : " + carArrays)
// console.log("ABC : " + abc)


// ********Join**********

// let arrays = ["Honda", "Toyota", "Daihatsu"];

// let arrays3 = arrays.join("-")

// let arrays3 = carArrays2.join(" ")

// document.write(arrays3)
// console.log(arrays3)


// ********isArray**********  //used for identifing array


// let car = ["Civic","Mira","Prius","Vitz","Bolan"];
// console.log(cars)


// let car = "Mehran"

// console.log(Array.isArray(car))




// **********indexOf************    // find the value through index from start


// let cars = ["Civic","Mira","Prius","Mira","Vitz","Bolan","Mira"];
// console.log(cars)



// console.log(cars.indexOf("Mira",2))
// console.log(cars.indexOf("Mira",2))
// console.log(cars.lastIndexOf("Mira"))
// console.log(cars.indexOf("jdskfj"))
// console.log(cars.indexOf("Prius"))
// console.log(cars.indexOf("prius"))

// let car = cars.indexOf("Mira",1)

// document.write(car)


// cars.splice(cars.indexOf('Prius'),1)
// console.log(cars);




// **********lastIndexOf************     // find the value through index from last

// let cars = ["Civic","Mira","Vitz","Prius","Vitz","Bolan"];

// console.log(cars)

// let car = cars.lastIndexOf("Vitz",2)

// console.log(car)


// **********includes()************     // find if value present in the array or not

// let cars = ["Civic","Mira","Prius","Vitz","Bolan"];

// console.log(cars)

// let car = cars.includes("Vitz")

// console.log(cars.includes("Bolan"))

// console.log(cars.find((item)=> item == 'Bolan'))



// ************* spread operators *************

// ['Haris','Arif','Owais','Irtiza','Faiq']
// let employeeNames = ['Asfar','Ali','Zahid','Zeeshan','Ajmal'];
// let softwareEngineers = [...employeeNames];

// console.log(employeeNames)
// console.log(softwareEngineers)

// softwareEngineers[1] = 'Zafar'

// console.log(softwareEngineers)

// console.log(employeeNames)

// spread operator
// console.log(...softwareEngineers)


// console.log(employeeNames[0]);
// console.log(employeeNames[1]);
// console.log(employeeNames[3]);

//rest operator

// let [a,b,c,...remainingNames] = employeeNames; 


// console.log(a)
// console.log(b)
// console.log(c)
// console.log(remainingNames)





























