#!/usr/bin/env node
const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const config = require("./config/defaultConfig");
// 处理静态文件的中间件
const staticFiles = require("./middelware/static-files");
const controller = require("./middelware/controller");
const apiHeader = require("./middelware/api-header");

const host = config.server.HOST;
const port = config.server.PORT;
const app = new Koa();

// 返回响应时间
app.use(async (ctx, next) => {
  const start = new Date().getTime();
  await next();
  const execTime = new Date().getTime() - start;
  ctx.response.set("X-Response-Time", `${execTime}ms`);
});

// 注册处理静态文件的中间件
app.use(staticFiles("/static/", `${__dirname}/static`));

// header中间件
// 还需要看看api有没有
app.use(apiHeader());

app.use(bodyParser());

// 路由中间件
app.use(controller());

app.listen(port, host, () => {
  console.log(`app started at http://${host}:${port}`);
});
