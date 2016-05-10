'use strict';

// Production specific configuration
// =================================
module.exports = {
  // Server IP
  ip:       process.env.OPENSHIFT_NODEJS_IP ||
            process.env.IP ||
            undefined,

  // Server port
  port:     process.env.OPENSHIFT_NODEJS_PORT ||
            process.env.PORT ||
            8080,

  // MongoDB connection options
  mongo: {
    uri:    process.env.MONGOLAB_URI || 'mongodb://heroku_wp5whcgt:et18vqc8smhhgcmhbgq79mihsn@ds017852.mlab.com:17852/heroku_wp5whcgt'
  }
};
