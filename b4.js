function fun(){
    let string=document.querySelector('#string').value 
    let nstring=string.trimStart()
     if(string==""){
        document.querySelector('#string').focus()
        return false
     }
     document.querySelector('#h2').innerHTML=nstring
     return false

    
    }
