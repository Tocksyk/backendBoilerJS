const app = require("./app");
const { configs } = require("./config");
const { createContainer } = require("./container");
const { router } = require("./routes");

configs().then(async (config) => {
   const container = createContainer(config);
   router(app, container);
   app.listen(config.port, () => {
      console.log("server started on port : ", config.port);
   });
});
