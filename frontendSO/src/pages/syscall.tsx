import styles from '../styles/Syscall.module.css';
import SyscallChartComponent from '../components/SysCallChart';

const Syscall = () => {
    return (
        <div className={styles.container}>
            <h1>System Calls Page</h1>
            
            <div className={styles.syscallContainer}>
                <div className={styles.syscallList}>
                    <h2>Processos Realizados:</h2>
                    <ul>
                        <li>Fork</li>
                        <li>Getpid</li>
                        <li>Wait</li>
                    </ul>
                </div>

                <div className={styles.syscallDescription}>
                    <h2>Descrição:</h2>
                    <p><strong>Fork:</strong> Cria um novo processo duplicando o processo pai.</p>
                    <p><strong>Getpid:</strong> Retorna o ID do processo atual.</p>
                    <p><strong>Wait:</strong> Faz com que o processo pai espere a finalização de um processo filho.</p>
                </div>
            </div>
            <div>
            <SyscallChartComponent/>
            </div>
        </div>
    );
};

export default Syscall;
