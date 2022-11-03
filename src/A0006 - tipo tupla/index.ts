// Tuple
const dadosCliente: readonly [number, string, number?] = [1, 'Gus']
const dadosCliente4: [number, string, ...number[]] = [1, 'Gus']


dadosCliente4[0] = 2
dadosCliente4.pop()
dadosCliente[1] = 'OSdhisauhd'

console.log(dadosCliente)

// readonly array
const array1: readonly string[] = ['Gustavo', 'Cruz']
const array2: ReadonlyArray<string> = ['Gustavo', 'Cruz']
