-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 20, 2018 at 12:59 PM
-- Server version: 10.1.32-MariaDB
-- PHP Version: 7.2.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `methouse`
--

-- --------------------------------------------------------

--
-- Table structure for table `houses`
--

CREATE TABLE `houses` (
  `id` int(11) NOT NULL,
  `naslov` text NOT NULL,
  `povrsina` text NOT NULL,
  `brojSoba` int(11) NOT NULL,
  `brojTerasa` int(11) NOT NULL,
  `cena` double NOT NULL,
  `dostupno` int(11) NOT NULL,
  `slika` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `houses`
--

INSERT INTO `houses` (`id`, `naslov`, `povrsina`, `brojSoba`, `brojTerasa`, `cena`, `dostupno`, `slika`) VALUES
(6, 'Kuca na moru', '120m2', 5, 2, 150000, 1, 'https://s-media-cache-ak0.pinimg.com/originals/5a/0b/32/5a0b32c50edb0d05b3ca2e99cb87cdc7.jpg'),
(9, 'New Orleans beach house', '400m2', 14, 5, 700000, 1, 'https://cdn.homedit.com/wp-content/uploads/2014/07/The-Sea-house-exterior.jpg'),
(10, 'Moderna kuca', '300m2', 8, 1, 300000, 2, 'http://trojka.rs/wp-content/uploads/2016/05/moderna-kuca-sao-paulo-1.jpg'),
(11, 'Kuca sa vrtom', '350m2', 10, 3, 500000, 1, 'http://www.kucasnova.com/wp-content/uploads/2014/01/projekat-kuce-sa-potkrovljem-i-garazom-3-1.jpg'),
(12, 'Kuca sa bazenom', '800m2', 17, 5, 1000000, 1, 'https://homedesignlover.com/wp-content/uploads/2013/08/6-Bertram-Architects.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` text NOT NULL,
  `password` varchar(100) NOT NULL,
  `name` text NOT NULL,
  `lastName` text NOT NULL,
  `administrator` int(11) NOT NULL,
  `token` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `name`, `lastName`, `administrator`, `token`) VALUES
(1, 'milos@gmail.com', 'b82753180960205a4a62feff9c0f93f5', 'milos', '', 1, 'd9522a9fe60e8f66ded44165444270d149854210'),
(2, 'sad@gmail.com', '$2y$10$Q4o0OXSWfkVgX', 'mislo', '', 0, ''),
(3, 'marko@gmail.com', '2e6c740729c44c12663c', 'Marko', 'Markovic', 0, ''),
(4, 'filip@gmail.com', 'a8222b7d267fa9ecc019b9e90f3c2a22', 'Filip', 'Filipovic', 0, 'b2554dbc99d775ce64f5228ba95d1c1505c36567'),
(5, 'mirko@gmail.com', '47a2f829cf9cab949f8883d2b29becd6', 'mirko', 'mirkovic', 0, '36a43e4eb682b5f58c19a80cff09c02412b5ef57');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `houses`
--
ALTER TABLE `houses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `houses`
--
ALTER TABLE `houses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
