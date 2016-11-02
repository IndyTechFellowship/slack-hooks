const bunyan = require('bunyan')
const log = bunyan.createLogger({ name: 'tfo_slack' })

const express = require('express')
const app = express()

app.post('/speakeasy', (req, res) => {
  log.info(req.body)
  log.info(req.query)
  res.status(200).send("Great!")
})

app.listen(process.env.PORT, () => {
  log.info('server started')
})