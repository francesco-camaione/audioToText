import { useState, useEffect } from "react"
import { responseTypes } from "../models/response"
import getTranscription from "../services/getTranscription"

const API_KEY = "559dc7d635a94f7585b97317a5004a33"

const useData = (response_: responseTypes) => {
    const [response, setResponse] = useState<responseTypes>()
    const [n_trial, setN_Trial] = useState(0)

    useEffect(function getTranscript() {

        getTranscription(response_.id, API_KEY).then((res) => {
            console.log(res.text)
            if (res?.status === "completed") {
                setResponse(res)
            } else {
                if (n_trial <= 10) {
                    setN_Trial(n_trial + 1)
                    setTimeout(() => getTranscript(), 3000)
                } else {
                    return res
                }
            }
        })
    }, [])

    return response
}

export default useData