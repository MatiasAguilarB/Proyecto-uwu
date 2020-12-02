const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const app = express()
const fetch = require('node-fetch')
const request = require('request');


app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => res.render('pages/index'))
app.get ('/URLDireccionamiento', (req, res) => res.send(''));
app.get ('/URLAutorizacionCancelada', (req, res) => res.send(''));
app.get ('/URLEliminacionDatos', (req, res) => res.send(''));
app.get ('/usuario/:name/:password', (req,res) => {;
  console.log('----------------------------');
  console.log(req.params['name']);  
  console.log(req.params['password']);
  res.send({nombre:'uwu', edad:'14', descripcion:'alto depresivo pa'});
});
app.get ('/testeo', (req, res) => {
  /*const url = curl -X POST 'https://api.instagram.com/oauth/access_token \-F client_id=792747901569799 \-F client_secret=24cddd86fc4837de64aed09e2fafaa74 \-F grant_type=authorization_code \-F redirect_uri=AQDCZdctgjcDbKYUOR2TN4hHuhE8RFSAiLhpgg_XwmdfgwFQ7-l975TQlzz0Rx9RGL90uj-cA2W7Q3imdBU1xSW5Qd0tG7Ib8nJUdVpRGnKrRLL9UCWxJNGa8RYp5gNad3KD7y2MunFq_h_igzy2f3t6TRJS--jmv0liTxaXrJSQPvdmJzKccumjZKnROcwTJDeJj7ntyYlbi_1DWZKhUKFQST5wcPh85mWS_PMVTuPYAw'*/
  //const url ='https://api.instagram.com/oauth/access_token/client_id=792747901569799/client_secret=24cddd86fc4837de64aed09e2fafaa74/grant_type=authorization_code/redirect_uri=https://enigmatic-scrubland-79426.herokuapp.com/URLDireccionamiento \-F code=AQAm9Hz9OkyJp-4jgRQRs3JFVEib5IuwP6y1FDk9QfbsP0M6TegQNHyBeXdfUHZ454GA1tQrOYDcOTzqSrMBEjWbtsgVF6CBaSanAjEi9g0bYGJKqnveOAkN4DGyFmLqcZZmjG_bd_Bf0rDsWCbU42m_okM2Cls-p2vMYKmYh5df47KLfEZosvDUU1HS4XOwV-nmwyLZYhMcb9niRRmMHK6ifvBm5TjiCdTeD-qefPTtVg'
  const client_id = '792747901569799'
  const client_secret = '24cddd86fc4837de64aed09e2fafaa74'
  const grant_type = 'authorization_code'
  const redirect_uri = 'https://enigmatic-scrubland-79426.herokuapp.com/URLDireccionamiento'
  const code = 'AQAm9Hz9OkyJp-4jgRQRs3JFVEib5IuwP6y1FDk9QfbsP0M6TegQNHyBeXdfUHZ454GA1tQrOYDcOTzqSrMBEjWbtsgVF6CBaSanAjEi9g0bYGJKqnveOAkN4DGyFmLqcZZmjG_bd_Bf0rDsWCbU42m_okM2Cls-p2vMYKmYh5df47KLfEZosvDUU1HS4XOwV-nmwyLZYhMcb9niRRmMHK6ifvBm5TjiCdTeD-qefPTtVg'
  const options = {
    url : `https://api.instagram.com/oauth/access_token/client_id=${client_id}/client_secret=${client_secret}/grant_type=${grant_type}/redirect_uri=${redirect_uri}/code=${code}`,
    /*headers : {
      client_id: '792747901569799',
      'client_secret': '24cddd86fc4837de64aed09e2fafaa74',
      'redirect_uri': 'https://enigmatic-scrubland-79426.herokuapp.com/URLDireccionamiento',
      'code' : 'AQAm9Hz9OkyJp-4jgRQRs3JFVEib5IuwP6y1FDk9QfbsP0M6TegQNHyBeXdfUHZ454GA1tQrOYDcOTzqSrMBEjWbtsgVF6CBaSanAjEi9g0bYGJKqnveOAkN4DGyFmLqcZZmjG_bd_Bf0rDsWCbU42m_okM2Cls-p2vMYKmYh5df47KLfEZosvDUU1HS4XOwV-nmwyLZYhMcb9niRRmMHK6ifvBm5TjiCdTeD-qefPTtVg'
    }*/
  }

  request.post(options, (err, response, body) => {
    if (!err && response.statusCode == 200){
      //const data = JSON.parse(body);
      console.log(JSON.parse(body))
      res.send(body)
    }
    else{
      console.log(err,response,body)
      res.send(body)
    }
  }) 
  //comentario para poder subir la mierda 

/*fetch(url)
  .then(data => console.log(data))
  .catch(err => {
    console.log('------------------------------------------------------')
    console.log(err)
  })
  console.log('holiwis')*/
})

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))