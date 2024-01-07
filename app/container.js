exports.createContainer = function (config) {
   const awilix = require("awilix");
   const container = awilix.createContainer({
      injectionMode: awilix.InjectionMode.PROXY,
   });

   container.register("config", awilix.asValue(config));
   container.loadModules(["../modules/**/**.js"], {
      formatName: "camelCase",
      resolverOptions: {
         lifetime: awilix.Lifetime.SINGLETON,
         register: awilix.asClass,
      },
      cwd: __dirname,
   });
   return container;
};
