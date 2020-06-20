const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const authRoutes = require("./auth.routes");
const userRoutes = require("./user.routes");

router.use("/api", apiRoutes);
router.use(authRoutes);
router.use(userRoutes);

router.use((req, res) => {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;
