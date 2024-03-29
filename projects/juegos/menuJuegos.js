window.addEventListener("load", function () {

    var titulosProyectos = window.document.getElementsByClassName("titulosPlanetas")

    var titulo0 = new CircleType(titulosProyectos[0])
        .radius(480)
        .dir(1)

    var titulo1 = new CircleType(titulosProyectos[1])
        .radius(170)
        .dir(-1)

    var titulo2 = new CircleType(titulosProyectos[2])
        .radius(150)

    var titulo3 = new CircleType(titulosProyectos[3])
        .radius(150)
        .dir(-1)

    particulas()

    for(var i = 1; i <=3; i++){
        var botonMenu = "planeta" + i;
        document.getElementById(botonMenu).addEventListener('click', planeta);
    }

    function planeta() {

        var id = this.getAttribute('id');
        window.elementoSeleccionado = parseInt(id.substr(7));

        switch(window.elementoSeleccionado){
            case 1:
                location.href = "./01_rompecabezasEspacial/01_rompecabezasEspacial.html";
                break;

            case 2:
                // location.href = "../projects/aplicacionesWeb/menuAplicacionesWeb.html";
                console.log("hola" + window.elementoSeleccionado)
                break;

            case 3:
                // location.href = "../projects/juegos/menuJuegos.html";
                console.log("hola" + window.elementoSeleccionado)
                break;
        }
    }

})

function dragScroll() {
    var item = document.getElementsByTagName('BODY')[0];

    window.addEventListener('wheel', function (e) {

        if (e.deltaY > 0) item.scrollLeft += 100;
        else item.scrollLeft -= 100;
    });
}

function particulas() {
    particlesJS.load('particlesJs', '../../particle2.json', function () {
        console.log('callback - particles.js config loaded');
    });
}