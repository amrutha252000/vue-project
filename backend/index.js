const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const redis = require("redis");
const redisUrl = "redis://127.0.0.1:6379"
const client = redis.createClient(redisUrl);
   
(async () => {
    await client.connect();
})();

client.on('connect', () => console.log('Redis Client Connected'));
client.on('error', (err) => console.log('Redis Client Connection Error', err));
client.set("ChannelName", "SportsUpadates", redis.print);
client.get("ChannelName", redis.print);

const util = require("util")
client.set = util.promisify(client.set)
app.use(express.json())

app.post('/setUpdates', async (req, res) =>{
  const { key, value } = req.body;
  console.log("started")
  const response = await client.set(key, value)
  console.log("ended")
  res.json(response)
} )

app.get('/getUpdates')