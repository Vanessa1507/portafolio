var keyPressCount = 0;

window.addEventListener("load", function () {
    console.log("hola")

    var titulosHome = window.document.getElementsByClassName("texto_boton")


    for (var i = 0; i < titulosHome.length; i++) {
        new CircleType(titulosHome[i])
            .radius(240)
            .dir(-1)

    }

    window.addEventListener("keydown", e =>{
        if(e.keyCode == 32){
            window.keyPressCount++;
            if(window.keyPressCount == 10){
                console.log("llegaste")
                location.href = "pageMenuProjects/menuProjects.html";                
            }
        }
    })

    particulas()

})

function particulas() {
    particlesJS.load('particlesJs', 'particle2.json', function () {
        console.log('callback - particles.js config loaded');
    });
}