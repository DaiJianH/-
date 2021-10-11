//引入第三方模块express
var express = require('express');
//引入path模块用于解析地址路径（静态资源托管用）
var path = require('path');
//引入用户路由器
var userRouter = require('./routes/users.js');
//引入管理员路由
var adminRouter = require('./routes/admin.js');

//创建WEB服务器
var app = express();
//设置端口
app.listen(8080);
//将post请求的数据解析为对象
app.use(express.urlencoded({
  extended: false
}));

// 托管静态资源
app.use(express.static(path.join(__dirname,'public')));


//配置跨域
// app.all('*', function (req, res, next) {
//   //允许接收不同协议，不同端口的请求
//   res.header('Access-Control-Allow-Origin', '*');
//   //不同方式（接收任意的请求方式，默认情况下只接收get和post）
//   res.header('Access-Control-Allow-Methods', '*');
//   next();
// });
  

//挂载用户路由器，/users
app.use('/users', userRouter);
//挂载用户路由器，/admin
app.use('/admin', adminRouter);

//错误处理中间件
app.use(function (err, req, res, next) {
  //查看得到的错误信息
  console.log(err);
  //响应500,返回值500和信息
  res.status(500).send({
    code: 500,
    msg: '服务器端错误'
  });
});