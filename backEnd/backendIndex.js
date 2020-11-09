const express = require('express');
const app = express();
const mangPhim = require('./databaseMock/mangPhim.json');
app.get('/', function(req, res) {
    res.send(`Welcome to Dong Nhat Anh Tam channel`)
});
app.get('/api/mangSanPham', function(req, res) {
    res.send(mangPhim);
});

// route parameter /:id
app.get('/api/mangSanPham/:maPhim', function(req, res) {
    const phim = mangPhim.find(c => c.maPhim === parseInt(req.params.maPhim))
    if (!phim) res.status(404).send('The course with the given ID was not found')
    return res.send(phim);
});
// query parameter
// req.send to get query after question mark
app.get('/api/post/:year/:month', function(req, res) {
    res.send(req.query);
})

// Port is environment variable
// có thể set biến port, nếu không port = 3000
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));