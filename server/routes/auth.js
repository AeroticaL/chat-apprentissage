const {
  login,
  register,
  getAllUsers,
  ChoixAvatar,
  Deconnexion,
} = require("../controllers/userController");

const router = require("express").Router();
router.post("/ChoixAvatar/:id", ChoixAvatar);
router.get("/Deconnexion/:id", Deconnexion);
router.post("/login", login);
router.post("/register", register);
router.get("/allusers/:id", getAllUsers);

module.exports = router;
