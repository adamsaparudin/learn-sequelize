var express = require("express");
var router = express.Router();

const userController = require("../controller/user.controller");
const transactionController = require("../controller/transaction.controller");
const kelasController = require("../controller/kelas.controller");

/* GET home page. */
router.post("/api/user", userController.createUser);

router.get("/api/user/:userId/transaction", userController.getUserTransaction);

router.get("/api/user/:userId/kelas", userController.getUserKelas);
router.post("/api/user/:userId/kelas", userController.addUserKelas);

router.get("/api/kelas/:kelasId", kelasController.getKelasUser);
router.post("/api/kelas", kelasController.createKelas);

router.post("/api/transaction", transactionController.createTransaction);

module.exports = router;
