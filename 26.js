

function fun(){
    let n=document.querySelector('#name').value 
let a=document.querySelector('#age').value
let c=document.querySelector('#contact').value
let email=document.querySelector('#email').value
let pass=document.querySelector('#pass').value
let cpass=document.querySelector('#cpass').value

    if(n==""){
        alert("please fill ur name")
        document.querySelector('#name').focus()
        return false
    }

    else if(a==''||isNaN(a)){
        alert("pls fill in digits")
        
        document.querySelector('#age').focus()
        return false
         
        

    }
    else if(c=""||isNaN(c)){
        alert("pls fill in digits")
        document.querySelector('#contact').focus()
        return false
    }

    else if(c.length<10 || c.length>10){
        alert("please enter 10 digits")
        document.querySelector('#contact').focus()
        return false
    }
    else if(a==""){
        alert("please enter age")
        document.querySelector('email')
        return false

    }
    else if(a.length>3){
        alert("please enter 3 digits")
        document.querySelector('email')
        return false
    }
    else if(email==""){
alert("please enter email id")
document.querySelector('email')
        return false
    }

    else if(!(email.includes('@gmail.com'))){
        alert("please enter in  @gmail.com")
        document.querySelector('email')
        return false
    }

    else if(pass==""){
        alert("enter password")
        document.querySelector('#pass').focus()
        return false
    }
    else if(!(pass.match(/[`~!@#$%^&*()]/))){
        alert("please at lest one special character")
        document.querySelector('#pass').focus()
        return false
    }
    else if(!(pass.length>=8 && pass.length<=15)){
        alert("please enter min 8 char and max 15 char")
        document.querySelector('#pass').focus()
        return false

    }
    else if(!(pass.match(/[abcdefghijklmnopqrstuvwxyz]/))){
        alert("please enter at least one alphabet")
        document.querySelector('#pass').focus()
        return false

    }

    else if(cpass==""){
        alert("please enter confirm password")
        document.querySelector('#cpass').focus()
        return false
    }
    else if(pass!=cpass){
        alert("Password is mismatch")
        document.querySelector('#cpass').focus()
        return false
    }
  
}

