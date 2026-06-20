require("dotenv").config();
const pacientesRoutes = require("./routes/pacientes");
const dentistasRoutes = require("./routes/dentistas");
const citasRoutes = require("./routes/citas");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/api/pacientes", pacientesRoutes);
app.use("/api/dentistas", dentistasRoutes);
app.use("/api/citas", citasRoutes);
mongoose.connect(process.env.MONGODB_URI, {
  family: 4
})
.then(() => {
    console.log("✅ MongoDB conectado");
})
.catch(err => {
    console.log("❌ Error:", err);
});

app.get("/", (req, res) => {
    res.send("API Smiles funcionando");
});

app.listen(process.env.PORT, () => {
    console.log(`Servidor en puerto ${process.env.PORT}`);

    app.get("/", (req, res) => {
        res.send("API Smiles funcionando");
    });

});