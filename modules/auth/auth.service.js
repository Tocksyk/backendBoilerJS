const passport = require("passport");
const passportJwt = require("passport-jwt");
module.exports = class AuthService {
   authenticateUser;
   constructor({ authModel }) {
      this.authenticateUser = authModel.authenticateUser;
   }

   jwtStrategy = (() => {
      const strategy = passportJwt.Strategy;
      const jwtExtract = passportJwt.ExtractJwt;

      const jwtStrategy = new strategy(
         {
            secretOrKey: "sameed",
            jwtFromRequest: jwtExtract.fromAuthHeaderAsBearerToken(),
         },
         async (jwt, next) => {
            const userId = jwt.id;
            const user = await this.authenticateUser({ userId: userId });
            if (!user) {
               return next(null, false);
            }
            return next(null, user);
         }
      );
      passport.use(jwtStrategy);
      return true;
   })();

   authenticateMiddleware = () =>
      passport.authenticate("jwt", {
         session: false,
      });
};
