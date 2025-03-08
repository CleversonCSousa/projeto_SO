const express = require("express");
const cors = require("cors");
const getTimeData = require("./getTimeData");
const getFormattedTimeData = require("./getFormattedTimeData");

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));

app.get("/data", async (req, res) => {
  try {
    const timeData = await getTimeData("systemcalls/io_files/write/index");
    let formattedData = getFormattedTimeData(timeData);

    const responseData = Array.isArray(formattedData)
      ? formattedData
      : [formattedData];

    res.json(responseData);
  } catch (error) {
    res.status(500).json({ error: "Erro ao obter os dados" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
