const { Schema, model } = require("mongoose")

const comentarioSchema = new Schema({
    comentario: String,
    fecha: Date,
    calificacion: Number
})

module.exports = model("Comentario", comentarioSchema)