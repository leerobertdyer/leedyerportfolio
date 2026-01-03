import { S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';

const r2 = new S3Client({
  region: 'auto',
  endpoint: process.env.R2_ENDPOINT,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  },
});

export async function uploadFile({bucket, key, buffer, contentType}: {bucket: string, key: string, buffer: Buffer, contentType: string}) {
  await r2.send(
    new PutObjectCommand({
      Bucket: bucket!,
      Key: key,
      Body: buffer,
      ContentType: contentType,
    })
  );
  return `${process.env.R2_ENDPOINT}/${bucket}/${key}`; // public link
}

export async function deleteFile({bucket, key}: {bucket: string, key: string}) {
  const resp = await r2.send(
    new DeleteObjectCommand({
      Bucket: bucket!,
      Key: key,
    })
  );
  console.log("DELETE RESP: ", resp)
}

export async function getFile({bucket, key}: {bucket: string, key: string;}) {
  const command = new GetObjectCommand({
    Bucket: bucket,
    Key: key,
  });
  const response = await r2.send(command);
  return response.Body; // stream
}
