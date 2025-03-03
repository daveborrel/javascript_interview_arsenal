var cron = require('node-cron');

console.log("file is running")

cron.schedule('*/2 * * * * *', () => {
  console.log('running a task every 2 seconds');
});