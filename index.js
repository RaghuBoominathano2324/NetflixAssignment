const loginBtn = document.getElementById("login");
const registerBtn = document.getElementById("register");
const loginForm = document.getElementById("loginForm");

const userid=document.getElementById("userid");
const emailid=document.getElementById("emailID");
const password=document.getElementById("LogPassword");
const nameError=document.getElementById("name_error");
const passError=document.getElementById("Pass_error");
const emailError=document.getElementById("email_error");



const registerForm = document.getElementById("RegistrationForm");


const RegistrationFormSucess=document.getElementById("RegisterFormValidation");//span tag

const Emailid_R=document.getElementById("emailIDR");
const Emailid_ErrorR=document.getElementById("email_errorR");



const PasswordR=document.getElementById("LogPasswordR");
const PasswordR_Error=document.getElementById("Pass_errorR");

const PasswordCR=document.getElementById("PasswordC");
const PasswordC_E=document.getElementById("Pass_errorC");






var email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
var pass_check = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;




// Is at least 8 characters long.
// Contains at least one lowercase letter.
// Contains at least one uppercase letter.
// Contains at least one digit.
// Contains at least one special character from the specified set





loginForm.style.left = "50%";  
registerForm.style.left = "-50%"; 
loginForm.style.opacity = 1;   
registerForm.style.opacity = 0;     

loginBtn.style.backgroundColor = "#21264D";  
registerBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";  















loginBtn.addEventListener('click', () => {
    loginBtn.style.backgroundColor = "#21264D";  // Add the '#' symbol
    registerBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    loginForm.style.left = "50%";
    registerForm.style.left = "-50%";
    loginForm.style.opacity = 1;
    registerForm.style.opacity = 0;
});

registerBtn.addEventListener('click', () => {
    registerBtn.style.backgroundColor = "#21264D";  // Add the '#' symbol
    loginBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    registerForm.style.left = "50%";
    loginForm.style.left = "-50%";
    registerForm.style.opacity = 1;
    loginForm.style.opacity = 0;
});


const logInputField=document.getElementById("LogPassword");
const logInputIcon=document.getElementById("iconPass");

function myLogPassword(){
    if(logInputField.type==="password"){
        logInputField.type="text";
   
        logInputIcon.classNamename="a-regular fa-eye";
        logInputIcon.style.cursor="pointer";
    }
}









//For login Form

loginForm.addEventListener('submit',(e)=>{
    const useridValue = userid.value;
    const passwordValue = password.value;
    nameError.innerHTML = "";
    passError.innerHTML = "";
    e.preventDefault();
    let isValid = true;
    if(userid.value===''||userid.value===null){
        isValid = false;
        nameError.innerHTML="*Name is Required";
    }
    else if(userid.value.length<5){
        isValid = false;
        nameError.innerHTML="*Name must be at least 5 characters long";
    }
    else if(!(userid.value.match(email_check))){
        isValid = false;
        nameError.innerHTML="*Name Does Not Match the Pattern";
    }

    else if(!(password.value.match(pass_check))){
        isValid = false;
        passError.innerHTML="*Password Does Not Match the Pattern";
    }

    else if((password.value===''||password.value===null)){
        isValid = false;
        passError.innerHTML="*Password  is Required";
    }
    else if(password.value.length<5){
        isValid = false;
       passError.innerHTML="*Password must be at least 5 characters long";
    }
   

    if (userid.value === "" && password.value === "") {
        // e.preventDefault();  
        isValid = false;
        nameError.innerHTML = "*Name is Required";
        passError.innerHTML = "*Password is Required";
    }
   

    if (
        (useridValue === "Entri123@gmail.com" && passwordValue === "Entri*43210") ||
        (useridValue === "Raghu123@yahoo.co.in" && passwordValue === "Ent*43210")
    ) {
        // Login successful
        alert("Login Sucessfull");
        window.location = 'https://www.netflix.com/in/title/81702144';
    }

    else {
        // Invalid credentials
        passError.innerHTML = "*Invalid username or password";
    }





 


})
// const emailValue = Emailid_R.value;
// const passwordValue = PasswordR.value;
// const passwordConfirmValue = PasswordCR.value;

// RegistrationFormSucess.innerHTML = "";
// Emailid_ErrorR.innerHTML = "";
// PasswordR_Error.innerHTML = "";
// PasswordC_E.innerHTML = "";
// e.preventDefault();

//for Registration Form

registerForm.addEventListener('submit',(e)=>{
     e.preventDefault();
    let isValid = true;
    if(Emailid_R.value===''||Emailid_R===null){
        isValid = false;
        Emailid_ErrorR.innerHTML="*Email Cannot be  Empty";
    }
    else if (Emailid_R.value.length<5){
        isValid = false;
        Emailid_ErrorR.innerHTML="*Email must be atleast 5 charectors";
    }
    else if (!(Emailid_R.value.match(email_check))){
        isValid = false;
        Emailid_ErrorR.innerHTML="*Your email is not valid";
    }

    else if(PasswordR.value.length<5){
        isValid = false;
        PasswordR_Error.innerHTML="*Password must be at least 5 characters long";
    }

    else if((PasswordR.value==="")&&(PasswordR.value===null)){
        isValid = false;
        PasswordR_Error.innerHTML="*Password cannot be empty";
    }
    else if(!(PasswordR.value.match(pass_check))){
        isValid = false;
        PasswordR_Error.innerHTML="*Password Does Not Match the Pattern";
    }
     
  

   else if (PasswordCR.value === "" && PasswordCR.value === null) {
            isValid = false;
            // Emailid_ErrorR.innerHTML="*Email Cannot be  Empty";
           PasswordC_E.innerHTML = "*Password Confirm cannot be empty";
    }
    else if((PasswordCR.value)!==PasswordR.value){
        PasswordC_E.innerHTML = "*Password Confirm does not match with orginal password field";
    }
   
    else if((Emailid_R.value.match(email_check))&&(PasswordR.value.match(pass_check))&&(PasswordCR.value ===PasswordR.value)){
      alert("Now Click on signin button");
      RegistrationFormSucess.innerHTML="Registration Sucessfull";

    }





 


})
function scrollToLabel() {
    const element = document.getElementById("LabelLineA");
    element.scrollIntoView({ behavior: 'smooth' });
    element.focus();

}















function signin(){
    window.location.href = 'index2.html';
}

