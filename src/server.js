import app from './app';

const port = process.env.PORT || 8080;
const host = process.env.HOSTNAME || 'localhost';

// Launch Node.js server
const server = app.listen(port, host, () => {
  console.log(`Node.js API server is listening on http://${host}:${port}/`);
});

// Shutdown Node.js app gracefully
function handleExit(options, err) {
  if (err) console.log(err.stack);
  if (options.exit) process.exit();
};


process.on('exit', handleExit.bind(null, { exit: true }));
process.on('SIGINT', handleExit.bind(null, { exit: true }));
process.on('SIGTERM', handleExit.bind(null, { exit: true }));
process.on('uncaughtException', handleExit.bind(null, { exit: true }));
