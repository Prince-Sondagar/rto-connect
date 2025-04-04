const express = require("express");
const { getAllUser, deleteUser } = require('../controllers/userController')


const router = express.Router();


router.get('/getAll', getAllUser)
router.delete('/delete/:id', deleteUser)


module.exports = router;