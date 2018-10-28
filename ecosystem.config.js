module.exports = {
  apps: [
      // admin 
      {
        name: 'lea-admin',
        script: './index.js',
        merge_logs: true,
        log_date_format: 'YYYY-MM-DD HH:mm',
        watch: ["index.js"],
        ignore_watch: ["node_modules"],
        watch_options: {
          "followSymlinks": true
        },
        env: {AVAHI_COMPAT_NOWARN:'1'},
        env_production: {AVAHI_COMPAT_NOWARN:'1'}
      },
      // Message direct pour l'arduino
      {
        name: 'lea-broker',
        script: 'npm run lea-broker',
        merge_logs: true,
        log_date_format: 'YYYY-MM-DD HH:mm',
      },
      // Message direct pour l'arduino
      {
        name: 'lea-arduino',
        script: '../lea-broker/service/lea-arduino.js',
        merge_logs: true,
        log_date_format: 'YYYY-MM-DD HH:mm',
        watch: ["../lea-broker/service/lea-arduino.js"],
        watch_options: {
          "followSymlinks": true
        },
        env: {},
        env_production: {}
      },
      // Message direct pour l'arduino
      {
        name: 'lea-twitter',
        script: '../lea-broker/service/lea-twitter.js',
        merge_logs: true,
        log_date_format: 'YYYY-MM-DD HH:mm',
        watch: ["../lea-broker/service/lea-twitter.js"],
        watch_options: {
          "followSymlinks": true
        },
        env: {},
        env_production: {}
      },
      // Message direct pour l'arduino
      {
        name: 'lea-twitter-client',
        script: 'npm run lea-twitter-client',
        merge_logs: true,
        log_date_format: 'YYYY-MM-DD HH:mm'
      },
  ]
};
