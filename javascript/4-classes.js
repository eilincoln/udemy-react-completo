class Animal {
    constructor(f){
        this.familia = f
    }
    andar = () => {
        return 'andando...'
    }
}

class Cachorro extends Animal {
    constructor(n, i){
        super('Carnivoros')
        this.nome = n
        this.idade = i
    }
    

    latir = () => {
        return `${this.nome}: au au!`
    }
}

let rex = new Cachorro('Rex', 2)

console.log(rex)
console.log(rex.latir())

let max = new Cachorro('Max', 3)
console.log(max.latir())