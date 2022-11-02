-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 02 Nov 2022 pada 11.26
-- Versi server: 10.4.11-MariaDB
-- Versi PHP: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `prisma_1`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `forum`
--

CREATE TABLE `forum` (
  `id` int(11) NOT NULL,
  `title` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `authorId` int(11) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `forum`
--

INSERT INTO `forum` (`id`, `title`, `authorId`, `createdAt`, `updatedAt`) VALUES
(1, 'Bagaimana Pola Makan Yang Baik', 1, '2022-11-01 13:25:04.345', '2022-11-01 13:25:04.345'),
(2, 'Bagaimana Cara Smash Dalam Bulutangkis', 2, '2022-11-01 13:25:04.345', '2022-11-01 13:25:04.345'),
(3, 'Bagaimana Lifecylce React JS', 3, '2022-11-01 13:25:04.345', '2022-11-01 13:25:04.345');

-- --------------------------------------------------------

--
-- Struktur dari tabel `kategori`
--

CREATE TABLE `kategori` (
  `id` int(11) NOT NULL,
  `title` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `authorId` int(11) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedBy` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `kategori`
--

INSERT INTO `kategori` (`id`, `title`, `authorId`, `createdAt`, `updatedAt`, `updatedBy`) VALUES
(1, 'Kesehatan', 1, '2022-11-01 13:25:04.329', '2022-11-01 13:25:04.329', 'Desi Putri'),
(2, 'Olahraga', 2, '2022-11-01 13:25:04.329', '2022-11-01 13:25:04.329', 'Resa Fajar'),
(3, 'Programming', 3, '2022-11-01 13:25:04.329', '2022-11-01 13:25:04.329', 'Dewa Putra');

-- --------------------------------------------------------

--
-- Struktur dari tabel `kategori_forum`
--

CREATE TABLE `kategori_forum` (
  `forumId` int(11) NOT NULL,
  `kategoriId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `kategori_forum`
--

INSERT INTO `kategori_forum` (`forumId`, `kategoriId`) VALUES
(1, 1),
(2, 2),
(3, 3);

-- --------------------------------------------------------

--
-- Struktur dari tabel `kategori_post`
--

CREATE TABLE `kategori_post` (
  `postId` int(11) NOT NULL,
  `kategoriId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `kategori_post`
--

INSERT INTO `kategori_post` (`postId`, `kategoriId`) VALUES
(1, 1),
(2, 1),
(3, 2),
(4, 2),
(5, 2),
(6, 3),
(7, 3),
(8, 3),
(9, 3);

-- --------------------------------------------------------

--
-- Struktur dari tabel `komentar_forum`
--

CREATE TABLE `komentar_forum` (
  `id` int(11) NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `authorId` int(11) NOT NULL,
  `forumId` int(11) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `komentar_forum`
--

INSERT INTO `komentar_forum` (`id`, `content`, `authorId`, `forumId`, `createdAt`, `updatedAt`) VALUES
(1, 'Kalau saya memutar pinggang dulu baru smash', 2, 2, '2022-11-01 13:25:04.359', '2022-11-01 13:25:04.359'),
(2, 'Kalau saya menjadwalkan makan secara teratur', 1, 1, '2022-11-01 13:25:04.359', '2022-11-01 13:25:04.359'),
(3, 'Wah saya juga mau coba menjadwalkan makan ahh!!', 2, 1, '2022-11-01 13:25:04.359', '2022-11-01 13:25:04.359'),
(4, 'Kalau saya main bulutangkis sih biasa-biasa aja, hehehehe!', 3, 2, '2022-11-01 13:25:04.359', '2022-11-01 13:25:04.359'),
(5, 'Kalau saya hanya memiliki sedikit waktu luang karena saya kerja sambilan hewhewhew', 5, 2, '2022-11-01 13:25:04.359', '2022-11-01 13:25:04.359'),
(6, 'Apa sih lifecycle dari React JS tuhhh?', 2, 3, '2022-11-01 13:25:04.359', '2022-11-01 13:25:04.359'),
(7, 'Iya saya penasaran juga!', 1, 3, '2022-11-01 13:25:04.359', '2022-11-01 13:25:04.359');

-- --------------------------------------------------------

--
-- Struktur dari tabel `komentar_post`
--

CREATE TABLE `komentar_post` (
  `id` int(11) NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `authorId` int(11) NOT NULL,
  `postId` int(11) NOT NULL,
  `thumbs_up` int(11) NOT NULL DEFAULT 0,
  `thumbs_down` int(11) NOT NULL DEFAULT 0,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `komentar_post`
--

INSERT INTO `komentar_post` (`id`, `content`, `authorId`, `postId`, `thumbs_up`, `thumbs_down`, `createdAt`, `updatedAt`) VALUES
(1, 'WAH SUNGGUH LUAR BIASA', 2, 1, 6, 1, '2022-11-01 13:25:04.356', '2022-11-01 13:25:04.356'),
(2, 'LUAR BIASAH', 3, 1, 7, 0, '2022-11-01 13:25:04.356', '2022-11-01 13:25:04.356'),
(3, 'KEREN NIH BADMINTON', 1, 3, 9, 3, '2022-11-01 13:25:04.356', '2022-11-01 13:25:04.356'),
(4, 'PADA AKTIF BANGET BERGERAK', 3, 3, 10, 2, '2022-11-01 13:25:04.356', '2022-11-01 13:25:04.356'),
(5, 'KEREN BANGET', 5, 3, 9, 2, '2022-11-01 13:25:04.356', '2022-11-01 13:25:04.356'),
(6, 'FIRST!!!', 2, 4, 0, 0, '2022-11-01 13:25:04.356', '2022-11-01 13:25:04.356');

-- --------------------------------------------------------

--
-- Struktur dari tabel `log`
--

CREATE TABLE `log` (
  `id` int(11) NOT NULL,
  `action` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int(11) NOT NULL,
  `authorId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `log`
--

INSERT INTO `log` (`id`, `action`, `status`, `authorId`) VALUES
(1, 'Menambahkan data dummy post Memakan Nasi di Malam Hari', 201, 1),
(2, 'Menambahkan data dummy post Bulutangkis 1', 201, 2),
(3, 'Menambahkan data dummy post Python', 200, 3),
(4, 'Menambahkan data dummy post Bulutangkis 2', 201, 2);

-- --------------------------------------------------------

--
-- Struktur dari tabel `post`
--

CREATE TABLE `post` (
  `id` int(11) NOT NULL,
  `title` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `authorId` int(11) NOT NULL,
  `thumbs_up` int(11) NOT NULL DEFAULT 0,
  `thumbs_down` int(11) NOT NULL DEFAULT 0,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `post`
--

INSERT INTO `post` (`id`, `title`, `content`, `authorId`, `thumbs_up`, `thumbs_down`, `createdAt`, `updatedAt`) VALUES
(1, 'Memakan Nasi di Malam Hari', 'Makan nasi di Malam Hari Makan nasi di Malam Hari Makan nasi di Malam Hari Makan nasi di Malam Hari Makan nasi di Malam Hari Makan nasi di Malam Hari Makan nasi di Malam Hari', 1, 5, 1, '2022-11-01 13:25:04.337', '2022-11-01 13:25:04.337'),
(2, 'Minum Air Beracun', 'Cara penanganan saat meminum air beracun Cara penanganan saat meminum air beracun Cara penanganan saat meminum air beracun Cara penanganan saat meminum air beracun Cara penanganan saat meminum air beracun ', 1, 10, 3, '2022-11-01 13:25:04.337', '2022-11-01 13:25:04.337'),
(3, 'Bulutangkis 1', 'Lomba bulutangkis French Open', 2, 8, 2, '2022-11-01 13:25:04.337', '2022-11-01 13:25:04.337'),
(4, 'Bulutangkis 2', 'Lomba bulutangkis England Open', 2, 0, 0, '2022-11-01 13:25:04.337', '2022-11-01 13:25:04.337'),
(5, 'Bulutangkis 2', 'Lomba bulutangkis Denmark Open', 2, 0, 0, '2022-11-01 13:25:04.337', '2022-11-01 13:25:04.337'),
(6, 'Javascript', 'Belajar Javascript', 3, 0, 0, '2022-11-01 13:25:04.337', '2022-11-01 13:25:04.337'),
(7, 'Python', 'Belajar Python', 3, 0, 0, '2022-11-01 13:25:04.337', '2022-11-01 13:25:04.337'),
(8, 'PHP', 'Belajar PHP', 3, 0, 0, '2022-11-01 13:25:04.337', '2022-11-01 13:25:04.337'),
(9, 'Java', 'Belajar Java', 3, 0, 0, '2022-11-01 13:25:04.337', '2022-11-01 13:25:04.337');

-- --------------------------------------------------------

--
-- Struktur dari tabel `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `role` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `role`
--

INSERT INTO `role` (`id`, `role`) VALUES
(1, 'user'),
(2, 'admin');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roleId` int(11) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id`, `email`, `name`, `roleId`, `createdAt`, `updatedAt`) VALUES
(1, 'desip@dicoding.org', 'Desi Putri', 1, '2022-11-01 13:25:04.321', '2022-11-01 13:25:04.321'),
(2, 'resaf@dicoding.org', 'Resa Fajar', 1, '2022-11-01 13:25:04.321', '2022-11-01 13:25:04.321'),
(3, 'dewap@dicoding.org', 'Dewa Putra', 1, '2022-11-01 13:25:04.321', '2022-11-01 13:25:04.321'),
(4, 'atang@dicoding.org', 'Talitha Janiar', 2, '2022-11-01 13:25:04.321', '2022-11-01 13:25:04.321'),
(5, 'annisaj@dicoding.org', 'Annisa Janiar', 1, '2022-11-01 13:25:04.321', '2022-11-01 13:25:04.321'),
(6, 'christianr@gmail.com', 'Christian Ronaldo', 2, '2022-11-02 02:07:57.396', '2022-11-02 02:07:57.396'),
(7, 'elonm@dicoding.org', 'Elon Musk', 1, '2022-11-02 02:13:02.862', '2022-11-02 02:13:02.862'),
(8, 'markz@facebook.org', 'Mark Zuckerberg', 1, '2022-11-02 02:13:32.580', '2022-11-02 02:13:32.580');

-- --------------------------------------------------------

--
-- Struktur dari tabel `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('1632bd7e-7e20-47c3-8f0a-e13e493dfeef', 'bef762bb106daf9ddcf5d4d3caaf23de3c34b0c4cfe75787f8ed3da9120a5dd8', '2022-11-01 13:24:53.740', '20221101132453_init', NULL, NULL, '2022-11-01 13:24:53.133', 1);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `forum`
--
ALTER TABLE `forum`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Forum_authorId_fkey` (`authorId`);

--
-- Indeks untuk tabel `kategori`
--
ALTER TABLE `kategori`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Kategori_authorId_fkey` (`authorId`);

--
-- Indeks untuk tabel `kategori_forum`
--
ALTER TABLE `kategori_forum`
  ADD PRIMARY KEY (`forumId`,`kategoriId`),
  ADD KEY `kategori_forum_kategoriId_fkey` (`kategoriId`);

--
-- Indeks untuk tabel `kategori_post`
--
ALTER TABLE `kategori_post`
  ADD PRIMARY KEY (`postId`,`kategoriId`),
  ADD KEY `kategori_post_kategoriId_fkey` (`kategoriId`);

--
-- Indeks untuk tabel `komentar_forum`
--
ALTER TABLE `komentar_forum`
  ADD PRIMARY KEY (`id`),
  ADD KEY `komentar_forum_authorId_fkey` (`authorId`),
  ADD KEY `komentar_forum_forumId_fkey` (`forumId`);

--
-- Indeks untuk tabel `komentar_post`
--
ALTER TABLE `komentar_post`
  ADD PRIMARY KEY (`id`),
  ADD KEY `komentar_post_authorId_fkey` (`authorId`),
  ADD KEY `komentar_post_postId_fkey` (`postId`);

--
-- Indeks untuk tabel `log`
--
ALTER TABLE `log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Log_authorId_fkey` (`authorId`);

--
-- Indeks untuk tabel `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Post_authorId_fkey` (`authorId`);

--
-- Indeks untuk tabel `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `User_email_key` (`email`),
  ADD KEY `User_roleId_fkey` (`roleId`);

--
-- Indeks untuk tabel `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `forum`
--
ALTER TABLE `forum`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `kategori`
--
ALTER TABLE `kategori`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `komentar_forum`
--
ALTER TABLE `komentar_forum`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT untuk tabel `komentar_post`
--
ALTER TABLE `komentar_post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `log`
--
ALTER TABLE `log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `post`
--
ALTER TABLE `post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT untuk tabel `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `forum`
--
ALTER TABLE `forum`
  ADD CONSTRAINT `Forum_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `user` (`id`) ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `kategori`
--
ALTER TABLE `kategori`
  ADD CONSTRAINT `Kategori_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `user` (`id`) ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `kategori_forum`
--
ALTER TABLE `kategori_forum`
  ADD CONSTRAINT `kategori_forum_forumId_fkey` FOREIGN KEY (`forumId`) REFERENCES `forum` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `kategori_forum_kategoriId_fkey` FOREIGN KEY (`kategoriId`) REFERENCES `kategori` (`id`) ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `kategori_post`
--
ALTER TABLE `kategori_post`
  ADD CONSTRAINT `kategori_post_kategoriId_fkey` FOREIGN KEY (`kategoriId`) REFERENCES `kategori` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `kategori_post_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `post` (`id`) ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `komentar_forum`
--
ALTER TABLE `komentar_forum`
  ADD CONSTRAINT `komentar_forum_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `user` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `komentar_forum_forumId_fkey` FOREIGN KEY (`forumId`) REFERENCES `forum` (`id`) ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `komentar_post`
--
ALTER TABLE `komentar_post`
  ADD CONSTRAINT `komentar_post_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `user` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `komentar_post_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `post` (`id`) ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `log`
--
ALTER TABLE `log`
  ADD CONSTRAINT `Log_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `user` (`id`) ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `post`
--
ALTER TABLE `post`
  ADD CONSTRAINT `Post_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `user` (`id`) ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `User_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `role` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
