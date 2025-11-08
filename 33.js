//filter function 
let ar=[{"name":"tanmay","class":"js","age":14},{"name":"amit","class":"python","age":23}]
let r=ar.filter((e)=>{

    return e.age>=18
   //return e.name
    
})
console.log(r)
//Destructuring of Array
let[name,c,co,st]=["tanmay","Bpl","India","Mp"]
console.log(name)
// (...variable_name)Spread operator(...) for merging two arrays or object
let ar1=[1,2,3]
let ar2=[4,5,6,...ar1]
console.log(ar2)