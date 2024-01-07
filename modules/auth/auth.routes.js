const { Router } = require("express");
module.exports = class AuthRoutes {
   loginController;
   logoutController;
   constructor({ authController, authService }) {
      this.loginController = authController.login;
      this.logoutController = authController.logout;
      this.authMiddleware = authService.authenticateMiddleware;
   }

   authRouter = () => {
      const routes = Router();
      routes.post("/login", this.loginController);
      routes.get("/logout", this.logoutController);
      routes.get(
         "/protected",
         this.authMiddleware(),
         this.logoutController
      );
      return routes;
   };
};
