const mongoose = require("mongoose");

const citaSchema = new mongoose.Schema({
  paciente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Paciente"
  },

  dentista: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Dentista"
  },

  fecha: Date,
  hora: String,
  motivo: String,

  estado: {
    type: String,
    enum: [
      "Programada",
      "Confirmada",
      "Atendida",
      "Cancelada"
    ],
    default: "Programada"
  }
});

module.exports = mongoose.model("Cita", citaSchema);