const express = require("express");
const redis = require("redis");
const responseTime = require("response-time")

// Create a Redis client
const client = redis.createClient({
  host: "127.0.0.1",
  port: 6379,
});

// Handle errors
client.on("error", function (err) {
  console.log("Error: " + err);
});

const app = express();
app.use(responseTime())

function cache(req, res, next) {
  const key = "__express__" + req.originalUrl || req.url;

  client.get(key).then(reply => {
    
    if (reply) {
      res.send(JSON.parse(reply));
    } else {
      res.sendResponse = res.send;
      res.send = (body) => {
        //expire in 1 min
        client.set(key, JSON.stringify(body), {'EX':60});
        res.sendResponse(body);
      };
      next();
    }
  }).catch(err=>{
    console.log(err);
    res.status(500).send(err)
  });

}

app.use(cache);

app.get("/data", (req, res) => {
  let data = 0;
  for (let i = 1; i < 100000000; i++) {
    data += 1;
  }
  res.json(data);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
  client.connect().then(()=> {
    console.log('redis is connected')
  })
});

