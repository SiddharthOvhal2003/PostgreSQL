const pool=require("../config/db");


const getAllUsers=async(req,res)=>{
    try{
       const result=await pool.query("SELECT * FROM users")
       res.status(200).json({
        success:true,
        data:result.rows
       }) 
    }
    catch(error){
        console.error("Error fetching users:", error.message);
        res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
}
    

const getUserById=async(req,res)=>{
    try{
        const {id}=req.params;

        const result=await pool.query(
            "Select * from users where id=$1",
            [id]
        );

        // Check if user exists
        if(result.rows.length === 0){
            return res.status(404).json({
                success:false,
                message:"User not found"
            })
        }

        // User found
        res.status(200).json({
            success:true,
            data:result.rows[0]
        })

    }
    catch(error){
        console.error("Error fetching user by ID:", error.message);
        res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
}

const createUser=async(req,res)=>{
    try{    
        const {name,email,age,city,salary}=req.body;

        // Validate input data
        if(!name || !email || !age || !city || !salary){
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            })
        }

        // Insert new user into the database
        const result=await pool.query(
            `INSERT INTO users 
            (name,email,age,city,salary)
            VALUES ($1,$2,$3,$4,$5)
            RETURNING *`,
            [name,email,age,city,salary]
        );

        res.status(201).json({
            success:true,
            data:result.rows[0]
        })
    }
    catch(error){
        console.error("Error creating user:", error.message);
        res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
}

const updateUser=async(req,res)=>{
    try{
        // Extract user ID from request parameters
        const{id}=req.params;

        // Extract updated user data from request body
        const{name,email,age,city,salary}=req.body;

        // Validate input data
        if(!name || !email || !age || !city || !salary){
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            })
        }

        // Update user in the database
        const result=await pool.query(
            `UPDATE users
            SET 
            name=$1,
            email=$2,
            age=$3,
            city=$4,
            salary=$5
            WHERE id=$6
            RETURNING *`,
            [name,email,age,city,salary,id]
        )

        // Check if user exists
        if(result.rows.length===0){
            return res.status(404).json({
                success:false,
                message:"User not found"
            })
        }

        // User updated successfully
        res.status(200).json({
            success:true,
            data:result.rows[0]
        })

    }
    catch(error){
        console.error("Error updating user:", error.message);
        res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
}

const updateUserPartial = async(req,res)=>{
    try{
        const {id}=req.params;
        const {name,email,age,city,salary}=req.body;

        // fields to update    
        const fields=[];

        //Values to update
        const values=[];

        // Check which fields are provided in the request body and add them to the fields and values arrays
        if(name !== undefined){
            fields.push(`name=$${values.length + 1}`);
            values.push(name);
        }

        // Check if email is provided and add it to the fields and values arrays
        if(email !== undefined){
            fields.push(`email=$${values.length + 1}`);
            values.push(email);
        }

        // Check if age is provided and add it to the fields and values arrays
        if(age !== undefined){
            fields.push(`age=$${values.length + 1}`);
            values.push(age);
        }

        // Check if city is provided and add it to the fields and values arrays
        if(city !== undefined){
            fields.push(`city=$${values.length + 1}`);
            values.push(city);
        }

        // Check if salary is provided and add it to the fields and values arrays
        if(salary !== undefined){
            fields.push(`salary=$${values.length + 1}`);
            values.push(salary);
        }

        if(fields.length === 0){
            return res.status(400).json({
                success:false,
                message:"At least one field is required for update"
            })
        }
         values.push(id); // Add the user ID to the values array for the WHERE clause

         // Construct the SQL query for updating the user
         const query=`
         UPDATE users
        SET ${fields.join(", ")}
        WHERE id=$${values.length}
        RETURNING *`;

        // Execute the query to update the user in the database
        const result=await pool.query(query,values);

        // Check if user exists
        if(result.rows.length===0){
            return res.status(404).json({
                success:false,
                message:"User not found"
            })
        }

        // User updated successfully
        res.status(200).json({
            success:true,
            data:result.rows[0]
        })
        
    }
    catch(error){
        console.error("Error updating user:", error.message);
        res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
}

const updateUserPartailDetailed=async(req,res)=>{
    try{
        const {id}  = req.params;

        const allowedFields = ["name", "email", "age", "city", "salary"];

        const fields=[];
        const values=[];
        
        //Check fields and values
        for(const key of Object.keys(req.body)){
              // Field validation
            if (!allowedFields.includes(key)) {
                return res.status(400).json({
                    success: false,
                    message: `Invalid field: ${key}`
                });
            }
            const value = req.body[key];

           // Name validation
            if (key === "name") {
                if (
                    typeof value !== "string" ||
                    value.trim() === ""
                ) {
                    return res.status(400).json({
                        success: false,
                        message: "Name must be a non-empty string"
                    });
                }
            }

            // Email validation
            if (key === "email") {
                if (
                    typeof value !== "string" ||
                    value.trim() === ""
                ) {
                    return res.status(400).json({
                        success: false,
                        message: "Email must be a non-empty string"
                    });
                }
            }

            // Age validation
            if (key === "age") {
                if (
                    typeof value !== "number" ||
                    !Number.isInteger(value) ||
                    value < 0
                ) {
                    return res.status(400).json({
                        success: false,
                        message: "Age must be a positive integer"
                    });
                }
            }

            // City validation
            if (key === "city") {
                if (
                    typeof value !== "string" ||
                    value.trim() === ""
                ) {
                    return res.status(400).json({
                        success: false,
                        message: "City must be a non-empty string"
                    });
                }
            }

            // Salary validation
            if (key === "salary") {
                if (
                    typeof value !== "number" ||
                    value < 0
                ) {
                    return res.status(400).json({
                        success: false,
                        message: "Salary must be a positive number"
                    });
                }
            }

            //Add field and value to the arrays
            fields.push(`${key}=$${values.length + 1}`);
            // Add the value to the values array
            values.push(typeof value === "string" ? value.trim() : value);
        }

        //No fields provided for update
        if (fields.length === 0) {
            return res.status(400).json({
                success: false,
                message: "At least one field is required for update"
            });
        }

        //Add the user ID to the values array for the WHERE clause
        values.push(id);

        const query = `
        UPDATE users
        SET ${fields.join(", ")}
        WHERE id=$${values.length}
        RETURNING *`;

        const result = await pool.query(query, values);

        // Check if user exists
        if (result.rows.length === 0) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        // User updated successfully
        res.status(200).json({
            success: true,
            data: result.rows[0]
        });
    }
    catch(error){
        console.error("Error updating user:", error.message);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}

const deleteUser=async(req,res)=>{
    try{
        const {id}=req.params;

        const result=await pool.query(
            `DELETE FROM users
            WHERE id=$1
            RETURNING *`,
            [id]
        );

        if(result.rows.length===0){
            return res.status(404).json({
                success:false,
                message:"User not found"
            })
        }

        res.status(200).json({
            success:true,
            message:"User deleted successfully",
            data:result.rows[0]
        })

    }
    catch(error){
        console.error("Error deleting user:", error.message);
        res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
}

const deleteAllUsers=async(req,res)=>{
    try{
        const result=await pool.query(
            `DELETE FROM users
            RETURNING *`
        );

        res.status(200).json({
            success:true,
            message:"All users deleted successfully",
            data:result.rows
        })

    }
    catch(error){
        console.error("Error deleting all users:", error.message);
        res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
}

const getUserByCity=async(req,res)=>{
    try{
        const {city}=req.query;

        let result;

        if(city){
            result=await pool.query(
                `SELECT * FROM users WHERE city=$1`,
                [city]
            );
        }
        else{
            result=await pool.query(
                `SELECT * FROM users`
            );
        }

        res.status(200).json({
            success: true,
            data: result.rows
        });
    }
    catch(error){
        console.error("Error fetching user by city:", error.message);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}

//Multiple Filters
const getUserByFilters=async(req,res)=>{
    try{
        const {city,age,salary}=req.query;
        
        const filters=[];
        const values=[];

        // Check which filters are provided in the query parameters and add them to the filters and values arrays
        if(city){
            filters.push(`city = $${values.length+ 1}`);
            values.push(city);
        }

        if(age){
            filters.push(`age=$${values.length+1}`);
            values.push(Number(age));
        }

        if(salary){
            filters.push(`salary=$${values.length+1}`);
            values.push(Number(salary));
        }

        let query=`SELECT * from users`;

        if(filters.length>0){
            query+=` WHERE ${filters.join(' AND ')}`;
        }

        const result=await pool.query(query, values);

        res.status(200).json({
            success: true,
            data: result.rows
        });

    }
    catch(error){
        console.error("Error fetching users by filters:", error.message);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}

//Comparison the Filters
const compareFilters=async(req,res)=>{
    try{
        const {city,age,salary,minAge,maxAge,minSalary,maxSalary,search}=req.query;

        const filters=[];
        const values=[];

        //Equal Filters
        if(city){
            filters.push(`city = $${values.length + 1}`);
            values.push(city);
        }

          if (age) {
            filters.push(`age = $${values.length + 1}`);
            values.push(Number(age));
        }

        if (salary) {
            filters.push(`salary = $${values.length + 1}`);
            values.push(Number(salary));
        }

        //Age range
        if(minAge){
            filters.push(`age >= $${values.length+1}`);
            values.push(Number(minAge));
        }

        if(maxAge){
            filters.push(`age <= $${values.length+1}`);
            values.push(Number(maxAge));
        }

        //Salary range
        if(minSalary){
            filters.push(`salary >= $${values.length+1}`);
            values.push(Number(minSalary));
        }

        if(maxSalary){
            filters.push(`salary <= $${values.length+1}`);
            values.push(Number(maxSalary));
        }

        if(search){
            filters.push(
                `(name ILIKE $${values.length + 1}
                OR email ILIKE $${values.length+1}
                OR city ILIKE $${values.length+1}
                )`
            );
            values.push(`%${search}%`);
        }

        let query=`SELECT * from users`;

        if(filters.length>0){
            query+=` WHERE ${filters.join(' AND ')}`;
        }

        const result=await pool.query(query, values);

        res.status(200).json({
            success: true,
            data: result.rows
        });

    
    }
    catch(error){
        console.error("Error fetching users by comparison filters:", error.message);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}

const searchUsers=async(req,res)=>{
    try{
        const {search}=req.query;

        if(!search){
            return res.status(400).json({
                success:false,
                message:"Search query is required"
            })
        }

        const result = await pool.query(
            `SELECT * FROM users
            WHERE name ILIKE $1 OR email ILIKE $1 OR city ILIKE $1`,
            [`%${search}%`]
        );
        res.status(200).json({
            success: true,
            data: result.rows
        });
    }
    catch(error){
        console.error("Error searching users:", error.message);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}

const sortUsers=async(req,res)=>{
    try{
        const {sort="id",order="asc"}=req.query;

        const allowedFields=["id","name","email","age","city","salary","created_at"];

        if(!allowedFields.includes(sort)){
            return res.status(400).json({
                success:false,
                message:`Invalid sort field. Allowed fields are: ${allowedFields.join(", ")}`
            })
        }

        const sortOrder=order.toLowerCase() === "desc" ? "DESC" : "ASC";
        
        const result=await pool.query(
            `SELECT * FROM users ORDER BY ${sort} ${sortOrder}`
        );

        return res.status(200).json({
            success:true,
            data:result.rows
        })

    }
    catch(error){
        console.error("Error sorting users:", error.message);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}

const getUsersWithLimit = async (req, res) => {
    try {
        const limit = Number(req.query.limit);

        if (!Number.isInteger(limit) || limit <= 0) {
            return res.status(400).json({
                success: false,
                message: "Limit must be a positive integer"
            });
        }

        const result = await pool.query(
            `SELECT *
             FROM users
             LIMIT $1`,
            [limit]
        );

        res.status(200).json({
            success: true,
            data: result.rows
        });

    } catch (error) {
        console.error("Error fetching users with limit:", error);

        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

const getUsersWithPagination=async (req,res)=>{
    try{
        const page=Number(req.query.page);
        const limit=Number(req.query.limit);

        if(!Number.isInteger(page) || page<=0 || !Number.isInteger(limit) || limit<=0){
            return res.status(400).json({
                success:false,
                message:"Page and limit must be positive integers"
            });
        }

        const offset=(page-1)*limit;
        const result=await pool.query(
            `SELECT * from users
            ORDER BY id ASC
            LIMIT $1 OFFSET $2`,
            [limit,offset]
        )
        res.status(200).json({
            success: true,
            page,
            limit,
            data: result.rows
        });
    }
    catch(error){
        console.error("Error fetching users with pagination:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}


const getUsersWithPaginationMeta=async(req,res)=>{
    try{
        const page=Number(req.query.page);
        const limit=Number(req.query.limit);

        if(!Number.isFinite(page) || page<=0 || !Number.isFinite(limit) || limit<=0){
            return res.status(400).json({
                success:false,
                message:"Page and limit must be positive integers"
            });
        }

        const offset=(page-1)*limit;

        //1.get total users;
        const countResult=await pool.query(
            `SELECT COUNT(*) FROM users`
        )

        const totalUsers=Number(countResult.rows[0].count);

        //2. Get users for the current pages
        const result=await pool.query(
            `SELECT * FROM users
            ORDER BY id ASC
            LIMIT $1 OFFSET $2`,
            [limit,offset]
        );

        //3. Calculate total pages
        const totalPages=Math.ceil(totalUsers/limit);

        res.status(200).json({
            success:true,

            pagination:{
                currentPage:page,
                limit:limit,
                totalUsers:totalUsers,
                totalPages:totalPages,
                hasNextPage:page<totalPages,
                hasPreviousPage:page>1
            },
            data:result.rows
        })

    }
    catch (error) {
        console.error(
            "Error fetching paginated users:",
            error
        );

        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}

const getUsersProduction=async(req,res)=>{
    try{
        const{
            search,city,age,minAge,maxAge,minSalary,
            sort="id",order="asc",page=1,limit=10
        }=req.query;

        const filters=[];
        const values=[];

        //Search Filter
        if(search){
            filters.push(`(
                name ILIKE $${values.length+1}
                OR email ILIKE $${values.length+1}
                OR city ILIKE $${values.length+1}
            )`);
            values.push(`%${search}%`);
        }

        //Exact filters

        if(city){
            filters.push(`city=$${values.length+1}`);
            values.push(city);
        }

        if(age){
            filters.push(`age=$${values.length+1}`);
            values.push(Number(age));
        }

        //Range Filters
        if(minAge){
            filters.push(`age >= $${values.length+1}`);
            values.push(Number(minAge));
        }

        if(maxAge){
            filters.push(`age <= $${values.length+1}`);
            values.push(Number(maxAge));
        }

        if(minSalary){
            filters.push(`salary >= $${values.length+1}`);
            values.push(Number(minSalary));
        }

        if(maxSalary){
            filters.push(`salary <= $${values.length+1}`);
            values.push(Number(maxSalary));
        }

        //Sorting
         const allowedSortFields = [
            "id",
            "name",
            "age",
            "salary",
            "created_at"
        ];

        if(!allowedSortFields.includes(sort)){
            return res.status(400).json({success:false,message:`Invalid sort field. Allowed fields are: ${allowedSortFields.join(", ")}`})
        }

        const sortOrder=order.toLowerCase() === "desc" ? "DESC" : "ASC";

        //Pagination 
        const pageNumber=Number(page);
        const limitNumber=Number(limit);


        if (
            !Number.isInteger(pageNumber) ||
            pageNumber <= 0 ||
            !Number.isInteger(limitNumber) ||
            limitNumber <= 0 ||
            limitNumber > 100
        ) {
            return res.status(400).json({
                success: false,
                message:
                    "Page must be positive and limit must be between 1 and 100"
            });
        }

        const offset = (pageNumber - 1) * limitNumber;

        //Build WHERE

        let whereClause="";

        if(filters.length > 0){
            whereClause=`WHERE ${filters.join(" AND ")}`;
        }

        //Get total users count

    }
    catch(error){
        console.error("Error fetching users with production filters:", error);
        res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
} 


module.exports={
    getAllUsers, getUserById,
    createUser,
    updateUser,updateUserPartial,updateUserPartailDetailed
   ,deleteUser,deleteAllUsers,
   getUserByCity,getUserByFilters,compareFilters,
   searchUsers,sortUsers
   ,getUsersWithLimit,getUsersWithPagination,getUsersWithPaginationMeta

 };