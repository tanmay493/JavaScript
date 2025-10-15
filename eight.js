let h=document.getElementsByTagName('h1')
console.log(h[0])
h[0].style.color="red"


let x=document.getElementsByTagName('h2')//applied for same tag
x[0].style.backgroundColor="yellow"
x[1].style.backgroundColor="red"
x[2].style.backgroundColor="green"
x[3].style.backgroundColor="orange"
x[4].style.backgroundColor="pink"
x[5].style.backgroundColor="brown"

let y=document.getElementsByClassName('head')//applied for diff. tag with same class
console.log(y)
y[0].style.backgroundColor="red"
y[1].style.backgroundColor="yellow"
y[2].style.backgroundColor="orange"
y[3].style.color="white"
y[3].style. backgroundColor="black"

let t=document.querySelector('.tanmay')
t.style.backgroundColor="purple"

let s=document.querySelectorAll('.h1')
s[0].style.backgroundColor="blue"
s[1].style.backgroundColor="green"
s[2].style.backgroundColor="purple"

