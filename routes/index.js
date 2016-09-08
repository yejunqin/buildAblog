module.exports = function(app){
  app.get('/', function(req, res){
    res.render('index', {title: 'Express'})
  })
  app.get('/about', function(req, res){
    res.send('this is about page')
  })
}
