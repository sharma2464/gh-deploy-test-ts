module.exports = {
  apps: [{
    name: 'ghDeploy-dev',
    script: 'index.js',
    watch: '.',
  }]

  // deploy : {
  //   production : {
  //     user : 'ec2-user',
  //     host : '13.233.156.35',
  //     ref  : 'origin/main',
  //     repo : 'https://github.com/manishmedp/gh-deploy-test-ts.git',
  //     path : '/ghActionsRepo',
  //     'pre-deploy-local': '',
  //     'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
  //     'pre-setup': ''
  //   }
  // }
};
