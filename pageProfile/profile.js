var botonMenu = window.document.getElementsByClassName("botonMenu");
var seccion1 = window.document.getElementById("seccion1");

window.addEventListener("load", function () {

    graficaHabilidad1()
    graficaHabilidad2()
    graficaHabilidad3()
    graficaHabilidad4()
    graficaHabilidad5()

    graficaLenguajes1()
    graficaLenguajes2()
    graficaLenguajes3()
    graficaLenguajes4()
    graficaLenguajes5()
    graficaLenguajes6()

    graficaHerramientas1()
    graficaHerramientas2()
    graficaHerramientas3()
    graficaHerramientas4()
    graficaHerramientas5()
    graficaHerramientas6()
    graficaHerramientas7()
    graficaHerramientas8()
    graficaHerramientas9()

    for (var i = 0; i < botonMenu.length; i++) {
        botonMenu[i].addEventListener('click', mostrarCaja);
    }

    function mostrarCaja() {

        var id = this.getAttribute('id');
        window.seccionPerfil = parseInt(id.substr(5));

        ocultarCaja(window.seccionPerfil)
    }

    function ocultarCaja(el) {

        for (var i = 1; i <= window.botonMenu.length; i++) {
            console.log("hola soy el " + el)
            if (i != el) {
                var animTransicion = new TimelineMax();
                animTransicion.to(document.getElementById("seccion" + i), 0.5, { opacity: 0 })
                    .set(document.getElementById("seccion" + i), { zIndex: -1 })

                document.getElementById("boton" + i).classList.remove("opcionSeleccionada")
            } else {
                var animTransicion = new TimelineMax();
                animTransicion.set(document.getElementById("seccion" + i), { zIndex: 2 })
                    .to(document.getElementById("seccion" + i), 0.5, { opacity: 1 })

                document.getElementById("boton" + i).classList.add("opcionSeleccionada")
            }
            console.log(i)
        }
    }

    particulas()
})

function particulas() {
    particlesJS.load('particlesJs', '../particle2.json', function () {
        console.log('callback - particles.js config loaded');
    });
}

/**********************************************************
                    H A B I L I D A D
***********************************************************/
function graficaHabilidad1() { 
    AmCharts.makeChart("grafica_habilidad1",
        {
            "type": "pie",
            "balloonText": "[[percents]]%",
            "innerRadius": "65%",
            "labelText": "",
            "pullOutRadius": "0%",
            "radius": 0,
            "colors": [
                "#2983A6",
                "transparent"
            ],
            "marginBottom": 0,
            "marginTop": 0,
            "pullOutDuration": 0.5,
            "pullOutEffect": "easeOutSine",
            "startEffect": "easeOutSine",
            "titleField": "category",
            "valueField": "column-1",
            "theme": "chalk",
            "allLabels": [],
            "balloon": {},
            "titles": [],
            "dataProvider": [
                {
                    "category": "category 1",
                    "column-1": "72"
                },
                {
                    "category": "category 2",
                    "column-1": "28"
                }
            ]
        }
    );
}

function graficaHabilidad2() {
    AmCharts.makeChart("grafica_habilidad2",
        {
            "type": "pie",
            "balloonText": "[[percents]]%",
            "innerRadius": "65%",
            "labelText": "",
            "pullOutRadius": "0%",
            "radius": 0,
            "colors": [
                "#3E2EA6",
                "transparent"
            ],
            "marginBottom": 0,
            "marginTop": 0,
            "pullOutDuration": 0.5,
            "pullOutEffect": "easeOutSine",
            "startEffect": "easeOutSine",
            "titleField": "category",
            "valueField": "column-1",
            "theme": "chalk",
            "allLabels": [],
            "balloon": {},
            "titles": [],
            "dataProvider": [
                {
                    "category": "category 1",
                    "column-1": "87"
                },
                {
                    "category": "category 2",
                    "column-1": "13"
                }
            ]
        }
    );
}

function graficaHabilidad3() {
    AmCharts.makeChart("grafica_habilidad3",
        {
            "type": "pie",
            "balloonText": "[[percents]]%",
            "innerRadius": "65%",
            "labelText": "",
            "pullOutRadius": "0%",
            "radius": 0,
            "colors": [
                "#D96704",
                "transparent"
            ],
            "marginBottom": 0,
            "marginTop": 0,
            "pullOutDuration": 0.5,
            "pullOutEffect": "easeOutSine",
            "startEffect": "easeOutSine",
            "titleField": "category",
            "valueField": "column-1",
            "theme": "chalk",
            "allLabels": [],
            "balloon": {},
            "titles": [],
            "dataProvider": [
                {
                    "category": "category 1",
                    "column-1": "65"
                },
                {
                    "category": "category 2",
                    "column-1": "35"
                }
            ]
        }
    );
}

function graficaHabilidad4() {
    AmCharts.makeChart("grafica_habilidad4",
        {
            "type": "pie",
            "balloonText": "[[percents]]%",
            "innerRadius": "65%",
            "labelText": "",
            "pullOutRadius": "0%",
            "radius": 0,
            "colors": [
                "#F2D22E",
                "transparent"
            ],
            "marginBottom": 0,
            "marginTop": 0,
            "pullOutDuration": 0.5,
            "pullOutEffect": "easeOutSine",
            "startEffect": "easeOutSine",
            "titleField": "category",
            "valueField": "column-1",
            "theme": "chalk",
            "allLabels": [],
            "balloon": {},
            "titles": [],
            "dataProvider": [
                {
                    "category": "category 1",
                    "column-1": "60"
                },
                {
                    "category": "category 2",
                    "column-1": "40"
                }
            ]
        }
    );
}

function graficaHabilidad5() {
    AmCharts.makeChart("grafica_habilidad5",
        {
            "type": "pie",
            "balloonText": "[[percents]]%",
            "innerRadius": "65%",
            "labelText": "",
            "pullOutRadius": "0%",
            "radius": 0,
            "colors": [
                "#73C900",
                "transparent"
            ],
            "marginBottom": 0,
            "marginTop": 0,
            "pullOutDuration": 0.5,
            "pullOutEffect": "easeOutSine",
            "startEffect": "easeOutSine",
            "titleField": "category",
            "valueField": "column-1",
            "theme": "chalk",
            "allLabels": [],
            "balloon": {},
            "titles": [],
            "dataProvider": [
                {
                    "category": "category 1",
                    "column-1": "75"
                },
                {
                    "category": "category 2",
                    "column-1": "25"
                }
            ]
        }
    );
}


/**********************************************************
                    L  E N G U A J E S
***********************************************************/
function graficaLenguajes1() {
    AmCharts.makeChart("grafica_lenguajes1",
        {
            "type": "pie",
            "balloonText": "[[percents]]%",
            "innerRadius": "65%",
            "labelText": "",
            "pullOutRadius": "0%",
            "radius": 0,
            "colors": [
                "#E44D26",
                "transparent"
            ],
            "marginBottom": 0,
            "marginTop": 0,
            "pullOutDuration": 0.5,
            "pullOutEffect": "easeOutSine",
            "startEffect": "easeOutSine",
            "titleField": "category",
            "valueField": "column-1",
            "theme": "chalk",
            "allLabels": [],
            "balloon": {},
            "titles": [],
            "dataProvider": [
                {
                    "category": "category 1",
                    "column-1": "72"
                },
                {
                    "category": "category 2",
                    "column-1": "28"
                }
            ]
        }
    );
}

function graficaLenguajes2() {
    AmCharts.makeChart("grafica_lenguajes2",
        {
            "type": "pie",
            "balloonText": "[[percents]]%",
            "innerRadius": "65%",
            "labelText": "",
            "pullOutRadius": "0%",
            "radius": 0,
            "colors": [
                "#264DE4",
                "transparent"
            ],
            "marginBottom": 0,
            "marginTop": 0,
            "pullOutDuration": 0.5,
            "pullOutEffect": "easeOutSine",
            "startEffect": "easeOutSine",
            "titleField": "category",
            "valueField": "column-1",
            "theme": "chalk",
            "allLabels": [],
            "balloon": {},
            "titles": [],
            "dataProvider": [
                {
                    "category": "category 1",
                    "column-1": "70"
                },
                {
                    "category": "category 2",
                    "column-1": "30"
                }
            ]
        }
    );
}

function graficaLenguajes3() {
    AmCharts.makeChart("grafica_lenguajes3",
        {
            "type": "pie",
            "balloonText": "[[percents]]%",
            "innerRadius": "65%",
            "labelText": "",
            "pullOutRadius": "0%",
            "radius": 0,
            "colors": [
                "#F89C35",
                "transparent"
            ],
            "marginBottom": 0,
            "marginTop": 0,
            "pullOutDuration": 0.5,
            "pullOutEffect": "easeOutSine",
            "startEffect": "easeOutSine",
            "titleField": "category",
            "valueField": "column-1",
            "theme": "chalk",
            "allLabels": [],
            "balloon": {},
            "titles": [],
            "dataProvider": [
                {
                    "category": "category 1",
                    "column-1": "65"
                },
                {
                    "category": "category 2",
                    "column-1": "35"
                }
            ]
        }
    );
}

function graficaLenguajes4() {
    AmCharts.makeChart("grafica_lenguajes4",
        {
            "type": "pie",
            "balloonText": "[[percents]]%",
            "innerRadius": "65%",
            "labelText": "",
            "pullOutRadius": "0%",
            "radius": 0,
            "colors": [
                "#9968D5",
                "transparent"
            ],
            "marginBottom": 0,
            "marginTop": 0,
            "pullOutDuration": 0.5,
            "pullOutEffect": "easeOutSine",
            "startEffect": "easeOutSine",
            "titleField": "category",
            "valueField": "column-1",
            "theme": "chalk",
            "allLabels": [],
            "balloon": {},
            "titles": [],
            "dataProvider": [
                {
                    "category": "category 1",
                    "column-1": "50"
                },
                {
                    "category": "category 2",
                    "column-1": "50"
                }
            ]
        }
    );
}

function graficaLenguajes5() {
    AmCharts.makeChart("grafica_lenguajes5",
        {
            "type": "pie",
            "balloonText": "[[percents]]%",
            "innerRadius": "65%",
            "labelText": "",
            "pullOutRadius": "0%",
            "radius": 0,
            "colors": [
                "#EC2025",
                "transparent"
            ],
            "marginBottom": 0,
            "marginTop": 0,
            "pullOutDuration": 0.5,
            "pullOutEffect": "easeOutSine",
            "startEffect": "easeOutSine",
            "titleField": "category",
            "valueField": "column-1",
            "theme": "chalk",
            "allLabels": [],
            "balloon": {},
            "titles": [],
            "dataProvider": [
                {
                    "category": "category 1",
                    "column-1": "40"
                },
                {
                    "category": "category 2",
                    "column-1": "60"
                }
            ]
        }
    );
}

function graficaLenguajes6() {
    AmCharts.makeChart("grafica_lenguajes6",
        {
            "type": "pie",
            "balloonText": "[[percents]]%",
            "innerRadius": "65%",
            "labelText": "",
            "pullOutRadius": "0%",
            "radius": 0,
            "colors": [
                "#01628F",
                "transparent"
            ],
            "marginBottom": 0,
            "marginTop": 0,
            "pullOutDuration": 0.5,
            "pullOutEffect": "easeOutSine",
            "startEffect": "easeOutSine",
            "titleField": "category",
            "valueField": "column-1",
            "theme": "chalk",
            "allLabels": [],
            "balloon": {},
            "titles": [],
            "dataProvider": [
                {
                    "category": "category 1",
                    "column-1": "75"
                },
                {
                    "category": "category 2",
                    "column-1": "25"
                }
            ]
        }
    );
}

/**********************************************************
                H E R R A M I E N T A S
***********************************************************/
function graficaHerramientas1() {
    AmCharts.makeChart("grafica_herramientas1",
        {
            "type": "pie",
            "balloonText": "[[percents]]%",
            "innerRadius": "65%",
            "labelText": "",
            "pullOutRadius": "0%",
            "radius": 0,
            "colors": [
                "#D291FF",
                "transparent"
            ],
            "marginBottom": 0,
            "marginTop": 0,
            "pullOutDuration": 0.5,
            "pullOutEffect": "easeOutSine",
            "startEffect": "easeOutSine",
            "titleField": "category",
            "valueField": "column-1",
            "theme": "chalk",
            "allLabels": [],
            "balloon": {},
            "titles": [],
            "dataProvider": [
                {
                    "category": "category 1",
                    "column-1": "75"
                },
                {
                    "category": "category 2",
                    "column-1": "25"
                }
            ]
        }
    );
}

function graficaHerramientas2() {
    AmCharts.makeChart("grafica_herramientas2",
        {
            "type": "pie",
            "balloonText": "[[percents]]%",
            "innerRadius": "65%",
            "labelText": "",
            "pullOutRadius": "0%",
            "radius": 0,
            "colors": [
                "#FF7C00",
                "transparent"
            ],
            "marginBottom": 0,
            "marginTop": 0,
            "pullOutDuration": 0.5,
            "pullOutEffect": "easeOutSine",
            "startEffect": "easeOutSine",
            "titleField": "category",
            "valueField": "column-1",
            "theme": "chalk",
            "allLabels": [],
            "balloon": {},
            "titles": [],
            "dataProvider": [
                {
                    "category": "category 1",
                    "column-1": "87"
                },
                {
                    "category": "category 2",
                    "column-1": "13"
                }
            ]
        }
    );
}

function graficaHerramientas3() {
    AmCharts.makeChart("grafica_herramientas3",
        {
            "type": "pie",
            "balloonText": "[[percents]]%",
            "innerRadius": "65%",
            "labelText": "",
            "pullOutRadius": "0%",
            "radius": 0,
            "colors": [
                "#82BCFB",
                "transparent"
            ],
            "marginBottom": 0,
            "marginTop": 0,
            "pullOutDuration": 0.5,
            "pullOutEffect": "easeOutSine",
            "startEffect": "easeOutSine",
            "titleField": "category",
            "valueField": "column-1",
            "theme": "chalk",
            "allLabels": [],
            "balloon": {},
            "titles": [],
            "dataProvider": [
                {
                    "category": "category 1",
                    "column-1": "60"
                },
                {
                    "category": "category 2",
                    "column-1": "40"
                }
            ]
        }
    );
}

function graficaHerramientas4() {
    AmCharts.makeChart("grafica_herramientas4",
        {
            "type": "pie",
            "balloonText": "[[percents]]%",
            "innerRadius": "65%",
            "labelText": "",
            "pullOutRadius": "0%",
            "radius": 0,
            "colors": [
                "#258DD3",
                "transparent"
            ],
            "marginBottom": 0,
            "marginTop": 0,
            "pullOutDuration": 0.5,
            "pullOutEffect": "easeOutSine",
            "startEffect": "easeOutSine",
            "titleField": "category",
            "valueField": "column-1",
            "theme": "chalk",
            "allLabels": [],
            "balloon": {},
            "titles": [],
            "dataProvider": [
                {
                    "category": "category 1",
                    "column-1": "65"
                },
                {
                    "category": "category 2",
                    "column-1": "35"
                }
            ]
        }
    );
}

function graficaHerramientas5() {
    AmCharts.makeChart("grafica_herramientas5",
        {
            "type": "pie",
            "balloonText": "[[percents]]%",
            "innerRadius": "65%",
            "labelText": "",
            "pullOutRadius": "0%",
            "radius": 0,
            "colors": [
                "#005063",
                "transparent"
            ],
            "marginBottom": 0,
            "marginTop": 0,
            "pullOutDuration": 0.5,
            "pullOutEffect": "easeOutSine",
            "startEffect": "easeOutSine",
            "titleField": "category",
            "valueField": "column-1",
            "theme": "chalk",
            "allLabels": [],
            "balloon": {},
            "titles": [],
            "dataProvider": [
                {
                    "category": "category 1",
                    "column-1": "80"
                },
                {
                    "category": "category 2",
                    "column-1": "20"
                }
            ]
        }
    );
}

function graficaHerramientas6() {
    AmCharts.makeChart("grafica_herramientas6",
        {
            "type": "pie",
            "balloonText": "[[percents]]%",
            "innerRadius": "65%",
            "labelText": "",
            "pullOutRadius": "0%",
            "radius": 0,
            "colors": [
                "#6EBF4B",
                "transparent"
            ],
            "marginBottom": 0,
            "marginTop": 0,
            "pullOutDuration": 0.5,
            "pullOutEffect": "easeOutSine",
            "startEffect": "easeOutSine",
            "titleField": "category",
            "valueField": "column-1",
            "theme": "chalk",
            "allLabels": [],
            "balloon": {},
            "titles": [],
            "dataProvider": [
                {
                    "category": "category 1",
                    "column-1": "50"
                },
                {
                    "category": "category 2",
                    "column-1": "50"
                }
            ]
        }
    );
}

function graficaHerramientas7() {
    AmCharts.makeChart("grafica_herramientas7",
        {
            "type": "pie",
            "balloonText": "[[percents]]%",
            "innerRadius": "65%",
            "labelText": "",
            "pullOutRadius": "0%",
            "radius": 0,
            "colors": [
                "#169499",
                "transparent"
            ],
            "marginBottom": 0,
            "marginTop": 0,
            "pullOutDuration": 0.5,
            "pullOutEffect": "easeOutSine",
            "startEffect": "easeOutSine",
            "titleField": "category",
            "valueField": "column-1",
            "theme": "chalk",
            "allLabels": [],
            "balloon": {},
            "titles": [],
            "dataProvider": [
                {
                    "category": "category 1",
                    "column-1": "75"
                },
                {
                    "category": "category 2",
                    "column-1": "25"
                }
            ]
        }
    );
}

function graficaHerramientas8() {
    AmCharts.makeChart("grafica_herramientas8",
        {
            "type": "pie",
            "balloonText": "[[percents]]%",
            "innerRadius": "65%",
            "labelText": "",
            "pullOutRadius": "0%",
            "radius": 0,
            "colors": [
                "#255179",
                "transparent"
            ],
            "marginBottom": 0,
            "marginTop": 0,
            "pullOutDuration": 0.5,
            "pullOutEffect": "easeOutSine",
            "startEffect": "easeOutSine",
            "titleField": "category",
            "valueField": "column-1",
            "theme": "chalk",
            "allLabels": [],
            "balloon": {},
            "titles": [],
            "dataProvider": [
                {
                    "category": "category 1",
                    "column-1": "45"
                },
                {
                    "category": "category 2",
                    "column-1": "55"
                }
            ]
        }
    );
}

function graficaHerramientas9() {
    AmCharts.makeChart("grafica_herramientas9",
        {
            "type": "pie",
            "balloonText": "[[percents]]%",
            "innerRadius": "65%",
            "labelText": "",
            "pullOutRadius": "0%",
            "radius": 0,
            "colors": [
                "#8AC640",
                "transparent"
            ],
            "marginBottom": 0,
            "marginTop": 0,
            "pullOutDuration": 0.5,
            "pullOutEffect": "easeOutSine",
            "startEffect": "easeOutSine",
            "titleField": "category",
            "valueField": "column-1",
            "theme": "chalk",
            "allLabels": [],
            "balloon": {},
            "titles": [],
            "dataProvider": [
                {
                    "category": "category 1",
                    "column-1": "80"
                },
                {
                    "category": "category 2",
                    "column-1": "20"
                }
            ]
        }
    );
}