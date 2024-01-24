const express = require('express')
const app = express()
const CORS = require('cors')

const PORT = 5005

app.use(CORS())
app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req, res)  => {
    res.json({ "success": "ok" })
})

app.listen(PORT, () => {
    console.log(`Server Running at PORT ${PORT}`)
})