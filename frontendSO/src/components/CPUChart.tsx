import React, { useState } from "react";
import axios from "axios";
import styles from "../styles/Charts.module.css";

const CPUChartComponente: React.FC = () => {
  const [data, setData] = useState<Record<string, number> | null>(null);
  const [sourceCode, setSourceCode] = useState<string | null>(null);
  const [straceData, setStraceData] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const formatNumber = (num: number) => {
    if (num >= 1e9) return (num / 1e9).toFixed(1) + "B";
    if (num >= 1e6) return (num / 1e6).toFixed(1) + "M";
    if (num >= 1e3) return (num / 1e3).toFixed(1) + "K";
    return num.toString();
  };

  const fetchData = async (endpoint: string) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://${window.location.hostname}:7272/${endpoint}`);
      console.log("Dados recebidos:", response.data);

      setData(response.data.timeData);
      setSourceCode(response.data.sourceCode);
      setStraceData(response.data.straceData);
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.chartContainer}>
      
      <button className={styles.button} onClick={() => fetchData("cpu_bound")} disabled={loading}>
        {loading ? "Carregando..." : "Realizar CPU Bound"}
      </button>
      <button className={styles.button} onClick={() => fetchData("io_bound")} disabled={loading}>
        {loading ? "Carregando..." : "Realizar CPU IO"}
      </button>

      {data && (
        <div className={styles.tablesContainer}>
          <table className={styles.table}>
            <thead>
              <caption>Time Data</caption>
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

                return firstHalf.map(([key1, value1], index) => (
                  <tr key={index}>
                    <td>{key1}</td>
                    <td>{formatNumber(value1)}</td>
                    <td>{secondHalf[index]?.[0] || ""}</td>
                    <td>{secondHalf[index] ? formatNumber(secondHalf[index][1]) : ""}</td>
                  </tr>
                ));
              })()}
            </tbody>
          </table>
        </div>
      )}

      <div className={styles.codes}>
        {sourceCode && (
          <div className={styles.codeContainer}>
            <h3>Source Code</h3>
            <pre className={styles.codeBlock}>
              <code>{sourceCode}</code>
            </pre>
          </div>
        )}
        {straceData && (
          <div className={styles.straceContainer}>
            <h3>Strace Data</h3>
            <pre className={styles.codeBlock}>
              <code>{straceData}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default CPUChartComponente;
