//form validation
function fun(){
    let name=document.querySelector('#name').value
    let age=document.querySelector('#age').value
    let contact=document.querySelector('#contact').value
    let address=document.querySelector('#address').value
    let branch=document.querySelector('#branch').value


    if(name==""){
        alert("please fill ur name")
        
        document.querySelector('#name').focus()
        document.querySelector('#error').innerHTML="please fill"
        return false
    }
    else if(age==""||isNaN(age)){
        alert("please fill ur age in no.s")
        document.querySelector('#age').focus()
        return false
    }

    else if(isNaN(contact)||contact==""){
        alert("please fill ur contact in no.s")
        document.querySelector('#contact').focus()
        return false
    }
    else if(address==""){
        alert("pls fill ur address")
        document.querySelector('#address').focus()
        return false
    }
    else if(branch==""){
        alert("pls fill ur branch")
        document.querySelector('#address').focus()
        return false
    }


    }


