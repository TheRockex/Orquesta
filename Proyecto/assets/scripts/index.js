function fInicio() {
    let html = "";
    html += "<div class = 'apart' onclick='fAbonos()'>ABONOS</div>";
    html += "<div class = 'apart' onclick='fTienda()'>TIENDA ONLINE</div>";
    document.querySelector("section").innerHTML = html;
}

function fMenu() {
    menu = document.querySelector('nav');
    aparezca = document.querySelector('body');
    aparezca.classList.toggle('alt');
    if (menu.style.display == 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
}



function fAbrirPanelCompositor(como, id) {
    //Guardar datos como e id
    document.querySelector("#accion").value = como;
    document.querySelector("#id").value = id;
    //Preparar botones
    let botones = `<input type="button" value="Cancelar" onclick="fCerrarModal()">`;
    const compositores = document.querySelectorAll(".compositor");
        compositores.forEach(compositor => {
            compositor.style.display = "flex";
        });
    if (como == 'a') {
        document.querySelector('#nombre').value = "";
        document.querySelector('#fechan').value = "";
        document.querySelector('#fechaf').value = "";

        botones += `<input type="button" value="Grabar" onclick="fGuardarCompositor()">`;

        document.querySelector(".botonera").innerHTML = botones;
        
        document.querySelector("#div_modal").style.display = "flex";
        return;
    }

    let URL = 'assets/php/servidor.php?peticion=buscar_por_id_compositor&id=' + id;
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            console.warn("Datos: ", data.respuesta);
            console.warn("SQL: ", data.sql);
            document.querySelector('#nombre').value = data.respuesta[0].nombre_compositor;
            document.querySelector('#fechan').value = data.respuesta[0].fechan_compositor;
            document.querySelector('#fechaf').value = data.respuesta[0].fechaf_compositor;
            if (como == 'b') {
                botones += `<input type="button" value="Borrar" onclick="fGuardarCompositor()">`;
            } else {
                botones += `<input type="button" value="Modificar" onclick="fGuardarCompositor()">`;
            }
            document.querySelector(".botonera").innerHTML = botones;
            document.querySelector("#div_modal").style.display = "flex";
        }
        )
}


function fAbrirPanelSolista(como, id) {
    //Guardar datos como e id
    document.querySelector("#accion").value = como;
    document.querySelector("#id").value = id;
    //Preparar botones
    let botones = `<input type="button" value="Cancelar" onclick="fCerrarModal()">`;
    const solista = document.querySelectorAll(".solista");
        solista.forEach(solista => {
            solista.style.display = "flex";
        });
    if (como == 'a') {
        document.querySelector('#nombre_solista').value = "";
        document.querySelector('#fechan_solista').value = "";
        document.querySelector('#instrumento_solista').value = "";

        botones += `<input type="button" value="Grabar" onclick="fGuardarSolista()">`;

        document.querySelector(".botonera").innerHTML = botones;
        
        document.querySelector("#div_modal").style.display = "flex";
        return;
    }

    let URL = 'assets/php/servidor.php?peticion=buscar_por_id_solista&id=' + id;
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            console.warn("Datos: ", data.respuesta);
            console.warn("SQL: ", data.sql);
            document.querySelector('#nombre_solista').value = data.respuesta[0].nombre_solista;
            document.querySelector('#fechan_solista').value = data.respuesta[0].fechan_solista;
            document.querySelector('#instrumento_solista').value = data.respuesta[0].instrumento_solista;
            if (como == 'b') {
                botones += `<input type="button" value="Borrar" onclick="fGuardarSolista()">`;
            } else {
                botones += `<input type="button" value="Modificar" onclick="fGuardarSolista()">`;
            }
            document.querySelector(".botonera").innerHTML = botones;
            document.querySelector("#div_modal").style.display = "flex";
        }
        )
}

function fAbrirPanelDirector(como, id) {
    //Guardar datos como e id
    document.querySelector("#accion").value = como;
    document.querySelector("#id").value = id;
    //Preparar botones
    let botones = `<input type="button" value="Cancelar" onclick="fCerrarModal()">`;
    const director = document.querySelectorAll(".director");
        director.forEach(director => {
            director.style.display = "flex";
        });
    if (como == 'a') {
        document.querySelector('#nombre_director').value = "";
        document.querySelector('#direccion_director').value = "";
        document.querySelector('#fechan_director').value = "";
        document.querySelector('#titulacion_director').value = "";

        botones += `<input type="button" value="Grabar" onclick="fGuardarDirector()">`;

        document.querySelector(".botonera").innerHTML = botones;
        
        document.querySelector("#div_modal").style.display = "flex";
        return;
    }

    let URL = 'assets/php/servidor.php?peticion=buscar_por_id_director&id=' + id;
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            console.warn("Datos: ", data.respuesta);
            console.warn("SQL: ", data.sql);
            document.querySelector('#nombre_director').value = data.respuesta[0].nombre_director;
            document.querySelector('#direccion_director').value = data.respuesta[0].direccion_director;
            document.querySelector('#fechan_director').value = data.respuesta[0].fechan_director;
            document.querySelector('#titulacion_director').value = data.respuesta[0].titulacion_director;
            if (como == 'b') {
               
                botones += `<input type="button" value="Borrar" onclick="fGuardarDirector()">`;
            } else {
                botones += `<input type="button" value="Modificar" onclick="fGuardarDirector()">`;
            }
            document.querySelector(".botonera").innerHTML = botones;
            document.querySelector("#div_modal").style.display = "flex";
        }
        )
}

function fAbrirPanelObra(como, id) {
    //Guardar datos como e id
    document.querySelector("#accion").value = como;
    document.querySelector("#id").value = id;
    //Preparar botones
    let botones = `<input type="button" value="Cancelar" onclick="fCerrarModal()">`;
    const obra = document.querySelectorAll(".obra");
        obra.forEach(obra => {
            obra.style.display = "flex";
        });
        
            let URL2 = 'assets/php/servidor.php?peticion=cargar_compositores'
            fetch(URL2)
                .then((response) => response.json())
                .then((data) => {
                    console.warn("Compositor: ", data)
                    let html = "";
                    html += "<table>";
                    html += "<thead>";
                    html += "<tr>";
                    html += "<th>Nombres Compositores</th>"
                    html += "</tr>";
                    html += "</thead>";
                    html += "<tbody>";
                    data.forEach(item => {
                        html += "<tr>";
                        html += "<td>" + item.codigo_compositor + "." + item.nombre_compositor + "</td>";
                        html += "</tr>";
                    });
                    html += "</tbody>";
                    html += "</table>";
                    document.querySelector(".tablaO").innerHTML = html;
                    document.querySelector(".tablaO").style.display = "flex";
                })
    if (como == 'a') {
        document.querySelector('#compositor').value = "";
        document.querySelector('#titulo_obra').value = "";

        botones += `<input type="button" value="Grabar" onclick="fGuardarObra()">`;

        document.querySelector(".botonera").innerHTML = botones;
        
        document.querySelector("#div_modal").style.display = "flex";
        return;
    }
    let URL = 'assets/php/servidor.php?peticion=buscar_por_id_obra&id=' + id;
  
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            console.warn("Datos: ", data.respuesta);
            console.warn("SQL: ", data.sql);
            document.querySelector('#compositor').value = data.respuesta[0].compositor;
            document.querySelector('#titulo_obra').value = data.respuesta[0].titulo_obra;
            if (como == 'b') {
                botones += `<input type="button" value="Borrar" onclick="fGuardarObra()">`;
            } else {
                botones += `<input type="button" value="Modificar" onclick="fGuardarObra()">`;
            }
            document.querySelector(".botonera").innerHTML = botones;
            document.querySelector("#div_modal").style.display = "flex";
        }
        )
}

function fAbrirPanelBanda(como, id) {
    //Guardar datos como e id
    document.querySelector("#accion").value = como;
    document.querySelector("#id").value = id;
    //Preparar botones
    let botones = `<input type="button" value="Cancelar" onclick="fCerrarModal()">`;
    const banda = document.querySelectorAll(".banda");
        banda.forEach(banda => {
            banda.style.display = "flex";
        });

        let URL2 = 'assets/php/servidor.php?peticion=cargar_director'
        fetch(URL2)
            .then((response) => response.json())
            .then((data) => {
                console.warn("Director: ", data)
                let html = "";
                html += "<table>";
                html += "<thead>";
                html += "<tr>";
                html += "<th>Nombres Directores</th>"
                html += "</tr>";
                html += "</thead>";
                html += "<tbody>";
                data.forEach(item => {
                    html += "<tr>";
                    html += "<td>" + item.codigo_director + "." + item.nombre_director + "</td>";
                    html += "</tr>";
                });
                html += "</tbody>";
                html += "</table>";
                document.querySelector(".tablaO").innerHTML = html;
                document.querySelector("#div_modal>form").style.height = "700px";
                document.querySelector(".tablaO").style.display = "flex";
            })
    if (como == 'a') {
        document.querySelector('#codigo_director').value = "";
        document.querySelector('#nombre_banda').value = "";
        document.querySelector('#numero_componentes').value = "";

        botones += `<input type="button" value="Grabar" onclick="fGuardarOrquesta()">`;

        document.querySelector(".botonera").innerHTML = botones;
        
        document.querySelector("#div_modal").style.display = "flex";
        return;
    }

    let URL = 'assets/php/servidor.php?peticion=buscar_por_id_banda&id=' + id;
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            console.warn("Datos: ", data.respuesta);
            console.warn("SQL: ", data.sql);
            document.querySelector('#codigo_director').value = data.respuesta[0].codigo_director;
            document.querySelector('#nombre_banda').value = data.respuesta[0].nombre_banda;
            document.querySelector('#numero_componentes').value = data.respuesta[0].numero_componentes;
            if (como == 'b') {
                botones += `<input type="button" value="Borrar" onclick="fGuardarOrquesta()">`;
            } else {
                botones += `<input type="button" value="Modificar" onclick="fGuardarOrquesta()">`;
            }
            document.querySelector(".botonera").innerHTML = botones;
            document.querySelector("#div_modal").style.display = "flex";
        }
        )
}

function fAbrirPanelConcierto(como, id) {
    //Guardar datos como e id
    document.querySelector("#accion").value = como;
    document.querySelector("#id").value = id;
    //Preparar botones
    let botones = `<input type="button" value="Cancelar" onclick="fCerrarModal()">`;
    const concierto = document.querySelectorAll(".concierto");

        concierto.forEach(concierto => {
            concierto.style.display = "flex";
        });
    if (como == 'a') {
        document.querySelector('#direccion_concierto').value = "";
        document.querySelector('#fecha_inscripcion').value = "";
        document.querySelector('#nombre_concierto').value = "";

        botones += `<input type="button" value="Grabar" onclick="fGuardarConcierto()">`;

        document.querySelector(".botonera").innerHTML = botones;
        
        document.querySelector("#div_modal").style.display = "flex";
        return;
    }

    let URL = 'assets/php/servidor.php?peticion=buscar_por_id_concierto&id=' + id;
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            console.warn("Datos: ", data.respuesta);
            console.warn("SQL: ", data.sql);
            document.querySelector('#direccion_concierto').value = data.respuesta[0].direccion_concierto;
            document.querySelector('#fecha_inscripcion').value = data.respuesta[0].fecha_inscripcion;
            document.querySelector('#nombre_concierto').value = data.respuesta[0].nombre_concierto;
            if (como == 'b') {
                botones += `<input type="button" value="Borrar" onclick="fGuardarConcierto()">`;
            } else {
                botones += `<input type="button" value="Modificar" onclick="fGuardarConcierto()">`;
            }
            document.querySelector(".botonera").innerHTML = botones;
            document.querySelector("#div_modal").style.display = "flex";
        }
        )
}


function fCerrarModal() {
    const compositores = document.querySelectorAll(".compositor");
    const concierto = document.querySelectorAll(".concierto");
    const obra = document.querySelectorAll(".obra");
    const director = document.querySelectorAll(".director");
    const solista = document.querySelectorAll(".solista");
    document.querySelector("#div_modal>form").style.height = "550px";
    document.querySelector(".tablaO").style.display = "none";
    compositores.forEach(compositor => {
        compositor.style.display = "none";
    });

    concierto.forEach(concierto => {
        concierto.style.display = "none";
    });
    const banda = document.querySelectorAll(".banda");

    banda.forEach(banda => {
        banda.style.display = "none";
    });

    obra.forEach(obra => {
        obra.style.display = "none";
    });

    director.forEach(director => {
        director.style.display = "none";
    });

    solista.forEach(solista => {
        solista.style.display = "none";
    });
    document.querySelector("#div_modal").style.display = "none";
}


