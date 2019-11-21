var keyPressE = 0;
var keyPressP = 0;
var keyPressJ = 0;

var elementoSeleccionado = 0;
window.addEventListener("load", function () {

    window.addEventListener("keydown", e => {
        //Presionaste la E
        if (e.keyCode == 69) {
            window.keyPressE++;
            location.href = "../projects/experiencias/menuExperiencias.html";
            // console.log("Presionaste la E")
            // if (window.keyPressE == 10) {
            //     console.log("llegaste")
                
            // }
        //Presionaste la p
        } else if (e.keyCode == 80) {
            window.keyPressP++;
            location.href = "../projects/aplicacionesWeb/menuAplicacionesWeb.html";
            // console.log("Presionaste la P")
            // if (window.keyPressP == 10) {
            //     console.log("llegaste")
                
            // }
        //Presionaste la J
        } else if (e.keyCode == 74) {
            window.keyPressJ++;
            location.href = "../projects/juegos/menuJuegos.html";
            // console.log("Presionaste la J")
            // if (window.keyPressJ == 10) {
            //     console.log("llegaste")
                
            // }
        }
    })

    for(var i = 1; i <=3; i++){
        var botonMenu = "elemento" + i;
        document.getElementById(botonMenu).addEventListener('click', elemento);
    }

    function elemento() {

        var id = this.getAttribute('id');
        window.elementoSeleccionado = parseInt(id.substr(8));

        switch(window.elementoSeleccionado){
            case 1:
                location.href = "../projects/experiencias/menuExperiencias.html";
                break;

            case 2:
                location.href = "../projects/aplicacionesWeb/menuAplicacionesWeb.html";
                break;

            case 3:
                location.href = "../projects/juegos/menuJuegos.html";
                break;
        }
    }

    particulas1()
    particulas2()
    particulas3()

})

function particulas1() {
    particlesJS.load('particlesJs1', '../particle2.json', function () {
        console.log('callback - particles.js config loaded');
    });
}

function particulas2() {
    particlesJS.load('particlesJs2', '../particle2.json', function () {
        console.log('callback - particles.js config loaded');
    });
}

function particulas3() {
    particlesJS.load('particlesJs3', '../particle2.json', function () {
        console.log('callback - particles.js config loaded');
    });
}