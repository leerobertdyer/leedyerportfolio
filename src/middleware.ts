export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    // frontend protection
    "/music/admin/:path*",
    
    // backend protection
    "/api/storage/:path*",
    "/api/music/:path*"
  ],
};