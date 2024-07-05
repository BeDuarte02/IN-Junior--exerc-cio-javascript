
let fahrenheit= prompt("Escreva o valor que queira converter")
let celsius= 5*((fahrenheit-32)/9)
let valor= document.querySelector('p')
valor.innerHTML= celsius
console.log(celsius)