function validateform() {
    var firstname = document.getElementById("firstname").value;  
    var lastname = document.getElementById("lastname").value; 
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;  
       
    if(firstname == "") {  
        document.getElementById("message1").innerHTML = "First Name cannot be empty";
        document.getElementById("ec1a").style.display = "inline";
        document.getElementById("firstname").style.border = "1px solid #FF7979";
      } 
      if(lastname == "") {  
        document.getElementById("message2").innerHTML = "Last Name cannot be empty";
        document.getElementById("ec2a").style.display = "inline";
        document.getElementById("lastname").style.border = "1px solid #FF7979";
      } 
      if(email == "") {  
        document.getElementById("message3").innerHTML = "Looks like this is not an email";
        document.getElementById("ec3a").style.display = "inline";
        document.getElementById("email").style.border = "1px solid #FF7979";
      }
      if(password == "") {  
        document.getElementById("message4").innerHTML = "Password cannot be empty";
        document.getElementById("ec4a").style.display = "inline";
        document.getElementById("password").style.border = "1px solid #FF7979";
      }  
         else {
        alert ("Your free trial has started!");
      }
      sessionStorage.setItem("firstname_key", firstname);
      sessionStorage.setItem("lastname_key", lastname);
      sessionStorage.setItem("email_key", email);
      sessionStorage.setItem("password_key", password);
}
function removeErrorMessage1(){
    document.getElementById("message1").innerHTML= "";
    document.getElementById("ec1a").style.display = "none";
    document.getElementById("firstname").style.border = "1px solid #DEDEDE";
    }
function removeErrorMessage2(){
  document.getElementById("message2").innerHTML= "";
  document.getElementById("ec2a").style.display = "none";
  document.getElementById("lastname").style.border = "1px solid #DEDEDE";
  }
function removeErrorMessage3(){
  document.getElementById("message3").innerHTML= "";
  document.getElementById("ec3a").style.display = "none";
  document.getElementById("email").style.border = "1px solid #DEDEDE";
  }
function removeErrorMessage4(){
  document.getElementById("message4").innerHTML= "";
  document.getElementById("ec4a").style.display = "none";
  document.getElementById("password").style.border = "1px solid #DEDEDE";
  }