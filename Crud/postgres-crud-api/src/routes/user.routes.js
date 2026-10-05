const express=require("express");

const {getAllUsers,getUserById,createUser,updateUser,updateUserPartial,updateUserPartailDetailed,
    deleteUser,deleteAllUsers,
    getUserByCity,getUserByFilters,compareFilters,
    searchUsers,sortUsers,getUsersWithLimit,getUsersWithPagination,getUsersWithPaginationMeta}=require("../controllers/user.controller");




const router=express.Router();

//Static Routes
router.get("/",getAllUsers);
router.post("/",createUser);
router.delete("/",deleteAllUsers);

//Filter
router.get("/city",getUserByCity);

//Multiple Filters
router.get("/filters",getUserByFilters);

//Compare Filters
router.get("/compare",compareFilters);

//Search
router.get("/search",searchUsers);

//Sort
router.get("/sort",sortUsers);

//Limit
router.get("/limit",getUsersWithLimit);

//Pagination
router.get("/pagination",getUsersWithPagination);

//Pagination with Metadata
router.get("/pagination-meta/",getUsersWithPaginationMeta);

// Dynamic Routes
router.get("/:id",getUserById);
router.put("/:id",updateUser);
router.patch("/:id",updateUserPartial);
router.patch("/:id/detailed",updateUserPartailDetailed);
router.delete("/:id",deleteUser);


module.exports=router;