const express=require("express");
const router=express.Router();
const Listing=require("../models/listing.js");
const wrapAsync = require("../uitls/wrapAsync.js");
const ExpressError = require("../uitls/ExpresError.js");
const {isLoggedIn,isOwer,validationListing}=require("../middleware.js");
const multer  = require('multer'); 
const {storage}=require("../cloudConfig.js");
const upload = multer({ storage});

const listingController= require("../controllers/listings.js");


//searching functionality 


 
  router.get("/search",listingController.searchListing);

//compact way of write route index and Create


router.route("/")
.get(wrapAsync(listingController.index))
.post(
  isLoggedIn,
  upload.single("listing[image]"),
  wrapAsync(listingController.createListing)
);



 // New Route

 router.get("/new",isLoggedIn,(listingController.renderForm));

 //compact way of write route Show and Update and Delete

router.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(isLoggedIn,isOwer,upload.single("listing[image]"),wrapAsync(listingController.updateListing))
.delete(isLoggedIn,isOwer,wrapAsync(listingController.destroyListing));
 
 // Edit Route
 
 router.get("/:id/edit",isLoggedIn,isOwer,wrapAsync(listingController.renderEditForm));


  
 
 module.exports =router;