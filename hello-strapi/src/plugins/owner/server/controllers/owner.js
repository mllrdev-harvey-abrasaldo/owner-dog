'use strict';

module.exports = {
    async find(ctx) {
        try {
          return await strapi.plugin("owner").service("owner").find(ctx.query);
        } catch (err) {
          ctx.throw(500, err);
        }
      },
};
