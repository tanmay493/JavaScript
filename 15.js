let a=0
let h1=document.querySelector('#count')
let st
function counter(){
    st=setInterval(()=>{
        h1.innerHTML=++a
    },1000)
}
function stop(){
    clearInterval(st)
}
function reset(){
    a=0
    h1.innerHTML=a
    clearInterval(st)
}
function fun(){
    setTimeout(()=>{
        document.querySelector('#timer').style.display="block"
    },4000)
}