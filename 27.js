/*let student=["amit",22,"bpl","sam",5.9,true]
console.log(student[2])

let emp=[]
for(let i=0;i<5;i++){
   emp[i] =prompt("enter 5 elements")

}
console.log(emp)

let a=[]
var sum=0
for(let i=0;i<10;i++){
   a[i]= parseInt(prompt("enter 10 no.s"))
    sum=sum+a[i]

}
console.log(a)
console.log(sum)*/

let a=[]
for(let i=0;i<10;i++){
    a[i]=parseInt(prompt("enter 10 no.s"))
    if(a[i]%2!=0){
        console.log("odd no "+a[i])
    }

}