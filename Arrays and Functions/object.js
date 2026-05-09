let employeeNames = ['Asfar','Ali','Zahid','Zeeshan','Ajmal'];


// Destructure
let [a,b,c,d,e] = employeeNames; 


console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)




let user = {
    name: 'Hafsa',
    age: 23,
    job: 'Accountant',
    qualification: 'BBA'
}

user = {...user, name: 'Wania'};

console.log(user)

const {name, age, job, qualification} = user

console.log(name)
console.log(age)
console.log(job)
console.log(qualification)





