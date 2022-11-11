import { useState, useRef, useEffect } from "react"
import styles from "./Video.module.css"

const VIDEO_SRC = {
    src: "/01_01.mp4",
    type: "video/mp4"
}

const Video = (): JSX.Element => {
    const [isPlaying, setIsPlaying] = useState(true)

    const videoRef = useRef<HTMLVideoElement>(null)

    const pauseVideo = () => {
        setIsPlaying(!isPlaying)
        isPlaying ? videoRef.current?.pause() : videoRef.current?.play()
        return;
    }

    useEffect(() => {
        document.body.onkeydown = ((event) => {
            if (event.code == "Space" && isPlaying) {
                setIsPlaying(false)
                videoRef.current?.pause()
            } else if (event.code == "Space" && !isPlaying) {
                setIsPlaying(true)
                videoRef.current?.play()
            }

        })
    }, [isPlaying])

    return (
        <div className={styles.video_container}>
            <video autoPlay muted className={styles.video} onClick={() => pauseVideo()} ref={videoRef}>
                <source src={VIDEO_SRC.src} ></source>
            </video>
        </div>
    )
}

export default Video