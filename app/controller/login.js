'use strict';

const controller = require('egg').Controller;

class loginController extends controller {
  // 存储用户信息
  async set() {
      const {ctx} = this;
      const res = await ctx.service.dataBase.setLogin()
      ctx.body = JSON.stringify({ code: 0, data:res, message: '成功' });
  }
}

module.exports = loginController;