-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-08-2021 a las 21:45:52
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
  `text` text NOT NULL,
  `visto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `contacto`
--

INSERT INTO `contacto` (`id_contacto`, `nombre_contacto`, `email_contacto`, `telefono_contacto`, `text`, `visto`) VALUES
(2, 'victor', 'villa-2027@gmail.com', 'wqeqwe', 'qweqwe', 0),
(4, 'qweqwe', 'marcos@gmail.com', 'wewe', 'wqeqwe', 0),
(5, 'wdwd', 'victoreee-2027@hotmail.com', '+51990978736', 'fef', 0),
(6, 'wdwdwd', 'victoreee-2027@hotmail.com', '+51990978736', 'dwdwd', 0),
(7, 'wewe', 'victoreee-2027@hotmail.com', '+51990978736', 'wewe', 0),
(8, 'dwdwwe', 'victor-2027@hotmail.com', '990978736', 'qweqweqwe', 0);

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
  `id_banco` int(11) NOT NULL,
  `id_documento` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `expediente`
--

INSERT INTO `expediente` (`id_expediente`, `codigo_estudio`, `fecha_asignacion`, `nombre_cliente`, `contrato`, `documentos`, `monto`, `codigo_expediente`, `juzgado`, `demanda`, `estado_procesal`, `fecha_ep`, `estado_actual`, `folio`, `estado_uso`, `habilitado`, `id_materia`, `id_banco`, `id_documento`) VALUES
(17, '13001', '2021-08-06', 'Lucas pepe', 'weqweefefe', 'qwedwdwd', 'qwe', '1300122', 'qwe', '2021-08-26', 'qwe', '2021-08-19', 'wewqqdefefef', '1231', '0', '1', 2, 1, '1lpGm28APSapFDpeINBCmpBrdtEb_SkOg');

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
-- Estructura de tabla para la tabla `reclamo`
--

CREATE TABLE `reclamo` (
  `id_reclamo` int(11) NOT NULL,
  `nombre_reclamo` varchar(100) NOT NULL,
  `apellido_reclamo` varchar(100) NOT NULL,
  `correo_reclamo` varchar(100) NOT NULL,
  `direccion_reclamo` varchar(100) NOT NULL,
  `identificacion_reclamo` varchar(100) NOT NULL,
  `provincia_reclamo` varchar(100) NOT NULL,
  `telefono_reclamo` varchar(30) NOT NULL,
  `distrito_reclamo` varchar(100) NOT NULL,
  `motivo_reclamo` varchar(100) NOT NULL,
  `producto_reclamo` varchar(100) NOT NULL,
  `mensaje_reclamo` text NOT NULL,
  `visto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
(1, '11111111', 'admin@estudioochoamaldonado.com', '$2a$10$RQDnF6c6HVa5DhK9LAjnhu36F2zoAFgBXFTGClf1hpstxrzAFN.hy', 'admin', 'admin', '990489736', '1', '1'),
(2, '77197021', 'victor-2027@hotmail.com', '$2a$10$doMos7.4yAuUMxQTJpjpw.j2exbMnFW3bfquQBl7gzui/Hsk8Ia16', 'Víctor', 'Hernandez', '990978736', '1', '2'),
(3, '77197022', 'victor-2027@hotmail.comm', '$2a$10$F/Tba6XomlVdb8hqvULnm.LT3QYfAXAcX0PmGYuTR.03OYd0LtfSC', 'Victor', 'Hernandez', '990978736', '1', '2');

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
  ADD UNIQUE KEY `codigo_expediente` (`codigo_expediente`),
  ADD UNIQUE KEY `id_documento` (`id_documento`),
  ADD KEY `id_banco` (`id_banco`),
  ADD KEY `id_materia` (`id_materia`);

--
-- Indices de la tabla `materia`
--
ALTER TABLE `materia`
  ADD PRIMARY KEY (`id_materia`);

--
-- Indices de la tabla `reclamo`
--
ALTER TABLE `reclamo`
  ADD PRIMARY KEY (`id_reclamo`);

--
-- Indices de la tabla `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Indices de la tabla `solicitud`
--
ALTER TABLE `solicitud`
  ADD PRIMARY KEY (`id_solicitud`),
  ADD KEY `id_expediente` (`id_expediente`),
  ADD KEY `id_usuario` (`id_usuario`);

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
  MODIFY `id_contacto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `expediente`
--
ALTER TABLE `expediente`
  MODIFY `id_expediente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `materia`
--
ALTER TABLE `materia`
  MODIFY `id_materia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `reclamo`
--
ALTER TABLE `reclamo`
  MODIFY `id_reclamo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `solicitud`
--
ALTER TABLE `solicitud`
  MODIFY `id_solicitud` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `expediente`
--
ALTER TABLE `expediente`
  ADD CONSTRAINT `expediente_ibfk_1` FOREIGN KEY (`id_banco`) REFERENCES `banco` (`id_banco`),
  ADD CONSTRAINT `expediente_ibfk_2` FOREIGN KEY (`id_materia`) REFERENCES `materia` (`id_materia`);

--
-- Filtros para la tabla `solicitud`
--
ALTER TABLE `solicitud`
  ADD CONSTRAINT `solicitud_ibfk_1` FOREIGN KEY (`id_expediente`) REFERENCES `expediente` (`id_expediente`),
  ADD CONSTRAINT `solicitud_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
