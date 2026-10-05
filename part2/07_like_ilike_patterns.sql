-- like - case sensitive pattern match
-- ilike - case insensitive pattern match,it will match uppercase and lowercase letters
-- %  means any number of characters
-- _ means a single character



--
SELECT name,price 
FROM products
WHERE name LIKE 'Wireless%';

-- desk ,DESK,desK
Select name ,category
From products
Where name ILIKE '%desk%';

Select name ,category ,description
From products
Where name ILIKE '%chair%'
OR description ILIKE '%chair%';

-- Match a single character
select name ,category ,description
from products  
where name ILIKE '_aming%';

