const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get ('/URLDireccionamiento', (req, res) => res.send(''))
  .get ('/URLAutorizacionCancelada', (req, res) => res.send(''))
  .get ('/URLEliminacionDatos', (req, res) => res.send(''))
  .get ('/ejemplo', (req, res) => res.send('uwunt'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))