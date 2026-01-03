import { getFile } from "@/lib/r2";

// UNTESTED - This would be for downloading files from R2

export default async function handler(
    req: Request,
) {
    const { bucket, key } = await req.json();

    const url = getFile({ bucket, key })

    return new Response(`Success`, { status: 200 });
      
}