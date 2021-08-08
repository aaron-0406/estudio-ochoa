-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-08-2021 a las 19:39:01
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyecto-ochoa`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `banco`
--

CREATE TABLE `banco` (
  `id_banco` int(11) NOT NULL,
  `nombre_banco` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `banco`
--

INSERT INTO `banco` (`id_banco`, `nombre_banco`) VALUES
(1, 'BCP'),
(2, 'INTERBANK'),
(3, 'BBVA');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contacto`
--

CREATE TABLE `contacto` (
  `id_contacto` int(11) NOT NULL,
  `nombre_contacto` varchar(100) NOT NULL,
  `email_contacto` varchar(50) NOT NULL,
  `telefono_contacto` varchar(20) NOT NULL,
  `text` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `expediente`
--

CREATE TABLE `expediente` (
  `id_expediente` int(11) NOT NULL,
  `codigo_estudio` varchar(60) NOT NULL,
  `fecha_asignacion` date NOT NULL,
  `nombre_cliente` varchar(150) NOT NULL,
  `contrato` varchar(150) NOT NULL,
  `documentos` mediumtext NOT NULL,
  `monto` varchar(100) NOT NULL,
  `codigo_expediente` varchar(60) NOT NULL,
  `juzgado` varchar(100) NOT NULL,
  `demanda` date NOT NULL,
  `estado_procesal` varchar(100) NOT NULL,
  `fecha_ep` date NOT NULL,
  `estado_actual` varchar(50) NOT NULL,
  `folio` varchar(50) NOT NULL,
  `estado_uso` char(1) NOT NULL,
  `habilitado` char(1) NOT NULL,
  `id_materia` int(11) NOT NULL,
  `id_banco` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `expediente`
--

INSERT INTO `expediente` (`id_expediente`, `codigo_estudio`, `fecha_asignacion`, `nombre_cliente`, `contrato`, `documentos`, `monto`, `codigo_expediente`, `juzgado`, `demanda`, `estado_procesal`, `fecha_ep`, `estado_actual`, `folio`, `estado_uso`, `habilitado`, `id_materia`, `id_banco`) VALUES
(4, '12345678', '2021-07-31', 'nombre cliente 3', 'contrato 3', 'documentos 3', 'monto 3', 'codigo expediente 3', 'juzgado 3', '2021-07-29', 'estado procesal 3', '2021-07-30', 'estado actual 3', 'folio 3', '0', '1', 2, 2),
(5, '987456321', '2021-07-01', 'nombre cliente 2 21', 'contrato 2', 'documentos 2', 'monto 2', 'codigo expediente 2222', 'juzgado 2', '2021-07-03', 'estado procesal 2', '2021-07-02', 'estado actual 2', 'folio 2', '0', '1', 1, 2),
(7, '852147963', '2021-07-01', 'AARON', 'CONTRATO 4', 'DOCUMENTOS 4', 'MONTO 4', 'codigo expediente 4', 'JUZGADO 4', '2021-07-03', 'ESTADO PROCESAL 4', '2021-07-02', 'estado actual 4', '500 HOJAS', '0', '1', 3, 1),
(8, '1211412422', '2021-08-28', 'Marvin', 'CONTRATO 4', 'xd', 'xddd', '1211412221', 'xd', '2021-08-26', 'xdd', '2021-08-25', 'estado 4', 'xdd', '0', '1', 3, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materia`
--

CREATE TABLE `materia` (
  `id_materia` int(11) NOT NULL,
  `sigla_nombre` varchar(30) NOT NULL,
  `nombre_materia` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `materia`
--

INSERT INTO `materia` (`id_materia`, `sigla_nombre`, `nombre_materia`) VALUES
(1, 'ODSD', 'OBLIGACION DE SUMA DE DINERO'),
(2, 'AF', 'A F PE XD'),
(3, 'EG', 'ESTO ES GUERRA');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `sessions`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `solicitud`
--

CREATE TABLE `solicitud` (
  `id_solicitud` int(11) NOT NULL,
  `fecha_solicitud` date NOT NULL,
  `fecha_entrega_usuario` date NOT NULL,
  `fecha_entrega_inventario` date DEFAULT NULL,
  `motivo_usuario` mediumtext NOT NULL,
  `motivo_admin` mediumtext DEFAULT NULL,
  `estado_solicitud` varchar(50) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_expediente` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `solicitud`
--

INSERT INTO `solicitud` (`id_solicitud`, `fecha_solicitud`, `fecha_entrega_usuario`, `fecha_entrega_inventario`, `motivo_usuario`, `motivo_admin`, `estado_solicitud`, `id_usuario`, `id_expediente`) VALUES
(8, '2021-08-07', '2021-08-28', '2021-08-30', 'Un texto es una composición de signos codificados en un sistema de escritura que forma una unidad de sentido.\n\nTambién es una composición de caracteres imprimibles (con grafema) generados por un algoritmo de cifrado que, aunque no tienen sentido para cualquier persona, sí puede ser descifrado por su destinatario original. En otras palabras, un texto es un entramado de signos con una intención comunicativa que adquiere sentido en determinado contexto.\n\nLas ideas que comunica un texto están contenidas en lo que se suele denominar «macroproposiciones», unidades estructurales de nivel superior o global, que otorgan coherencia al texto constituyendo su hilo central, el esqueleto estructural que cohesiona elementos lingüísticos formales de alto nivel, como los títulos y subtítulos, la secuencia de párrafos, etc. En contraste, las «microproposiciones son los elementos coadyuvantes de la cohesión de un texto, pero a nivel más particular o local. Esta distinción fue realizada por Teun van Dijk en 1980.1\n\nEl nivel microestructural o local está asociado con el concepto de cohesión. Se refiere a uno de los fenómenos propios de la coherencia, el de las relaciones particulares y locales que se dan entre elementos lingüísticos, tanto los que remiten unos a otros como los que tienen la función de conectar y organizar.\n\nTambién es un conjunto de oraciones agrupadas en párrafos que habla de un tema determinado.', '', 'EN INVENTARIO', 32, 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL,
  `dni` varchar(50) NOT NULL,
  `email_usuario` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `nombres_usuario` varchar(100) NOT NULL,
  `apellidos_usuario` varchar(100) NOT NULL,
  `telefono_usuario` varchar(30) NOT NULL,
  `estado_usuario` char(1) NOT NULL,
  `rango_usuario` char(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `dni`, `email_usuario`, `password`, `nombres_usuario`, `apellidos_usuario`, `telefono_usuario`, `estado_usuario`, `rango_usuario`) VALUES
(1, '11111111', 'admin@estudioochoamaldonado.com', '$2a$10$RQDnF6c6HVa5DhK9LAjnhu36F2zoAFgBXFTGClf1hpstxrzAFN.hy', 'admin', 'admin', '123456789', '1', '1');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `banco`
--
ALTER TABLE `banco`
  ADD PRIMARY KEY (`id_banco`);

--
-- Indices de la tabla `contacto`
--
ALTER TABLE `contacto`
  ADD PRIMARY KEY (`id_contacto`);

--
-- Indices de la tabla `expediente`
--
ALTER TABLE `expediente`
  ADD PRIMARY KEY (`id_expediente`),
  ADD UNIQUE KEY `codigo_estudio` (`codigo_estudio`),
  ADD UNIQUE KEY `codigo_expediente` (`codigo_expediente`);

--
-- Indices de la tabla `materia`
--
ALTER TABLE `materia`
  ADD PRIMARY KEY (`id_materia`);

--
-- Indices de la tabla `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Indices de la tabla `solicitud`
--
ALTER TABLE `solicitud`
  ADD PRIMARY KEY (`id_solicitud`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`),
  ADD UNIQUE KEY `email_usuario` (`email_usuario`),
  ADD UNIQUE KEY `dni` (`dni`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `banco`
--
ALTER TABLE `banco`
  MODIFY `id_banco` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `contacto`
--
ALTER TABLE `contacto`
  MODIFY `id_contacto` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `expediente`
--
ALTER TABLE `expediente`
  MODIFY `id_expediente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `materia`
--
ALTER TABLE `materia`
  MODIFY `id_materia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `solicitud`
--
ALTER TABLE `solicitud`
  MODIFY `id_solicitud` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;