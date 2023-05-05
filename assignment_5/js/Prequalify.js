if(localStorage.getItem('loan')){
   //parse to JSON object

   let obj = JSON.parse(localStorage.getItem('loan'))

   document.getElementById('email').value = obj.email
   document.getElementById('remail').value = obj.remail
   document.getElementById('fname').value = obj.fname
   document.getElementById('lname').value = obj.lname
   document.getElementById('city').value = obj.city
   document.getElementById('state').value = obj.state
   document.getElementById('zip').value = obj.zip
   document.getElementById('income').value = obj.income
   document.getElementById('ssn').value = obj.ssn


 }
 //same email
if (email != remail) {
   console.log("Please correct your email.")
}


//gorss income
if (income == "") {
   $("income").nextElementSibling.firstChild.nodeValue 
   isValid = false;}
else if (income > 45,000) {
   console.log("Congratulations, Your are prequalified for a loan. A representative will contact you soon.")
}
else if (income < 45,000) {
   console.log("We're sorry, you do not qualify for a loan at this time.")
}
else { $("income").nextElementSibling.firstChild.nodeValue = "";
}


 document.getElementById('login').addEventListener('click', (e) => {
   e.preventDefault()
   let email = document.getElementById('email').value 
   let remail = document.getElementById('remail').value
   let fname = document.getElementById('fname').value
   let lname = document.getElementById('lname').value
   let city = document.getElementById('city').value
   let state = document.getElementById('state').value
   let zip = document.getElementById('zip').value
   let income = document.getElementById('income').value
   let ssn = document.getElementById('ssn').value


   let user = {
     email:email,
     remail:remail,
     fname:fname,
     lname:lname,
     city:city,
     state:state,
     zip:zip,
     income:income,
     ssn:ssn
   }
   //lcal storage

   localStorage.setItem('loan',JSON.stringify(loan))

   console.log(JSON.stringify(loan))

   alert("Your details are saved in localStorage")


   localStorage.setItem('email', email)
   localStorage.setItem('remail', remail)
   localStorage.setItem('fname', fname)
   localStorage.setItem('lname', lname)
   localStorage.setItem('city', city)
   localStorage.setItem('state', state)
   localStorage.setItem('zip', zip)
   localStorage.setItem('income', income)
   localStorage.setItem('ssn', ssn)


   alert("Your details are saved in localStorage")
 })
   document.getElementById('clear').addEventListener('click',() => {
     localStorage.removeItem('email')
     localStorage.removeItem('remail')
     localStorage.removeItem('fname')
     localStorage.removeItem('lname')
     localStorage.removeItem('city')
     localStorage.removeItem('state')
     localStorage.removeItem('zip')
     localStorage.removeItem('income')
     localStorage.removeItem('ssn')


   })

