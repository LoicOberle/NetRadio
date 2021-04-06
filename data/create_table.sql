CREATE TABLE Theme
(
    idTheme INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(255)
)ENGINE=InnoDB;

CREATE TABLE Status
(
    idStatus INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    label VARCHAR(255)
)ENGINE=InnoDB;

CREATE TABLE Music
(
    idMusic INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    title VARCHAR(255),
    author VARCHAR(255),
    duration VARCHAR(8),
    url VARCHAR(255)
)ENGINE=InnoDB;

CREATE TABLE User
(
    idUser INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    pseudo VARCHAR(255),
    mail VARCHAR(255),
    password VARCHAR(255),
    ban boolean,
    id_status INT
)ENGINE=InnoDB;

CREATE TABLE Playlist
(
    idPlaylist INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    title VARCHAR(255),
    description VARCHAR(255),
    id_user INT
)ENGINE=InnoDB;

CREATE TABLE Music_Playlist
(
    idMusic_Playlist INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    id_music INT,
    id_playlist INT
)ENGINE=InnoDB;

CREATE TABLE Broadcast
(
    idBroadcast INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    title VARCHAR(255),
    description VARCHAR(255),
    icon VARCHAR(255),
    is_podcast boolean,
    link_audio VARCHAR(255),
    id_presenter INT,
    id_theme INT
)ENGINE=InnoDB;

CREATE TABLE Guest
(
    idGuest INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    id_broadcast INT,
    id_user INT
)ENGINE=InnoDB;


CREATE TABLE Rebroadcast
(
    idRebroadcast INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    title VARCHAR(255),
    description VARCHAR(255),
    icon VARCHAR(255),
    id_presenter INT,
    id_theme INT,
    id_broadcast INT
)ENGINE=InnoDB;

CREATE TABLE Comment
(
    idComment INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    text VARCHAR(255),
    date_send VARCHAR(255),
    id_user INT,
    id_broadcast INT
)ENGINE=InnoDB;

CREATE TABLE Message
(
    idMessage INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    text VARCHAR(255),
    date_send VARCHAR(255),
    id_user INT,
    id_broadcast INT,
    id_rebroadcast INT
)ENGINE=InnoDB;

CREATE TABLE Slot
(
    idSlot INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    date_start VARCHAR(255),
    date_end VARCHAR(255),
    id_broadcast INT,
    id_rebroadcast INT
)ENGINE=InnoDB;

ALTER TABLE User
ADD CONSTRAINT fk_user_status FOREIGN KEY (id_status) REFERENCES Status(idStatus);

ALTER TABLE Playlist
ADD CONSTRAINT fk_playlist_user FOREIGN KEY (id_user) REFERENCES User(idUser);

ALTER TABLE Music_Playlist
ADD CONSTRAINT fk_music_playlist_music FOREIGN KEY (id_music) REFERENCES Music(idMusic);
ALTER TABLE Music_Playlist
ADD CONSTRAINT fk_music_playlist_playlist FOREIGN KEY (id_playlist) REFERENCES Playlist(idPlaylist);

ALTER TABLE Broadcast
ADD CONSTRAINT fk_broadcast_user FOREIGN KEY (id_presenter) REFERENCES User(idUser);
ALTER TABLE Broadcast
ADD CONSTRAINT fk_broadcast_theme FOREIGN KEY (id_theme) REFERENCES Theme(idTheme);

ALTER TABLE Rebroadcast
ADD CONSTRAINT fk_rebroadcast_user FOREIGN KEY (id_presenter) REFERENCES User(idUser);
ALTER TABLE Rebroadcast
ADD CONSTRAINT fk_rebroadcast_theme FOREIGN KEY (id_theme) REFERENCES Theme(idTheme);
ALTER TABLE Rebroadcast
ADD CONSTRAINT fk_rebroadcast_broadcast FOREIGN KEY (id_broadcast) REFERENCES Broadcast(idBroadcast);

ALTER TABLE Comment
ADD CONSTRAINT fk_comment_user FOREIGN KEY (id_user) REFERENCES User(idUser);
ALTER TABLE Comment
ADD CONSTRAINT fk_comment_broadcast FOREIGN KEY (id_broadcast) REFERENCES Broadcast(idBroadcast);

ALTER TABLE Message
ADD CONSTRAINT fk_message_user FOREIGN KEY (id_user) REFERENCES User(idUser);
ALTER TABLE Message
ADD CONSTRAINT fk_message_broadcast FOREIGN KEY (id_broadcast) REFERENCES Broadcast(idBroadcast);
ALTER TABLE Message
ADD CONSTRAINT fk_message_rebroadcast FOREIGN KEY (id_rebroadcast) REFERENCES Rebroadcast(idRebroadcast);

ALTER TABLE Slot
ADD CONSTRAINT fk_slot_broadcast FOREIGN KEY (id_broadcast) REFERENCES Broadcast(idBroadcast);
ALTER TABLE Slot
ADD CONSTRAINT fk_slot_rebroadcast FOREIGN KEY (id_rebroadcast) REFERENCES Rebroadcast(idRebroadcast);


ALTER TABLE Guest
ADD CONSTRAINT fk_guest_broadcast FOREIGN KEY (id_broadcast) REFERENCES Broadcast(idBroadcast);
ALTER TABLE Guest
ADD CONSTRAINT fk_guest_user FOREIGN KEY (id_user) REFERENCES User(idUser);