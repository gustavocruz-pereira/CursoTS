// tipo unknown é mais seguro do que o any

let x: unknown = 0

x = 10
x = 'AAA'
x = 10
const y = 10


if (typeof x === 'number') console.log(x + y)

