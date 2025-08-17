//interface Env {
//  GALLERY_IMAGES: R2Bucket;
//}
//
//export default {
//  async fetch(request: Request, env: Env) {
//    const url = new URL(request.url);
//    
//    // Handle image requests
//    if (url.pathname.startsWith('/gallery-images/')) {
//      const r2Path = url.pathname
//        .replace('/gallery-images/', 'gallery/')
//        .replace('//', '/'); // Clean double slashes
//      
//      const object = await env.GALLERY_IMAGES.get(r2Path);
//      
//      if (object) {
//        const headers = new Headers();
//        object.writeHttpMetadata(headers);
//        headers.set('etag', object.httpEtag);
//        headers.set('Cache-Control', 'public, max-age=31536000');
//        headers.set('Access-Control-Allow-Origin', '*');
//        
//        return new Response(object.body, { headers });
//      }
//    }
//
//    return new Response('Not found', { status: 404 });
//  }
//};
