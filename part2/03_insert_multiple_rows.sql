
INSERT INTO products (
name, category, price, stock, is_active, sku, description
)
VALUES (
'Gaming Mouse', 'Electronics', 1499.00, 20, TRUE, 'GM-016', 'High precision gaming mouse with customizable buttons'),
('Ergonomic Chair', 'Furniture', 5999.00, 10, TRUE, 'EC-017', 'Comfortable ergonomic office chair with lumbar support'),
('4K Monitor', 'Electronics', 12999.00, 5, TRUE, '4KM-018', 'Ultra HD 4K monitor with HDR support'),
('Wireless Charger', 'Accessories', 1999.00, 30, TRUE, 'WC-019', 'Fast wireless charger for smartphones'),
('Smart Thermostat', 'Home Automation', 8999.00, 8, TRUE, 'ST-020', 'Smart thermostat with Wi-Fi connectivity and energy-saving features');

SELECT * FROM products WHERE price = 1499.00;