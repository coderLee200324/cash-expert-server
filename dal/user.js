const Mysql = require("../dbhelper/mysqlHelper");

const Login = async () => {
  const result = await Mysql.ExecuteSql();
  console.log(result);
};

module.exports = {
  Login,
};
