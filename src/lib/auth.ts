import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import EmailProvider from "next-auth/providers/email";


export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    EmailProvider({
    server: {
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
      }
    },
    from: "noreply@leedyer.com"
  }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};


