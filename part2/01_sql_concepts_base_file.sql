
CREATE EXTENSION IF NOT EXISTS pgcrypto; -- for generating random UUIDs

DROP TABLE IF EXISTS products;

CREATE TABLE products(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,

    category TEXT NOT NULL,
    price NUMERIC(10,2) NOT NULL CHECK (price >= 0), -- price cannot be negative

    stock INTEGER NOT NULL DEFAULT 0 CHECK (stock >= 0),

    is_active BOOLEAN NOT NULL DEFAULT true,

    sku TEXT UNIQUE, -- stock keeping unit, unique identifier for each product

    description TEXT,   

    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO products 
(name, category, price, stock, is_active, sku, description)
VALUES
('Wireless Mouse', 'Electronics', 799.00, 50, TRUE, 'WM-001', 'Ergonomic wireless mouse'),
('Mechanical Keyboard', 'Electronics', 2499.00, 30, TRUE, 'MK-002', 'RGB mechanical keyboard'),
('Laptop Stand', 'Accessories', 1299.00, 25, TRUE, 'LS-003', 'Adjustable aluminum laptop stand'),
('USB-C Hub', 'Accessories', 1799.00, 40, TRUE, 'UCH-004', 'Multi-port USB-C hub'),
('Bluetooth Speaker', 'Audio', 2999.00, 20, TRUE, 'BS-005', 'Portable Bluetooth speaker'),
('Headphones', 'Audio', 3499.00, 15, TRUE, 'HP-006', 'Noise cancelling headphones'),
('Webcam', 'Electronics', 2199.00, 35, TRUE, 'WC-007', 'Full HD USB webcam'),
('Power Bank', 'Accessories', 1499.00, 45, TRUE, 'PB-008', '10000mAh fast charging power bank'),
('Smart Watch', 'Wearables', 4999.00, 10, TRUE, 'SW-009', 'Fitness tracking smart watch'),
('Gaming Chair', 'Furniture', 8999.00, 8, TRUE, 'GC-010', 'Ergonomic gaming chair');

INSERT INTO products 
(name, category, price, stock, is_active, sku, description)
VALUES
('Desk Lamp', 'Furniture', 1999.00, 12, TRUE, 'DL-011', 'LED desk lamp with adjustable brightness'),
('External Hard Drive', 'Electronics', 5999.00, 18, FALSE, 'EHD-012', '2TB external hard drive'),
('Smartphone Case', 'Accessories', 499.00, 60, FALSE, 'SC-013', 'Shockproof smartphone case'),
('Wireless Earbuds', 'Audio', 3999.00, 22, FALSE, 'WE-014', 'True wireless earbuds with charging case'),
('Tablet Stand', 'Accessories', 899.00, 30, TRUE, 'TS-015', 'Foldable tablet stand for desk use');

SELECT * FROM products;
