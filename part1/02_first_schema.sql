-- db -> schema -> table -> row -> column

-- Create a new schema inside the database, if it does not exist already
CREATE SCHEMA IF NOT EXISTS basics;

-- Create extension for generating random UUIDs, if it does not exist already
CREATE EXTENSION IF NOT EXISTS pgcrypto; -- for generating random UUIDs

-- query to check if the schema is created successfully
SELECT schema_name
FROM information_schema.schemata
ORDER BY schema_name;

/*
Breakdown
- information_schema.schemata → PostgreSQL's built-in view containing information about all schemas.
- SELECT schema_name → Get only the schema names.
- FROM → Specifies where to get the data from.
- ORDER BY schema_name → Sort schema names in ascending (A → Z) order.
Example output:
    schema_name
-------------------
 information_schema
 pg_catalog
 public

Simple way to remember
"Give me all schema names from the database and sort them alphabetically."
SELECT schema_name
From information_schema.schemata
order by schema_name;
*/


--psql -U postgres -d postgresql_part1 -f part1/02_first_schema.sql


--psql -U postgres -d postgresql_part1


