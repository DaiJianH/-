//admin 子路由都是针对管理员端的接口
//引入express模块
var express = require('express');
//引入连接池
var pool = require('../util/pool');
//创建路由对象
var router = express.Router();

//管理员登录（post /login）
//地址:http://127.0.0.1:8080/admin/index0
router.post('/index0',function(req,res,next){
  var obj = req.body;
  console.log(obj);//{aname:'fengche',apwd:'666666' }
  // res.send('管理员登录')
  //使用query方法查询数据库，从而拿到返回内容
  pool.query('select * from huiy where uname=? and upwd=?',[obj.aname,obj.apwd],function(err,data){
    //处理错误
    if(err){
      next(err);
      return;
    }
    // console.log(data);
    //没找到这个人
    if(data.length === 0){
      res.send({
        code:0,
        msg:'登录失败'
      })
    }else {
      res.send({
        code:1,
        msg:'登录成功'
      })
    }
  })
})

router.get('/index0_2',function(req,res,next){
  var obj = req.query;
  console.log(obj);
  pool.query('select * from dm_qemp where qtitle LIKE?',[`%${obj.title}%`],function(err,data){
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

//用户列表（get /list）
//地址：/admin/list  (这种写法必须是同源的)
// router.get('/list',function(req,res,next){
//   pool.query('select * from userinfo;',function(err,data){
//     //处理错误
//     if(err){
//       next(err);
//       return;
//     }
//     //返回数据
//     res.send({
//       code:1,
//       msg:'返回所有数据',
//       data:data
//     })
//   })
// })

//删除用户（delete /del）
//地址：/admin/del
/*router.delete('/del/:uid',function(req,res,next){
  var obj = req.params;
  console.log(obj);
  pool.query('delete from smb where smname=?',[obj.uid],function(err,data){
    if(err){
      next(err);
      return;
    }
    //data.affectedRows==0 数据条数有没有改变
    if(data.affectedRows==0){
      res.send({
        code:0,
        msg:'删除失败'
      })
    }else {
      res.send({
        code:1,
        msg:'删除成功'
      })
    }
  })
})
*/

//查找单个用户（get /query）
//地址：/admin/query
router.get('/index2',function(req,res,next){
  var obj = req.query;
  console.log(obj);
  pool.query('select * from dm_qemp where herf=?',[obj.qherf],function(err,data){
    //处理错误
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

//导出路由对象，让app.js接收
module.exports = router;