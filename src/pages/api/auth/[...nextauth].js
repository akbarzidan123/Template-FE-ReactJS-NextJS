import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { encode } from "next-auth/jwt";

const secret = process.env.NEXTAUTH_SECRET;

const handler = NextAuth({
  providers: [
    Providers.Credentials({
      name: "Credentials",
      credentials: {
        username: {},
        password: {},
        duar_data: {}
      },
      authorize: async (credentials, req) => {
        if(credentials?.username == "test"){
          return {
            username: credentials?.username,
            password: credentials?.password,
            duar_data: credentials?.duar_data || "DUAR_DEFAULT"
          }
        }
        return null;
      }
    }),
  ],
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.user = user;
        token.name = "test"
        token.email = "test@test.com"
        token.picture = "test"
        token.sub = "test"
        
        // expired token (10 detik)
        token.exp = 10;
        token.iat = 0
      }

      return token;
    },

    async session(session, token) {
      if (token.user) {
        session.user = token.user;

        // contoh nambah key objek baru
        session.create_new_objek = "test"

        // generate objek token jwt
        const jwtString = await encode({
          token, 
          secret,
          header: {
            alg: 'HS256',
            typ: 'JWT'
          }
        });
        session.jwt = jwtString;

        // Decode the token to verify payload (for checking)
        // const decodedToken = await decode({
        //   token: jwtString,
        //   secret
        // });
      }
      return session;
    }
  },
  jwt: {
    secret,
    // encryption: true,
    // signingKey: {
    //   alg: 'HS256',
    //   typ: 'JWT'
    // }
  },
  session: {
    maxAge: 10, // Sesi akan bertahan selama 10 detik
    updateAge: 24 * 60 * 60, // Sesi akan diperbarui setiap 24 jam
    strategy: "jwt"
  }
});

export default handler