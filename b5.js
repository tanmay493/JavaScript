function fun(){
    let string=document.querySelector('#string').value ;
    let nstring=string.trimEnd() ;
     if(string==""){
        alert("pls fill the string")
        document.querySelector('#string').focus()
        return false
     }
     document.querySelector('#h2').innerHTML=nstring
return false

 
    
}
