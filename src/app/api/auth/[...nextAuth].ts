import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
// import Google from "next-auth/providers/google"

// AUTH-TODO
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '', 
    }),
    // Google({
    //     clientId: '',
    //     clientSecret: ''
    // })
  ],
}

export default NextAuth(authOptions)