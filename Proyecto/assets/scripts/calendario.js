function fCalendario() {
    let html = "";
    html += "<table class ='calendario'>";
    html += "<thead>";
    html += "<th></th>";
    html += "<th></th>";
    html += "<th>M</th>";
    html += "<th>A</th>";
    html += "<th>Y</th>";
    html += "<th></th>";
    html += "<th></th>";
    html += "<tr>";
    html += "<th>Lunes</th>";
    html += "<th>Martes</th>";
    html += "<th>Miercoles</th>";
    html += "<th>Jueves</th>";
    html += "<th>Viernes</th>";
    html += "<th>Sabado</th>";
    html += "<th>Domingo</th>";
    html += "</tr>";
    html += "</thead>";
    html += "<tbody>";
    html += "<tr>";
    html += "<td>1</td>";
    html += "<td>2</td>";
    html += "<td>3</td>";
    html += "<td>4</td>";
    html += "<td>5</td>";
    html += "<td>6</td>";
    html += "<td>7</td>";
    html += " </tr>";
    html += " <tr>";
    html += "<td>8</td>";
    html += " <td>9</td>";
    html += " <td>10</td>";
    html += " <td>11</td>";
    html += "<td>12</td>";
    html += "<td>13</td>";
    html += "<td>14</td>";
    html += "</tr>";
    html += "<tr>";
    html += "<td>15</td>";
    html += "<td>16</td>";
    html += "<td>17</td>";
    html += "<td>18</td>";
    html += "<td>19</td>";
    html += "<td>20</td>";
    html += "<td>21</td>";
    html += "</tr>";
    html += "<tr>";
    html += "<td>22</td>";
    html += "<td>23</td>";
    html += "<td>24</td>";
    html += "<td>25</td>";
    html += "<td>26</td>";
    html += "<td>27</td>";
    html += "<td>28</td>";
    html += "</tr>";
    html += "<tr>";
    html += "<td>29</td>";
    html += "<td>30</td>";
    html += "<td>31</td>";
    html += "<td></td>";
    html += "<td></td>";
    html += "<td></td>";
    html += "<td></td>";
    html += "</tr>";
    html += "</tbody>";
    html += "</table>";
    document.querySelector('section').innerHTML = html;
}