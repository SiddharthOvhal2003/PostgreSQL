
DROP TABLE IF EXISTS basics.products_basic;

CREATE TABLE basics.products_basic(
    id SERIAL PRIMARY KEY,

    -- VARCHAR - String data with a maximum length of 100 characters

    name VARCHAR(100) NOT NULL,

    description TEXT,
 
  -- INTEGER - Whole number data
    stock INTEGER DEFAULT 0,

-- BIGINT - Whole number data with a larger range than INTEGER
    total_views BIGINT DEFAULT 0,

     -- NUMERIC - Decimal number data with a precision of 10 and a scale of 2
        -- exact decimal values
        -- 10 means total digits,
        -- 2 means digits after decimal point ,9999.99
    price NUMERIC(10,2),

    -- BOOLEAN - True or False data
    is_active BOOLEAN DEFAULT TRUE
);

INSERT INTO basics.products_basic
(name,description,stock,total_views,price,is_active)
VALUES
('Laptop','A high performance laptop',10,100,999.99,TRUE),
('Smartphone','A latest model smartphone',20,200,699.99,TRUE),
('Headphones','Noise cancelling headphones',15,150,199.99,FALSE);

SELECT * FROM basics.products_basic;

-- Select only the id, name, price and is_active columns from the products_basic table where is_active is true
SELECT id,name,price,is_active
FROM basics.products_basic
WHERE is_active;