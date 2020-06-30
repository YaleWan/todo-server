/*
 * @Description: 基类控制器
 * @Author: yhwang
 * @Date: 2020-06-11 09:57:21
 * @LastEditors: yhwang
 * @LastEditTime: 2020-06-29 17:20:30
 */


'use strict';

const Controller = require('egg').Controller;

class BaseController extends Controller {
  /**
     * @description 成功的响应请求
     * @author yhwang
     * @date 2020-06-11
     * @param {*} { data = null, status = 200, message }
     * @memberof BaseController
     */
  async success({ data = null, status = 200, message }) {
    const { ctx } = this;
    ctx.helper.ctxJSON({ ctx, data, status, message });
  }

  /**
     * @description 失败的响应请求
     * @author yhwang
     * @date 2020-06-11
     * @param {*} { data = null, status = 400, message }
     * @memberof BaseController
     */
  async error({ data = null, status = 400, message }) {
    const { ctx } = this;
    ctx.helper.ctxJSON({ ctx, data, status, message });
  }
}

module.exports = BaseController;
