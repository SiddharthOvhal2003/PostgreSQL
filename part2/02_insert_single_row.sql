
INSERT INTO products (
name, category, price, stock, is_active, sku, description
)
VALUES (
'Gaming Mouse', 'Electronics', 1499.00, 20, TRUE, 'GM-016', 'High precision gaming mouse with customizable buttons'
);

SELECT * FROM products WHERE name = 'Gaming Mouse';