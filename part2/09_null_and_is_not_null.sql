
-- null - missing or unknown value
-- u should not check null using = or != operator, use is null or is not null instead
-- is null - checks if the value is null
-- is not null - checks if the value is not null


SELECT name,description
FROM products
WHERE description IS NULL;

SELECT name,description
FROM products
WHERE description IS NOT NULL;

Select name,category,is_active,description
From products
Where is_active=TRUE
AND description IS NULL;