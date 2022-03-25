let Contrasenya = 0
let Numero = 0
let Lletra = 0
let simbolo = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("Pass =")
    for (let index = 0; index < 8; index++) {
        Contrasenya = randint(1, 3)
        if (Contrasenya == 1) {
            Numero = randint(0, 9)
            basic.showString("" + (Numero))
            basic.pause(2000)
        } else if (Contrasenya == 2) {
            Lletra = randint(5, 8)
            if (Lletra == 5) {
                basic.showString("A")
                basic.pause(2000)
            } else if (Lletra == 6) {
                basic.showString("Z")
                basic.pause(2000)
            } else if (Lletra == 7) {
                basic.showString("N")
                basic.pause(2000)
            } else if (Lletra == 8) {
                basic.showString("P")
                basic.pause(2000)
            }
        } else if (Contrasenya == 3) {
            simbolo = randint(1, 4)
            if (simbolo == 1) {
                basic.showString("*")
                basic.pause(2000)
            } else if (simbolo == 2) {
                basic.showString("}")
                basic.pause(2000)
            } else if (simbolo == 3) {
                basic.showString("#")
                basic.pause(2000)
            } else if (simbolo == 4) {
                basic.showString("&")
                basic.pause(2000)
            }
        }
    }
    basic.clearScreen()
})
