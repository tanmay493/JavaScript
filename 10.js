function fun(){
    let wrapper=document.querySelector('#container')
    wrapper.classList.add('wrapper')
}

function remov(){
    let container=document.querySelector('#container')
    container.classList.remove('wrapper')
}
function both(){
    let cn=document.querySelector('#container')
    cn.classList.toggle('wrapper')
}