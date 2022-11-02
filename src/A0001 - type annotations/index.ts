// Tipos basicos (aqui ocorre inferencia de tipos)
let nome: string = 'Gus'
let idade: number = 25 // 10, 1.57, -5.55, 0xf100d, 0b0aa12, 0o7744
let adulto: boolean = true
let simbolo: symbol = Symbol('qualquer-symbol')
// let big: bigint = 10n; //bigint


//Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3]
let arrayDeNumeros2: number[] = [1, 2, 3, 4, 5, 6]
let arrayDeStrings: Array<string> = ['1', 'a', '3']

// Objetos
let pessoa: { nome: string, idade: number, adulto?: boolean } = {
    idade: 25,
    nome: 'Gus'
}

// Funções
function soma(x: number, y: number) {
    return x + y
}

const soma2: (x: number, y: number) => number = (x, y) => x + y

