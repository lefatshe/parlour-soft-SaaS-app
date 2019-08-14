// const express = require('express')
// const path = require('path')
// const PORT = process.env.PORT || 5000

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))


  const express = require('express');
  const path = require('path');
  const app = express();
  const appName = 'ParlourSoft';
  const port = process.env.PORT || 5000
  
  // Serve static files....
  app.use(express.static(__dirname + '/dist/' + appName));
  
  // Send all requests to index.html
  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/ParlourSoft/index.html'));
  });
  
  // default Heroku PORT
  app.listen(port);
  

