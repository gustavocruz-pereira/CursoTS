// Array<T> - T[]

export function multiplicaArgs(...args: Array<number>): number {
    return args.reduce((ac, valor) => ac * valor, 1)
}

export function mediaNumeros(...args: number[]): number {
    let n = 0
    for (let v of args) {
        v += v
        n = v
    }
    return n / args.length
}

export function concatenaString(...args: string[]): string {
    return args.reduce((ac, valor) => ac + valor);
}


console.log(mediaNumeros(1, 2, 3))
console.log(concatenaString('Java', 'script'))
