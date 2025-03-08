import ChartComponent from "../components/chart";
import styles from "../styles/ES.module.css";


const Entradaesaida = () => {
    return(
        <>
        <div className={styles.container}>
            <div>
                <h1>Entrada e saida</h1>
            </div>
            
        <div>
            <ChartComponent />
        </div>

        </div>
        </>
    )

}
export default Entradaesaida