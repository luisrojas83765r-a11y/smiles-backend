const mongoose = require("mongoose");

const pacienteSchema = new mongoose.Schema({
  nombre: String,
  edad: Number,
  telefono: String,
  correo: String,
  direccion: String,
  fechaRegistro: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Paciente", pacienteSchema);