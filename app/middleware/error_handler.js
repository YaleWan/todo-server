/*
 * @Description: 错误处理
 * @Author: yhwang
 * @Date: 2020-06-10 14:00:23
 * @LastEditors: yhwang
 * @LastEditTime: 2020-06-11 14:47:26
 */
'use strict';
module.exports = (option, app) => {
  return async function(ctx, next) {
    try {
      await next();
    } catch (err) {
      app.emit('error', err, this);
      const status = err.status || 500;
      const error =
      status === 500 && app.config.env === 'prod'
        ? 'Internal Server Error'
        : err.message;
      ctx.helper.ctxJSON({ ctx, data: err.errors, message: error, status });
    }
  };
};
