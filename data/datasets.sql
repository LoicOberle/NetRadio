INSERT INTO Theme (id, name) VALUES
(1, 'Films'),
(2, 'Economies'),
(3, 'Séries'),
(4, 'Jeux vidéo'),
(5, 'Musiques'),
(6, 'Politique'),
(7, 'Actualités');

INSERT INTO Status (id, label) VALUES
(1, 'admin'),
(2, 'announcer'),
(3, 'auditor'),
(4, 'visitor');

INSERT INTO Music (id, title, author, duration, url) VALUES
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

INSERT INTO User (id, pseudo, mail, password, ban, id_status) VALUES
(1, 'Admin', 'admin@gmail.com', 'admin', 'false', 1),
(2, 'Keduma', 'keduma@gmail.com', 'Keduma123', 'false', 2),
(3, 'Guitar', 'Guitar@gmail.com', 'Guitar123', 'false', 2),
(4, 'Zacpot', 'Zacpot@gmail.com', 'Zacpot123', 'false', 2),
(5, 'Trema', 'Trema@gmail.com', 'Trema123', 'false', 2),
(6, 'Shiryu', 'Shiryu@gmail.com', 'Shiryu123', 'false', 3),
(7, 'Aditor1', 'Aditor1@gmail.com', 'Aditor1', 'false', 3),
(8, 'Aditor2', 'Aditor2@gmail.com', 'Aditor2', 'false', 3),
(9, 'Aditor3', 'Aditor3@gmail.com', 'Aditor3', 'false', 3),
(10, 'AditorBan', 'AditorBan@gmail.com', 'AditorBan', 'true', 3);

INSERT INTO Playlist (id, title, description, id_user) VALUES
(1, 'Playlist 1 Keduma','Ceci est la playlist 1 de music de Keduma', 2),
(2, 'Playlist 2 Keduma','Ceci est la playlist 2 de music de Keduma', 2),
(3, 'Playlist 1 Zacpot','Ceci est la playlist 1 de music de Zacpot', 4),
(4, 'Playlist 1 Guitar','Ceci est la playlist 1 de music de Guitar', 3),
(5, 'Playlist 1 Trema','Ceci est la playlist 1 de music de Trema', 5);

INSERT INTO Music_playlist (id_playlist, id_music) VALUES
(1,1),(1,2),(1,3),(1,4),(1,5),(1,6),(1,7),(1,8),(1,9),(1,10),
(2,1),(2,3),(2,5),(2,7),(2,9),(2,11),(2,13),(2,15),(2,17),(2,19),(2,21),
(3,11),(3,12),(3,13),(3,13),(3,15),(3,16),(3,17),(3,18),(3,19),(3,20),(3,21),
(4,2),(4,4),(4,6),(4,8),(4,10),(4,12),(4,14),(4,16),(4,18),(4,20),
(5,1),(5,2),(5,3),(5,4),(5,5),(5,6),(5,7),(5,8),(5,9),(5,10);

INSERT INTO Broadcast (title, description, icon, is_podcast, link_audio, guests, id_user, id_theme) VALUES
('Overwatch un dead Game')