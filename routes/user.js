const express=require("express");
const router=express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../uitls/wrapAsync.js");
const passport=require("passport");
const {saveRedirectUrl}=require("../middleware.js");

const userController=require("../controllers/users.js");

 // render form of signup and Signup
router.route("/signup")
.get((userController.renderSignupForm))
.post(wrapAsync(userController.signup));

 // rener login form and Login
 
router.route("/login")
.get((userController.renderLoginForm))
.post(
    saveRedirectUrl,
    passport.authenticate("local",{
        failureRedirect:"/login",
        failureFlash:true,
    }),
userController.login
);

//logout

router.get("/logout",(userController.logout));

module.exports=router;
