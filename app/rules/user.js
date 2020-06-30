/*
 * @Description: Description
 * @Author: yhwang
 * @Date: 2020-06-29 18:17:40
 * @LastEditors: yhwang
 * @LastEditTime: 2020-06-30 09:38:42
 */
'use strict';
const create = {
  account: [
    { required: true },
    { type: 'string', message: '账号必传' },
  ],
  password: [
    { required: true },
    { type: 'string', message: '账号必传' },
  ],
  real_name: [
    { required: true },
    { type: 'string', message: '真实姓名必传' },
  ],
};

module.exports = {
  create,
};
