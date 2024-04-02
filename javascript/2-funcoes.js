function ola() {
    return "olá mundo!"
}

function olaPessoa(nome) {
    return `Olá ${nome}!`
}
console.log(olaPessoa('lincoln'))

// Arrow functions
// tenho que atribuir a uma const
const ola2 = () => {
    return `Olá mundo! 2`
}
const olaPessoa2 = (name) => {
    return `Olá mundo! ${name} 2`
}
// com um param só
const olaPessoa4 = nome => `Olá novamente ${nome}!!`
console.log(ola2())
console.log(olaPessoa2("lincoln berto"))
console.log(olaPessoa4("lincoln berto dos santos"))