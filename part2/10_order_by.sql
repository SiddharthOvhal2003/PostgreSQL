
SELECT name,price
FROM products
ORDER BY price ASC; -- sort by price in ascending order

SELECT name,price
FROM products
ORDER BY price DESC; -- sort by price in descending order

SELECT name,category,price
FROM products
ORDER BY category ASC, price DESC; -- sort by category in ascending order and then by price in descending order

