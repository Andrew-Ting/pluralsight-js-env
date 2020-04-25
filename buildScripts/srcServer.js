const express = require('express');
const path = require('path');
const open = require('open');
const webpack = require('webpack');
const config = require('../webpack.config.dev');
const compiler = webpack(config);
const port = 3000;
const app = express();
/*eslint-disable no-console*/
app.use(require('webpack-dev-middleware') (compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, (err) => {
    if (err) {
        console.log("Something broke!");
    } else {
        open("http://localhost:" + port);
    }
});