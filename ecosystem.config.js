module.exports = {
  apps: [

      // Lance le serveur Express pour exposer l'UI de Léa
      {
        name: 'lea-ui',
        script: './index.js',
        merge_logs: true,
        log_date_format: 'YYYY-MM-DD HH:mm',
        watch: ["index.js"],
        ignore_watch: ["node_modules"],
        watch_options: {
          "followSymlinks": true
        },
        env: {},
        env_production: {}
      },

      // Démarre le serveur Mosca Broker de Message pour Léa
      {
        name: 'lea-broker',
        script: 'npm run $SCRIPT',
        cwd: '../lea-broker',
        watch: ["../lea-broker/src/js/app.js"],
        merge_logs: true,
        log_date_format: 'YYYY-MM-DD HH:mm',
        env: {
          "SCRIPT" : "dev",
        },
        env_production: {
          "SCRIPT" : "prod",
        }
      },

      // Le cerveau de Léa qui lui permet de mettre la logique fonctionnelle dans les échanges
      // entre l'API Twiter/l'UI et la connexion à l'Arduino
      {
        name: 'lea-brain',
        script: 'npm run $SCRIPT',
        cwd: '../lea-brain',
        watch: ["../lea-brain/src/js/app.js"],
        merge_logs: true,
        log_date_format: 'YYYY-MM-DD HH:mm',
        env: {
          "SCRIPT" : "dev",
        },
        env_production: {
          "SCRIPT" : "prod",
        }
      },

      // Effectue l'envoi de message vers l'Arduino grace au port série
      {
        name: 'lea-arduino',
        script: 'npm run $SCRIPT',
        cwd: '../lea-arduino',
        watch: ["../lea-arduino/src/js/app.js"],
        merge_logs: true,
        log_date_format: 'YYYY-MM-DD HH:mm',
        env: {
          "SCRIPT" : "dev",
        },
        env_production: {
          "SCRIPT" : "prod",
        }
      },

      // Ecoute l'API Twitter ou Envoie des tweet pour l'UI
      {
        name: 'lea-twitter',
        script: 'npm run $SCRIPT',
        cwd: '../lea-twitter',
        merge_logs: true,
        log_date_format: 'YYYY-MM-DD HH:mm',
        env: {
          "SCRIPT" : "dev",
        },
        env_production: {
          "SCRIPT" : "prod",
        }
      },
  ]
};
