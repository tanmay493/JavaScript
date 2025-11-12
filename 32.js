// Map fuction
let ar=[{"name":"tanmay","class":"js","age":14},{"name":"amit","class":"python","age":23}]
let r=ar.map((e)=>{

    //return e.age>=18+" "+
    return e.name +" "+ e.age//do values nikalna ho key se
    //return e.name || e.age // Or operator:jo first no. condition hai woh display hogi
    //return e.name && e.age // And operator:jo second no. condition hai woh display hogi
})
console.log(r)