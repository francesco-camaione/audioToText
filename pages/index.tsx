import Accuracy from "../components/Accuracy/Accuracy"
import Transcription from "../components/Transcription/Transcription"
import Video from "../components/Video/Video"
import useData from "../hooks/useText"
import { responseTypes } from "../models/response"
import { getData } from "./api/hello"

export default function Home({ response }: any): JSX.Element {
  const response_ = useData(response)

  return (
    <>
      <Video />
      <Accuracy perc={response_?.confidence} />
      <Transcription text={response_?.text} />
    </>
  )
}

export async function getServerSideProps() {
  const response: responseTypes = await getData()

  return {
    props: { response },
  }
}
