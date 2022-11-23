const { Schema, model } = require("mongoose")

const tematicaSchema = new Schema({
    titulo: String,
    descripcion: String,
    dataImg: String,
    fechaDeSubida: Date,
})

module.exports = model("Tematica", tematicaSchema)