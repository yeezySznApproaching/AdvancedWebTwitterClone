const { startApp } = require('./boot/setup');

startApp().catch((error) => {
  console.error("Failed to start the application:", error);
});
