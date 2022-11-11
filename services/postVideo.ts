const url = "https://api.assemblyai.com/v2/transcript"
const AUDIO_URL = "https://delivery.altaformazione.it/app/recordati/e%26c/_e%26c/audio/01_01.mp3"

const postVideo = async (API_KEY: string) => {

    const response = await fetch(url, {
        method: "POST",
        headers: {
            authorization: API_KEY,
            "content-type": "application/json",
        },
        body: JSON.stringify({
            audio_url: AUDIO_URL,
            language_code: "it"
        })
    })

    return response.json()
}

export default postVideo