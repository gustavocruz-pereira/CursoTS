type TemNome = { nome: string }
type TemSobrenome = { sobrenome: string }
type TemIdade = { idade: number }

type Pessoa = TemNome & TemSobrenome & TemIdade

const pessoa: Pessoa = {
    nome: 'Gus',
    sobrenome: 'Cruz',
    idade: 23
}

console.log(pessoa)

export { Pessoa }
