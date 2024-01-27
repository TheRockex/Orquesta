-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: bd_orquesta
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `banda`
--

DROP TABLE IF EXISTS `banda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `banda` (
  `codigo_banda` int NOT NULL AUTO_INCREMENT,
  `nombre_banda` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `numero_componentes` int NOT NULL,
  `codigo_director` int NOT NULL,
  PRIMARY KEY (`codigo_banda`),
  KEY `codigo_director` (`codigo_director`),
  CONSTRAINT `banda_ibfk_1` FOREIGN KEY (`codigo_director`) REFERENCES `director` (`codigo_director`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `banda`
--

LOCK TABLES `banda` WRITE;
/*!40000 ALTER TABLE `banda` DISABLE KEYS */;
INSERT INTO `banda` VALUES (1,'Filarmónica de Viena',12,2),(2,'Orquesta Sinfónica de Londres',10,4),(3,'Orquesta Sinfónica de Chicago',5,6),(4,'Orquesta Filarmónica de Nueva York',7,9),(5,'Orquesta Sinfónica de San Francisco',7,1),(6,'Orquesta del Teatro Mariinsky',15,8);
/*!40000 ALTER TABLE `banda` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `banda_invitado`
--

DROP TABLE IF EXISTS `banda_invitado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `banda_invitado` (
  `codigo_director` int NOT NULL,
  `codigo_banda` int NOT NULL,
  KEY `codigo_director` (`codigo_director`),
  KEY `codigo_banda` (`codigo_banda`),
  CONSTRAINT `banda_invitado_ibfk_1` FOREIGN KEY (`codigo_director`) REFERENCES `director` (`codigo_director`),
  CONSTRAINT `banda_invitado_ibfk_2` FOREIGN KEY (`codigo_banda`) REFERENCES `banda` (`codigo_banda`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `banda_invitado`
--

LOCK TABLES `banda_invitado` WRITE;
/*!40000 ALTER TABLE `banda_invitado` DISABLE KEYS */;
INSERT INTO `banda_invitado` VALUES (7,1),(5,1),(3,1),(2,2),(6,2),(2,3),(10,3),(10,4),(1,4),(5,5),(9,5),(3,6),(2,6),(4,6);
/*!40000 ALTER TABLE `banda_invitado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `compositor`
--

DROP TABLE IF EXISTS `compositor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `compositor` (
  `codigo_compositor` int NOT NULL AUTO_INCREMENT,
  `nombre_compositor` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `fechan_compositor` date NOT NULL,
  `fechaf_compositor` date DEFAULT NULL,
  PRIMARY KEY (`codigo_compositor`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compositor`
--

LOCK TABLES `compositor` WRITE;
/*!40000 ALTER TABLE `compositor` DISABLE KEYS */;
INSERT INTO `compositor` VALUES (1,'Rosa','1995-09-13',NULL),(2,'Leo','1997-09-11',NULL),(3,'Pepe','2000-01-16',NULL),(4,'Eustaquio','1955-07-14','2023-05-19'),(5,'Lucrecia','1966-11-08',NULL),(6,'Claudia','1990-08-22',NULL),(7,'Isacio','1983-04-15',NULL);
/*!40000 ALTER TABLE `compositor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `concierto`
--

DROP TABLE IF EXISTS `concierto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `concierto` (
  `codigo_concierto` int NOT NULL AUTO_INCREMENT,
  `nombre_concierto` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `direccion_concierto` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `fecha_inscripcion` date NOT NULL,
  PRIMARY KEY (`codigo_concierto`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `concierto`
--

LOCK TABLES `concierto` WRITE;
/*!40000 ALTER TABLE `concierto` DISABLE KEYS */;
INSERT INTO `concierto` VALUES (1,'Todo Musical','Leganes','2023-06-12'),(2,'Dark Hell','Barcelona','2023-07-20'),(3,'Crazy Night','Andorra','2023-10-05'),(4,'Clowns Party','Valencia','2023-08-28'),(5,'Ilegal Shot','Madrid','2023-10-03'),(6,'UnkaLaya','Aragón','2023-05-07'),(7,'Reggaeton Beach Festival','Cádiz','2023-06-12'),(8,'Blackworks','Lugo','2023-12-28');
/*!40000 ALTER TABLE `concierto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `director`
--

DROP TABLE IF EXISTS `director`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `director` (
  `codigo_director` int NOT NULL AUTO_INCREMENT,
  `nombre_director` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `direccion_director` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `fechan_director` date NOT NULL,
  `titulacion_director` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`codigo_director`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `director`
--

LOCK TABLES `director` WRITE;
/*!40000 ALTER TABLE `director` DISABLE KEYS */;
INSERT INTO `director` VALUES (1,'Pablo','Castilla La Mancha','1998-02-20',NULL),(2,'Lucas','Valencia','1996-04-23','Licenciado en musica'),(3,'Roberto','Barcelona','1992-09-13',NULL),(4,'Jose','Andorra','2000-07-12',NULL),(5,'Adrian','Zaragoza','1993-06-18','Licenciado en musica'),(6,'Elena','Bilbao','2001-03-16',NULL),(7,'Pedro','Roma','1999-06-12',NULL),(8,'Alejandro','Mongolia','2004-12-07','Licenciado en musica'),(9,'Andrea','Barcelona','1990-07-03','Licenciada en musica'),(10,'Mozart','Salzburgo','1985-06-12',NULL);
/*!40000 ALTER TABLE `director` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `obra`
--

DROP TABLE IF EXISTS `obra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `obra` (
  `codigo_obra` int NOT NULL AUTO_INCREMENT,
  `titulo_obra` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `compositor` int NOT NULL,
  PRIMARY KEY (`codigo_obra`),
  KEY `compositor` (`compositor`),
  CONSTRAINT `obra_ibfk_1` FOREIGN KEY (`compositor`) REFERENCES `compositor` (`codigo_compositor`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `obra`
--

LOCK TABLES `obra` WRITE;
/*!40000 ALTER TABLE `obra` DISABLE KEYS */;
INSERT INTO `obra` VALUES (1,'La creación',1),(2,'Las cuatro estaciones',2),(3,'Sinfonía n.º 9',3),(4,'La traviata',4),(5,'Rhapsody in Blue',4),(6,'Bohemian Rhapsody',5),(7,'El Mesías',6),(8,'Kind of Blue',7),(9,'El lago de los cisnes',7);
/*!40000 ALTER TABLE `obra` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `relacion_orquesta`
--

DROP TABLE IF EXISTS `relacion_orquesta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `relacion_orquesta` (
  `codigo_obra` int DEFAULT NULL,
  `codigo_concierto` int DEFAULT NULL,
  `codigo_solista` int DEFAULT NULL,
  `codigo_banda` int DEFAULT NULL,
  KEY `codigo_concierto` (`codigo_concierto`),
  KEY `codigo_obra` (`codigo_obra`),
  KEY `codigo_solista` (`codigo_solista`),
  KEY `codigo_banda` (`codigo_banda`),
  CONSTRAINT `Relacion_orquesta_ibfk_1` FOREIGN KEY (`codigo_concierto`) REFERENCES `concierto` (`codigo_concierto`),
  CONSTRAINT `Relacion_orquesta_ibfk_2` FOREIGN KEY (`codigo_obra`) REFERENCES `obra` (`codigo_obra`),
  CONSTRAINT `Relacion_orquesta_ibfk_3` FOREIGN KEY (`codigo_solista`) REFERENCES `solista` (`codigo_solista`),
  CONSTRAINT `Relacion_orquesta_ibfk_4` FOREIGN KEY (`codigo_banda`) REFERENCES `banda` (`codigo_banda`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `relacion_orquesta`
--

LOCK TABLES `relacion_orquesta` WRITE;
/*!40000 ALTER TABLE `relacion_orquesta` DISABLE KEYS */;
INSERT INTO `relacion_orquesta` VALUES (3,1,2,1),(4,1,4,3),(5,2,6,5),(1,2,1,2),(8,3,3,4),(7,3,5,6),(2,4,8,6),(6,4,7,4),(9,5,5,5),(5,5,4,2),(1,6,3,1),(8,6,2,4),(4,7,8,3),(3,7,1,5),(2,8,6,2),(6,8,7,1);
/*!40000 ALTER TABLE `relacion_orquesta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `solista`
--

DROP TABLE IF EXISTS `solista`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `solista` (
  `codigo_solista` int NOT NULL AUTO_INCREMENT,
  `nombre_solista` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `fechan_solista` date NOT NULL,
  `instrumento_solista` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`codigo_solista`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `solista`
--

LOCK TABLES `solista` WRITE;
/*!40000 ALTER TABLE `solista` DISABLE KEYS */;
INSERT INTO `solista` VALUES (1,'Mario','1989-05-20','Saxofón'),(2,'German','1985-05-11','Clarinete'),(3,'Ana','1992-09-27','Guitarra'),(4,'David','1990-03-04','Trompeta'),(5,'Julian','1985-11-18','Bateria'),(6,'Inés','1999-04-20','Viola'),(7,'Victor','1998-02-28','Maracas'),(8,'Paula','1993-09-27','Xilófono');
/*!40000 ALTER TABLE `solista` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `nombre` varchar(90) COLLATE utf8mb4_general_ci NOT NULL,
  `contrasena` varchar(90) COLLATE utf8mb4_general_ci NOT NULL,
  `codigo_usuario` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`codigo_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-22  8:30:08
