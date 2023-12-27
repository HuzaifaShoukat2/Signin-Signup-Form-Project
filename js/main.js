$(document).ready(function () {
   $(".switchSignin").click(function(){
      $(".signin-form").removeClass("display-none");
      $(".signin-form").addClass("display-block");
      $(".signup-form").addClass("display-none");
      $(".switchSignin").addClass("btnActive");
      $(".switchSignup").removeClass("btnActive");
   });
   
   $(".switchSignup").click(function(){
      $(".signup-form").removeClass("display-none");
      $(".signup-form").addClass("display-block");
      $(".signin-form").addClass("display-none");
      $(".switchSignup").addClass("btnActive");
      $(".switchSignin").removeClass("btnActive");
   });


   $("#signinPassIcon").click(function(){
      $("#signinPassIcon i").toggleClass("fa-eye fa-eye-slash");

      $($("#signinPassIcon").siblings()[1]).attr("type", function(index, attr){
         return attr == "password" ? "text" : "password";
      })
   });
   
   $("#signupPassIcon").click(function(){
      $("#signupPassIcon i").toggleClass("fa-eye fa-eye-slash");

      $($("#signupPassIcon").siblings()[1]).attr("type", function(index, attr){
         return attr == "password" ? "text" : "password";
      })
   });
});



// Form Validation
function validateSignInForm() {
   var username = document.getElementById('signinUsername').value;
   var password = document.getElementById('signinPassword').value;

   if (username.trim() === '' || password.trim() === '') {
       alert('Please fill in all fields for Sign In.');
       return false;
   }

   // Additional validation if needed

   return true;
}

// Function to validate Sign Up form
function validateSignUpForm() {
   var email = document.getElementById('signupEmail').value;
   var username = document.getElementById('signupUsername').value;
   var password = document.getElementById('signupPassword').value;

   if (email.trim() === '' || username.trim() === '' || password.trim() === '') {
       alert('Please fill in all fields for Sign Up.');
       return false;
   }

   // Additional validation if needed

   return true;
}