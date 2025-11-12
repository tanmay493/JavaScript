let person={
    name:"tanmay",age:23,city:"bhpl"

}
localStorage.setItem("username",JSON.stringify(person))//username variable 
//intialise kiya hai jo person ko string me convert kar dega


let t=localStorage.getItem("username")
console.log(t)//poora json form me aayega isme string bhi object form likha jata
//hai

let vl=JSON.parse(localStorage.getItem("username"))//yeh abhi string se object 
//ban gaya
console.log(vl.name)//name object ki key hai


