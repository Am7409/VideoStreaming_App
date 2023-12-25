import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"})) // here the basically the url search will happen like in the google 
app.use(express.static("public")) // this is use for the extra files like imgaes, fonts, etc. 
app.use(cookieParser()) // this is just to access the cookies for the better user experience 
export { app }