'use strict';

const Service = require('egg').Service;

class dbService extends Service {
     // 存储用户信息
    async setLogin() {
        try {
            const app = this.app
            const {nickName,avatarUrl,city,country,province} = this.ctx.request.body
            const getData =  await app.mysql.query('SELECT name FROM userInfor  WHERE nickName = ? ',[nickName])
            return  getData.length > 0 ?  '该用户名已存在': await app.mysql.query('INSERT INTO userInfor (nickName,avatarUrl,city,country,province) VALUES (?,?) ', [nickName,avatarUrl,city,country,province])
        } catch (error) {
            console.log(error)
            return null
        }
    }
}
