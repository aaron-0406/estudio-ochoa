SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `banco` (
  `id_banco` int(11) NOT NULL,
  `nombre_banco` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `banco` (`id_banco`, `nombre_banco`) VALUES
(1, 'BCP'),
(2, 'INTERBANK'),
(3, 'BBVA');

CREATE TABLE `contacto` (
  `id_contacto` int(11) NOT NULL,
  `nombre_contacto` varchar(100) NOT NULL,
  `email_contacto` varchar(50) NOT NULL,
  `telefono_contacto` varchar(20) NOT NULL,
  `text` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `materia` (
  `id_materia` int(11) NOT NULL,
  `sigla_nombre` varchar(30) NOT NULL,
  `nombre_materia` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `materia` (`id_materia`, `sigla_nombre`, `nombre_materia`) VALUES
(1, 'ODSD', 'OBLIGACION DE SUMA DE DINERO'),
(2, 'AF', 'A F PE XD'),
(3, 'EG', 'ESTO ES GUERRA');


CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `solicitud` (
  `id_solicitud` int(11) NOT NULL,
  `fecha_solicitud` date NOT NULL,
  `fecha_entrega_usuario` date NOT NULL,
  `fecha_entrega_inventario` date DEFAULT NULL,
  `motivo_usuario` mediumtext NOT NULL,
  `motivo_admin` mediumtext NOT NULL,
  `estado_solicitud` char(1) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_expediente` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL,
  `email_usuario` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `dni` varchar(20) NOT NULL,
  `nombres_usuario` varchar(100) NOT NULL,
  `apellidos_usuario` varchar(100) NOT NULL,
  `telefono_usuario` varchar(30) NOT NULL,
  `estado_usuario` char(1) NOT NULL,
  `rango_usuario` char(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `usuario` (`id_usuario`, `email_usuario`, `password`, `dni`, `nombres_usuario`, `apellidos_usuario`, `telefono_usuario`, `estado_usuario`, `rango_usuario`) VALUES
(1, 'victor-2027@hotmail.com', '$2a$10$JPK2HNuJEU2Mi6zzo/.9VOhjPkFjd93zsdt7gCQspj4N2r3AG/NoG', '77197021', 'Victor', 'Hernandez', '+51990978736', '1', '2'),
(3, 'victor-2027@hotmaeil.com', '$2a$10$udxUUtaBRDmKBChiAnmyCuNajpbxze4gj0DrNquPLhQXDAQ1Igy6i', '1124124', 'Víctor Gabriel', 'Villaobos', '990978736', '1', '2'),
(8, 'victor-2027@hoeetmail.com', '$2a$10$/xGDWLTkO6F7gy5fxWtUd.ppT2j8tmmaa0eOO9ceQHoLm8F/fh6QO', '77197022', 'Victor', 'Hernandez', '+51990978736', '1', '2'),
(9, 'admin@gmail.com', '$2a$10$DGk7JLztz8vekDZoB6qTJ.cW1Jd/PN72n0f.girRxcB06cMRiaSEG', '13124', 'xddd', 'Villacorta', '+56990978736', '1', '2'),
(10, 'lucho@gmail.com', '$2a$10$UXRZ53awMEroqe8N7ZtEZ.f15GKwsRtWWKSn33yxliP8an8ZPOFUa', '1124124', 'Lucho', 'Perez', '+51990978736', '1', '2'),
(11, 'marvolo@gmail.com', '$2a$10$KCvnm7DLugsdYEG4BatTHOCZI6zEAID082oV8dhEmFDUxD.9Bzzee', 'wewe', 'Lucho', 'Perez', '+51990978736', '1', '2'),
(12, 'arnold@hotmail.com', '$2a$10$BSzuUjyQ5fl/dYSeUPSI7ejtR1oZ..wyN6jisDQCxQ4peBd6rYrRO', '77197022', 'Víctor Gabriel', 'Villaobos', '990978736', '1', '2'),
(13, 'victor-2027@hotmail.comeee', '$2a$10$ol/NT64wg6Xz5Smvgp3vdewwwRXcocQtVoVfsRlccvKQl1RC1Y5OC', '12123', 'xd', 'Villacorta', '+56990978736', '1', '2'),
(14, 'victor-2027@ewehotmail.com', '$2a$10$/VBl07dhLn10Fc7/Y0TXr.DuQp99cFIlJL3RwBSfGsln8uMEsd7g6', '7719702222', 'Victor', 'Hernandez', '+51990978736', '1', '2'),
(15, 'victqqor-2027@hotmail.com', '$2a$10$a8D/KwknpNhLBLZW8yS4z.NKDanBn/8wy0aQj8e8l5MP46/4FVVVa', 'wewe', 'Víctor Gabriel', 'Villaobos', '990978736', '1', '2'),
(16, 'victor-20ww27@hotmail.com', '$2a$10$VRD9/YWOacbwjY/3wYXKN.VGSXSRfRsoxa7yF7wqw.hCQuKn8UVNm', 'qweqwe', 'Víctor Gabriel', 'Villaobos', '990978736', '1', '2'),
(17, 'lucho12@gwwmail.com', '$2a$10$DIYOxFxRtA.oDr0KleDHMuONm4gHZos.d9FgyAjf.wTDj4JF09xMy', '11231', 'Lucho', 'Perez', '+51990978736', '1', '2'),
(18, 'victor-2027@wwhotmail.com', '$2a$10$0g6H.tAFFVvjgaTDE0666e97QbeT/dEi0Ag9TYBn8D0.WJpVc.LpC', '7719702122', 'Victor', 'Hernandez', '+51990978736', '1', '2'),
(19, 'victoreee-2027@hotmail.com', '$2a$10$OuMekT0SLqg1371pXNePHOeDS2xMLIKQm.kvJ1QgTod2SmdrJW1dO', '7719702122', 'Victor', 'Hernandez', '+51990978736', '1', '2'),
(20, 'villa-2027@gmail.comee', '$2a$10$cnnLSv5uYJcz7OWD4pnXqOrc/fbSPsCkvmmfJISMMjGGBwUiRyqQi', '77197021', 'qwqqw', 'weqw', '+56990978736', '1', '2');

ALTER TABLE `banco`
  ADD PRIMARY KEY (`id_banco`);

ALTER TABLE `contacto`
  ADD PRIMARY KEY (`id_contacto`);

ALTER TABLE `expediente`
  ADD PRIMARY KEY (`id_expediente`);

ALTER TABLE `materia`
  ADD PRIMARY KEY (`id_materia`);

ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

ALTER TABLE `solicitud`
  ADD PRIMARY KEY (`id_solicitud`);

ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`),
  ADD UNIQUE KEY `email_usuario` (`email_usuario`);


ALTER TABLE `banco`
  MODIFY `id_banco` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

ALTER TABLE `contacto`
  MODIFY `id_contacto` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `expediente`
  MODIFY `id_expediente` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `materia`
  MODIFY `id_materia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

ALTER TABLE `solicitud`
  MODIFY `id_solicitud` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `usuario`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;