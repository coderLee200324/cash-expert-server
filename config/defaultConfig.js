// 这个地方可以是个获取本地配置文件的方法
const config = {
  // 数据库配置
  database: {
    DATABASE: "xxx", // 数据库名称
    USERNAME: "xxx", // mysql用户名
    PASSWORD: "xxx", // mysql密码
    PORT: "3306", // mysql端口号
    HOST: "xx.xxx.xx.xx", // 服务器ip
  },
  server: {
    PORT: "3030",
    HOST: "127.0.0.1",
  },
};

module.exports = config;
