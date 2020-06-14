const router = require("express").Router();
const coachRoutes = require("./coachRoutes");
const appController = require("../../controllers/appController");


router.use("/coach", coachRoutes)

router.route("/habits")
    .get(appController.findAllHabit)

module.exports = router;
