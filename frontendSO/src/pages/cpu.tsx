import styles from "../styles/ES.module.css";
import CPUChartComponente from "../components/CPUChart";

const CPU = () => {
    return (
        <div className={styles.container}>
            <h1>CPU BOUND e IO</h1>
            
            <div className={styles.esContainer}>
                <div className={styles.esList}>
                    <h2>Processos Realizados:</h2>
                    <ul>
                        <li>CPU BOUND</li>
                        <li>CPU IO</li>
                    </ul>
                </div>

                <div className={styles.esDescription}>
                    <h2>Descrição:</h2>
                    <p><strong>CPU BOUND:</strong> Refere-se a operações ou processos que são limitados pelo poder de processamento da CPU. São tarefas intensivas em cálculos ou manipulação de dados, onde a velocidade do processo é diretamente afetada pela capacidade da unidade de processamento central. Exemplos incluem algoritmos complexos de ordenação e processamento de grandes volumes de dados.</p>
                    <p><strong>IO BOUND:</strong> Refere-se a operações ou processos que são limitados pela velocidade de entrada e saída (IO) do sistema, como a leitura e escrita de arquivos ou a comunicação com bancos de dados. Nessas tarefas, a CPU fica ociosa enquanto espera por dados, sendo a performance do processo mais dependente da velocidade de acesso ao armazenamento ou rede do que do poder de processamento da CPU.</p>
                </div>

            </div>
            <div>
                <CPUChartComponente/>
            </div>
        </div>
    );

}
export default CPU