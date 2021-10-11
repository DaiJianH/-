//引入express模块
var express = require('express');
//引入连接池
var pool = require('../util/pool');
//创建路由对象
var router = express.Router();

router.get('/index1',(req,res)=>{
    var  obj=req.query;
    var  count=obj.count*1
    var  pno=obj.pno*1
    if(!pno) pno=1;
    if(!count)  count=7
    var  sql=`select * from   dm_remp  `;
    pool.query(sql,(err,result)=>{
      if(err) throw err;
      var  sql=`select * from  dm_remp limit ?,?`
      var  start=(pno-1)*count*1
      pool.query(sql,[start,count],(err,data)=>{
        if(err) throw  err;
        if(result.length>0){
          res.send({
            code:200,
            data:data
          })
        }
      })
    })
  })

  router.get('/index1_2',(req,res)=>{
    var  obj=req.query;
    var  count=obj.count*1
    var  pno=obj.pno*1
    if(!pno) pno=1;
    if(!count)  count=6
    var  sql=`select * from   dm_gemp  `;
    pool.query(sql,(err,result)=>{
      if(err) throw err;
      var  sql=`select * from  dm_gemp limit ?,?`
      var  start=(pno-1)*count*1
      pool.query(sql,[start,count],(err,data)=>{
        if(err) throw  err;
        if(result.length>0){
          res.send({
            code:200,
            data:data
          })
        }
      })
    })
  })

  router.get('/index1_3',(req,res)=>{
    var  obj=req.query;
    var  count=obj.count*1
    var  pno=obj.pno*1
    if(!pno) pno=1;
    if(!count)  count=6
    var  sql=`select * from   dm_jemp  `;
    pool.query(sql,(err,result)=>{
      if(err) throw err;
      var  sql=`select * from  dm_jemp limit ?,?`
      var  start=(pno-1)*count*1
      pool.query(sql,[start,count],(err,data)=>{
        if(err) throw  err;
        if(result.length>0){
          res.send({
            code:200,
            data:data
          })
        }
      })
    })
  }) 

  router.get('/index1_4',(req,res)=>{
    var  obj=req.query;
    var  count=obj.count*1
    var  pno=obj.pno*1
    if(!pno) pno=1;
    if(!count)  count=7
    var  sql=`select * from   dm_qemp  `;
    pool.query(sql,(err,result)=>{
      if(err) throw err;
      var  sql=`select * from  dm_qemp limit ?,?`
      var  start=(pno-1)*count*1
      pool.query(sql,[start,count],(err,data)=>{
        if(err) throw  err;
        if(result.length>0){
          res.send({
            code:200,
            data:data
          })
        }
      })
    })
  })   

  router.get('/index2',function(req,res,next){
    var obj = req.query;
    console.log(obj);
    pool.query('select * from dm_qemp where qeid=?',[obj.eid],function(err,data){
      //处理错误
      console.log(data);
      if(err){
        next(err);
        return;
      }
      res.send({
        code:1,
        msg:'返回查询数据',
        data:data
      })
    })
  })
// 用户注册接口（post /reg）
// 地址： /users/reg
// router.post('/reg', function (req, res, next) {
//   //接收参数
//   var obj = req.body;
//   console.log(obj);
//   pool.query('insert into userinfo set ?', [obj], function (err, data) {
//     if (err) {
//       next(err);
//       return;
//     }
//     if (data.affectedRows > 0) {
//       res.send({
//         code: 1,
//         msg: '注册成功'
//       })
//     } else {
//       res.send({
//         code: 0,
//         msg: '注册失败'
//       })
//     }
//   })
// })

//用户注册接口（put /edit）
//地址： /users/edit
// router.put('/edit', function (req, res, next) {
//   //接收参数
//   var obj = req.body;
//   console.log(obj);
//   pool.query(`update userinfo set u_names="${obj.uname}",u_phone="${obj.uphone}",u_member="${obj.umember}" where u_phone="${obj.oldphone}"`, function (err, data) {
//     if (err) {
//       next(err);
//       return;
//     }
//     if (data.affectedRows > 0) {
//       res.send({
//         code: 1,
//         msg: '修改成功'
//       })
//     } else {
//       res.send({
//         code: 0,
//         msg: '修改失败'
//       })
//     }
//   })
// })

//暴露对象
module.exports = router;