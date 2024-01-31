const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`
  jab bhi hum server banate to ye step follow karte hai
  1. terminal par npm init write kare
  2.npm install express   express ko install kare
  3.express se hello world ko copy kare 
  4.
  
  
  listening on port ${port}`)
})