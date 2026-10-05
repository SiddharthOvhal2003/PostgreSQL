

-- limit -> limits the number of rows returned by a query
-- offset -> skips a number of rows before returning the result set


SELECT name, price
FROM products
ORDER BY price ASC
LIMIT 5; -- limits the result set to 5 rows

-- this will skip the first 5 rows and return the next 5 rows
SELECT name, price
FROM products
ORDER BY price ASC
LIMIT 5 OFFSET 5; -- skips the first 5 rows and returns the next 5 rows\