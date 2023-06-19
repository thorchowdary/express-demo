const express = require("express");
const {getUser,createUser,updateUser,deleteUser} = require("../controller/userController");
const router = express.Router();

router.get("/current",getUser);
router.post("/create",createUser);
router.put("/update",updateUser);
router.delete("/delete",deleteUser);

module.exports = router;