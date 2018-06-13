var message = "";

function validateForm(){

/*------------- FIRST NAME --------------*/
  var userName = document.getElementById("name").value;
  var validName = validateRequired(userName, 20, "Please enter your firstname");  
  document.getElementById("nameError").innerHTML = message;
    
/*----------- EMAIL ----------*/
  var userEmail = document.getElementById("email").value;
  var validEmail = emailValidator(userEmail, "Please enter your email");
  document.getElementById("emailError").innerHTML = message;

/*----------- SUBJECT ----------*/
var userSubject = document.getElementById("subject").value;
var validSubject = validateRequired(userSubject, 25, "Please enter your subject");
document.getElementById("subjectError").innerHTML = message;         
    
/*----------- Message ----------*/
var userMessage = document.getElementById("message").value;
var validMessage = validateRequired(userMessage, 200, "Please enter your message");
document.getElementById("messageError").innerHTML = message;
    
/*----------- RETURN ------------------*/ 


  return (validName && validEmail &&
         validSubject && validMessage);

}

/* -------------- GENERAL VALIDATION ------------ */
function validateRequired(input, limit, errorM){
  if (input.length > limit || input === "" || input === null)
  {
    message = errorM;
    return false;
  }
  else
    return true;
}

/* ------------- EMAIL VALIDATION ------------- */
function emailValidator(input, errorM) {
  var atpos = input.indexOf("@");
  var dotpos = input.lastIndexOf(".");

  if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=input.length) 
  {message = errorM;
   return false;
  }
  else
    validEmail = true;
}
