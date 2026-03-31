


// button selection
let signupBtn = document.getElementById("signupBtn");
let alertMessage = document.getElementById('alertMessage');
let signupForm = document.getElementById('signupForm')



const users = [];

// Signup Functionality

signupBtn.addEventListener("click", () => {
  // all input feilds selections
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let city = document.getElementById("city").value;
  let country = document.getElementById("country").value;
  let address = document.getElementById("address").value;

  const userObj = {
    firstName,
    lastName,
    email,
    password,
    city,
    country,
    address,
  };


  users.push(userObj)

  localStorage.setItem('users',JSON.stringify(users));
  
  console.log(users);

  alertMessage.classList.remove('hidden')

  signupForm.reset()


//   console.log(userObj);
});







