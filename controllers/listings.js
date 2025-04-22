const Listing = require("../models/listing.js");

//Index Route
module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("./listings/index.ejs", { allListings });
};

// New Route
module.exports.renderForm = (req, res) => {
    res.render("./listings/new.ejs");
};

//Show Route
module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
        .populate({
            path: "reviews",  //nested populate
            populate: {
                path: "author",
            },
        })
        .populate('owner');
    if (!listing) {
        req.flash("error", "Listing you requested not Exist!");
        res.redirect("/listings")
    }
    res.render("./listings/show.ejs", { listing });
};


//  Create Route
module.exports.createListing = async (req, res, next) => {
    let url = req.file.path;
    let filename = req.file.filename;
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = { url, filename };
    await newListing.save();
    req.flash("success", "Listing Created Successfully!");
    res.redirect("/listings");
};


// Edit Route
module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing you requested for edit not Exist!");
        res.redirect("/listings")
    }
    let originalImageUrl=listing.image.url;
    originalImageUrl=originalImageUrl.replace("/uplaod","/upload/w_250");
    res.render("./listings/edit.ejs", { listing , originalImageUrl});
};

//Update Route
module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    if (req.file) {
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = { url, filename };
        await listing.save();
    }
    req.flash("success", "Update Listing Successfully!");
    res.redirect(`/listings/${id}`);
};


//Delete Route
module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted Successfully!");
    res.redirect("/listings")
};
