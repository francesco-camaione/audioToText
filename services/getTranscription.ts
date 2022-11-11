const getTranscription = async (id: string, API_KEY: string) => {
    
    const url = `https://api.assemblyai.com/v2/transcript/${id}` 
    
    const response = await fetch(url, {
        method: "GET", 
        headers: { 
            authorization: API_KEY,
            "content-type": "application/json",
        },
    })
    
    return response.json()
}

export default getTranscription