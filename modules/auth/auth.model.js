module.exports = class AuthModel {
   AuthMode;
   constructor({ config }) {
      this.mongoose = config.mongoConnect;
      this.authSchema = new config.mongoConnect.Schema({
         email: String,
         password: String,
      });
      this.AuthMode = this.mongoose.model("auths", this.authSchema);
   }
   addUserAuth = async (query) => {
      return this.AuthMode.find(query);
   };
   authenticateUser = async (userId) => {
      return this.AuthMode.find({ userId });
   };
};
