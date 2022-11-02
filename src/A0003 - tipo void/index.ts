// Void é quando um metodo ou uma função não retorna nada.
function semRetorno(...args: string[]): void {
    console.log(args.join(' '))
}

const pessoa = {
    nome: 'Gus',
    sobrenome: 'Cruz',

    exibirNome(): void {
        console.log(this.nome + ' ' + this.sobrenome)
    },
}

pessoa.exibirNome()
semRetorno('A')

export { pessoa }
