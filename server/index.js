const express = require("express");
const cors = require("cors");
const getTimeData = require("./getTimeData");
const getFormattedTimeData = require("./getFormattedTimeData");
const getSourceCode = require("./getSourceCode");
const getStraceData = require("./getStraceData");

const app = express();

app.use(cors({ origin: "http://localhost:7172" }));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/systemcalls/io_files/stat", async (req, res) => {
  try {
    const timeData = await getTimeData("systemcalls/io_files/stat");
    const formattedTimeData = getFormattedTimeData(timeData);
    const sourceCode = await getSourceCode("systemcalls/io_files/stat/stat.c");
    const straceData = await getStraceData("systemcalls/io_files/stat");

    res.json({
      timeData: formattedTimeData,
      sourceCode,
      straceData,
    });
  } catch (error) {
    res.status(500).json({ error: "Erro ao obter os dados" });
  }
});

app.get("/systemcalls/io_files/write", async (req, res) => {
  try {
    const timeData = await getTimeData("systemcalls/io_files/write");
    const formattedTimeData = getFormattedTimeData(timeData);
    const sourceCode = await getSourceCode(
      "systemcalls/io_files/write/write.c"
    );
    const straceData = await getStraceData("systemcalls/io_files/write");

    res.json({
      timeData: formattedTimeData,
      sourceCode,
      straceData,
    });
  } catch (error) {
    res.status(500).json({ error: "Erro ao obter os dados" });
  }
});

app.get("/systemcalls/io_files/open", async (req, res) => {
  try {
    const timeData = await getTimeData("systemcalls/io_files/open");
    const formattedTimeData = getFormattedTimeData(timeData);
    const sourceCode = await getSourceCode("systemcalls/io_files/open/open.c");
    const straceData = await getStraceData("systemcalls/io_files/open");

    res.json({
      timeData: formattedTimeData,
      sourceCode,
      straceData,
    });
  } catch (error) {
    res.status(500).json({ error: "Erro ao obter os dados" });
  }
});

app.get("/systemcalls/processes/fork", async (req, res) => {
  try {
    const timeData = await getTimeData("systemcalls/processes/fork");
    const formattedTimeData = getFormattedTimeData(timeData);
    const sourceCode = await getSourceCode("systemcalls/processes/fork/fork.c");
    const straceData = await getStraceData("systemcalls/processes/fork");

    res.json({
      timeData: formattedTimeData,
      sourceCode,
      straceData,
    });
  } catch (error) {
    res.status(500).json({ error: "Erro ao obter os dados" });
  }
});

app.get("/systemcalls/processes/getpid", async (req, res) => {
  try {
    const timeData = await getTimeData("systemcalls/processes/getpid");
    const formattedTimeData = getFormattedTimeData(timeData);
    const sourceCode = await getSourceCode(
      "systemcalls/processes/getpid/getpid.c"
    );
    const straceData = await getStraceData("systemcalls/processes/getpid");

    res.json({
      timeData: formattedTimeData,
      sourceCode,
      straceData,
    });
  } catch (error) {
    res.status(500).json({ error: "Erro ao obter os dados" });
  }
});

app.get("/systemcalls/processes/getppid", async (req, res) => {
  try {
    const timeData = await getTimeData("systemcalls/processes/getppid");
    const formattedTimeData = getFormattedTimeData(timeData);
    const sourceCode = await getSourceCode(
      "systemcalls/processes/getpid/getpid.c"
    );
    const straceData = await getStraceData("systemcalls/processes/getppid");

    res.json({
      timeData: formattedTimeData,
      sourceCode,
      straceData,
    });
  } catch (error) {
    res.status(500).json({ error: "Erro ao obter os dados" });
  }
});

app.get("/systemcalls/processes/wait", async (req, res) => {
  try {
    const timeData = await getTimeData("systemcalls/processes/wait");
    const formattedTimeData = getFormattedTimeData(timeData);
    const sourceCode = await getSourceCode("systemcalls/processes/wait/wait.c");
    const straceData = await getStraceData("systemcalls/processes/wait");

    res.json({
      timeData: formattedTimeData,
      sourceCode,
      straceData,
    });
  } catch (error) {
    res.status(500).json({ error: "Erro ao obter os dados" });
  }
});

app.get("/systemcalls/memory/mmap", async (req, res) => {
  try {
    const timeData = await getTimeData("systemcalls/memory/mmap");
    const formattedTimeData = getFormattedTimeData(timeData);
    const sourceCode = await getSourceCode("systemcalls/memory/mmap/mmap.c");
    const straceData = await getStraceData("systemcalls/memory/mmap");

    res.json({
      timeData: formattedTimeData,
      sourceCode,
      straceData,
    });
  } catch (error) {
    res.status(500).json({ error: "Erro ao obter os dados" });
  }
});

app.get("/systemcalls/memory/munmap", async (req, res) => {
  try {
    const timeData = await getTimeData("systemcalls/memory/munmap");
    const formattedTimeData = getFormattedTimeData(timeData);
    const sourceCode = await getSourceCode(
      "systemcalls/memory/munmap/munmap.c"
    );
    const straceData = await getStraceData("systemcalls/memory/munmap");

    res.json({
      timeData: formattedTimeData,
      sourceCode,
      straceData,
    });
  } catch (error) {
    res.status(500).json({ error: "Erro ao obter os dados" });
  }
});

app.get("/systemcalls/memory/mprotect", async (req, res) => {
  try {
    const timeData = await getTimeData("systemcalls/memory/mprotect");
    const formattedTimeData = getFormattedTimeData(timeData);
    const sourceCode = await getSourceCode(
      "systemcalls/memory/mprotect/mprotect.c"
    );
    const straceData = await getStraceData("systemcalls/memory/mprotect");

    res.json({
      timeData: formattedTimeData,
      sourceCode,
      straceData,
    });
  } catch (error) {
    res.status(500).json({ error: "Erro ao obter os dados" });
  }
});

app.get("/systemcalls/memory/mprotect", async (req, res) => {
  try {
    const timeData = await getTimeData("systemcalls/memory/mprotect");
    const formattedTimeData = getFormattedTimeData(timeData);
    const sourceCode = await getSourceCode(
      "systemcalls/memory/mprotect/mprotect.c"
    );
    const straceData = await getStraceData("systemcalls/memory/mprotect");

    res.json({
      timeData: formattedTimeData,
      sourceCode,
      straceData,
    });
  } catch (error) {
    res.status(500).json({ error: "Erro ao obter os dados" });
  }
});

app.get("/cpu_bound", async (req, res) => {
  try {
    const timeData = await getTimeData("cpu_bound");
    const formattedTimeData = getFormattedTimeData(timeData);
    const sourceCode = await getSourceCode("cpu_bound/cpu_bound.c");
    const straceData = await getStraceData("cpu_bound");

    res.json({
      timeData: formattedTimeData,
      sourceCode,
      straceData,
    });
  } catch (error) {
    res.status(500).json({ error: "Erro ao obter os dados" });
  }
});

app.get("/io_bound", async (req, res) => {
  try {
    const timeData = await getTimeData("io_bound");
    const formattedTimeData = getFormattedTimeData(timeData);
    const sourceCode = await getSourceCode("io_bound/io_bound.c");
    const straceData = await getStraceData("io_bound");

    res.json({
      timeData: formattedTimeData,
      sourceCode,
      straceData,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro ao obter os dados" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
