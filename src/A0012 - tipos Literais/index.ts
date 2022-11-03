let x = 10;
x = 0b1010;
const y = 10
const a = 100;


const pessoa = {
    nome: 'Gus' as const,
    sobrenome: undefined
} // pessoa.nome = 'Gustavo' --> Erro


function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
    return cor
}
console.log(escolhaCor("Amarelo"))

export default 1;
