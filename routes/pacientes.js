const express = require("express");
const router = express.Router();
const Paciente = require("../models/paciente");

// CREATE
router.post("/", async (req, res) => {
    const paciente = new Paciente(req.body);
    await paciente.save();
    res.json(paciente);
});

// READ
router.get("/", async (req, res) => {
    const pacientes = await Paciente.find();
    res.json(pacientes);
});

// UPDATE
router.put("/:id", async (req, res) => {
    const paciente = await Paciente.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(paciente);
});

// DELETE
router.delete("/:id", async (req, res) => {
    await Paciente.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Paciente eliminado" });
});

module.exports = router;