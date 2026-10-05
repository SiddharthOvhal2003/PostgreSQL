
-- IN -> value must matcch one of the values in the list
-- NOT IN -> value must not match any of the values in the list
-- BETWEEN -> value must be in the range of the two values

SELECT name,category,price
FROM products
WHERE category IN ('Electronics', 'Furniture');


Select name,category,price
From products
Where category NOT IN ('Electronics', 'Furniture');

-- this will include the products with price 1000 and 5000 as well
SELECT name,category,price
FROM products
WHERE price BETWEEN 1000 AND 5000;

--Combining 
SELECT name,category,price,stock
FROM products
WHERE category IN ('Electronics', 'Furniture')
AND price BETWEEN 1000 AND 3000;


