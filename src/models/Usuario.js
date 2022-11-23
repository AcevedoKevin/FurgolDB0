const { Schema, model } = require("mongoose")

const tematicaSchema = new Schema({
    username: String,
    dni: Number,
    fechaDeSubida: Date,
    QR1:Boolean,
    QR2:Boolean,
    QR3:Boolean,
    QR4:Boolean,

})

module.exports = model("Usuario", tematicaSchema)