module.exports = function(app){
  app.get('/', function(req, res){
    res.render('index', {title: '主页'})
  })
  app.get('/reg', function(req, res){
    res.render('reg', {title: '注册'})
  })
  app.get('/login', function(req, res){
    res.render('login', {title: '登陆'})
  })
  app.get('/post', function(req, res){
    res.render('post', {title: '发表'})
  })
  app.get('/logout', function(req, res){

  })
}
