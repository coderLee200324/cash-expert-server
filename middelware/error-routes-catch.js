const ErrorRoutesCatch = () => async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    console.log(err.status);
    switch (err.status) {
      case 401:
        ctx.status = 200;
        ctx.body = {
          status: 401,
          result: {
            err: "Authentication Error",
            errInfo:
              "Protected resource, use Authorization header to get access.",
          },
        };
        break;
      default:
        throw err;
    }
  }
};

module.exports = ErrorRoutesCatch;
