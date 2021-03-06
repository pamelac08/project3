const config = require("../config/auth.config");
const db = require("../models");
// const User = db.user;
// const Role = db.role;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  let user;

  console.log("testing inside signup");

  user = new db.User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    role: req.body.role,
  });

  console.log("testing before create user - user: ", user);

  db.User.create(user).then((user, err) => {
    console.log("testing inside create user - user: ", user);
    console.log("testing inside create user - err: ", err);

    if (err) {
      console.log("err - create user: ", err);
      res.end({ message: err });
      return;
    } else {
      res.end("User was registered successfully!");
      console.log("else: User was registered successfully!");
    }

    // console.log("req.body.roles" ,req.body.roles)
    // if (req.body.roles) {
    //   db.Role.find(
    //     {
    //       name: { $in: req.body.roles },
    //     },
    //     (err, roles) => {
    //       if (err) {
    //         res.end({ message: err });
    //         return;
    //       }

    //       user.roles = roles.map((role) => role._id);
    //       user.save((err) => {
    //         if (err) {
    //           res.end({ message: err });
    //           return;
    //         }

    //         res.end({ message: "User was registered successfully!" });
    //       });
    //     }
    //   );
    // } else {
    //   db.Role.findOne({ name: "user" }, (err, role) => {
    //     if (err) {
    //       res.end({ message: err });
    //       return;
    //     }

    //     user.roles = [role._id];
    //     user.save((err) => {
    //       if (err) {
    //         res.end({ message: err });
    //         return;
    //       }

    //       res.end({ message: "User was registered successfully!" });
    //       console.log("else: User was registered successfully!");
    //     });
    //   });
    // }
  });
};

exports.signin = (req, res) => {
  db.User.findOne({
    email: req.body.email,
  })
    .populate("roles", "-__v")
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!",
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400, // 24 hours
      });

      var authorities = [];

      for (let i = 0; i < user.roles.length; i++) {
        authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
      }

      res.status(200).send({
        id: user._id,
        username: user.username,
        email: user.email,
        roles: authorities,
        accessToken: token,
        role: user.role,
      });
    });
};
