const express=require("express");
const router=express.Router({mergeParams:true});
const Listing=require("../models/listing.js");
const wrapAsync = require("../uitls/wrapAsync.js");
const Review=require("../models/review.js");
const ExpressError = require("../uitls/ExpresError.js");
const {validationLReview,isLoggedIn,isReviewAuthor}=require("../middleware.js");

const reviewController=require("../controllers/reviews.js");



// Add Reviews
// Post Review Request
router.post("/",isLoggedIn,wrapAsync(reviewController.createReview));


// Delete Review Route

router.delete("/:reviewId", isLoggedIn,isReviewAuthor,wrapAsync(reviewController.destroyReview));


module.exports=router;