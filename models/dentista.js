const mongoose = require("mongoose");

const dentistaSchema = new mongoose.Schema({
  nombre: String,
  especialidad: String,
  telefono: String,
  correo: String,
  horario: String
});

module.exports = mongoose.model("Dentista", dentistaSchema);