const router = require("express").Router();
const appController = require("../../controllers/appController");

// root /api/coach
router
  .route("/")
  .get(appController.findAllMovement)
  .post(appController.createMovement);

router
  .route("/:id")
  .get(appController.findOneMovement)
  .put(appController.updateMovement)
  .delete(appController.removeMovement);

router
  .route("/habits/:id")
  .get(appController.findOneHabit)
  .put(appController.updateHabit)
  .delete(appController.removeHabit);

module.exports = router;
