const express= require("express");

const router = express.Router();
const helpController = require("../../controllers/helpController");
const airlineController = require("../../controllers/airlineController");
const flightController = require("../../controllers/flightController");
const reviewController = require("../../controllers/reviewController");
const bookingController = require("../../controllers/bookingController");

router.get("/help",helpController.helpDetails);
router.post("/airline",airlineController.createAirline);
router.get("/airline/:name",airlineController.getAirline);
router.get("/airline",airlineController.getAllAirline);
router.delete("/airline",airlineController.destroyAirline);

router.post("/flight",flightController.createFlight);
router.get("/flight/:flightNumber",flightController.getFlight);
router.get("/flight",flightController.getAllFlight);
router.delete("/flight",flightController.destroyFlight);

router.post("/review",reviewController.createReview);
router.get("/review/:flightId/:userId",reviewController.getReview);
router.get("/review/:flightId",reviewController.getAllReview);
router.delete("/review/:flightId",reviewController.destroyReview);

router.post("/booking",bookingController.createBooking);
router.get("/booking/:id/boardingPass",bookingController.getboardingPass);
router.delete("/booking/:id",bookingController.cancelBooking);



module.exports = router;