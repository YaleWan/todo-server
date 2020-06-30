/*
 * @Description: User控制层
 * @Author: yhwang
 * @Date: 2020-06-09 16:52:22
 * @LastEditors: yhwang
 * @LastEditTime: 2020-06-30 11:55:16
 */

"use strict";

const Controller = require("./base");
/**
 * @Controller ⽤户管理
 */
class UserController extends Controller {
  /**
   * @description 创建用户
   * @author yhwang
   * @date 2020-06-29
   * @return
   * @memberof UserController
   */
  async create() {
    const { ctx, service } = this;
    const payload = ctx.request.body;
    // 校验参数合格性
    const validateResult = await this.ctx.validate("user.create", payload);
    if (!validateResult) return;
    // 判断账号是否已经存在
    const hasUser = await service.user.show({ account: payload.account });
    if (hasUser) {
      this.error({
        message: "当前用户已经存在"
      });
      return;
    }
    // 创建用户
    await service.user.create(payload);

    this.success({
      message: "创建用户成功"
    });
  }
  /**
   * @description 查一条用户数据
   * @author yhwang
   * @date 2020-06-29
   * @memberof UserController
   */
  async show() {
    const { ctx, service } = this;
    const id = ctx.params.id;
    const data = await service.user.show({ _id: id });
    this.success({
      data
    });
  }
}

module.exports = UserController;
