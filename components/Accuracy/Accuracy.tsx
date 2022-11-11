import styles from "./Accuracy.module.css"

interface AccuracyProps {
    perc: number | undefined
}

const Accuracy = (perc: AccuracyProps) => {
    return (
        <>
            {perc.perc ? <div className={styles.accuracy_container}>
                <p>Accuracy: {Math.floor(perc.perc * 100)}%</p>
            </div> : null}
        </>
    )
}

export default Accuracy