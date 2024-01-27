<?php
require_once("BBDD_CTRLR.php");

if (isset($_REQUEST['peticion'])) {
    switch ($_REQUEST['peticion']) {
        case "cargar_compositores":
            $sql = "SELECT * FROM compositor ORDER BY codigo_compositor";
            $datos = BBDD_CTRLR::Consultas($sql);
            echo json_encode($datos);
        break;
        case "cargar_solista":
            $sql = "SELECT distinct * FROM solista ORDER BY nombre_solista";
            $datos = BBDD_CTRLR::Consultas($sql);
            echo json_encode($datos);
        break;
        case "cargar_obra":
            $sql = "SELECT * FROM compositor c 
            join obra o on o.compositor = c.codigo_compositor 
            ORDER BY codigo_obra";
            $datos = BBDD_CTRLR::Consultas($sql);
            echo json_encode($datos);
        break;
        case "cargar_concierto":
            $sql = "SELECT distinct * FROM concierto order by nombre_concierto";
            $datos = BBDD_CTRLR::Consultas($sql);
            echo json_encode($datos);
        break;

        case "cargar_director":
            $sql = "SELECT distinct * FROM director ORDER BY codigo_director";
            $datos = BBDD_CTRLR::Consultas($sql);
            echo json_encode($datos);
        break;
        case "cargar_orquesta":
            $sql = "SELECT distinct *, d.nombre_director FROM banda b join director d on b.codigo_director = d.codigo_director ORDER BY b.nombre_banda";
            $datos = BBDD_CTRLR::Consultas($sql);
            echo json_encode($datos);
        break;
        case "buscar_por_id_compositor":
            $id = $_REQUEST['id'];
            $sql = "SELECT  * FROM compositor WHERE codigo_compositor = $id";
            $datos['sql'] = $sql;
            $datos['respuesta'] = BBDD_CTRLR::Consultas($sql);
            echo json_encode($datos);
        break;
        case "buscar_por_id_solista":
            $id = $_REQUEST['id'];
            $sql = "SELECT  * FROM solista WHERE codigo_solista = $id";
            $datos['sql'] = $sql;
            $datos['respuesta'] = BBDD_CTRLR::Consultas($sql);
            echo json_encode($datos);
        break;
        case "buscar_por_id_obra":
            $id = $_REQUEST['id'];
            $sql = "SELECT  * FROM obra WHERE codigo_obra = $id";
            $datos['sql'] = $sql;
            $datos['respuesta'] = BBDD_CTRLR::Consultas($sql);
            echo json_encode($datos);
        break;
        case "buscar_por_id_concierto":
            $id = $_REQUEST['id'];
            $sql = "SELECT  * FROM concierto WHERE codigo_concierto = $id";
            $datos['sql'] = $sql;
            $datos['respuesta'] = BBDD_CTRLR::Consultas($sql);
            echo json_encode($datos);
        break;
        case "buscar_por_id_director":
            $id = $_REQUEST['id'];
            $sql = "SELECT  * FROM director WHERE codigo_director = $id";
            $datos['sql'] = $sql;
            $datos['respuesta'] = BBDD_CTRLR::Consultas($sql);
            echo json_encode($datos);
        break;
        case "buscar_por_id_banda":
            $id = $_REQUEST['id'];
            $sql = "SELECT  * FROM banda WHERE codigo_banda = $id";
            $datos['sql'] = $sql;
            $datos['respuesta'] = BBDD_CTRLR::Consultas($sql);
            echo json_encode($datos);
        break;
        case "guardar_compositor";
            $accion = $_REQUEST['accion'];
            $id = $_REQUEST['id'];
            $nombre = $_REQUEST['nombre'];
            $fechan = $_REQUEST['fechan'];
            $fechaf = $_REQUEST['fechaf'];
            $formato = "";
            if($accion == 'a'){
                if($fechaf >= $fechan){
                 $sql = "INSERT INTO compositor VALUES (null, '$nombre', '$fechan', '$fechaf')";
                 $formato = 'id';
                }else{
                    die("Error: La fecha de defuncion no puede ser menor que la fecha de nacimiento.");
                }
            }else if($accion == 'b'){
                $sql = "DELETE from compositor WHERE codigo_compositor = $id"; 
            }else if($accion == 'm'){
                $sql = "UPDATE compositor SET ";
                $sql.= "nombre_compositor = '$nombre',";
                $sql.= "fechan_compositor = '$fechan',";
                $sql.= "fechaf_compositor= '$fechaf' ";
                $sql.= "WHERE codigo_compositor = $id";
            }
            $datos['sql'] = $sql;
            $datos['respuesta'] = BBDD_CTRLR::CRUD($sql,'formato');
            echo json_encode($datos);
        break;
        case "guardar_obra";
            $accion = $_REQUEST['accion'];
            $id = $_REQUEST['id'];
            $titulo_obra = $_REQUEST['titulo_obra'];
            $compositor = $_REQUEST['compositor'];
            $formato = "";
            if($accion == 'a'){
                $sql = "INSERT INTO obra VALUES (null, '$titulo_obra', '$compositor')";
                $formato = 'id';
            }else if($accion == 'b'){
                $sql = "DELETE from obra WHERE codigo_obra = $id"; 
            }else if($accion == 'm'){
                $sql = "UPDATE obra SET ";
                $sql.= "compositor = '$compositor',";
                $sql.= "titulo_obra = '$titulo_obra' ";
                $sql.= "WHERE codigo_obra = $id";
            }
            $datos['sql'] = $sql;
            $datos['respuesta'] = BBDD_CTRLR::CRUD($sql,'formato');
            echo json_encode($datos);
        break;
        case "guardar_solista";
            $accion = $_REQUEST['accion'];
            $id = $_REQUEST['id'];
            $nombre = $_REQUEST['nombre_solista'];
            $fechan = $_REQUEST['fechan_solista'];
            $instrumento = $_REQUEST['instrumento_solista'];
            $formato = "";
            if($accion == 'a'){
                $sql = "INSERT INTO solista VALUES (null, '$nombre','$fechan','$instrumento')";
                $formato = 'id';
            }else if($accion == 'b'){
                $sql = "DELETE from solista WHERE codigo_solista = $id"; 
            }else if($accion == 'm'){
                $sql = "UPDATE solista SET ";
                $sql.= "nombre_solista = '$nombre',";
                $sql.= "fechan_solista = '$fechan',";
                $sql.= "instrumento_solista= '$instrumento'";
                $sql.= "WHERE codigo_solista = $id";
            }
            $datos['sql'] = $sql;
            $datos['respuesta'] = BBDD_CTRLR::CRUD($sql,'formato');
            echo json_encode($datos);
        break;
        case "guardar_director";
            $accion = $_REQUEST['accion'];
            $id = $_REQUEST['id'];
            $direccion = $_REQUEST['direccion_director'];
            $fechan = $_REQUEST['fechan_director'];
            $nombre = $_REQUEST['nombre_director'];
            $titulacion = $_REQUEST['titulacion_director'];
            $formato = "";
            if($accion == 'a'){
                $sql = "INSERT INTO director VALUES (null, '$nombre','$direccion','$fechan','$titulacion')";
                $formato = 'id';
            }else if($accion == 'b'){
                $sql = "DELETE from director WHERE codigo_director = $id"; 
            }else if($accion == 'm'){
                $sql = "UPDATE director SET ";
                $sql.= "direccion_director = '$direccion',";
                $sql.= "fechan_director = '$fechan',";
                $sql.= "nombre_director= '$nombre',";
                $sql.= "titulacion_director= '$titulacion'";
                $sql.= "WHERE codigo_director = $id";
            }
            $datos['sql'] = $sql;
            $datos['respuesta'] = BBDD_CTRLR::CRUD($sql,'formato');
            echo json_encode($datos);
        break;
        case "guardar_concierto";
            $accion = $_REQUEST['accion'];
            $id = $_REQUEST['id'];
            $nombre = $_REQUEST['nombre_concierto'];
            $fechai = $_REQUEST['fecha_inscripcion'];
            $direccion = $_REQUEST['direccion_concierto'];
            $formato = "";
            if($accion == 'a'){
                $sql = "INSERT INTO concierto VALUES (null, '$nombre','$direccion', '$fechai' )";
                $formato = 'id';
            }else if($accion == 'b'){
                $sql = "DELETE from concierto WHERE codigo_concierto = $id"; 
            }else if($accion == 'm'){
                $sql = "UPDATE concierto SET ";
                $sql.= "direccion_concierto = '$direccion',";
                $sql.= "fecha_inscripcion = '$fechai',";
                $sql.= "nombre_concierto= '$nombre' ";
                $sql.= "WHERE codigo_concierto = $id";
            }
            $datos['sql'] = $sql;
            $datos['respuesta'] = BBDD_CTRLR::CRUD($sql,'formato');
            echo json_encode($datos);
        break;
        case "guardar_banda";
            $accion = $_REQUEST['accion'];
            $id = $_REQUEST['id'];
            $director = $_REQUEST['codigo_director'];
            $nombre = $_REQUEST['nombre_banda'];
            $num_componentes = $_REQUEST['numero_componentes'];
            $formato = "";
            if($accion == 'a'){
                $sql = "INSERT INTO banda VALUES (null, '$nombre','$num_componentes','$director')";
                $formato = 'id';
            }else if($accion == 'b'){
                $sql = "DELETE from banda WHERE codigo_banda = $id"; 
            }else if($accion == 'm'){
                $sql = "UPDATE banda SET ";
                $sql.= "codigo_director = '$director',";
                $sql.= "nombre_banda = '$nombre',";
                $sql.= "numero_componentes= '$num_componentes' ";
                $sql.= "WHERE codigo_banda = $id";
            }
            $datos['sql'] = $sql;
            $datos['respuesta'] = BBDD_CTRLR::CRUD($sql,'formato');
            echo json_encode($datos);
        break;
        case "cargar_usuario":
            $sql = "SELECT * FROM usuario ORDER BY codigo_usuario";
            $datos = BBDD_CTRLR::Consultas($sql);
            echo json_encode($datos);
        break;
        case "guardar_usuarios";
            $nombre = $_REQUEST['nombre'];
            $contrasena = $_REQUEST['contrasena'];
            $sql = "INSERT INTO usuario VALUES ('$nombre','$contrasena', null )";
            $formato = 0;
            $datos['sql'] = $sql;
            $datos['respuesta'] = BBDD_CTRLR::CRUD($sql,'formato');
            echo json_encode($datos);
        break;

        } 
        }    
