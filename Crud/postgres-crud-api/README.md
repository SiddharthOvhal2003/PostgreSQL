Updated the README.md and simplified it as requested.

It now contains only:

Project setup
Project structure
Database overview
Execution flow
Important concepts
API roadmap
Query features
Current progress
Next step

No large code blocks or lengthy explanations.

1. Project Overview

Simple CRUD API using:

Node.js
   ↓
Express.js
   ↓
pg
   ↓
PostgreSQL

No ORM. We directly write SQL queries.

2. Tech Stack
Node.js
Express.js
PostgreSQL
pg
dotenv
Postman
3. Project Structure
postgres-crud-api/
│
├── src/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   └── user.controller.js
│   │
│   ├── routes/
│   │   └── user.routes.js
│   │
│   ├── app.js
│   └── server.js
│
├── .env
├── .gitignore
├── package.json
└── README.md
4. Database

Database:

postgres_crud

Table:

users

Table fields:

id
name
email
age
city
salary
created_at
5. How the Project Runs
Start PostgreSQL
       ↓
Start Node.js Server
       ↓
Express starts
       ↓
Database connection
       ↓
API receives request
       ↓
Route
       ↓
Controller
       ↓
SQL Query
       ↓
PostgreSQL
       ↓
Result
       ↓
JSON Response
6. Install & Run

Install dependencies:

npm install

Start server:

npm start

Server:

http://localhost:5000 
7. API Base URL 
/api/users 
8. CRUD APIs 
GET     /api/users 
        ↓ 
Get all users 
 
GET     /api/users/:id 
        ↓ 
Get user by ID 
 
POST    /api/users 
        ↓ 
Create user 
 
PUT     /api/users/:id 
        ↓ 
Update user 
 
PATCH   /api/users/:id 
        ↓ 
Partially update user 
 
DELETE  /api/users/:id 
        ↓ 
Delete user 
 
DELETE  /api/users 
        ↓ 
Delete all users 
9. Query Features 
Filtering 
   ↓ 
Search 
   ↓ 
Sorting 
   ↓ 
Limit 
   ↓ 
Pagination 
 
Example: 
 
/api/users?city=Pune 
 
/api/users?sort=salary 
 
/api/users?limit=5 
 
/api/users?page=2&limit=5 
 
/api/users?city=Pune&sort=salary&page=1&limit=5 
10. Learning Flow 
1. GET All Users 
       ↓ 
2. GET User By ID 
       ↓ 
3. POST User 
       ↓ 
4. PUT User 
       ↓ 
5. PATCH User 
       ↓ 
6. DELETE User 
       ↓ 
7. DELETE All Users 
       ↓ 
8. Filtering 
       ↓ 
9. Searching 
       ↓ 
10. Sorting 
       ↓ 
11. Limit 
       ↓ 
12. Pagination 
       ↓ 
13. Combine Query Parameters 
11. Main Goal 
 
Understand how: 
 
HTTP Request 
      ↓ 
Express 
      ↓ 
Route 
      ↓ 
Controller 
      ↓ 
SQL 
      ↓ 
PostgreSQL 
      ↓ 
Response 
 
works in a real Node.js + Express + PostgreSQL CRUD application.  This is my readme now make suitable changes what we learn in make it smaller to read and visualize

Done. I updated the README to be smaller, cleaner, and more visual.

I also added only the concepts we've actually learned so far:

Project stack
Structure
Database
Run flow
Request flow
CRUD roadmap
Query features
req.params.id
$1 parameterized queries
Learning flow
Main goal

No unnecessary theory or large code blocks.

Give me the file

Download the updated README.md

README.md
Document

ȇ̥̭̄̐e̛̤̮̟ģ̦̝̓̒
README.md
PostgreSQL CRUD API
1. Stack
Node.js → Express.js → pg → PostgreSQL

No ORM — direct SQL queries.

Tools: Node.js · Express.js · PostgreSQL · pg · dotenv · Postman

2. Project Structure
postgres-crud-api/
├── src/
│   ├── config/db.js
│   ├── controllers/user.controller.js
│   ├── routes/user.routes.js
│   ├── app.js
│   └── server.js
├── .env
├── .gitignore
├── package.jsonUpdated the README.md and simplified it as requested.

It now contains only:

Project setup
Project structure
Database overview
Execution flow
Important concepts
API roadmap
Query features
Current progress
Next step

No large code blocks or lengthy explanations.

1. Project Overview

Simple CRUD API using:

Node.js
   ↓
Express.js
   ↓
pg
   ↓
PostgreSQL

No ORM. We directly write SQL queries.

2. Tech Stack
Node.js
Express.js
PostgreSQL
pg
dotenv
Postman
3. Project Structure
postgres-crud-api/
│
├── src/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   └── user.controller.js
│   │
│   ├── routes/
│   │   └── user.routes.js
│   │
│   ├── app.js
│   └── server.js
│
├── .env
├── .gitignore
├── package.json
└── README.md
4. Database

Database:

postgres_crud

Table:

users

Table fields:

id
name
email
age
city
salary
created_at
5. How the Project Runs
Start PostgreSQL
       ↓
Start Node.js Server
       ↓
Express starts
       ↓
Database connection
       ↓
API receives request
       ↓
Route
       ↓
Controller
       ↓
SQL Query
       ↓
PostgreSQL
       ↓
Result
       ↓
JSON Response
6. Install & Run

Install dependencies:

npm install

Start server:

npm start

Server:

http://localhost:5000 
7. API Base URL 
/api/users 
8. CRUD APIs 
GET     /api/users 
        ↓ 
Get all users 
 
GET     /api/users/:id 
        ↓ 
Get user by ID 
 
POST    /api/users 
        ↓ 
Create user 
 
PUT     /api/users/:id 
        ↓ 
Update user 
 
PATCH   /api/users/:id 
        ↓ 
Partially update user 
 
DELETE  /api/users/:id 
        ↓ 
Delete user 
 
DELETE  /api/users 
        ↓ 
Delete all users 
9. Query Features 
Filtering 
   ↓ 
Search 
   ↓ 
Sorting 
   ↓ 
Limit 
   ↓ 
Pagination 
 
Example: 
 
/api/users?city=Pune 
 
/api/users?sort=salary 
 
/api/users?limit=5 
 
/api/users?page=2&limit=5 
 
/api/users?city=Pune&sort=salary&page=1&limit=5 
10. Learning Flow 
1. GET All Users 
       ↓ 
2. GET User By ID 
       ↓ 
3. POST User 
       ↓ 
4. PUT User 
       ↓ 
5. PATCH User 
       ↓ 
6. DELETE User 
       ↓ 
7. DELETE All Users 
       ↓ 
8. Filtering 
       ↓ 
9. Searching 
       ↓ 
10. Sorting 
       ↓ 
11. Limit 
       ↓ 
12. Pagination 
       ↓ 
13. Combine Query Parameters 
11. Main Goal 
 
Understand how: 
 
HTTP Request 
      ↓ 
Express 
      ↓ 
Route 
      ↓ 
Controller 
      ↓ 
SQL 
      ↓ 
PostgreSQL 
      ↓ 
Response 
 
works in a real Node.js + Express + PostgreSQL CRUD application.  This is my readme now make suitable changes what we learn in make it smaller to read and visualize

Done. I updated the README to be smaller, cleaner, and more visual.

I also added only the concepts we've actually learned so far:

Project stack
Structure
Database
Run flow
Request flow
CRUD roadmap
Query features
req.params.id
$1 parameterized queries
Learning flow
Main goal

No unnecessary theory or large code blocks.

Give me the file

Download the updated README.md

README.md
Document

Library
/
README.md
PostgreSQL CRUD API
1. Stack
Node.js → Express.js → pg → PostgreSQL

No ORM — direct SQL queries.

Tools: Node.js · Express.js · PostgreSQL · pg · dotenv · Postman

2. Project Structure
postgres-crud-api/
├── src/
│   ├── config/db.js
│   ├── controllers/user.controller.js
│   ├── routes/user.routes.js
│   ├── app.js
│   └── server.js
├── .env
├── .gitignore
├── package.json
└── README.md
3. Database
Database: postgres_crud
Table:    users

id | name | email | age | city | salary | created_at
4. Run the Project
PostgreSQL
   ↓
npm install
   ↓
npm start
   ↓
http://localhost:5000
5. Request Flow
HTTP Request
     ↓
   Route
     ↓
 Controller
     ↓
 pool.query()
     ↓
 PostgreSQL
     ↓
 result.rows
     ↓
 JSON Response
6. CRUD APIs
Method	Endpoint	Purpose
GET	/api/users	Get all users
GET	/api/users/:id	Get user by ID
POST	/api/users	Create user
PUT	/api/users/:id	Update user
PATCH	/api/users/:id	Partial update
DELETE	/api/users/:id	Delete user
DELETE	/api/users	Delete all users
7. Query Features
Filtering → Searching → Sorting → Limit → Pagination

Examples:

/api/users?city=Pune
/api/users?sort=salary
/api/users?limit=5
/api/users?page=2&limit=5
/api/users?city=Pune&sort=salary&page=1&limit=5
8. Concepts Learned
Route Parameters
/api/users/:id
        ↓
req.params.id
PostgreSQL Parameters
SQL:    WHERE id = $1
Values: [id]

$1 → first value
$2 → second value

Parameterized queries keep SQL and user input separate.

9. Learning Flow
GET All
  ↓
GET By ID
  ↓
POST
  ↓
PUT / PATCH
  ↓
DELETE
  ↓
Filtering / Searching
  ↓
Sorting / Limit
  ↓
Pagination
10. Main Goal

Understand the complete flow:

Request → Express → Route → Controller → SQL → PostgreSQL → Response
└── README.md
3. Database
Database: postgres_crud
Table:    users

id | name | email | age | city | salary | created_at
4. Run the Project
PostgreSQL
   ↓
npm install
   ↓
npm start
   ↓
http://localhost:5000
5. Request Flow
HTTP Request
     ↓
   Route
     ↓
 Controller
     ↓
 pool.query()
     ↓
 PostgreSQL
     ↓
 result.rows
     ↓
 JSON Response
6. CRUD APIs
Method	Endpoint	Purpose
GET	/api/users	Get all users
GET	/api/users/:id	Get user by ID
POST	/api/users	Create user
PUT	/api/users/:id	Update user
PATCH	/api/users/:id	Partial update
DELETE	/api/users/:id	Delete user
DELETE	/api/users	Delete all users
7. Query Features
Filtering → Searching → Sorting → Limit → Pagination

Examples:

/api/users?city=Pune
/api/users?sort=salary
/api/users?limit=5
/api/users?page=2&limit=5
/api/users?city=Pune&sort=salary&page=1&limit=5
8. Concepts Learned
Route Parameters
/api/users/:id
        ↓
req.params.id
PostgreSQL Parameters
SQL:    WHERE id = $1
Values: [id]

$1 → first value
$2 → second value

Parameterized queries keep SQL and user input separate.

9. Learning Flow
GET All
  ↓
GET By ID
  ↓
POST
  ↓
PUT / PATCH
  ↓
DELETE
  ↓
Filtering / Searching
  ↓
Sorting / Limit
  ↓
Pagination
10. Main Goal

Understand the complete flow:

Request → Express → Route → Controller → SQL → PostgreSQL → Response

### 11.GET All Users

Endpoint:

## GET /api/users

Flow:

Request
  ↓
Route
  ↓
Controller
  ↓
pool.query()
  ↓
SELECT * FROM users
  ↓
PostgreSQL
  ↓
result.rows
  ↓
JSON Response

SQL:

SELECT * FROM users;

Purpose: Fetch all users from the users table.

### 12.GET User By ID

Endpoint:

## GET /api/users/:id

Example:

GET /api/users/3

Flow:

Request
  ↓
Route
  ↓
req.params.id
  ↓
Controller
  ↓
Parameterized Query
  ↓
PostgreSQL
  ↓
User / 404
  ↓
JSON Response

SQL:

SELECT * FROM users
WHERE id = $1;

Parameter:

$1 → id

Example:

/api/users/3
     ↓
id = 3
     ↓
$1 = 3

Important concepts:

req.params.id
    ↓
Gets ID from URL

$1
    ↓
SQL parameter placeholder

[id]
    ↓
Value supplied to $1

result.rows[0]
    ↓
The requested user

If user doesn't exist:

result.rows.length === 0
        ↓
404 Not Found

POST — Create User
POST /api/users
Flow
Request Body
    ↓
req.body
    ↓
POST Route
    ↓
Controller
    ↓
INSERT SQL
    ↓
PostgreSQL
    ↓
New Row
    ↓
RETURNING *
    ↓
JSON Response
SQL
INSERT INTO users
(name, email, age, city, salary)
VALUES ($1, $2, $3, $4, $5)
RETURNING *;
Parameters
$1 → name
$2 → email
$3 → age
$4 → city
$5 → salary
Request
{
  "name": "Vijay",
  "email": "vijay@gmail.com",
  "age": 24,
  "city": "Pune",
  "salary": 55000
}
Important Concepts
req.body
  ↓
Data sent by client

INSERT
  ↓
Creates a new row

$1, $2, $3...
  ↓
Parameterized query

RETURNING *
  ↓
Returns the created row

201 Created
  ↓
Successful creation
Result
PostgreSQL automatically generated:
id = 6

The API returned:
result.rows[0]


## 13.PUT — Update User

**Endpoint:** `PUT /api/users/:id`

### Flow

```text
PUT /api/users/6
       ↓
req.params.id → 6
req.body → New user data
       ↓
Route → Controller
       ↓
UPDATE ... WHERE id = $6
       ↓
PostgreSQL
       ↓
RETURNING *
       ↓
Updated User (200 OK)
```

### SQL

```sql
UPDATE users
SET
    name = $1,
    email = $2,
    age = $3,
    city = $4,
    salary = $5
WHERE id = $6
RETURNING *;
```

### Important Concepts

- `req.params.id` → Identifies the user.
- `req.body` → Contains updated values.
- `UPDATE` → Modifies an existing row.
- `SET` → Specifies columns to update.
- `WHERE` → Selects the row to update.
- `RETURNING *` → Returns the updated row.
- `200 OK` → Update successful.
- `404 Not Found` → User does not exist.

**Note:** Always use `WHERE` when updating a specific user. Without it, all rows could be updated.

### 14.PATCH — Partial Update User

**Endpoint:**

PATCH /api/users/:id

### Flow

```text
PATCH /api/users/6
       ↓
req.params.id
       +
req.body
       ↓
Controller
       ↓
Validate fields
       ↓
Build UPDATE query
       ↓
PostgreSQL
       ↓
RETURNING *
       ↓
Updated User
PUT vs PATCH
PUT
 ↓
Update complete user data

PATCH
 ↓
Update only provided fields
Example

Request:

{
  "salary": 65000
}

Only salary changes.

name    → unchanged
email   → unchanged
age     → unchanged
city    → unchanged
salary  → 65000
Dynamic SQL

PATCH builds the SQL according to the fields provided.

Example:

Request:
{ "salary": 65000, "city": "Pune" }

        ↓

fields:
salary = $1
city = $2

values:
[65000, "Pune"]

        ↓

UPDATE users
SET salary = $1, city = $2
WHERE id = $3
RETURNING *
Parameterized Query
$1, $2, $3...
     ↓
SQL placeholders

values array
     ↓
Actual values
Field Validation

Only these fields can be updated:

name
email
age
city
salary

User-provided field names are checked against the allowed fields before being used in the SQL query.

User Input
    ↓
Allowed Field?
    ↓
YES → Add to UPDATE query
NO  → 400 Bad Request
Important Concepts
req.params.id → identifies the user.
req.body → contains fields to update.
Object.keys(req.body) → gets provided field names.
allowedFields → controls which columns can be updated.
fields → stores SQL update expressions.
values → stores actual values.
$1, $2... → parameterized query placeholders.
RETURNING * → returns the updated row.
400 → invalid field / no fields provided.
404 → user does not exist.
200 → update successful.


## PATCH — 15.Partial Update User with validation

PATCH /api/users/:id

Flow:
PATCH Request
   ↓
req.params.id + req.body
   ↓
Validate fields
   ↓
Validate values
   ↓
Build dynamic UPDATE
   ↓
Parameterized Query
   ↓
PostgreSQL
   ↓
RETURNING *
   ↓
Response

PUT
 ↓
Update complete data

PATCH
 ↓
Update only provided fields

Allowed fields:
name
email
age
city
salary

Security:
- Validate field names using allowedFields.
- Never directly use arbitrary user input as a SQL column name.
- Use $1, $2... for values.

Example:
{ "salary": 65000 }

        ↓

UPDATE users
SET salary = $1
WHERE id = $2
RETURNING *

$1 → 65000
$2 → user id. 

### 7. DELETE User by ID
 DELETE /api/users/:id
Flow
DELETE Request
      ↓
Route
      ↓
Controller
      ↓
req.params.id
      ↓
DELETE SQL
      ↓
PostgreSQL
      ↓
Check result
      ↓
JSON Response
SQL
DELETE FROM users
WHERE id = $1
RETURNING *;
Example
DELETE /api/users/6

req.params.id
      ↓
      6
      ↓
$1 → 6
Responses

Success

200 OK
↓
User deleted successfully

User doesn't exist

404 Not Found
↓
User not found
Important Concept
WHERE id = $1

is critical.

Without WHERE:

DELETE FROM users;

⚠️ All users would be deleted.

With WHERE:

DELETE FROM users
WHERE id = $1;

✅ Only the selected user is deleted.

Concept Learned
req.params
    ↓
Parameterized Query
    ↓
DELETE
    ↓
RETURNING *
    ↓
404 if no row found

8. Filtering

GET /api/users?city=Pune
Flow
Query Parameter
      ↓
req.query.city
      ↓
WHERE city = $1
      ↓
Parameterized Query
      ↓
PostgreSQL
      ↓
Filtered Users
Examples
/api/users?city=Pune
/api/users?age=23
/api/users?salary=50000
Key Concept
const { city } = req.query;

req.query contains values after ?.

/api/users?city=Pune
             ↓
req.query.city = "Pune"


9. Multiple Filters

Multiple query parameters can be combined:

/api/users?city=Pune&age=23
Flow
Query Parameters
      ↓
city + age
      ↓
Build WHERE conditions
      ↓
Parameterized SQL
      ↓
PostgreSQL
      ↓
Filtered Users

Example:

SELECT *
FROM users
WHERE city = $1
AND age = $2;

Values:

["Pune", 23]
Dynamic Query
filters → ["city = $1", "age = $2"]
values  → ["Pune", 23]

filters.join(" AND ")
        ↓
"city = $1 AND age = $2"
Examples
/api/users?city=Pune&age=23

/api/users?city=Pune&salary=50000

/api/users?city=Pune&age=23&salary=50000
Security
User Input
    ↓
$1, $2, $3...
    ↓
Parameterized Query

Never directly concatenate user values into SQL.

10. Custom / Comparison Filters
GET /api/users/compare
Purpose

Filter users using comparison operators such as:

>   Greater than
<   Less than
>=  Greater than or equal
<=  Less than or equal
=   Equal
Example
GET /api/users/compare?age=23&salary=60000

Conceptually:

WHERE age > $1
AND salary > $2

Values:

[23, 60000]
Flow
Query Parameters
      ↓
Read filter values
      ↓
Build conditions
      ↓
Parameterized Query
      ↓
PostgreSQL
      ↓
Filtered Users
Example: Age > 23 AND Salary > 60000
GET /api/users/compare?age=23&salary=60000
age > 23
   AND
salary > 60000
Important Concept

Don't allow the user to directly inject SQL operators:

❌ ?operator=>&

Instead, define the supported comparison logic inside the controller.

Client Input
    ↓
Allowed filter
    ↓
Allowed operator
    ↓
Parameterized value
    ↓
SQL
Difference
Basic Filter
/api/users?city=Pune
        ↓
city = 'Pune'

Multiple Filter
/api/users/filters?city=Pune&age=23
        ↓
city = 'Pune' AND age = 23

Comparison Filter
/api/users/compare?age=23&salary=60000
        ↓
age > 23 AND salary > 60000


### 11. Searching
GET /api/users/search?search=sid
Flow
Query Parameter
      ↓
req.query.search
      ↓
ILIKE + %search%
      ↓
PostgreSQL
      ↓
Matching Users
Search Fields
name
email
city

Example:

WHERE name ILIKE $1
   OR email ILIKE $1
   OR city ILIKE $1

Value:

["%sid%"]

ILIKE → case-insensitive search.

"sid" → Siddharth
"pune" → Pune
"gmail" → gmail.com


### 12. Sorting
GET /api/users/sort?sort=salary&order=desc
Flow
Query Parameters
      ↓
sort + order
      ↓
Validate allowed column
      ↓
ORDER BY
      ↓
PostgreSQL
      ↓
Sorted Users
Supported Fields
id
name
age
salary
created_at
Order
ASC
 ↓
Small → Large
A → Z

DESC
 ↓
Large → Small
Z → A

Examples:

/api/users/sort?sort=salary&order=asc

/api/users/sort?sort=salary&order=desc

/api/users/sort?sort=age&order=desc
SQL
SELECT *
FROM users
ORDER BY salary DESC;
Security Concept

SQL values use:

$1, $2, $3...

But column names cannot simply be parameterized.

Therefore:

User sort field
      ↓
Allowed fields whitelist
      ↓
Safe ORDER BY
Multiple Sorting
ORDER BY salary DESC, id ASC;

Means:
1. Salary → highest first
2. If salary is equal → ID lowest first

ure. Here's a simple multiple sorting example.

Example

Suppose we want:

Sort users by salary highest → lowest, and if two users have the same salary, sort them by age lowest → highest.

SQL:

SELECT *
FROM users
ORDER BY salary DESC, age ASC;
Result concept
Salary ↓     Age ↑

70000        24
70000        32
55000        23
50000        23
45000        22

The database applies sorting left to right:

ORDER BY salary DESC
        ↓
First sort by salary
        ↓
If salary is equal
        ↓
ORDER BY age ASC
        ↓
Sort those equal-salary users by age
Another example
SELECT *
FROM users
ORDER BY city ASC, salary DESC;

Meaning:

1. City → A to Z
2. Inside each city → highest salary first

So remember:

ORDER BY column1 direction,
         column2 direction,
         column3 direction;

The first column has the highest sorting priority.

### 13. LIMIT
GET /api/users/limit?limit=3
Purpose

Control how many rows PostgreSQL returns.

SELECT *
FROM users
LIMIT 3;
Flow
Query Parameter
      ↓
req.query.limit
      ↓
Validate limit
      ↓
LIMIT $1
      ↓
PostgreSQL
      ↓
Limited Users
Examples
/api/users/limit?limit=1
/api/users/limit?limit=3
/api/users/limit?limit=5
Validation
limit=3    → ✅
limit=0    → ❌
limit=-5   → ❌
limit=abc  → ❌
LIMIT + ORDER BY
SELECT *
FROM users
ORDER BY salary DESC
LIMIT 3;
ORDER BY
   ↓
Arrange rows
   ↓
LIMIT
   ↓
Take first N rows

### 14. Pagination

Pagination divides a large dataset into pages.

Page 1 → 1–10
Page 2 → 11–20
Page 3 → 21–30
API
GET /api/users/pagination?page=2&limit=10
Core Formula
OFFSET = (page - 1) × limit

Example:

page = 2
limit = 10

OFFSET = (2 - 1) × 10
       = 10
SQL
SELECT *
FROM users
ORDER BY id ASC
LIMIT $1
OFFSET $2;

Values:

[10, 10]
Flow
page + limit
     ↓
Calculate OFFSET
     ↓
ORDER BY
     ↓
LIMIT + OFFSET
     ↓
PostgreSQL
     ↓
Current Page
Examples
Page 1:
?page=1&limit=2
→ OFFSET 0

Page 2:
?page=2&limit=2
→ OFFSET 2

Page 3:
?page=3&limit=2
→ OFFSET 4
Key Concepts
LIMIT
  ↓
How many rows?

OFFSET
  ↓
How many rows to skip?

ORDER BY
  ↓
In what order?

### 15. Pagination Metadata
GET /api/users/pagination-meta?page=2&limit=5
Purpose

Return a page of users plus pagination information.

Flow
page + limit
     ↓
Calculate OFFSET
     ↓
COUNT(*) → Total Users
     ↓
LIMIT + OFFSET
     ↓
PostgreSQL
     ↓
Users + Pagination Metadata
Formula
OFFSET = (page - 1) × limit

totalPages = Math.ceil(totalUsers / limit)

Example:

totalUsers = 25
limit      = 5
page       = 2

OFFSET = (2 - 1) × 5
       = 5

totalPages = ceil(25 / 5)
           = 5
SQL
-- Total users
SELECT COUNT(*) FROM users;

-- Current page
SELECT *
FROM users
ORDER BY id ASC
LIMIT $1
OFFSET $2;
Response Structure
{
  "success": true,
  "pagination": {
    "currentPage": 2,
    "limit": 5,
    "totalUsers": 25,
    "totalPages": 5,
    "hasNextPage": true,
    "hasPreviousPage": true
  },
  "data": []
}
Page Example
25 users + limit 5

Page 1 →  1–5
Page 2 →  6–10
Page 3 →  11–15
Page 4 →  16–20
Page 5 →  21–25
Pagination Concepts
LIMIT
  ↓
Rows per page

OFFSET
  ↓
Rows to skip

COUNT(*)
  ↓
Total records

totalPages
  ↓
Total number of pages

hasNextPage
  ↓
Is another page available?

hasPreviousPage
  ↓
Is a previous page available?