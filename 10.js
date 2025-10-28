function fun(){
    let w=document.querySelector('#container')
    w.classList.add('wrapper')
}

function remov(){
    let x=document.querySelector('#container')
    x.classList.remove('wrapper')
}
function both(){
    let cn=document.querySelector('#container')
    cn.classList.toggle('wrapper')
}