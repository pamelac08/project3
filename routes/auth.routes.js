const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");
const router = require("express").Router();

// router.use(function(req, res, next) {
//   res.header(
//     "Access-Control-Allow-Headers",
//     "x-access-token, Origin, Content-Type, Accept"
//   );
//   next();
// });

router.get("/api/auth", (req, res) => {
  console.log("testing api/auth route");
});

router.post("/api/auth/signup", (req, res) => {
  // console.log("testing /api/auth/signup route");
  // console.log("req.body: ", req.body);
  [
    verifySignUp.checkDuplicateUsernameOrEmail(req, res),
    // verifySignUp.checkRolesExisted(req, res)
  ],
    controller.signup(req, res);
});

router.post("/api/auth/signin", (req, res) => {

  controller.signin(req, res);
});

module.exports = router;
