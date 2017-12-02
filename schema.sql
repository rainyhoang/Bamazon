-- Drops the animals_db if it exists currently --
DROP DATABASE IF EXISTS bamazon_db;
-- Creates the "animals_db" database --
CREATE DATABASE bamazon_db;

use bamazon_db;

create table products (
	id integer(12) auto_increment not null,
    product_name varchar(30) not null,
    department_name varchar(30) not null,
    price integer (12) not null,
    stock_quantity integer(10) not null,
    primary key(id)
);

select * from products;

insert into products (product_name, department_name, price, stock_quantity)
values ("ipad", "computer", 700, 5);

insert into products (product_name, department_name, price, stock_quantity)
values ("Lord of the Ring", "Movie", 30, 2);

insert into products (product_name, department_name, price, stock_quantity)
values ("Flat Earth", "book", 30, 10);



