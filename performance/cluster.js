const cluster = require('cluster');
const express = require('express');

const numCPUs = require('os').cpus().length;
const app = express();

app.get('/', (req, res) => {
  for(let i = 0; i < 1e8; i++){
      //cpu intensive task
  }
  res.send(`Hello World! from ${process.pid}`);

//   if the worker is killed, new worker will be automatially forked
//   cluster.worker.kill()
});


// Running using worker threads
if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);
  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
    //forking cluster if any child process killed
    cluster.fork()
  });

} else {
  app.listen(3000, () => {
    console.log(`Server Worker ${process.pid} started`);
  });
}

// Running through master
// app.listen(3000, () => {
//     console.log(`Server Worker ${process.pid} started`);
// });