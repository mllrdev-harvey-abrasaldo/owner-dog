'use strict';

/**
 * new-owner service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::new-owner.new-owner');
