-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Gegenereerd op: 02 jun 2026 om 07:19
-- Serverversie: 8.4.7
-- PHP-versie: 8.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `feestdagen`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `feestdagen`
--

DROP TABLE IF EXISTS `feestdagen`;
CREATE TABLE IF NOT EXISTS `feestdagen` (
  `feestdag` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `datum` date NOT NULL,
  `maand` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Gegevens worden geëxporteerd voor tabel `feestdagen`
--

INSERT INTO `feestdagen` (`feestdag`, `datum`, `maand`) VALUES
('Nieuwjaarsdag', '2026-01-01', 'Januari'),
('Valentijnsdag', '2026-02-14', 'Februari'),
('Carnaval (zondag)', '2026-02-15', 'Februari'),
('Carnaval (maandag)', '2026-02-16', 'Februari'),
('Carnaval (dinsdag)', '2026-02-17', 'Februari'),
('Goede Vrijdag', '2026-04-03', 'April'),
('Eerste Paasdag', '2026-04-05', 'April'),
('Tweede Paasdag', '2026-04-06', 'April'),
('Koningsdag', '2026-04-27', 'April'),
('Dodenherdenking', '2026-05-04', 'Mei'),
('Bevrijdingsdag', '2026-05-05', 'Mei'),
('Moederdag', '2026-05-10', 'Mei'),
('Hemelvaartsdag', '2026-05-14', 'Mei'),
('Eerste Pinksterdag', '2026-05-24', 'Mei'),
('Tweede Pinksterdag', '2026-05-25', 'Mei'),
('Vaderdag', '2026-06-21', 'Juni'),
('Prinsjesdag', '2026-09-15', 'September'),
('Halloween', '2026-10-31', 'Oktober'),
('Sint Maarten', '2026-11-11', 'November'),
('Sinterklaas', '2026-12-05', 'December'),
('Kerstavond', '2026-12-24', 'December'),
('Eerste Kerstdag', '2026-12-25', 'December'),
('Tweede Kerstdag', '2026-12-26', 'December'),
('Oudjaarsavond', '2026-12-31', 'December');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
