import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    // @NOTE: 로그인 종류 설정
    GithubProvider({
      clientId: '0846c6084d3018a26946',
      clientSecret: 'e8cb975177672e424d8d146d95315bf3224b1d5a',
    }),
  ],
  secret : 'qwer1234'
};
export default NextAuth(authOptions); 