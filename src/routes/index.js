const { Router } = require("express")
const router = Router()
const Usuario = require("../models/Usuario")
const { conectarDB } = require("../mongoDb")
router.get("/", (req, res) => {
    res.render("login")
})
router.get("/encuentro", (req, res) => {
    res.render("encuentro")
})
router.get("/error", (req, res) => {
    res.render("error")
    setTimeout(() => {
        res.render("encuentro")
    }, "2000")
})
router.get("/resultado", (req, res) => {
    res.render("resultado")
})
router.get("/resultado", (req, res) => {
    res.render("resultado")
    setTimeout(() => {
        res.render("encuentro")
    }, "2000")
})
router.get("/premio", (req, res) => {
    res.render("premio")
    setTimeout(() => {
        res.render("encuentro")
    }, "2000")
})
router.post("/encuentro", async (req, res) => {
    const { dni, numeroQR } = req.body
    console.log()
    const numeroQr = parseInt(numeroQR)

    let usuario = Usuario
    if (numeroQr === 3292) {
        usuario = await Usuario.findOneAndUpdate(
            { dni: parseInt(dni) },
            { QR1: true }
        )
        console.log(usuario)
        elegirRedirect(parseInt(dni))
    } else if (numeroQr === 5663) {
        usuario = await Usuario.findOneAndUpdate(
            { dni: parseInt(dni) },
            { QR2: true }
        )
        elegirRedirect(parseInt(dni))
    } else if (numeroQr === 1091) {
        usuario = await Usuario.findOneAndUpdate(
            { dni: parseInt(dni) },
            { QR3: true }
        )
        elegirRedirect(parseInt(dni))
    } else if (numeroQr === 2026) {
        usuario = await Usuario.findOneAndUpdate(
            { dni: parseInt(dni) },
            { QR4: true }
        )
        elegirRedirect(parseInt(dni))
    } else {
        res.redirect("/error")
    }
})

const elegirRedirect = async (dni) => {
    const usuario = await Usuario.find({ dni: parseInt(dni) })

    if (usuario) {
        if (usuario.QR1 && usuario.QR2 && usuario.QR3 && usuario.QR4) {
            res.redirect("/preimo")
        } else {
            res.redirect("/resultado")
        }
    } else {
        res.redirect("/")
    }
}

// router.post("/login", async (req, res) => {
//     const { dni } = req.body

//     console.log(req.body)
// })

router.post("/login", async (req, res) => {
    const { dni } = req.body
    console.log(req.body)
    conectarDB()
    const user = await Usuario.find({ dni })
    if (user.length === 0) {
        const newUsuario = new Usuario({
            dni,
        })
        newUsuario
            .save()
            .then((result) => {
                console.log("Usuario no registrado")
                console.log(result)
                res.send(result[0]._id.toString())
            })
            .catch((err) => {
                console.error(err)
            })
    } else {
        console.log("Usuario ya registrado")
        console.log(user)
        res.send(user[0]._id.toString())
    }
})

// router.post("/login", async (req, res) => {
//     const { dni } = req.body
//     console.log(req.body)
//     conectarDB()

//     const user = await Usuario.find({ dni })
//     if (user.length === 0) {
//         const newUsuario = new Usuario({
//             dni,
//         })
//         newUsuario
//             .save()
//             .then((result) => {
//                 console.log("Usuario no registrado")
//                 console.log(result)
//                 res.json(result)
//             })
//             .catch((err) => {
//                 console.error(err)
//             })
//     } else {
//         console.log("Usuario ya registrado")
//         res.json(user)
//     }
// })

module.exports = router
