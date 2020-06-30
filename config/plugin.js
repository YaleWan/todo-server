"use strict";

/** @type Egg.EggPlugin */
module.exports = {
  validatePlus: {
    enable: true,
    package: "egg-validate-plus"
  },
  cors: {
    enable: true,
    package: "egg-cors"
  },
  routerPlus: {
    enable: true,
    package: "egg-router-plus"
  },
  mongoose: {
    enable: true,
    package: "egg-mongoose"
  },
  bcrypt: {
    enable: true,
    package: "egg-bcrypt"
  }
};
