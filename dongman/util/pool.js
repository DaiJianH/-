//引入mysql模块
const mysql = require('mysql');
//创建连接池对象
const pool = mysql.createPool({
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: '',
  database: 'dm',
  //连接池可创建的最大连接数
  connectionLimit: 15
});
//导出对象
module.exports = pool;