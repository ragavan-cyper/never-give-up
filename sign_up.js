let result=document.querySelector("#result")
let loginbtn=document.querySelector("#loginbtn")
loginbtn.addEventListener("click",(e)=>{
    e.preventDefault()
    let name=document.querySelector(".name").value

    let email=document.querySelector(".email").value.trim()

    let password=document.querySelector(".pass").value.trim()

    let confirm=document.querySelector(".confirm").value.trim()

      let users=JSON.parse(localStorage.getItem("users"))||[]

      let exituser=users.find(x=>x.email.toLowerCase()===email.toLowerCase())

      if (exituser) {
       
    result.innerHTML = "youur already created account ❌"; 
    result.style.display = 'block'; 

    // after 2 sec
    setTimeout(() => {
        result.style.display = 'none';
    }, 2000);

       return 
      } 

       if(password!=confirm){
      
    result.innerHTML = " Password  Did Not Match❌"; 
    result.style.display = 'block'; 

    // after 2 sec
    setTimeout(() => {
        result.style.display = 'none';
    }, 2000);

        return
    }

    if (name===""||password.length<=4||email.length<=4) {
        
        
    result.innerHTML = "please check inputs ❌"; 
    result.style.display = 'block'; 

    // after 2 sec
    setTimeout(() => {
        result.style.display = 'none';
    }, 2000);

        return
        
    }
      
      if(name.length>=1&&password.length>=5&&email.length>=5 ){

        let userobj={name:name,email:email,password:password}

        users.push(userobj)

        localStorage.setItem("users",JSON.stringify(users))

        

         result.innerHTML = "Signup Successful ✅"; 
    result.style.display = 'block'; 

    // after 2 sec
    setTimeout(() => {
        result.style.display = 'none';
    }, 2000);
         

           // input clear
        document.querySelector(".name").value=""
        document.querySelector(".email").value=""
        document.querySelector(".pass").value=""
        document.querySelector(".confirm").value=""
        window.location.href="http://127.0.0.1:5500/login_page.html"
      }
     
      
      
     
   
})
       
