SELECT name,category,price
FROM products
WHERE category = 'Electronics'

UPDATE products
SET price = price * 1.1
WHERE category = 'Electronics';

SELECT name,category,price
FROM products
WHERE category = 'Electronics';

UPDATE products
SET is_active = FALSE
WHERE stock = 0;

SELECT name,category,is_active,stock
FROM products
WHERE is_active = FALSE;
