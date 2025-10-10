function red(){
    document.body.style.backgroundColor="red"
}
function blue(){
    document.body.style.backgroundColor="blue"
}
function yellow(){
    document.body.style.backgroundColor="yellow"
}
function orange(){
    document.body.style.backgroundColor="orange"
}

function fun2(cl){
    document.body.style.backgroundColor=cl
}

function fun3(){
    document.getElementById('h1').textContent="hello everyone"
}

let n=0
let count=document.getElementById("count")
function inc(){
    if(n<10){
    count.innerHTML=++n
}
}
function decrm(){
    if(n>0){
        count.innerHTML=--n
    }
    /*else{
        alert("not less than 0")
    }*/
}

