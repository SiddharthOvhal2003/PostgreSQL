DROP TABLE IF EXISTS basics.students;

CREATE TABLE basics.students (

    -- CREATE an auto incrementing integer column called id, which will be the primary key for the table
    -- 1, -> 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    -- primary key is a unique identifier for each row in the table, it cannot be null and must be unique   
    id SERIAL PRIMARY KEY, -- auto incrementing integer

    -- TEXT -- String data
    -- not null - means that the column cannot be null, it must have a value
    -- postgres is going to reject if this name value is not present

    name TEXT NOT NULL, -- name of the student, cannot be null

    -- UNIQUE - means that the column must have unique values, no two rows can have the same value in this column
    -- if you try to insert a duplicate email, postgres will reject it

    email TEXT NOT NULL UNIQUE, -- email of the student, cannot be null and must be unique

    -- CHECK - means that the column must satisfy a certain condition
    -- if you try to insert an age less than 18, postgres will reject it

    age INTEGER CHECK (age>=18),
   
   --Timestamp - means that the column will store date and time values
   -- DEFAULT - means that if no value is provided for this column, it will use the
    --NOW() function to get the current date and time and use it as the default value for this column
    created_at TIMESTAMP DEFAULT NOW()
);

-- \dt basics.* -- list all the tables in the basics schema
-- \dt basics.students -- list all the tables in the basics schema

-- Insert some sample data into the students table
INSERT INTO basics.students (name,email,age)
VALUES
('Siddharth','sid.@gmail.com',25),
('John','john.doe@gmail.com',30);

--- Query to check if the data is inserted successfully
SELECT * FROM basics.students;