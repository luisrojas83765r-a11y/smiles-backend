const express = require("express");
const router = express.Router();
const Cita = require("../models/cita");

router.post("/", async (req, res) => {
    const cita = new Cita(req.body);
    await cita.save();
    res.json(cita);
});

router.get("/", async (req, res) => {
    const citas = await Cita.find()
        .populate("paciente")
        .populate("dentista");

    res.json(citas);
});

router.put("/:id", async (req, res) => {
    const cita = await Cita.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.json(cita);
});

router.delete("/:id", async (req, res) => {
    await Cita.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Cita eliminada" });
});

module.exports = router;