-- Write code here or enter directly in MySQL shell --
show databases;
drop database if exists sample_db;
show databases;
create database if not exists books_db ;
use books_db;
select database();