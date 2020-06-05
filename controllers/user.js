// const UserDAL = require("../dal/user");

module.exports = {
  "POST /login": async ctx => {
    // 设置Content-Type:
    ctx.response.type = "application/json";
    // 设置Response Body:
    // const result = await UserDAL.Login();
    // console.log(result);
    ctx.response.body = {
      code: 0,
      msg: "成功",
      result: {
        total: 0,
        items: [
          { header: ctx.header },
          { responseHeader: ctx.response.header },
          { method: ctx.method },
          { url: `${ctx.host}${ctx.url}` },
        ],
      },
    };
  },
  "POST /user": async ctx => {
    // 设置Content-Type:
    ctx.response.type = "application/json";
    // 设置Response Body:
    ctx.response.body = {
      code: 0,
      msg: "成功",
      result: {
        total: 0,
        items: [
          { header: ctx.header },
          { responseHeader: ctx.response.header },
          { method: ctx.method },
          { url: `${ctx.host}${ctx.url}` },
        ],
      },
    };
  },
};
