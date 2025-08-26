let loginbtns=document.querySelector("#loginbtns")
let result=document.querySelector("#result")

loginbtns.addEventListener("click",(e)=>{

e.preventDefault()

let email=document.querySelector("#emails").value.trim()

let password=document.querySelector("#verifypassword").value.trim()

let users=JSON.parse(localStorage.getItem("users"))|| []

let validuser=users.find(user=>user.email.toLowerCase()===email.toLowerCase()&&user.password===password)

if (email.length<=0||password.length<=0) {
  result.innerHTML = "Please enter all inputs ❗"; 
    result.style.display = 'block'; 

    // after 2 sec
    setTimeout(() => {
        result.style.display = 'none';
    }, 2000);

    return; 
  
}

 if (validuser) {
   alert("Login Successful ✅")
  window.location.href="https://chatgpt.com/c/68ac1290-70bc-832e-ab7c-9e29c7f7f3e6"
  
} 
else if(users.email!=email||users.password){
  
    result.innerHTML = "Invalid Email or Password ❌"; 
    result.style.display = 'block'; 

    // after 2 sec
    setTimeout(() => {
        result.style.display = 'none';
    }, 2000);

    return; 
}
  




})