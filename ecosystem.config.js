module.exports = {
  apps: [
    {
      name: 'backend',
      script: './dist/index.js',
      instances: 1,
      env: {
        NODE_ENV: 'production',
        PORT: 3001
      }
    },
    {
      name: 'frontend', 
      cwd: './dist/public',
      script: 'npx',
      args: 'serve -s . -l 3000',
      instances: 1
    }
  ]
}