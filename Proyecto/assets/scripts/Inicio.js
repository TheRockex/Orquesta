var sesion = false;

function fISesion() {
  let html = "";
  if (sesion == false) {
    html += "<div id='sesio'>";
    html += "<form>"
    html += "<label for='usuario'>Usuario:</label>"
    html += "<input type='text' id='usuario' name='usuario'>";
    html += "<label for='contrasena'>Contraseña:</label>";
    html += "<input type='password' id='contrasena' name='contrasena'>"
    html += "<button type='submit' id='ingresar' onclick='fComprobarSesion(event)'>INGRESAR</button>";
    html += "<button type='reset' id='limpiar'>LIMPIAR</button>";
    html += "</form>";
    html += "</div>";
    document.querySelector("section").innerHTML = html;
  } else if (sesion == true) {
    html += "<div> GRACIAS POR SU COMPRA </div>";
    document.querySelector("section").innerHTML = html;
  }
}


function fComprobarSesion(event) {
  var repe = false;
  event.preventDefault();
  let nombre = document.querySelector("#usuario").value;
  let contrasena = document.querySelector("#contrasena").value;
  if (nombre == "" || contrasena == "") {
    alert("Por favor, ingrese un nombre de usuario y una contraseña");
  } else {
    let URL2 = 'assets/php/servidor.php?peticion=cargar_usuario';
    fetch(URL2)
      .then((response) => response.json())
      .then((data) => {
        console.warn("Usuario: ", data)
        data.forEach(item => {
          if (item.nombre == nombre) {
            repe = true;
            return;
          }
        });  
        if (repe == false) {
          let URL = 'assets/php/servidor.php?peticion=guardar_usuarios';
          URL += "&nombre=" + nombre;
          URL += "&contrasena=" + contrasena;
          fetch(URL)
            .then((response) => response.json())
            .then((data) => {
              console.warn(" ID Usuario: ", data.respuesta);
              console.warn("SQL: ", data.sql);
              sesion = true;
            })
            .finally(() => {
              var elemento = document.querySelector('.menu4');
              elemento.innerHTML = nombre + ` &nbsp; <i class="fa fa-user"></i>`;
              document.querySelector(".menu3").style.display = "none";
              document.querySelector(".menu4").style.display = "initial";
              fInicio();
            });
        } else {
          alert("Nombre de usuario en uso");
        }
      });
  }
}






