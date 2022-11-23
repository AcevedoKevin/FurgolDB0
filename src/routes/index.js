const { Router } = require("express");
const router = Router();
const Usuario = require("../models/Usuario");
router.get("/",(req,res)=>{
    res.render("login");
})
router.get("/resultado",(req,res)=>{
    res.render("resultado");
})
router.post("/login", async(req, res) => {
    const { numberQR,username,dni} = req.body;
    console.log(req.body);
    const newPunto = new Usuario({
        username,
        dni,
        date:new Date(),
        numberQR,
    });
    newPunto
        .save()
        .then((result) => {
            console.log(result);
        })
        .catch((err) => {
            console.error(err);
        });
    res.redirect("/resultado");
});



module.exports = router;