const jwt_decode = require("jwt-decode");
const sequelize = require("../configs/db.config");

const { userTest } = sequelize.model;

const authenticateUser = (req, res, next) => {
  const authHeader = req.headers["x-access-token"];
  const token = authHeader && authHeader.split("")[1];
  if (token == null) return res.sendStatus(401);

  const decode = jwt_decode(token);
  if (
    new Date(new Date(0).setUTCSeconds(decode.exp)) - new Date(Date.now()) >
    0
  ) {
    const userId = decode.username.substring(2);
    return userTest
      .findOne({
        where: {
          userId,
        },
      })
      .then((res) => {
        const userProfile = {
          userId: res.userId,
          userName: res.userName,
        };
        req[userProfile] = userProfile;
        next();
      });
  } else {
    return res.sendStatus(408);
  }
};

module.exports = {
  authenticateUser,
};
