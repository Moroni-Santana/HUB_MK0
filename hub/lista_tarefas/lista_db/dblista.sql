-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 13, 2024 at 02:05 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dblista`
--

-- --------------------------------------------------------

--
-- Table structure for table `tb_dia`
--

CREATE TABLE `tb_dia` (
  `dia` date NOT NULL,
  `titulo_dia` varchar(100) NOT NULL DEFAULT 'Sem Titulo'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tb_horario`
--

CREATE TABLE `tb_horario` (
  `hora` time NOT NULL,
  `dia` date NOT NULL,
  `titulo_tarefa` varchar(100) DEFAULT NULL,
  `descricao` varchar(400) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_dia`
--
ALTER TABLE `tb_dia`
  ADD PRIMARY KEY (`dia`);

--
-- Indexes for table `tb_horario`
--
ALTER TABLE `tb_horario`
  ADD PRIMARY KEY (`hora`),
  ADD KEY `FK_DiaHorario` (`dia`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tb_horario`
--
ALTER TABLE `tb_horario`
  ADD CONSTRAINT `FK_DiaHorario` FOREIGN KEY (`dia`) REFERENCES `tb_dia` (`dia`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
