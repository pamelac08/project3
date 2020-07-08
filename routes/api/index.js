const router = require("express").Router();
const coachRoutes = require("./coachRoutes");
const appController = require("../../controllers/appController");

router.use("/coach", coachRoutes);

router
  .route("/habits")
  .post(appController.createHabit)
  .get(appController.findAllHabit);

router.route("/users").get(appController.findAllUsers);

module.exports = router;
