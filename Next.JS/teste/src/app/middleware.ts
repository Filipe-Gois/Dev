import { NextRequest, NextResponse } from "next/server";

const middleware = (request: NextRequest) => {
  //nome do token definido na aplicacao
  const tokenName = `authToken`;

  const token = request.cookies.get(tokenName)?.value;

  const signInURL = new URL("/signIn", request.url);
  const homeURL = new URL("/", request.url);

  //validacao para n acessar rotas sem estar autenticado
  if (!token) {
    if (request.nextUrl.pathname === "/signIn") {
      return NextResponse.next();
    }
    return NextResponse.redirect(signInURL);
  }

  //validacao para n acessar tela de login caso esteja autenticado
  if (request.nextUrl.pathname === "/") return NextResponse.redirect(homeURL);
};

export const config = {
  //array com todas as rotas que a funcao middleware execute antes de ser chamada
  ///:path* indica que todas as rotas que derivem de "produtos" serão validadas
  matcher: ["/", "/home", "/produtos/:path*"],
};

export default middleware;
