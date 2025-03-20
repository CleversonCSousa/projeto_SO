import styles from '././styles/App.module.css';

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h1>Simulador de Processos Primitivos</h1>
        <h2>Simulador desenvolvido para a disciplina de Sistemas Operacionais I</h2>
        <h2>Proposta da disciplina aqui, colocar dps</h2>
        <h3 className={styles.text}>Docentes: Júlio Cezar Estrella e Sarita Mazzini Bruschi</h3>
        <h3 className={styles.text}>Alunos: Cleverson, Felipe, Yuri </h3>
      </div>
    </div>
  );
};

export default App;
