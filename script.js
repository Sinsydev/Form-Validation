const nameError = document.getElementById("name-error");
const phoneError = document.getElementById("phone-error");
const emailError = document.getElementById("email-error");
const submitError = document.getElementById("submit-error");


const  validateName = ()=> {
   const name = document.getElementById("contact-name").value;

   if (name.length == 0) {
       nameError.innerHTML = "Name required";
       return false;
   }  

   if (!name.match(/^[A-Za-z]+\s[A-Za-z]+(\s[A-Za-z]+)?$/)) {
       nameError.innerHTML = " full name";
       return false;
   }
   
   nameError.innerHTML = "Correct";
   return true;
};

const validatePhone = () => {
   const phone = document.getElementById("contact-phone").value;

   if (phone.length == 0) {
       phoneError.innerHTML = "Phone number required";
       return false;
   }
   
   if (phone.length < 11) {
       phoneError.innerHTML = " 11 digits";
       return false;
   }
   
   if (phone.length > 11) {
       phoneError.innerHTML = "you exceeds 11 digits reduce";
       return false;
   }

   if (!phone.match(/^[0-9]{11}$/)) {
       phoneError.innerHTML = "Inputvalid number";
       return false;
   }
   
   phoneError.innerHTML = "Correct";
   return true;
};

  const validateEmail = () =>{
   const email = document.getElementById("contact-email").value;

   if(email.lenght == 0){
      emailError.innerHTML = "email require";
      return false;
   }
   if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{3,4}$/)){
         emailError.innerHTML = "email invalid";
         return false;
   }
   emailError.innerHTML = "correct";
   return true;
  };

  const validateForm =() =>{
   if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
      submitError.style.display = "block";
      submitError.innerHTML = "fix the error before submit";
      setTimeout(function(){submitError.style.display = "none";},2000);
      return false;
   }
   submitError.innerHTML = "correct";
   return true;
  };