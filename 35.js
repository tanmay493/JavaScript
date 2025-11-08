let person={
    name:"tanmay",age:23,city:"bhpl"

}
localStorage.setItem("username",JSON.stringify(person))

//let t=localStorage.getItem("username")
//console.log(t)

let vl=JSON.parse(localStorage.getItem("username"))
console.log(vl.name)

