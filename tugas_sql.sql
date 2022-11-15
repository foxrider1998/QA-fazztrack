-- DROP DATABASE IF EXISTS db_latihan001;
-- CREATE DATABASE db_latihan001 ;
CREATE DATABASE db_latihan001;

\c db_latihan001;
CREATE TABLE tbl_users;

DROP TABLE IF EXISTS tbl_users ;

CREATE TABLE tbl_users (
   id SERIAL PRIMARY KEY,
   username VARCHAR(255) ,
   email VARCHAR(255) ,
   Password VARCHAR(255),
    Address TEXT
);
INSERT INTO tbl_users 
(username, email, Password, Address)
VALUES ('Aris', 'areskretindo@gmail.com', 'ares1234', 'jetak rt15'); 

SELECT * FROM tbl_users ;

UPDATE tbl_users
SET username = 'ares', email = 'ares@gmail.com', Password = 'Pass',Address = 'adress'
 WHERE id = 1 ;

 DELETE FROM tbl_users WHERE id =1;