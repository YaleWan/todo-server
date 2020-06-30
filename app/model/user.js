/*
 * @Description: user Model层
 * @Author: yhwang
 * @Date: 2020-06-11 13:47:59
 * @LastEditors: yhwang
 * @LastEditTime: 2020-06-29 17:27:37
 */
"use strict";
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const AdminUserSchema = new Schema(
    {
      // 账号名
      account: {
        type: String,
        required: true
      },
      // 密码
      password: {
        type: String,
        required: [true, "密码必填"]
      },
      // 真实姓名
      real_name: { type: String }
    },
    {
      timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
      },
      versionKey: false,
      collection: "armor_admin_user"
    }
  );
  return mongoose.model("AdminUser", AdminUserSchema);
};
