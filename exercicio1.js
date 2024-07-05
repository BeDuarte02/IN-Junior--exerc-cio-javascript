let array1 = [ 
    [ 4,0 ], 
    [ -1,-1 ] ] 
let array2 = [ [-1,3],[2,7] ] 
if(array1[0].length == array2.length) {
    let resultado = Array(array1.length).fill().map(() => Array(array2[0].length).fill(0));
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2[0].length; j++) {
            for (let k = 0; k < array2.length; k++) {
                resultado[i][j] += array1[i][k] * array2[k][j]
            }
        }
    }
    console.log(resultado)
}else{
    console.log("Não pode multiplicar as matrizes")
}
