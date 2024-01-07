exports.router = (app, container) => {
   const { authRoutes } = container.cradle;
   app.use("/auth", authRoutes.authRouter());
};
