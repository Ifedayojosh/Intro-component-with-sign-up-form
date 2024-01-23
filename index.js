function validateform() {
    var firstname = document.getElementById("firstname").value;  
    var lastname = document.getElementById("lastname").value; 
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;  
       
    if(firstname == "") {  
        document.getElementById("message1").innerHTML = "First Name cannot be empty";
        document.getElementById("ec1a").style.display = "inline";
      } 
      if(lastname == "") {  
        document.getElementById("message2").innerHTML = "Last Name cannot be empty";
        document.getElementById("ec2a").style.display = "inline";
      } 
      if(email == "") {  
        document.getElementById("message3").innerHTML = "Looks like this is not an email";
        document.getElementById("ec3a").style.display = "inline";
      }
      if(password == "") {  
        document.getElementById("message4").innerHTML = "Password cannot be empty";
        document.getElementById("ec4a").style.display = "inline";
      }  
         else {
        alert ("Your free trial has started!");
      }
      sessionStorage.setItem("firstname_key", firstname);
      sessionStorage.setItem("lastname_key", lastname);
      sessionStorage.setItem("email_key", email);
      sessionStorage.setItem("password_key", password);
}
function removeErrorMessage(){
    document.getElementById("message1").innerHTML= "";
    document.getElementById("message2").innerHTML= "";
    document.getElementById("message3").innerHTML= "";
    document.getElementById("message4").innerHTML= "";
    document.getElementById("ec1a").style.display = "none";
    document.getElementById("ec2a").style.display = "none";
    document.getElementById("ec3a").style.display = "none";
    document.getElementById("ec4a").style.display = "none";
    }