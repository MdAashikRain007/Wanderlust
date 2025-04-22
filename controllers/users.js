const User =require("../models/user.js");

//Render Signup Form

module.exports.renderSignupForm=(req,res)=>{
    res.render("../views/users/signup.ejs");
};

// Signup
module.exports.signup=async(req,res)=>{
    try{
        let {username,email,password}=req.body;
        let newUser=new User({username,email});
        const registerUser= await User.register(newUser,password);
        req.login(registerUser,(err)=>{
            if(err){
                return next(err);
            }
            req.flash("success","Welcome to wanderlust");
            res.redirect("/listings");
        })
    }catch(e){
        req.flash("error",e.message);
        res.redirect("/signup")
    }
};

//render Login form
module.exports.renderLoginForm=(req,res)=>{
    res.render("../views/users/login.ejs")
};


module.exports.login=async(req,res)=>{
    req.flash("success","Welcome back to Wanderlust");
    let redirectUrl=res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};

module.exports.logout=(req,res,next)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","You are Logged out");
        res.redirect("/listings");
    })
};

