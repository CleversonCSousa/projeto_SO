import styles from './../styles/Memo.module.css';
import MemoChartComponente from '../components/MemoChart';

const Memo = () =>{
    return (
        <div className={styles.container}>
            <h1>Memória</h1>
            
            <div className={styles.memoContainer}>
                <div className={styles.memoList}>
                    <h2>Processos Realizados:</h2>
                    <ul>
                        <li>Mprotect</li>
                        <li>Mmap</li>
                        <li>Munmap</li>
                    </ul>
                </div>

                <div className={styles.memoDescription}>
                <h2>Descrição:</h2>
                    <p><strong>Mprotect:</strong> Função que altera permissões de uma região de memória mapeada, permitindo o controle de acesso, como leitura, escrita ou execução.</p>
                    <p><strong>Mmap:</strong> Função usada para mapear arquivos ou alocar memória diretamente, permitindo a manipulação de grandes volumes de dados de forma eficiente.</p>
                    <p><strong>Munmap:</strong> Função utilizada para liberar a memória que foi previamente mapeada ou alocada, essencial para a gestão de recursos do sistema.</p>
                </div>
            </div>
            <div>
            <MemoChartComponente/>
            </div>
        </div>
    );
}

export default Memo