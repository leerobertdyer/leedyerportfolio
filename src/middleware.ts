export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/music/(admin)/:path*",
    "/api/storage/:path*",
  ],
};