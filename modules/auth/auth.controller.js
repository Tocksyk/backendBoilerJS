const jsonwebtoken = require("jsonwebtoken");
module.exports = class authController {
   authModel;
   constructor({ authModel }) {
      this.authModel = authModel;
   }

   login = (req, res, next) => {
      const { userId, password } = req.body;
      const jwt = jsonwebtoken.sign({ userId }, "sameed", {
         expiresIn: "1h",
      });
      return res.send(jwt);
   };

   logout = async (req, res, next) => {
      return res.send("Logout");
   };
};
