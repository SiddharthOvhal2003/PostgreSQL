
-- drop db if exists,you should never do this in production environment
-- this is just for testing purpose
DROP DATABASE IF EXISTS postgresql_part1;

-- create new db inside ur postgre server
CREATE DATABASE postgresql_part1;

-- connect to the newly created db and run the sql script
-- -U means user name, -d means database name, -f means file name
-- psql -U postgres -d postgresql_part1 -f part1/01.first_database.sql

--Select current_database(); // check if the db is created successfully

--Select current_user; // check if the user is connected successfully

--Select version(); // check the version of the postgre server

--\l -- list all the databases in the postgre server

--\dt -- list all the tables in the current database

--\q -- quit the psql command line interface


