CREATE TABLE Theme
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(255)
)ENGINE=InnoDB;

CREATE TABLE Status
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    label VARCHAR(255)
)ENGINE=InnoDB;

CREATE TABLE Music
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    title VARCHAR(255),
    author VARCHAR(255),
    duration VARCHAR(8),
    url VARCHAR(255)
)ENGINE=InnoDB;

CREATE TABLE User
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    pseudo VARCHAR(255),
    mail VARCHAR(255),
    password VARCHAR(255),
    ban boolean,
    id_status INT
)ENGINE=InnoDB;

CREATE TABLE Playlist
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    title VARCHAR(255),
    description VARCHAR(255),
    id_user INT
)ENGINE=InnoDB;

CREATE TABLE Music_Playlist
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    id_music INT,
    id_playlist INT
)ENGINE=InnoDB;

CREATE TABLE Broadcast
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    title VARCHAR(255),
    description VARCHAR(255),
    icon VARCHAR(255),
    is_podcast boolean,
    link_audio VARCHAR(255),
    guests VARCHAR(255),
    id_user INT,
    id_theme INT
)ENGINE=InnoDB;

CREATE TABLE Rebroadcast
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    title VARCHAR(255),
    description VARCHAR(255),
    icon VARCHAR(255),
    id_user INT,
    id_theme INT,
    id_broadcast INT
)ENGINE=InnoDB;

CREATE TABLE Comment
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    text VARCHAR(255),
    date_send VARCHAR(255),
    id_user INT,
    id_broadcast INT
)ENGINE=InnoDB;

CREATE TABLE Message
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    text VARCHAR(255),
    date_send VARCHAR(255),
    id_user INT,
    id_broadcast INT,
    id_rebroadcast INT
)ENGINE=InnoDB;

CREATE TABLE Slot
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    date_start VARCHAR(255),
    date_end VARCHAR(255),
    id_broadcast INT,
    id_rebroadcast INT
)ENGINE=InnoDB;

ALTER TABLE User
ADD CONSTRAINT fk_user_status FOREIGN KEY (id_status) REFERENCES Status(id);

ALTER TABLE Playlist
ADD CONSTRAINT fk_playlist_user FOREIGN KEY (id_user) REFERENCES User(id);

ALTER TABLE Music_Playlist
ADD CONSTRAINT fk_music_playlist_music FOREIGN KEY (id_music) REFERENCES Music(id);
ALTER TABLE Music_Playlist
ADD CONSTRAINT fk_music_playlist_playlist FOREIGN KEY (id_playlist) REFERENCES Playlist(id);

ALTER TABLE Broadcast
ADD CONSTRAINT fk_broadcast_user FOREIGN KEY (id_user) REFERENCES User(id);
ALTER TABLE Broadcast
ADD CONSTRAINT fk_broadcast_theme FOREIGN KEY (id_theme) REFERENCES Theme(id);

ALTER TABLE Rebroadcast
ADD CONSTRAINT fk_rebroadcast_user FOREIGN KEY (id_user) REFERENCES User(id);
ALTER TABLE Rebroadcast
ADD CONSTRAINT fk_rebroadcast_theme FOREIGN KEY (id_theme) REFERENCES Theme(id);
ALTER TABLE Rebroadcast
ADD CONSTRAINT fk_rebroadcast_broadcast FOREIGN KEY (id_broadcast) REFERENCES Broadcast(id);

ALTER TABLE Comment
ADD CONSTRAINT fk_comment_user FOREIGN KEY (id_user) REFERENCES User(id);
ALTER TABLE Comment
ADD CONSTRAINT fk_comment_broadcast FOREIGN KEY (id_broadcast) REFERENCES Broadcast(id);

ALTER TABLE Message
ADD CONSTRAINT fk_message_user FOREIGN KEY (id_user) REFERENCES User(id);
ALTER TABLE Message
ADD CONSTRAINT fk_message_broadcast FOREIGN KEY (id_broadcast) REFERENCES Broadcast(id);
ALTER TABLE Message
ADD CONSTRAINT fk_message_rebroadcast FOREIGN KEY (id_rebroadcast) REFERENCES Rebroadcast(id);

ALTER TABLE Slot
ADD CONSTRAINT fk_slot_broadcast FOREIGN KEY (id_broadcast) REFERENCES Broadcast(id);
ALTER TABLE Slot
ADD CONSTRAINT fk_slot_rebroadcast FOREIGN KEY (id_rebroadcast) REFERENCES Rebroadcast(id);