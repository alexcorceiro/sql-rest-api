const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser');
const studentRoute = require('./src/routes/UserRoute')
const PORT = 5000

app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', studentRoute)


app.listen(PORT, () => {
    console.log('server demarer ')
})
