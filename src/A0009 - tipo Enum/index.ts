enum Colors {
    RED,
    BLUE,
    GREEN,
}

enum Colors {
    PURPLE = 10,
    YELLOW,
    PINK

}

console.log(Colors.GREEN)
console.log(Colors[0])

function chooseColor(color: Colors): void {
    console.log(Colors[color])
}

chooseColor(Colors.BLUE)
