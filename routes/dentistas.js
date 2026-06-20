const express = require("express");
const router = express.Router();
const Dentista = require("../models/dentista");

router.post("/", async (req, res) => {
    const dentista = new Dentista(req.body);
    await dentista.save();
    res.json(dentista);
});

router.get("/", async (req, res) => {
    const dentistas = await Dentista.find();
    res.json(dentistas);
});

router.put("/:id", async (req, res) => {
    const dentista = await Dentista.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(dentista);
});

router.delete("/:id", async (req, res) => {
    await Dentista.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Dentista eliminado" });
});

module.exports = router;