import type { NextApiRequest, NextApiResponse } from "next";

type ResponseModel = {
    message: string
}

export function GET(req: NextApiRequest, res:NextApiResponse<ResponseModel>){
    res.status(200).json({ message: "Hello from Next.js my friend!!!" })
}



