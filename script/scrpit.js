
document.querySelector(".signInForm").addEventListener("submit",function (Event) {
  Event.preventDefault();

  let userEmail = document.getElementById("userEmail").value;
  let userPassword = document.getElementById("userPassword").value;

  console.log(userEmail, userPassword);
  
  if (userEmail && userPassword) {
    alert("Register Successfully")
  }else{
    alert("Error")
  }

  window.location.href="./index.html";
} );



