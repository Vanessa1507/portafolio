var keyPressE = 0;
var keyPressP = 0;
var keyPressJ = 0;

window.addEventListener("load", function () {

    window.addEventListener("keydown", e => {
        //Presionaste la E
        if (e.keyCode == 69) {
            window.keyPressE++;
            console.log("Presionaste la E")
            if (window.keyPressE == 10) {
                console.log("llegaste")
                location.href = "../projects/experiencias/menuExperiencias.html";
            }
        //Presionaste la p
        } else if (e.keyCode == 80) {
            window.keyPressP++;
            console.log("Presionaste la P")
            if (window.keyPressP == 10) {
                console.log("llegaste")
                location.href = "../projects/aplicacionesWeb/menuAplicacionesWeb.html";
            }
        //Presionaste la J
        } else if (e.keyCode == 74) {
            window.keyPressJ++;
            console.log("Presionaste la J")
            if (window.keyPressJ == 10) {
                console.log("llegaste")
                location.href = "../projects/juegos/menuJuegos.html";
            }
        }
    })

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