const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const cookieParser = require('cookie-parser')
const userRoute = require('./routers/UserRoutes')
const taskRoute = require('./routers/TaskRoutes')
const app = express()

//dep middlware
app.use(express.json())
app.use(cors())
dotenv.config()
app.use(morgan('common'))
app.use(cookieParser())
app.use(helmet())


//
app.use('/api/v1/user',userRoute)
app.use('/api/v1/task',taskRoute)

app.use('*',(_,res)=>{
    res.send('<h1>Route Not Found</h1>')
})

//
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log(`DB connected ${mongoose.connection.host}`)
}).catch((err)=>{
    console.log(err)
}).finally(()=>{
    const port = process.env.PORT || 8000
    app.listen(port,()=>console.log(`serverr running in ${port}`))

})