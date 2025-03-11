import React, { useState } from "react";
import axios from "axios";

const ChartComponent: React.FC = () => {
  const [data, setData] = useState<Record<string, number> | null>(null);

  const formatNumber = (num: number) => {
    if (num >= 1e9) return (num / 1e9).toFixed(1) + "B"; // Bilhões
    if (num >= 1e6) return (num / 1e6).toFixed(1) + "M"; // Milhões
    if (num >= 1e3) return (num / 1e3).toFixed(1) + "K"; // Milhares
    return num.toString();
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/data");
      console.log("Dados recebidos:", response.data);

      const dataObject = Array.isArray(response.data) ? response.data[0] : response.data;
      setData(dataObject);
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
    }
  };

  const renderTable = (entries: [string, number][]) => (
    <table border={1} style={{ marginTop: "10px", borderCollapse: "collapse", width: "48%" }}>
      <thead>
        <tr>
          <th style={{ padding: "8px", textAlign: "left" }}>Processo</th>
          <th style={{ padding: "8px", textAlign: "left" }}>Valor</th>
        </tr>
      </thead>
      <tbody>
        {entries.map(([key, value]) => (
          <tr key={key}>
            <td style={{ padding: "8px" }}>{key}</td>
            <td style={{ padding: "8px" }}>{formatNumber(value)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div>
      <button onClick={fetchData}>Gerar Tabela</button>
      {data && (
        <div style={{ display: "flex", justifyContent: "space-between", gap: "10px" }}>
          {(() => {
            const entries = Object.entries(data);
            const meio = Math.ceil(entries.length / 2);
            return (
              <>
                {renderTable(entries.slice(0, meio))}
                {renderTable(entries.slice(meio))}
              </>
            );
          })()}
        </div>
      )}
    </div>
  );
};

export default ChartComponent;
