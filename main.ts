let Contrasenya = 0
let Numero = 0
let Lletra = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("Pass =")
    for (let index = 0; index < 8; index++) {
        Contrasenya = randint(1, 3)
        if (Contrasenya == 1) {
            Numero = randint(0, 9)
            basic.showString("" + (Numero))
        } else if (Contrasenya == 2) {
            Lletra = randint(5, 8)
            if (Lletra == 5) {
                basic.showString("A")
            } else if (Lletra == 6) {
                basic.showString("Z")
            } else if (Lletra == 7) {
                basic.showString("N")
            } else if (Lletra == 8) {
                basic.showString("P")
            }
        } else if (false) {
        	
        }
    }
})
