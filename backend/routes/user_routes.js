const express = require("express");
const router = express.Router();
const {
  signup_post,
  login_post,
  getallUser,
} = require("../controllers/login_controllers");

router.post("/signup", signup_post);
router.post("/login", login_post);
router.get("/allusers", getallUser);
// router.post("/requireauth", requireAuth);
module.exports = router;
