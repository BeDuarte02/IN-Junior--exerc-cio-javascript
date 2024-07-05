let i=0
while (i<5) {
i++
let numero = Math.floor(Math.random() * 1000)
console.log(numero)
if (numero%3==0 && numero%5==0)
    {console.log("fizzbuzz")}


else if (numero%3== 0) {
    console.log("fizz")
    
}else if ( numero%5== 0){
console.log("buzz")
} 
}