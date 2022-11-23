const { Schema, model } = require("mongoose")

const tematicaSchema = new Schema({
    username: String,
    dni: Number,
    fechaDeSubida: Date,
    numberQR:Number,
})

module.exports = model("Usuario", tematicaSchema)