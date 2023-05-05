
    function myFunction(){
      var email = document.forms["myForm"]["email"].value;
      var password1 = document.forms["myForm"]["password1"].value;
      var password2 = document.forms["myForm"]["password2"].value;
    }
      if (password1 == password2){
        window.location.href="spendingtrends.html";
      }
      else{
        alert("Invalid Username and Password");
      }
  
        document.getElementById('clear').addEventListener('click',() => {
        localStorage.removeItem('username')
        localStorage.removeItem('password1')
        localStorage.removeItem('password2')
      }
    