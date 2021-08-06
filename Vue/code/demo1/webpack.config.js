const path = require('path')
module.exports = {
    "mode": 'development', // 开发模式
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    }
}