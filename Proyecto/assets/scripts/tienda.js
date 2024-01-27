function fTienda() {
    let html = "";
    html += "<div class = 'tienda'><img src='assets/imagenes/Camiseta5.png' alt=''>"; 
    html += "<div>PRECIO: 25,99€<br>Tallas disponibles: S/M/XL</div>";
    html += "<div class = 'boton' onclick='fISesion()'>COMPRAR</div>";
    html += "</div>";
   

    html += "<div class = 'tienda'>";
    html += "<img src='assets/imagenes/Camiseta2.png' alt=''>";
    html += "PRECIO: 25,99€";
    html += "<br>Tallas disponibles: XS/S/L/XL";
    html += "<div class = 'boton' onclick='fISesion()'>COMPRAR";
    html += "</div>";
    html += "</div>";
    
    html += "<div class = 'tienda'>";
    html += "<img src='assets/imagenes/Camiseta4.png' alt=''>";
    html += "PRECIO: 25,99€";
    html += "<br>Tallas disponibles: XS/S/L/XL";
    html += "<div class = 'boton' onclick='fISesion()'>COMPRAR";
    html += "</div>";
    html += "</div>";
   
    html += "<div class = 'tienda'>";
    html += "<img src='assets/imagenes/Camiseta3.png' alt=''>";
    html += "PRECIO: 25,99€";
    html += "<br>Tallas disponibles: XS/S/M/XXL";
    html += "<div class = 'boton' onclick='fISesion()'>COMPRAR";
    html += "</div>";
    html += "</div>";
    
    html += "<div class = 'tienda'>";
    html += "<img src='assets/imagenes/Captura222.png' alt=''>";
    html += "PRECIO: 25,99€";
    html += "<br>Tallas disponibles: S/M/XL";
    html += "<div class = 'boton' onclick='fISesion()'>COMPRAR";
    html += "</div>";
    html += "</div>";
  
    html += "<div class = 'tienda'>";
    html += "<img src='assets/imagenes/Captura2.gif' alt=''>";
    html += "PRECIO: 25,99€";
    html += "<br>Tallas disponibles: M/L/XL";
    html += "<div class = 'boton' onclick='fISesion()'>COMPRAR";
    html += "</div>";
    html += "</div>";


    html += "<div class = 'tienda'>";
    html += "<img src='assets/imagenes/Captura223.png' alt=''>";
    html += "PRECIO: 25,99€";
    html += "<br>Tallas disponibles: XS/S/M/XXL";
    html += "<div class = 'boton' onclick='fISesion()'>COMPRAR";
    html += "</div>";
    html += "</div>";
   
    
    html += "<div class = 'tienda'>";
    html += "<img src='assets/imagenes/Captura5.PNG' alt=''>";
    html += "PRECIO: 25,99€";
    html += "<br>Tallas disponibles: XS/S/M/XXL";
    html += "<div class = 'boton' onclick='fISesion()'>COMPRAR";
    html += "</div>";
    html += "</div>";
    
    html += "<div class = 'tienda'>";
    html += "<img src='assets/imagenes/Captura10.PNG' alt=''>";
    html += "PRECIO: 25,99€";
    html += "<br>Tallas disponibles: XS/S/M/XXL";
    html += "<div class = 'boton' onclick='fISesion()'>COMPRAR";
    html += "</div>";
    html += "</div>";
    document.querySelector("section").innerHTML = html;
}