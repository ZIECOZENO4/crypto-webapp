

import NextAuth from "next-auth/next";

import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import DiscordProvider from "next-auth/providers/discord";
const handler = NextAuth({
    providers:[

        CredentialsProvider({
            name: 'Credentials',
            credentials: {
              username: { label: "Username", type: "text", placeholder: "ZIECO ZENO" },
              password: { label: "Password", type: "password", placeholder: '*******************' }
            },
            async authorize(credentials, req) {
              const res = await fetch("http://localhost:3000/api/login", {
                method: 'POST',
                body: JSON.stringify({
                    username: credentials?.username,
                    password: credentials?.password // Uncommented this line
                }),
                headers: { "Content-Type": "application/json" }
              })
              const user = await res.json()
        
              if (res.ok && user) {
                return user
              }
              return null
            }
          }),
              GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
      }),

      GitHubProvider({
        clientId: process.env.GITHUB_ID as string,
        clientSecret: process.env.GITHUB_SECRET as string
      }),

      DiscordProvider({
        clientId: process.env.DISCORD_CLIENT_ID as string,
        clientSecret: process.env.DISCORD_CLIENT_SECRET as string
      })
    ],
});

export { handler as GET, handler as POST}






















