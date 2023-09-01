import axios from "axios"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { DefaultSession, DefaultUser } from "next-auth"

interface User extends DefaultUser {
  id: string
  name: string
  firstName: string
  lastName: string
  email: string
  image: string
  token: string
}

declare module "next-auth" {
  interface User extends DefaultUser {
    id: string
    name: string
    firstName: string
    lastName: string
    email: string
    image: string
    token: string
  }
  interface Session extends DefaultSession {
    user: User
  }
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Email address" },
        password: { label: "Password", type: "password", placeholder: "Password" }
      },
      async authorize(credentials) {
        const user = { id: 1, name: "J Smith", email: "john@mail.com", image: "https://via.placeholder.com/500", firstName: "John", lastName: "Smith" }

        // fetch user from external API
        const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/login`
        try {
          const { status, data } = await axios({
            method: "POST",
            url,
            data: {
              email: credentials?.email,
              password: credentials?.password
            },
          })
          console.log("login", status, data)
          if (status === 200 && data?.success) {
            const user = data?.user
            return {
              id: user?._id,
              firstName: user?.firstName,
              lastName: user?.lastName,
              email: user?.email,
              name: `${user?.firstName} ${user?.lastName}`,
              image: "https://via.placeholder.com/500",
              token: data?.token
            }
          }
        } catch (error) {
          console.log(error)
          return null
        }

        return null
      }
    })
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: "2/q0eH6zZePnSPLqre9WOOv299iZIhoegoWOKZdgw/Y=",
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.data = user
      }
      return token
    },
    session({ session, token }) {
      if (token.data) {
        session.user = token.data as User
      }
      return session
    },
    redirect({ url, baseUrl }) {
      console.log("redirect", url, baseUrl)
      return url.startsWith(baseUrl) ? url : baseUrl
    },
    signIn({ user, account, profile, email, credentials }) {
      console.log("signIn", user, account, profile, email, credentials)
      return true
    }
  }
})

export { handler as GET, handler as POST }