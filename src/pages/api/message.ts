// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { messageModel } from '@/interfaces/messageModel'
import getMessages from '../controller/getMessage'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<messageModel[]>
) {

  if(req.method === "GET") {

    let messagesList:messageModel[] = await getMessages();
    


    res.status(200).json(messagesList)


  } else if (req.method === "POST") {
    res.status(200).json([])
  }



}
