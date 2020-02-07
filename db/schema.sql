drop database if exists todos_db;
create database todos_db;

use todos_db;

create table todos (
  id int not null AUTO_INCREMENT,
  text varchar(50) NOT NULL,
  is_complete boolean default False,
  primary key (id)
);

