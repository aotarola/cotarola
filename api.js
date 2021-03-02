const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000

const corsOptions = {
  origin: ['https://dev.claudiaotarola.com', 'https://claudiaotarola.com'],
}

express()
  .use(bodyParser.json())
  .use(cors(corsOptions))
  .get('/', (req, res) => {
    res.write('boo')
    res.end()
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`))
