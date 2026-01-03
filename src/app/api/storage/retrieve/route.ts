import { getFile } from "@/lib/r2";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { bucket, key } = req.body;

    const url = getFile

    res.status(200).json({ url, key });

    // export async function getFile({bucket, key}: {bucket: string, key: string;}) {
    //     const command = new GetObjectCommand({
    //       Bucket: bucket,
    //       Key: key,
    //     });
    //     const response = await r2.send(command);
    //     return response.Body; // stream
    //   }
      

}