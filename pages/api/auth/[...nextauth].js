import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      authorizationUrl:
        "https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code",
      scope:
        "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/photoslibrary.readonly",
    }),
    // ...add more providers here
  ],
  secret: process.env.SECRET,
  callbacks: {
    async jwt(token, user, account, profile, isNewUser) {
      if (account?.accessToken) {
        token.accessToken = account.accessToken;
      }
      return token;
    },
  },
});
