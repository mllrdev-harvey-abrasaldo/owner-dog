'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('owner')
      .service('myService')
      .getWelcomeMessage();
  },
});
