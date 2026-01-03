import formidable from "formidable";
import fs from "fs";
import { uploadFile } from "@/lib/r2";
import type { NextApiRequest, NextApiResponse } from "next";

export const config = { api: { bodyParser: false } };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const form = formidable({ multiples: false });

  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ error: err.message });

    // Make sure it's not an array
    const file = files.file;
    if (!file) return res.status(400).json({ error: "No file uploaded" });

    const singleFile = Array.isArray(file) ? file[0] : file; // now TypeScript knows it's a File
    const buffer = fs.readFileSync(singleFile.filepath);
    const key = `artists/${fields.artist}/${fields.title}`;

    const url = await uploadFile({
      key,
      buffer,
      bucket: "music",
      contentType: singleFile.mimetype ?? "audio/mpeg",
    });
    res.status(200).json({ url, key });
  });
}
