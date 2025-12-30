const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  // Proxy para Activities API
  app.use(
    "/api/activities",
    createProxyMiddleware({
      target: "https://activities-system-api-xmi4ow.5sc6y6-1.usa-e2.cloudhub.io",
      changeOrigin: true,
    })
  );

  // Proxy para Users API
  app.use(
    "/api/users",
    createProxyMiddleware({
      target: "https://users-system-api-xmi4ow.5sc6y6-4.usa-e2.cloudhub.io",
      changeOrigin: true,
    })
  );
};
