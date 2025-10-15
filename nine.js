var x= document.querySelector('#img')
var y=document.querySelector('#h1')

function fun1(){
x.setAttribute('src','car.jpeg')
   y.textContent="car"
   y.style.color="black"
}

function fun2(){
x.setAttribute('src','laptopjpeg.jpeg')
y.textContent="laptop"
y.style.color="red"
}

function fun3(){
    x.setAttribute('src','bike.jpeg')
y.textContent="bike"
y.style.color="green"
    
}