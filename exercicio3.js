let nota1=Number (prompt ("nota 1"))
let nota2=Number (prompt ("nota 2"))
let nota3= Number(prompt ("nota 3"))
let media=(nota1+nota2+nota3)/3
let valor= document.querySelector('p')
if (media>=6){
    valor.innerHTML="aprovado"
}else {
    valor.innerHTML="reprovado"
console.log("reprovado")
}