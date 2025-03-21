import styles from "../styles/ES.module.css";
import ESChartComponente from "../components/ESChart";

const Entradaesaida = () => {
    return (
        <div className={styles.container}>
            <h1>Entrada e Saida</h1>
            
            <div className={styles.esContainer}>
                <div className={styles.esList}>
                    <h2>Processos Realizados:</h2>
                    <ul>
                        <li>Open</li>
                        <li>Stat</li>
                        <li>Write</li>
                    </ul>
                </div>

                <div className={styles.esDescription}>
                    <h2>Descrição:</h2>
                    <p><strong>Open:</strong> Função usada para abrir arquivos e obter um descritor de arquivo para leituras e escritas subsequentes, com permissões específicas.</p>
                    <p><strong>Stat:</strong> Função que recupera informações sobre um arquivo ou diretório, como tamanho, permissões e tempo de modificação.</p>
                    <p><strong>Write:</strong> Função utilizada para escrever dados em um arquivo aberto, permitindo salvar ou modificar o conteúdo do arquivo.</p>
                </div>
            </div>
            <div>
            <ESChartComponente/>
            </div>
        </div>
    );

}
export default Entradaesaida