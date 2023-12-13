import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
    // console.log(req.rawHeaders);
    res.send('<h1>Hello World</h1>');
})

app.get('/contact', (req, res) => {
    res.send('<h1>This is the Contact page');
})

app.get('/about', (req, res) => {
    res.send('<h1>This is the About page');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})