const express=require('express')
const cors=require('cors')
const morgan=require('morgan')
const swaggerUI=require('swagger-ui-express')
const swaggerJsDoc=require('swagger-jsdoc')
const yaml=require('yamljs')
const options={
    definition:{
        openapi:"3.0.0",
        info:{
            title:"My Brand API",
            version:"1.0.0",
            description:" my personal portfolio api access it by clicking on this link https://github.com/munyanezaarmel/my-brand-api.git"
        },
        server: [{
            url:`${
              process.env.NODE_ENV === 'development'
                ? 'http://localhost:3000'
                : 'https://mi-brand.herokuapp.com/api-docs/#/'
            }`
          }]
    },
    apis:["./routes/*.js"]
}

const specs=swaggerJsDoc(options)
let app= express()
const mongoose=require('mongoose')
require('dotenv').config()
const bodyParser= require('body-parser')
app.use(bodyParser.json())
//importing routes of homepage 
let routehome=require('./routes/home')
//importing routes of blogs
let routeblog=require('./routes/blogs')
//importing routes of contact
let routeContact=require('./routes/contact')
//importing routes of profile
let routeProfile=require('./routes/profile')
//importing routelikes
let routeLikes=require('./routes/likes')
//importing routes for sign up
let routeSignup=require('./routes/signup')
//importing routes for login
let routeLogin=require('./routes/login')
//middleware for home page
app.use('/',routehome)
//middleware for login 
app.use('/api/user/login',routeLogin)
//middleware for register
app.use('/api/user/register',routeSignup)
//middleware for likes
app.use('/comment',routeLikes)
//middleware for profile route
app.use('/profile',routeProfile)
//middleware for route contact 
app.use('/contact', routeContact)
//middleware for routepost
app.use('/blogs',routeblog)
//middlewares for swagger documentation
app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(specs))

app.use(cors())
app.use(morgan('dev'))
app.use(cors());
//solving problem of swagger https to http
app.options('*', cors());
app.enable('trust proxy');
//including static files
app.use(express.static('public'))
app.use('/css',express.static(__dirname,+'public/css'))
app.use('/img',express.static(__dirname,+'public/img'))
app.use('/js',express.static(__dirname,+'public/js'))
app.use('/docs',express.static(__dirname,+'public/docs'))
//templating engine
app.set('views','views')
app.set('view engine', 'ejs')
//connecting to database
mongoose.connect(
    process.env.DATABASE_COLLECTION,{ useNewUrlParser: true },()=>
    console.log('connected to database')
)
//listening 
const PORT=process.env.PORT || 3000
module.exports=app.listen(PORT,() => {
    console.log('Server started on '  + ':' + PORT);
})