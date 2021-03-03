require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000
const Mailchimp = require('mailchimp-api-v3')

const { MAILCHIMP_API_KEY } = process.env

const mailchimp = new Mailchimp(MAILCHIMP_API_KEY)

const corsOptions = {
  origin: ['https://dev.claudiaotarola.com', 'https://claudiaotarola.com'],
}

const jsonParser = bodyParser.json()

express()
  .use(jsonParser)
  .use(cors(corsOptions))
  .post('/', async (req, res) => {
    const resp = await mailchimp.request({
      method: 'get',
      path: 'lists',
    })

    res.write(JSON.stringify(resp))
    res.end()
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`))
