

let loginBtn = document.getElementById('loginBtn');
let message = document.getElementById('message');








let usersData = JSON.parse(localStorage.getItem('users'));
console.log(usersData)


loginBtn.addEventListener('click',()=>{
 
    let loginEmail = document.getElementById('loginEmail').value;
    let loginPassword = document.getElementById('loginPassword').value;
   
   
    let foundUser = usersData.find(user => user.email == loginEmail);
   
    if(foundUser){
        if(loginPassword == foundUser.password){
            console.log('Login Successfull!');


            // message.innerText = 'Login Successfull!'

            location.href = 'home.html'

            sessionStorage.setItem('loginUser',JSON.stringify(foundUser));


        }
        else
        {
            console.log('Password is incorrect!')
            message.innerText = 'Password is incorrect!'
        }
    }
    else
    {
        console.log("User not Found!")
        message.innerText = 'User not Found!'

    }







   
   
   
   
   
   
   
   
   
   
   })
   
   