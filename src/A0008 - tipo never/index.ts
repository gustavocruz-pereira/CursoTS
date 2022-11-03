// Não retorna nada
function criaErro(): never {
    throw new Error('Erro qualquer')
}

criaErro()
