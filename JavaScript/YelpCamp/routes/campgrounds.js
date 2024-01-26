const express = require("express");
const router = express.Router();
const multer = require('multer');

const { validateCampground, isLoggedIn, isAuthor } = require("../middlewares");
const campgrounds = require("../controllers/campgrounds");
const { storage } = require("../cloudinary/cloudinary");

const upload = multer({ storage });

router.route("/")
    .get(campgrounds.index)
    .post(isLoggedIn, upload.array("image"), validateCampground, campgrounds.createCampground);


router.get("/new", isLoggedIn, campgrounds.renderNewForm);

router.route("/:id")
    .get(campgrounds.showCampground)
    .put(isLoggedIn, isAuthor, upload.array("image"), validateCampground, campgrounds.updateCampround)
    .delete(isLoggedIn, isAuthor, campgrounds.deleteCampground);

router.get("/:id/edit", isLoggedIn, isAuthor, campgrounds.renderEditForm);

module.exports = router;