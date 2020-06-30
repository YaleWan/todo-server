/*
 * @Description: user Service 层
 * @Author: yhwang
 * @Date: 2020-06-11 14:00:41
 * @LastEditors: yhwang
 * @LastEditTime: 2020-06-30 10:00:31
 */
"use strict";
const Service = require("egg").Service;
class UserService extends Service {
  /**
   * @description 创建用户
   * @author yhwang
   * @date 2020-06-11
   * @param {*} payload account passworld relName
   * @return result 用户信息
   * @memberof UserService
   */
  async create(payload) {
    payload.password = await this.ctx.genHash(payload.password);
    const result = await this.ctx.model.User.create(payload);
    return result;
  }

  /**
   * @description 查询一条用户数据
   * @author yhwang
   * @date 2020-06-29
   * @param {*} payload
   * @return 用户数据
   * @memberof UserService
   */
  async show(payload) {
    const user = await this.ctx.model.User.findOne(payload);
    return user;
  }
}
module.exports = UserService;
