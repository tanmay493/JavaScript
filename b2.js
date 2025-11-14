function fun(){
    let name=document.querySelector('#name').value
    let age=document.querySelector('#age').value
    let city=document.querySelector('#city').value

    let ncity=city.toLowerCase()
    let ocity=`You live in ${ncity}`

    if(name==""){
        alert("pls fill ur name")
        document.querySelector('#name').focus()
        return false
    }
    else if(age==""||age==isNaN){
        document.querySelector('#age').focus()
        return false

    }
    else if(city==""){
        document.querySelector('#city').focus()
        return false
    }
    document.querySelector('#h2').innerHTML=ocity
    return false
}

