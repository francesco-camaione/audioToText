// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import getTranscription from '../../services/getTranscription'
import postVideo from '../../services/postVideo'

type Data = {
  name: string
}

export function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}

const API_KEY = "559dc7d635a94f7585b97317a5004a33"

export async function getData() {

  const response = await postVideo(API_KEY)
    .then(function getTransc(res) {
      return getTranscription(res.id, API_KEY)
    })

  return response
}

