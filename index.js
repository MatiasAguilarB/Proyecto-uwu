const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const app = express()
const fetch = require('node-fetch')


app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
//app.get('/', (req, res) => res.render('pages/index'))
app.get ('/URLDireccionamiento', (req, res) => res.send(''))
app.get ('/URLAutorizacionCancelada', (req, res) => res.send(''))
app.get ('/URLEliminacionDatos', (req, res) => res.send(''))
app.get ('/usuario/:name/:password', (req,res) => {
  console.log('----------------------------');
  console.log(req.params['name']);  
  console.log(req.params['password']);
  res.send({nombre:'uwu', edad:'14', descripcion:'alto depresivo pa'});
});
app.get ('/', (req, res) => {
  fetch('https://api.instagram.com/oauth/access_token \-F client_id=792747901569799 \-F client_secret=24cddd86fc4837de64aed09e2fafaa74 \-F grant_type=authorization_code \-F redirect_uri=https://enigmatic-scrubland-79426.herokuapp.com/URLDireccionamiento \-F code=AQA-4wa6RPtP8E3bsNAYsQutBjggYW5I1w1qchKdIjrApGcEMtXG86xbWFTfb8osjjvvcrO9DkvBXn0pRaT82E6OC3z7blFODuYKOiKIFkYejguLxj_DQ1HmTu_uel27uO4-MYl74_6hnve9f1ng37BaflP8xVdt0gTjgvTcSZ8WJsEo_OuSHQOq9jx1ayry995Yqfgv4rcr-gm7ZxXuEiTLTqpI7nHUEqOWiMtJK7wqcQ')
  .then(data => console.log(data));
})

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))