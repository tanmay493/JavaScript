/*console.log("this is ")
alert("warning messge")
document.write("Form JS")

var num=12
var num=90

console.log(num)

let n1=90
n1="Redhat"

console.log(n1);

const name="Qasim"

console.log(name)

let num1=parseInt(prompt("enter 1 st no"))

let num2=parseInt(prompt("enter 2nd no "))

console.log(num1+num2)

console.log(num1*num2)

let r1=parseInt(prompt("enter radius of circle"))
console.log("Area of circle ="+3.14*r1*r1)

let x=90
let y=8
let z
console.log("value of x is"+x,"value of y is"+y)

z=x
x=y
y=z

console.log("value of new x is"+x,"value of new y is"+y)

let n1=parseInt(prompt("enter a no."))
console.log(n1%2)

let l=parseInt(prompt("enter the length"))
let b=parseInt(prompt("enter the breadth"))

console.log("Area of rectangle ="+l*b)

let a=parseInt(prompt("enter a no."))
if(a>0){
    console.log("positive no")
}
else{
    console.log("negative no.")
}
let a1=parseInt(prompt("enter a no."))
let b1=parseInt(prompt("enter another no"))

if(a1>b1){
    console.log("a1 is greater than b1")

}
else{
    console.log("b1 is greater than a1")
}

let a2=parseInt(prompt("enter a no."))
if(a2%2==0){
    console.log("even no")
}
else{
    console.log("odd no")
}

let a=parseInt(prompt("enter a no"))
let b=parseInt(prompt("enter 2nd no."))
let c=parseInt(prompt("enter 3rd no"))

if(b%2==0){
    console.log(a*b*c)
}
else{
    console.log(a+b+c)
}

let a=parseInt(prompt("enter a no"))
if(a>0){
    console.log("+ ve")
}
else if(a<0){
    console.log("- ve no")
}
else{
    console.log("neutral")
}

let a=parseInt(prompt("enter a no"))
let b=parseInt(prompt("enter another no"))
if(a>b){
    console.log("a is greater")
}
else if(a<b){
    console.log("b is greater")
}
else{
    console.log(" both are equal")
}

let a=parseInt(prompt("enter marks"))
let b=parseInt(prompt("enter 2nd marks"))
let c=parseInt(prompt("enter 3rd marks"))
let d=parseInt(prompt("enter 4th marks"))
let e=parseInt(prompt("enter 5th marks"))
let f=(a+b+c+d+e)/5

console.log(f+"%")

if(f>=90){
    console.log("A grade")
}
else if (f>=75 && f<90)
{
    console.log("B grade")
}
else if(f>=60 && f<75){
    console.log("C grade")
}
else if(f>=40 && f<60){
    console.log("D grade")
}
else{
    console.log("E grade")
}
let age= parseInt(prompt("enter age"))
if(age>=18){
    let b=parseInt(prompt("enter 1 for indian"))
    if(b==1){
        alert("u r eligible for voting")
    }
    else{
        alert("u r not eligible for voting")
    }
}
else{
    alert("u r underage")
}
let num=parseInt(prompt("enter any no."))
if(num>0){
    
    
    if(num%2==0){
        console.log(num*num)
    }
        else{
            console.log(3.14*num*num)
            }
}else{
    if(num==-3){
console.log(num)

    }
else{
    console.log(num)
    }
    }
        



/*let a=1
do{
    console.log("TV")
    a++
    document.write("TV")
}while(a<10)

let a=1
do{
    document.write(a)
    a++
}while(a<=15)

let a=10
do{
    document.writeln(a)
    a--
}while(a>=1)

 let a=parseInt(prompt("enter a no"))
do{
   let a=parseInt(prompt("enter a no"))
}while(a!=0)


    /*let a=parseInt(prompt("enter a no"))
while(a!=0){
    a=parseInt(prompt("enter a no"))

}
let num=parseInt(prompt("enter a no"))
let a=1
while(a<=10){
    console.log(num*a)
    a++
}
let sum =0
let a=15
while(a>=1){
    sum=sum+a
    a--
}
console.log(sum)

let sum=0
for(let a=1;a<=15;a++)
{
    if(a%2!=0)
        {
            sum=sum+a
        }
    }
console.log(sum)

document.write("<h1>this is <br> js &nbsp&nbsp class</h1>")

for(let r=1;r<=5;r++){
    {
        document.write("*")
    }
    
}

for(let r=1;r<=3;r++){
    for(let c=1;c<=5;c++){
        document.write("*")
    }
    document.write("<br>")
}

for(let r=1;r<=4;r++){
    for(let c=1;c<=r;c++){
        document.write("*")

    }
    document.write("<br>")
}
for(let r=1;r<=5;r++){
    for(let c=1;c<=5;c++){
        if(r==1||r==5||c==1||c==5){

        
        document.write("* ")
        }
        else{
            document.write("&nbsp&nbsp&nbsp")
        }
    }
    document.write("<br>")
}

for(let r=1;r<=5;r++){
    for(let c=1;c<=5;c++){
        if((r==1 && c==1)||(r==2 && c==2)|| (r==3 && c==3)||(r==4 && c==4)||(r==5 && c==5)
        || (r==1 && c==5)|| (r==2 && c==4)||(r==4 && c==2)||(r==5 && c==1)){
    
    document.write("* ")  
  }
  else{
    document.write("&nbsp&nbsp&nbsp&nbsp&nbsp")
  }
    }
    document.write("<br>")
}
for(let r=1;r<=5;r++){
    for(let c=1;c<=5;c++){
        if((r==c)|| (r+c==6)){
            document.write("*")
        }else{
            document.write("&nbsp&nbsp&nbsp")
        }
            
        }
        document.write("<br>")
}


function sum(){
    let n1=10
    let n2=20

    console.log(n1+n2)
}
sum()

function area(){
    let l=parseInt(prompt("enter length"))
    let b=parseInt(prompt("enter breadth"))
    console.log("area of rectangle ="+l*b)
}
area()*/

function print(){
    let a=parseInt(prompt("enter no bw 20 and 1"))
    if(a>=11 && a<=20){
        for(let n=20;n>=1;n--){
            console.log(n)
        }
    }
    else{
        for(let n=10;n>=a;n--){
            console.log(n)
        }
    }
}
print()
