var message = "";

function validateForm(){

  /*------------- FIRST NAME --------------*/
  var firstname = document.getElementById("firstname").value;
  var validFirstname = validateRequired(firstname, 20, "Please enter your firstname");  
  document.getElementById("firstNameError").innerHTML = message;


  /*----------- LAST NAME ----------*/
  var lastname = document.getElementById("lastname").value;
  var validLastname = validateRequired(lastname, 50, "Please enter your lastname");
  document.getElementById("lastNameError").innerHTML = message;


  /*----------- EMAIL ----------*/
  var userEmail = document.getElementById("email").value;
  var validEmail = emailValidator(userEmail, "Please enter your email");
  document.getElementById("emailError").innerHTML = message;


  /* ------------ Phone Number ----------------*/
  var phone = document.getElementById("phone").value;  
  var validPhone = pNumberValid(phone, 15, "Enter a valid phone number");
  document.getElementById("phoneError").innerHTML = message;  


  /* ------------ USERNAME ----------------*/  
  var username = document.getElementById("username").value; 
  var validUsername = validateRequired(username, 12, "Please enter a valid username");     document.getElementById("usernameError").innerHTML = message;  


  /* ------------ PASSWORD ----------------*/  
  var password = document.getElementById("password").value; 
  var validPassowrd = validateRequired(password, 12, "Please enter a valid password");  
  document.getElementById("passwordError").innerHTML = message;  


  /* ------------ ADDRESS ----------------*/  
  var address = document.getElementById("address").value; 
  var validAddress = validateRequired(address, 50, "Please enter your address"); 
  document.getElementById("addressError").innerHTML = message; 


  /* ------------ CITY ----------------*/  
  var city = document.getElementById("address").value; 
  var validCity = validateRequired(city, 25, "Please enter your city"); 
  document.getElementById("cityError").innerHTML = message;


  /* ------------ COUNTRY ZIPCODE ----------------*/   
  var country = document.getElementById("countries").value;
  var zipcode = document.getElementById("zipcode").value;
  var validZip = zipcodeValid (country, zipcode, 5, "Please enter valid zipcode");
  document.getElementById("zipcodeError").innerHTML = message;

  /*----------- RETURN ------------------*/ 


  return (validFirstname && validLastname && validEmail &&
          validPhone && validUsername && validPassowrd &&
          validAddress && validCity && validZip);

} //end of function


/* -------------- GENERAL VALIDATION ------------ */
function validateRequired (input, limit, errorM){
  if (input.length > limit || input === "" || input === null)
  {
    message = errorM;
    return false;
  }
  else
    return true;
}

/* ------------- EMAIL VALIDATION ------------- */
function emailValidator (input, errorM) {
  var atpos = input.indexOf("@");
  var dotpos = input.lastIndexOf(".");

  if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=input.length) 
  {message = errorM;
   return false;
  }
  else
    validEmail = true;

}



/* ------------- PHONE VALIDATION -------------- */

function pNumberValid(input, limit, errorM){

  if (isNaN(phone) || phone.length >15 || phone===null || phone==="")
  {
    message = errorM;
    return false;
  }
  else
    validPhone = true;
}


/* ------------- ZIPCODE VALIDATION -------------- */

function zipcodeValid (country, zip, limit, errorM){
  if (country === "USA")
  {
    if (zip === null || zip === "" || zip.length > limit)
    {
      message = errorM;
      return false;
    }
    else return true;
  }
  else return true;
}


