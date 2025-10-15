function theme(){
let y=document.body.classList.toggle('hello')
console.log(y)

if(y==true){
    document.querySelector('#btn').textContent="light"
}
else{
    document.querySelector('#btn').textContent="Dark"
}

}