const {Server: HttpServer} = require('http');
const MongoStore = require('connect-mongo')
const session = require('express-session')
const express = require('express')

const script = require('bcrypt')
const saltRounds = 10

const cors = require('cors')

const User = require('./mongo/userDaos.js')

const app = express()
const httpServer = new HttpServer(app)

const advancedOptions = { useNewUrlParser: true, useUniFiedTopology: true }


app.use(express.urlencoded({extended: true}))
app.use(express.json())


const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use(session({

    store: MongoStore.create({
        mongoUrl: "mongodb+srv://TomasGuzzo:asd123@cluster0.4xxvji9.mongodb.net/User?retryWrites=true&w=majority",
        mongoOptions: advancedOptions,
        ttl: 30
        }),
    secret: 'secreto',
    resave: true,
    saveUninitialized: true,
}))

app.post('/test', async (req, res) => {
    const test = req.body
    console.log(test)
    res.send('test')
})

app.post('/register', async (req, res) => {
    const nombre = req.body.values.nombre
    const email = req.body.values.email
    const password = req.body.values.password
    const passwordC = req.body.values.confirmpassword
    console.log(nombre + " " + email + " " + password + " " + passwordC)

    const usuario = new Object()
    usuario.name = nombre
    usuario.email = email

    const user = new User()

    const userDB = await user.getUser(email)

    if (userDB == null) {
        script.hash(password, saltRounds, async function(err, hash) {
            usuario.password = hash
            user.createUser(usuario)
        })
    }else {
        res.status(270)
    }

    

    res.send("Llego a la api")
})

app.post('/login', async (req, res) => {
    const email = req.body.values.email
    const password = req.body.values.password

    console.log(email + " " + " " + " " + password )

    const user = new User()

    const userDB = await user.getUser(email)    
    let passOk

    console.log(userDB)

    if (userDB == null) {
        res.status(250).send("Usuario no existe")
    } else {

        script.compare(password, userDB?.password??'', function(err, result){
            passOk = result
            if(!passOk){
                res.status(240).send("Contraseña incorrecto")
            } else {
                res.status(200).send("Usuario logueado")
            }
        })
    }

    //res.send("Llego a la api Login")
})

const PORT = 8080
const server = httpServer.listen(PORT, () => { 
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))

