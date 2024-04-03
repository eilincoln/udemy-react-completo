const numeros = [1,2,3,4]

const novosNumeros = [...numeros] // desse jeito eu faço uma cópia do array, se eu não colocar isso eu faço uma referência
novosNumeros.push(5)

console.log(numeros)
console.log(novosNumeros)