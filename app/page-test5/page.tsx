import SignInButton from "../components/SignInButton";

export default function Home() {
  return (
    <>
      Perfil do usuário
      <div>So pode ver logado</div>
      <div>
        <ul>
          <SignInButton />
        </ul>
      </div>
    </>
  );
}

// agora no NEXT.13 o caminho das paginas se da pela pasta, e dentro dela sempre teremos a págian page.tsx e a pag page.tsx na raiz da pasta app seria equivalente a página index.js ou a home /
// teste secound commit
