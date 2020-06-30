/*
 * @Description: Description
 * @Author: yhwang
 * @Date: 2020-06-29 17:22:32
 * @LastEditors: yhwang
 * @LastEditTime: 2020-06-29 18:25:49
 */
"use strict";
module.exports = app => {
  const { router, controller } = app;
  const AdminRouter = router.namespace("/api/v1/admin/");
  AdminRouter.resources("user", controller.user);
};
