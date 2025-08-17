export async function GET({ params, locals }) {
  const key = params.key;
  const object = await locals.runtime.env.GALLERY_IMAGES.get(key);

  if (!object || !object.body) {
    return new Response("Image not found", { status: 404 });
  }

  return new Response(object.body, {
    headers: {
      "Content-Type": object.httpMetadata?.contentType ?? "application/octet-stream",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

