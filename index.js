const express = require('express')
const app = express();
const cors = require('cors')

app.use(cors())

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    const exemplo = require('./data')
    res.json(exemplo)
})

app.listen(4001, () => console.log('Server Open'))