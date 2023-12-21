-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 19, 2023 at 01:14 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
CREATE DATABASE `squmarketdatabase`;
USE `squmarketdatabase`;
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `usrename` text ,
  `email` text ,
  `businessName` text ,
  `category` text ,
  `businessDescription` text,
  `account` text
);

-- --------------------------------------------------------

--
-- Table structure for table `contactus`
--

CREATE TABLE `contactus` (
  `usrename` text ,
  `email` text ,
  `Suggestions` text
);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `usrename` text,
  `email` text,
  `password` text
);

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`usrename`, `email`, `password`) VALUES
('Mohammed', 's122711@student.squ.edu.om', 'm122711'),
('Ahmed', 's129520@student.squ.edu.om', 'a129520'),
('Ammar', 's137497@student.squ.edu.om', 'a137497'),
('Salim', 's123456@student.squ.edu.om', '123456'),
('Said', 's123457@student.squ.edu.om', '123457s'),
('Maram', 's123677@student.squ.edu.om', 's123677m'),
('Sara', 's135457@student.squ.edu.om', 'ss135457'),
('Mira', 's122712@student.squ.edu.om', 'm122712');


--
-- Dumping data for table `category`
--

INSERT INTO `categories` (`usrename`, `email`, `businessName`,`category`,`businessDescription`,`account`) VALUES
('marwa', 'alwaad@gmail.com', 'Alwaad Kitchen','Food','Selling homemade food like Mahshi, cookies,..','alwaad.kitchen'),
('sara', 'mahtreats@gmail.com', 'MAH treats','Food','Selling sweets','mah.treats'),
('ahmed', 'maktabatak@gmail.com', 'Maktabatak','Service','printing, papers, books, etc.','maktabatak'),
('anas', 'burha@gmail.com', 'Burha','Service','helping in smart shopping','burha.om'),
('almunther', 'almunther@gmail.com', 'Almunther','Fashion','Salling and renting accessory for mens for special occasion','al__munther'),
('manar', 'manniabaya@gmail.com', 'Manni abaya','Fashion','Sells abaya','manni_abaya'),
('omar', 'ipadistore@gmail.com', 'Ipadi store','Electronics','Sells iPads and all iPads accessories','ipadi.store'),
('salim', 'circlesstore@gmail.com', 'MAH treats','Electronics','Sells bags and covers for labtops','circles.st');
;


--
-- Dumping data for table `contact us`
--

INSERT INTO `contactus` (`usrename`, `email`, `Suggestions`) VALUES
('Marwan', 's132123@student.squ.edu.om', 'make it easy to add our business'),
('Salma', 's127771@student.squ.edu.om', 'add live chat'),
('Said', 's134673@student.squ.edu.om', 'change the colour of your website'),
('Fatima', 's122341@student.squ.edu.om', 'Alwadd kitchen link dose not work'),
('Marwa', 's122221@student.squ.edu.om', 'How i can contact with manger of manni abaya?'),
('Haithem', 's132343@student.squ.edu.om', 'Can i became a manger of website with you guys?'),
('Rawaa', 's133341@student.squ.edu.om', 'This website not orgenized well:(');



/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
