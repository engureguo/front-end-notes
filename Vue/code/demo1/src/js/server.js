var app = require('http')
app.createServer(function (req, res) {
    res.write('<meta charset="utf-8"/>')

    if (req.url == '/') {
        res.write('小江服务器搭建成功, <a href="/another">跳转页面</a>')
    } else if (req.url == '/another') {
        res.write('yay<br/><a href="/">go back</a>')
    }
    res.end()

}).listen(3000, function () {
    console.log('running on port-3000.....')
})