const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors({
  origin: '*',
  methods: '*',
  headers: '*',
  optionsSuccessStatus: 200
}))

const port = 8080

const delay = (time, handler) => {
  return (req, res) => {
    setTimeout(() => {
      handler(req, res)
    }, time)
  }
}

const resultFactory = (pred) => {
  const result = {
    title: 'Basic Title',
    snippet: 'This is a snippet',
    ranking: 1,
    imageSource: 'http://placehold.it/256x256',
    thumbnailSource: 'http://placehold.it/256x256',
  }
  pred(result)
  return result
}

const responseFactory = (pred) => {
  const response = {
    results: [
      resultFactory((result) => result.title = 'This is a title!')
    ],
    measurements: {},
    numPages: 1,
  }
  pred(response)
  return response
}

const queryMaps = {
  'basic': responseFactory((resp) => resp.numPages = 5)
}

app.get('/search', delay(250, (req, res) => {
  const { query } = req.query
  if (query in queryMaps) {
    return res.json(queryMaps[query])
  }

  // if we dont have a query mapped, return the title as the only response.
  const defaultResponse = responseFactory((resp) => resp.results = [
    resultFactory((result) => result.title = `Title for query '${query}'`)
  ])
  return res.json(defaultResponse)
}))

app.listen(port, () => {
  console.log(`> started live server on ${port}`)
})