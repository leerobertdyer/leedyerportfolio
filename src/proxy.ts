import { withAuth } from "next-auth/middleware";
// AKA middleware

export default withAuth({
  callbacks: {
    authorized({ token }) {
      return !!token;
    },
  },
});

export const config = {
  matcher: ["/music/admin/:path*", "/api/storage/:path*", "/api/music/:path*"],
};
