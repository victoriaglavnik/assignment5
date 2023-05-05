if(localStorage.getItem('user')){
    //parse to JSON object

    let obj = JSON.parse(localStorage.getItem('user'))

    document.getElementById('username').value = obj.username
    document.getElementById('password1').value = obj.password1
    document.getElementById('password2').value = obj.password2


  }

  document.getElementById('login').addEventListener('click', (e) => {
    e.preventDefault()
    let username = document.getElementById('username').value 
    let password1 = document.getElementById('password1').value
    let password2 = document.getElementById('password2').value


    let user = {
      username:username,
      password1:password1,
      password2:password2

    }

    if (password1 != password2) {
      alert("your password must match")
    }
    //lcal storage

    localStorage.setItem('user',JSON.stringify(user))

    console.log(JSON.stringify(user))

    alert("Your details are saved in localStorage")


    localStorage.setItem('username', username)
    localStorage.setItem('password1', password1)
    localStorage.setItem('password2', password2)


    alert("Your details are saved in localStorage")
  })
    document.getElementById('clear').addEventListener('click',() => {
      localStorage.removeItem('username')
      localStorage.removeItem('password1')
      localStorage.removeItem('password2')


    })

