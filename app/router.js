/*
 * @Description: 路由主入口
 * @Author: yhwang
 * @Date: 2020-06-09 16:18:56
 * @LastEditors: yhwang
 * @LastEditTime: 2020-06-29 17:22:59
 */

"use strict";

module.exports = app => {
  require("./router/web")(app);
};
