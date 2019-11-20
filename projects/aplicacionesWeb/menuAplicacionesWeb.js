window.addEventListener("load", function () {

    var titulosProyectos = window.document.getElementsByClassName("titulosPlanetas")

    var titulo1 = new CircleType(titulosProyectos[0])
        .radius(480)
        .dir(1)

    var titulo2 = new CircleType(titulosProyectos[1])
        .radius(150)
        .dir(-1)

    var titulo3 = new CircleType(titulosProyectos[2])
        .radius(150)
        .dir(-1)

    var titulo4 = new CircleType(titulosProyectos[3])
        .radius(190)
        .dir(-1)

    var titulo5 = new CircleType(titulosProyectos[4])
        .radius(150)
        .dir(-1)

    var titulo6 = new CircleType(titulosProyectos[5])
        .radius(140)
        .dir(-1)

    particulas()

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