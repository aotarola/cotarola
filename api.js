require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000
const Mailchimp = require('mailchimp-api-v3')

const { MAILCHIMP_API_KEY, MEMBERS_LIST_ID } = process.env

const mailchimp = new Mailchimp(MAILCHIMP_API_KEY)

const corsOptions = {
  origin: '*',
  credentials: true,
}

const jsonParser = bodyParser.json()

express()
  .use(jsonParser)
  .post('/', async (req, res) => {
    const { name, email, option } = req.body
    try {
      res.header('Access-Control-Allow-Origin', '*')
      await mailchimp.request({
        method: 'post',
        path: `lists/${MEMBERS_LIST_ID}/members`,
        body: {
          status: 'subscribed',
          merge_fields: { FNAME: name },
          email_address: email,
          tags: [option],
        },
      })
      res.write(JSON.stringify({ status: 'ok' }))
    } catch ({ title: status }) {
      res.write(JSON.stringify({ status }))
    }

    res.end()
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`))
