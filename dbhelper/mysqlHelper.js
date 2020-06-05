/* eslint-disable implicit-arrow-linebreak */
const mysql = require("mysql");
const mysqlConfig = require("../config/mysqlConfig");

const pool = mysql.createPool(mysqlConfig);
const ExecuteSql = (sql, val) =>
  new Promise((resolve, reject) => {
    pool.getConnection((errConn, connection) => {
      if (errConn) {
        reject(errConn);
      } else {
        connection.query(sql, val, (errQuery, fileds) => {
          if (errQuery) reject(errQuery);
          else resolve(fileds);
          connection.release();
        });
      }
    });
  });
module.exports = { ExecuteSql };
