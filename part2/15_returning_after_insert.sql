-- Returing the inserted row using RETURNING clause
-- RETURNING clause is used to return the inserted row after an insert operation


--INSERT INTO products (name,category,price,is_active,description)
--VALUES ('Wireless Mouse','Electronics',25.99,TRUE,'A wireless mouse with ergonomic design')
--RETURNING id,name,category,price,is_active,description;

UPDATE products
SET price = 29.99
WHERE name = 'Wireless Mouse'
RETURNING id,name,category,price,is_active,description;



