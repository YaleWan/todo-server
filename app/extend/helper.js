/*
 * @Description: helper
 * @Author: yhwang
 * @Date: 2020-06-10 14:12:35
 * @LastEditors: yhwang
 * @LastEditTime: 2020-06-11 09:59:54
 */
'use strict';
/**
 * 定义基本的请求规范
 * @type {Object}
 */

const statusCode = {
  200: '请求资源成功',
  201: '同步处理资源的新建或修改成功，返回包含新资源地址的 Location 头',
  202: '资源的新建或修改进入异步',
  204: '不返回响应主体的成功请求的响应，资源删除成功',
  206: '返回部分资源',
  400: '请求资源失败',
  401: '没有权限',
  403: '没有访问API权限，访问被禁止',
  404: '资源不存在',
  405: '所请求的 HTTP 方法不允许当前认证用户访问',
  406: '请求的数据格式不存在',
  410: '资源被永久删除',
  415: '请求的媒体类型错误',
  422: '请求理解成功，但是参数验证错误',
  429: '请求频率超限',
  500: '服务器内部错误',
};
const ctxJSON = ({
  ctx,
  data = null,
  status = 200,
  message = statusCode[status],
}) => {
  ctx.body = {
    message,
    status,
    data,
  };
  ctx.status = status;
};


module.exports = {
  ctxJSON,
};
