import React, { useState } from "react";
import axios from "axios";
import styles from "../styles/Charts.module.css";

const SyscallChartComponent: React.FC = () => {
  const [data, setData] = useState<Record<string, number> | null>(null);
  const [loading, setLoading] = useState(false);

  const formatNumber = (num: number) => {
    if (num >= 1e9) return (num / 1e9).toFixed(1) + "B";
    if (num >= 1e6) return (num / 1e6).toFixed(1) + "M";
    if (num >= 1e3) return (num / 1e3).toFixed(1) + "K";
    return num.toString();
  };

  const fetchData = async () => {
    setLoading(true); // Show loading state
    try {
      const response = await axios.get("http://localhost:5000/data");
      console.log("Dados recebidos:", response.data);

      const dataObject = Array.isArray(response.data) ? response.data[0] : response.data;
      setData(dataObject);
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
    } finally {
      setLoading(false); // Hide loading state
    }
  };

  const renderTable = (entries: [string, number][]) => (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Processo</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        {entries.map(([key, value]) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{formatNumber(value)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className={styles.chartContainer}>
      <button className={styles.button} onClick={fetchData} disabled={loading}>
        {loading ? "Carregando..." : "Realizar Processos"}
      </button>
      {data && (
        <div className={styles.tablesContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Processo</th>
                <th>Valor</th>
                <th>Processo</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              {(() => {
                const entries = Object.entries(data);
                const meio = Math.ceil(entries.length / 2);
                const firstHalf = entries.slice(0, meio);
                const secondHalf = entries.slice(meio);

                const maxLength = Math.max(firstHalf.length, secondHalf.length);
                const rows = [];
                for (let i = 0; i < maxLength; i++) {
                  rows.push(
                    <tr key={i}>
                      <td>{firstHalf[i]?.[0]}</td>
                      <td>{firstHalf[i] ? formatNumber(firstHalf[i][1]) : ""}</td>
                      <td>{secondHalf[i]?.[0]}</td>
                      <td>{secondHalf[i] ? formatNumber(secondHalf[i][1]) : ""}</td>
                    </tr>
                  );
                }
                return rows;
              })()}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SyscallChartComponent;
