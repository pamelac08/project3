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
  .delete(appController.removeMovement);

router.route("/equipment/:id").put(appController.updateMovementEquipment);

router.route("/focus/:id").put(appController.updateMovementFocus);

router.route("/scaled/:id").put(appController.updateMovementScaled);

router
  .route("/habits/:id")
  .get(appController.findOneHabit)
  .put(appController.updateHabitCounter)
  .delete(appController.removeHabit);

router
  .route("/users/:id")
  .put(appController.updateUser)
  .delete(appController.removeUser);

module.exports = router;
