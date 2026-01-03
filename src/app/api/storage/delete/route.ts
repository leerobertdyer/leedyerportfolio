import { deleteFile } from "@/lib/r2";

export async function DELETE(req: Request) {
  const body = await req.json();
  const { key, bucket } = body;

  if (!key || !bucket) {
    return new Response(JSON.stringify({ error: "Missing key or bucket" }), {
      status: 400,
    });
  }

  try {
    const url = await deleteFile({ bucket, key });
    return new Response(
      JSON.stringify({ success: true, url, key }),
      { status: 200 }
    );
  } catch (err: any) {
    console.error(err)
    return new Response(JSON.stringify({ error: err }), { status: 500 });
  }
}
