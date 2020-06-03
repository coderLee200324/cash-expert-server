const apiHeader = () => async (ctx, next) => {
  if (ctx.url === "/login" || ctx.header["mp-access-token"]) {
    await next();
  } else {
    ctx.response.status = 400;
    ctx.response.type = "application/json";
    ctx.response.body = {
      code: 0,
      message: "用户没权限,请先完成登陆",
    };
  }
};

module.exports = apiHeader;
