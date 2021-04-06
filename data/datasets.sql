INSERT INTO Theme (idTheme, name) VALUES
(1, 'Films'),
(2, 'Economies'),
(3, 'Séries'),
(4, 'Jeux vidéo'),
(5, 'Musiques'),
(6, 'Politique'),
(7, 'Sport'),
(8, 'Actualités'),
(9, 'Art');

INSERT INTO Status (idStatus, label) VALUES
(1, 'admin'),
(2, 'presenter'),
(3, 'auditor'),
(4, 'visitor');

INSERT INTO Music (idMusic, title, author, duration, url) VALUES
(1, 'Ocean', 'David Davis', '00:04:03', '001-1801400-David Davis-Ocean.mp3'),
(2, 'Glow in the Dark (Scorpio)', 'RENAE', '00:03:47', '002-1806470-RENAE-Glow in the Dark _Scorpio_.mp3'),
(3, 'Heroes', 'Back On Earth', '00:03:31', '003-1782916-Back On Earth-Heroes.mp3'),
(4, 'On The Weekend', 'Paxton Pennington', '00:03:31', '004-1799542-Paxton Pennington-On The Weekend.mp3'),
(5, 'Please Say So (Don t Leave Me in Silence) - Tyler Gelrud & Gerard Peters', 'Tyler Gelrud', '00:03:16', '005-1804842-Tyler Gelrud-Please Say So _Don_t Leave Me in Silence_ - Tyler Gelrud _amp_ Gerard Peters.mp3'),
(6, 'Glassberry', 'Glassberry Heals', '00:03:40', '006-1805256-MOGU-Glassberry.mp3'),
(7, 'Maravilha', 'The Way We Walk', '00:05:38', '007-1810665-Boom Boom Beckett-Maravilha.mp3'),
(8, 'Winter', 'Carrying Goodness', '00:02:53', '008-1806630-Carrying Goodness-Winter.mp3'),
(9, 'LA OTRA', 'Lessky', '00:03:35', '009-1815370-Lessky-LA OTRA.mp3'),
(10, 'An Empty Room', 'Elephant Funeral', '00:02:35', '010-1791441-Elephant Funeral-An Empty Room.mp3'),
(11, 'I Know Now', 'Xander Black', '00:04:24', '011-1810081-Xander Black-I Know Now.mp3'),
(12, 'Mahidevran - Phototaxis', 'Mahidevran Rock Band', '00:05:11', '012-1810247-Mahidevran Rock Band-Mahidevran - Phototaxis.mp3'),
(13, 'They', 'ChillPanic', '00:02:21', '013-1802758-ChillPanic-They.mp3'),
(14, 'Face to face', 'Bessonn& sa; ', '00:03:57', '014-1811273-Bessonn_amp_sa-Face to face.mp3'),
(15, 'Waterfall', 'Scaricà Ricascà', '00:03:09', '015-1812202-Scarica Ricasca-Waterfall.mp3'),
(16, 'Duro Mambo- Mardito Licor  (Cover)', 'DURO MAMBO', '00:04:06', '016-1808117-DURO MAMBO-Duro Mambo- Mardito Licor  _Cover_.mp3'),
(17, 'Dance With Me', 'THE SAME PERSONS', '00:02:26', '017-1814442-THE SAME PERSONS-Dance With Me.mp3'),
(18, 'Who Were You? (Sagittarius)', 'RENAE', '00:03:38', '018-1813571-RENAE-Who Were You_ _Sagittarius_.mp3'),
(19, 'Chemistry', 'moonprosounds', '00:02:42', '019-1817078-moonprosounds-Chemistry.mp3'),
(20, 'Weightless', 'Fresh Body Shop', '00:03:11', '020-1819049-Fresh Body Shop-Weightless.mp3'),
(21, 'Do You Ever Feel Sorry', 'The.madpix.project', '00:03:21', '021-1819994-The.madpix.project-Do You Ever Feel Sorry.mp3');

INSERT INTO User (idUser, pseudo, mail, password, ban, id_status) VALUES
(1, 'Admin', 'Admin@gmail.com', 'admin123', FALSE, 1),
(2, 'Keduma', 'Keduma@gmail.com', 'keduma123', FALSE, 2),
(3, 'Guitar', 'Guitar@gmail.com', 'guitar123', FALSE, 2),
(4, 'Zacpot', 'Zacpot@gmail.com', 'zacpot123', FALSE, 2),
(5, 'Trema', 'Trema@gmail.com', 'trema123', FALSE, 2),
(6, 'Shiryu', 'Shiryu@gmail.com', 'shiryu123', FALSE, 3),
(7, 'Auditor1', 'Auditor1@gmail.com', 'auditor1', FALSE, 3),
(8, 'Auditor2', 'Auditor2@gmail.com', 'auditor2', FALSE, 3),
(9, 'Auditor3', 'Auditor3@gmail.com', 'auditor3', FALSE, 3),
(10, 'AuditorBan', 'AuditorBan@gmail.com', 'auditorban', TRUE, 3);

INSERT INTO Playlist (idPlaylist, title, description, id_user) VALUES
(1, 'Playlist 1 Keduma','Ceci est la playlist 1 de music de Keduma', 2),
(2, 'Playlist 2 Keduma','Ceci est la playlist 2 de music de Keduma', 2),
(3, 'Playlist 1 Zacpot','Ceci est la playlist 1 de music de Zacpot', 4),
(4, 'Playlist 1 Guitar','Ceci est la playlist 1 de music de Guitar', 3),
(5, 'Playlist 1 Trema','Ceci est la playlist 1 de music de Trema', 5);

INSERT INTO Music_Playlist (id_playlist, id_music) VALUES
(1,1),(1,2),(1,3),(1,4),(1,5),(1,6),(1,7),(1,8),(1,9),(1,10),
(2,1),(2,3),(2,5),(2,7),(2,9),(2,11),(2,13),(2,15),(2,17),(2,19),(2,21),
(3,11),(3,12),(3,13),(3,13),(3,15),(3,16),(3,17),(3,18),(3,19),(3,20),(3,21),
(4,2),(4,4),(4,6),(4,8),(4,10),(4,12),(4,14),(4,16),(4,18),(4,20),
(5,1),(5,2),(5,3),(5,4),(5,5),(5,6),(5,7),(5,8),(5,9),(5,10);

INSERT INTO Broadcast (title, description, icon, is_podcast, link_audio, id_presenter, id_theme) VALUES
('Overwatch un dead Game', "Aujourd'hui nous allons débattre avec nos invités sur l'avenir du jeu Overwatch, un jeu éditer par Blizzard et sortie en 2016", "https://static.thenounproject.com/png/2222628-200.png", TRUE, '', 2, 4),
('Actualité Sportive', "Actualité football, NBA, NFL et autres", "https://static.thenounproject.com/png/2222628-200.png", TRUE, '', 3, 7),
('Actualité Manga', "Nouveaux épisodes de snk, Jojo's Bizarre Adventure,...", "https://static.thenounproject.com/png/2222628-200.png", TRUE, '', 4, 9),
('Covid19 et etudiants', "Aujourd'hui nous allons parler du covid19 et de ces problèmatiques chez les étudiants", "https://static.thenounproject.com/png/2222628-200.png", TRUE, '', 5, 8);

INSERT INTO Guest (id_broadcast, id_user) VALUES
(1,3),(1,6),
(2,2),(2,4),
(3,6),(3,5),
(4,4),(4,3),(4,2);

INSERT INTO Rebroadcast (title, description, icon, id_presenter, id_theme, id_broadcast) VALUES
('Overwatch un dead Game', "Aujourd'hui nous allons débattre avec nos invités sur l'avenir du jeu Overwatch, un jeu éditer par Blizzard et sortie en 2016", "https://static.thenounproject.com/png/2222628-200.png", 2, 4, 1),
('Actualité Sportive', "Actualité football, NBA, NFL et autres", "https://static.thenounproject.com/png/2222628-200.png", 3, 7, 2),
('Actualité Manga', "Nouveaux épisodes de snk, Jojo's Bizarre Adventure,...", "https://static.thenounproject.com/png/2222628-200.png", 4, 9, 3),
('Covid19 et etudiants', "Aujourd'hui nous allons parler du covid19 et de ces problèmatiques chez les étudiants", "https://static.thenounproject.com/png/2222628-200.png", 5, 8, 4);

INSERT INTO Comment (text, date_send, id_user, id_broadcast) VALUES
('Super poadcast', "03/04/2021-14:00:00", 3, 1),
('Très intéressant !', "03/04/2021-15:00:00", 4, 1),
('J ai pas vu le temps passer, c etait super cool', "04/04/2021-10:00:00", 5, 1);

INSERT INTO Message (text, date_send, id_user, id_broadcast) VALUES
('Bonjour tous le monde', "02/04/2021-08:01:00", 3, 1),
('Salut !', "02/04/2021-08:02:00", 4, 1),
('Parfais je déjeune en même temps', "02/04/2021-08:10:00", 5, 1);

INSERT INTO Slot (date_start, date_end, id_broadcast) VALUES
("02/04/2021-08:00:00", "02/04/2021-11:00:00", 1),
("08/04/2021-14:00:00", "08/04/2021-16:00:00", 2),
("20/04/2021-08:00:00", "20/04/2021-10:00:00", 3),
("02/04/2021-06:30:00", "02/04/2021-10:00:00", 4);

INSERT INTO Slot (date_start, date_end, id_rebroadcast) VALUES
("02/04/2021-12:00:00", "02/04/2021-15:00:00", 1),
("09/04/2021-14:00:00", "09/04/2021-16:00:00", 2),
("20/04/2021-14:00:00", "20/04/2021-16:00:00", 3),
("02/05/2021-18:30:00", "02/04/2021-22:00:00", 4);