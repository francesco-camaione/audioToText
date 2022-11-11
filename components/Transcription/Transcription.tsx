import styles from "./Transcription.module.css"

interface TranscrProps {
    text: string | undefined
}

const Transcription = (text: TranscrProps) => {
    return (
        <div className={styles.transcription_container}>
            <p className={styles.p}>{text.text}</p>
        </div>
    )
}

export default Transcription