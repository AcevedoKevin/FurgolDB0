const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const handlebars = require('handlebars')
require("dotenv").config();
const { conectarDB, desconectarDB } = require("./mongoDb");
const admin = { username: "admin", password: "1234" };
//Login
const passport = require('passport');
const session = require('express-session');
const PassportLocal = require('passport-local').Strategy;

//Crear app
conectarDB();
const app = express();

//Configuracion
app.set("port", process.env.PORT || 8888);
app.set("views", path.join(__dirname, "/views"));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')

const hbs = exphbs.create({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
    handlebars: allowInsecurePrototypeAccess(handlebars),
    helpers: require("./libs/handlebars"),
});
app.engine(".hbs", hbs.engine);
app.set("view engine", "hbs");

//Middlewares
app.use(session({
    secret: 'my secret',
    resave: true,
    saveUnitializated: true
}));

app.use(passport.initialize());
app.use(passport.session());


//

passport.use(new PassportLocal(function(username, password, done) {
    if (username === admin.username && password === admin.password)
        return done(null, { id: 1, name: admin.username });

    done(null, false);
}))

passport.serializeUser(function(user, done) {
    done(null, user.id);
})

passport.deserializeUser(function(id, done) {
    done(null, { id: 1, name: admin.password });
})

//Rutas
app.use("/", require("./routes"));

//Carpeta public    
app.use(express.static(path.join(__dirname, "public")));


//Conexion
app.listen(app.get("port"), () =>
    console.log("Server running on port ", app.get("port"))
);