const express = require("express")
const exphbs = require("express-handlebars")
const path = require("path")
const handlebars = require("handlebars")
require("dotenv").config()
const { conectarDB } = require("./mongoDb")

//Crear app
conectarDB()
const app = express()

//Configuracion
app.set("port", process.env.PORT || 8888)
app.set("views", path.join(__dirname, "/views"))
app.use(express.urlencoded({ extended: false, limit: "50mb" }))
app.use(express.json({ limit: "50mb" }))
const {
    allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access")

const hbs = exphbs.create({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
    handlebars: allowInsecurePrototypeAccess(handlebars),
})
app.engine(".hbs", hbs.engine)
app.set("view engine", "hbs")

//Rutas
app.use("/", require("./routes"))

//Carpeta public
app.use(express.static(path.join(__dirname, "public")))

//Conexion
app.listen(app.get("port"), () =>
    console.log("Server running on port ", app.get("port"))
)
