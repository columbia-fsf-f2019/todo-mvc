drop database if exists todos_db;
create database todos_db;

use todos_db;

create table users (
  id int not null AUTO_INCREMENT,
  email varchar(50) NOT NULL,
  password varchar(50) NOT NULL,
  primary key (id)
);

create table lists (
  id int not null AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  primary key (id)
);

create table todos (
  id int not null AUTO_INCREMENT,
  text varchar(50) NOT NULL,
  is_complete boolean default False,
  list int not null,
  primary key (id),
  foreign key (list)
    references lists(id)
    on delete cascade
);



