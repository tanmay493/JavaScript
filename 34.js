localStorage.setItem("username","nikhil")
localStorage.setItem("userage",19)
localStorage.setItem("usercity","bhpl")
localStorage.setItem("userstate","mp")
localStorage.setItem("usercountry","india")

let name=localStorage.getItem("username")
console.log(name)

localStorage.removeItem("userage")
//localStorage.clear()// pura local storage delete karne k liye
