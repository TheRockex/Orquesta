function fCompositor() {
    let URL = 'assets/php/servidor.php?peticion=cargar_compositores'
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            console.warn("Compositores: ", data)
            let html = "";
            html += "<div class = 'titulo_tabla'>";
            html += "C O M P O S I T O R E S   ";
            html += `<i class = "fa fa-plus" title="Añadir contacto" onclick="fAbrirPanelCompositor('a', 0)"></i>`;
            html += "</div>";
            html += "<table class = 'tabla'>";
            html += "<thead>";
            html += "<tr>";
            html += "<th>Nombre</th>"
            html += "<th>Fecha de nacimiento</th>"
            html += "<th>Fecha de fallecimiento</th>"
            html += "</tr>";
            html += "</thead>";
            html += "<tbody>";
            data.forEach(item => {
                html += "<tr>";
                html += "<td>" + item.nombre_compositor + "</td>";
                html += "<td>" + item.fechan_compositor + "</td>";
                if (item.fechaf_compositor == null || item.fechaf_compositor === "0000-00-00") {
                    html += "<td>Esta vivo</td>";
                } else {
                    html += "<td>" + item.fechaf_compositor + "</td>";
                }
                           
                html += "<td class='botones'>";
                html += `<i class = "fa fa-trash" title="Borrar ${item.nombre_compositor}" onclick="fAbrirPanelCompositor('b', ${item.codigo_compositor})"></i>`;
                html += `<i class = "fa fa-edit" title="Modificar ${item.nombre_compositor}" onclick="fAbrirPanelCompositor('m', ${item.codigo_compositor})"></i>`;
                html += "</td>";
                html += "</tr>";
            });
            html += "</tbody>";
            html += "</table>";
            document.querySelector("section").innerHTML = html;
        })
}

function fSolista() {
    let URL = 'assets/php/servidor.php?peticion=cargar_solista'
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            console.warn("Solistas: ", data)
            let html = "";
            html += "<div class = 'titulo_tabla'>";
            html += "S O L I S T A S  ";
            html += `<i class = "fa fa-plus" title="Añadir contacto" onclick="fAbrirPanelSolista('a', 0)"></i>`;
            html += "</div>";
            html += "<table class = 'tabla'>";
            html += "<thead>";
            html += "<tr>";
            html += "<th>Nombre</th>"
            html += "<th>Fecha de nacimiento</th>"
            html += "<th>Instrumento</th>"
            html += "</tr>";
            html += "</thead>";
            html += "<tbody>";
            data.forEach(item => {
                html += "<tr>";
                html += "<td>" + item.nombre_solista + "</td>";
                html += "<td>" + item.fechan_solista + "</td>";
                html += "<td>" + item.instrumento_solista + "</td>";
                html += "<td class='botones'>";
                html += `<i class = "fa fa-trash" title="Borrar ${item.nombre_solista}" onclick="fAbrirPanelSolista('b',${item.codigo_solista})"></i>`;
                html += `<i class = "fa fa-edit" title="Modificar ${item.nombre_solista}" onclick="fAbrirPanelSolista('m',${item.codigo_solista})"></i>`;
                html += "</td>";
                html += "</tr>";
            });
            html += "</tbody>";
            html += "</table>";
            document.querySelector("section").innerHTML = html;
        })
}

function fObra() {
    let URL = 'assets/php/servidor.php?peticion=cargar_obra'
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            console.warn("Obra: ", data)
            let html = "";
            html += "<div class = 'titulo_tabla'>";
            html += "O B R A S     ";
            html += `<i class = "fa fa-plus" title="Añadir contacto" onclick="fAbrirPanelObra('a', 0)"></i>`;
            html += "</div>";
            html += "<table class = 'tabla'>";
            html += "<thead>";
            html += "<tr>";
            html += "<th>Titulo</th>";
            html += "<th>Compositor</th>";
            html += "</tr>";
            html += "</thead>";
            html += "<tbody>";
            data.forEach(item => {
                html += "<tr>";
                html += "<td>" + item.titulo_obra + "</td>";
                html += "<td>" + item.nombre_compositor + "</td>";
                html += "<td class='botones'>";
                html += `<i class = "fa fa-trash" title="Borrar ${item.titulo_obra}" onclick="fAbrirPanelObra('b',${item.codigo_obra})"></i>`;
                html += `<i class="fa fa-play" onclick="fMusica(${item.codigo_obra})"></i>`;
                html += `<i class = "fa fa-edit" title="Modificar ${item.titulo_obra}" onclick="fAbrirPanelObra('m',${item.codigo_obra})"></i>`;
                html += "</td>";
                html += "</tr>";
            });
            html += "</tbody>";
            html += "</table>";
            document.querySelector("section").innerHTML = html;
        })
}


function fMusica(id) {
    let html = "";
    html += `<audio src="assets/imagenes/` + id + `.mp3" controls></audio>`
    html += `<input type="button" value="Cancelar" onclick="fCerrarModal()">`;
    document.querySelector(".botonera").innerHTML = html;
    document.querySelector("#div_modal").style.display = "flex";
    document.querySelector("#div_modal>form").style.height = "160px";
}


function fConcierto() {
    let URL = 'assets/php/servidor.php?peticion=cargar_concierto'
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            console.warn("Conciertos: ", data)
            let html = "";
            html += "<div class = 'titulo_tabla'>";
            html += "C O N C I E R T O S     ";
            html += `<i class = "fa fa-plus" title="Añadir contacto" onclick="fAbrirPanelConcierto('a', 0)"></i>`;
            html += "</div>";
            html += "<table class = 'tabla'>";
            html += "<thead>";
            html += "<tr>";
            html += "<th>Nombre</th>"
            html += "<th>Dirección</th>"
            html += "<th>Fecha de inscripción</th>"
            html += "</tr>";
            html += "</thead>";
            html += "<tbody>";
            data.forEach(item => {
                html += "<tr>";
                html += "<td>" + item.nombre_concierto + "</td>";
                html += "<td>" + item.direccion_concierto + "</td>";
                if (item.fecha_inscripcion == null || item.fecha_inscripcion === "0000-00-00") {
                    html += "<td>Próximamente</td>";
                } else {
                    html += "<td>" + item.fecha_inscripcion + "</td>";
                }
                html += "<td class='botones'>";
                html += `<i class = "fa fa-trash" title="Borrar ${item.nombre_concierto}" onclick="fAbrirPanelConcierto('b',${item.codigo_concierto})"></i>`;
                html += `<i class = "fa fa-edit" title="Modificar ${item.nombre_concierto}" onclick="fAbrirPanelConcierto('m',${item.codigo_concierto})"></i>`;
                html += "</td>";
                html += "</tr>";
            });
            html += "</tbody>";
            html += "</table>";
            document.querySelector("section").innerHTML = html;
        })
}

function fDirector() {
    let URL = 'assets/php/servidor.php?peticion=cargar_director'
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            console.warn("Directores: ", data)
            let html = "";
            html += "<div class = 'titulo_tabla'>";
            html += "D I R E C T O R E S     ";
            html += `<i class = "fa fa-plus" title="Añadir contacto" onclick="fAbrirPanelDirector('a', 0)"></i>`;
            html += "</div>";
            html += "<table class = 'tabla'>";
            html += "<thead>";
            html += "<tr>";
            html += "<th>Nombre</th>"
            html += "<th>Dirección</th>"
            html += "<th>Fecha de nacimiento</th>"
            html += "<th>Titulacion</th>"
            html += "</tr>";
            html += "</thead>";
            html += "<tbody>";
            data.forEach(item => {
                html += "<tr>";
                html += "<td>" + item.nombre_director + "</td>";
                html += "<td>" + item.direccion_director + "</td>";
                html += "<td>" + item.fechan_director + "</td>";
                if (item.titulacion_director == null) {
                    html += "<td>No tiene titulación</td>";
                }
                else {
                    html += "<td>" + item.titulacion_director + "</td>";
                }
                html += "<td class='botones'>";
                html += `<i class = "fa fa-trash" title="Borrar ${item.nombre_director}" onclick="fAbrirPanelDirector('b',${item.codigo_director})"></i>`;
                html += `<i class = "fa fa-edit" title="Modificar ${item.nombre_director}" onclick="fAbrirPanelDirector('m',${item.codigo_director})"></i>`;
                html += "</td>";
                html += "</tr>";
            });
            html += "</tbody>";
            html += "</table>";
            document.querySelector("section").innerHTML = html;
        })
}

function fOrquesta() {
    let URL = 'assets/php/servidor.php?peticion=cargar_orquesta'
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            console.warn("Orquestas: ", data)
            let html = "";
            html += "<div class = 'titulo_tabla'>";
            html += "O R Q U E S T A     ";
            html += `<i class = "fa fa-plus" title="Añadir contacto" onclick="fAbrirPanelBanda('a', 0)"></i>`;
            html += "</div>";
            html += "<table class = 'tabla'>";
            html += "<thead>";
            html += "<tr>";
            html += "<th>Nombre</th>"
            html += "<th>Numero de componentes</th>"
            html += "<th>Director</th>"
            html += "</tr>";
            html += "</thead>";
            html += "<tbody>";
            data.forEach(item => {
                html += "<tr>";
                html += "<td>" + item.nombre_banda + "</td>";
                html += "<td>" + item.numero_componentes + "</td>";
                html += "<td>" + item.nombre_director + "</td>";
                html += "<td class='botones'>";
                html += `<i class = "fa fa-trash" title="Borrar ${item.nombre_banda}" onclick="fAbrirPanelBanda('b',${item.codigo_banda})"></i>`;
                html += `<i class = "fa fa-edit" title="Modificar ${item.nombre_banda}" onclick="fAbrirPanelBanda('m',${item.codigo_banda})"></i>`;
                html += "</td>";
                html += "</tr>";
            });
            html += "</tbody>";
            html += "</table>";
            document.querySelector("section").innerHTML = html;
        })
}

function fGuardarCompositor() {
    let accion = document.querySelector("#accion").value;
    let id = document.querySelector("#id").value;
    let nombre = document.querySelector("#nombre").value;
    let fechan = document.querySelector("#fechan").value;
    let fechaf = document.querySelector("#fechaf").value;
    let URL = 'assets/php/servidor.php?peticion=guardar_compositor';
    URL += "&nombre=" + nombre;
    URL += "&fechan=" + fechan;
    URL += "&fechaf=" + fechaf;
    URL += "&accion=" + accion;
    URL += "&id=" + id;
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            console.warn(" ID Compositor: ", data.respuesta);
            console.warn("SQL: ", data.sql);
            if (data.respuesta != 0) {
                fCerrarModal();
            }
        })
        .finally(() => {
            fCompositor();
        }
        )
}

function fGuardarObra() {
    let accion = document.querySelector("#accion").value;
    let id = document.querySelector("#id").value;
    let compositor = document.querySelector("#compositor").value;
    let titulo_obra = document.querySelector("#titulo_obra").value;
    let URL = 'assets/php/servidor.php?peticion=guardar_obra';
    URL += "&compositor=" + compositor;
    URL += "&titulo_obra=" + titulo_obra;
    URL += "&accion=" + accion;
    URL += "&id=" + id;
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            console.warn(" ID Obra: ", data.respuesta);
            console.warn("SQL: ", data.sql);
            if (data.respuesta != 0) {
                fCerrarModal();
            }
        })
        .finally(() => {
            fObra();
        }
        )
}

function fGuardarSolista() {
    let accion = document.querySelector("#accion").value;
    let id = document.querySelector("#id").value;
    let fechan_solista = document.querySelector("#fechan_solista").value;
    let instrumento_solista = document.querySelector("#instrumento_solista").value;
    let nombre_solista = document.querySelector("#nombre_solista").value;
    let URL = 'assets/php/servidor.php?peticion=guardar_solista';
    URL += "&nombre_solista=" + nombre_solista;
    URL += "&fechan_solista=" + fechan_solista;
    URL += "&instrumento_solista=" + instrumento_solista;
    URL += "&accion=" + accion;
    URL += "&id=" + id;
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            console.warn(" ID Solista: ", data.respuesta);
            console.warn("SQL: ", data.sql);
            if (data.respuesta != 0) {
                fCerrarModal();
            }
        })
        .finally(() => {
            fSolista();
        }
        )
}

function fGuardarDirector() {
    let accion = document.querySelector("#accion").value;
    let id = document.querySelector("#id").value;
    let direccion_director = document.querySelector("#direccion_director").value;
    let fechan_director = document.querySelector("#fechan_director").value;
    let nombre_director = document.querySelector("#nombre_director").value;
    let titulacion_director = document.querySelector("#titulacion_director").value;
    let URL = 'assets/php/servidor.php?peticion=guardar_director';
    URL += "&direccion_director=" + direccion_director;
    URL += "&fechan_director=" + fechan_director;
    URL += "&nombre_director=" + nombre_director;
    URL += "&titulacion_director=" + titulacion_director;
    URL += "&accion=" + accion;
    URL += "&id=" + id;
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            console.warn(" ID Directores: ", data.respuesta);
            console.warn("SQL: ", data.sql);
            if (data.respuesta != 0) {
                fCerrarModal();
            }
        })
        .finally(() => {
            fDirector();
        }
        )
}

function fGuardarOrquesta() {
    let accion = document.querySelector("#accion").value;
    let id = document.querySelector("#id").value;
    let codigo_director = document.querySelector("#codigo_director").value;
    let nombre_banda = document.querySelector("#nombre_banda").value;
    let numero_componentes = document.querySelector("#numero_componentes").value;
    let URL = 'assets/php/servidor.php?peticion=guardar_banda';
    URL += "&codigo_director=" + codigo_director;
    URL += "&nombre_banda=" + nombre_banda;
    URL += "&numero_componentes=" + numero_componentes;
    URL += "&accion=" + accion;
    URL += "&id=" + id;
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            console.warn("ID Orquesta: ", data.respuesta);
            console.warn("SQL: ", data.sql);
            if (data.respuesta != 0) {
                fCerrarModal();
            }
        })
        .finally(() => {
            fOrquesta();
        }
        )
}


function fGuardarConcierto() {
    let accion = document.querySelector("#accion").value;
    let id = document.querySelector("#id").value;
    let direccion_concierto = document.querySelector("#direccion_concierto").value;
    let fecha_inscripcion = document.querySelector("#fecha_inscripcion").value;
    let nombre_concierto = document.querySelector("#nombre_concierto").value;

    let URL = 'assets/php/servidor.php?peticion=guardar_concierto';
    URL += "&direccion_concierto=" + direccion_concierto;
    URL += "&fecha_inscripcion=" + fecha_inscripcion;
    URL += "&nombre_concierto=" + nombre_concierto;
    URL += "&accion=" + accion;
    URL += "&id=" + id;
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            console.warn(" ID Concierto: ", data.respuesta);
            console.warn("SQL: ", data.sql);
            if (data.respuesta != 0) {
                fCerrarModal();
            }
        })
        .finally(() => {
            fConcierto();
        }
        )
}