function fun(){
    let name=document.querySelector('#name').value
    let city=document.querySelector('#city').value
    let state=document.querySelector('#state').value
    let uname=name.toUpperCase()
    let ucity=city.toUpperCase()
    let ustate=city.toUpperCase()

    if(name==""){
        alert("please fill ur name")
        
        document.querySelector('#name').focus()
        
    
        return false
    }
  else  if(city==""){
        alert("please fill ur city")
        
        document.querySelector('#city').focus()
        
        
        return false
    }
    else if(state==""){
        alert("please fill ur state")
        
        document.querySelector('#state').focus()
    
        
        return false
    }

    let a=document.querySelector('#a').innerHTML=uname
    let b=document.querySelector('#b').innerHTML=city
    let c=document.querySelector('#c').innerHTML=state
    
 return false


    
}