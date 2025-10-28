document.getElementById('h1').textContent="from js"
document.getElementById('h2').textContent="from js"
document.getElementById('h3').textContent="from js"
document.getElementById('h4').textContent="from js"
document.getElementById('h5').textContent="from js"
document.getElementById('h6').textContent="from js"

let a=document.getElementById('lily')
a.textContent = "TANMAY"
a.setAttribute('align','center')


let b=document.getElementById('l1')
    b.innerHTML="<i> name </i>"
    b.innerHTML=" name 2 "//jo last me set karenge woh final hoga
    b.setAttribute('align','right')

 let c=document.body.setAttribute('bgcolor','yellow')
  
 document.getElementById('l2').removeAttribute('style')

 document.getElementById('rose').setAttribute('src','moon2.jpeg')

 //for using css in js 'style' keyword necessary
 document.getElementById('lotus').style.backgroundColor='white'

 let n1=document.getElementById('sin')
 n1.style.backgroundColor='lightblue'
 n1.style.padding='20px'

 let q=document.getElementById('cos').style.backgroundColor='lightgreen'
 document.getElementById('tan').style.backgroundColor='lightpink'
 document.getElementById('sec').style.backgroundColor='aliceblue'
 
 let t=document.getElementById('cosec')
 t.style.cssText="background-color:black;color:white;padding:10px"

 let w=document.createElement('p')
 w.textContent="My name is tanmay"
 //console.log(w) //for checking in console

 document.getElementById('abc').append(w)
 
    