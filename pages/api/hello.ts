import { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default (_: NextApiRequest, res: NextApiResponse): Promise<Data> | void => {
  return res.status(200).json({ name: 'John Doe' })
}
