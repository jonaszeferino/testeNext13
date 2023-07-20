"use client"; // This is a client component 👈🏽

export default function Home() {
  const onSubmit = () => {
    console.log("Clicou No Botão de Logar");
  };
  return (
    <>

    <div>
      <form method="post" style={{ textAlign: "center" }}>
  <input
    type="text"
    name="username"
    placeholder="Username"
    style={{
      margin: "10px",
      padding: "5px 10px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      color: "black"
    }}
  />
  <br />
  <input
    type="password"
    name="password"
    placeholder="Password"
    style={{
      margin: "10px",
      padding: "5px 10px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      color: "black"

    }}
  />
  <br />
  <button
    onClick={onSubmit}
    style={{
      backgroundColor: "#1F2937",
      color: "#FFFFFF",
      cursor: "pointer",
      margin: "10px",
      padding: "8px 20px",
      borderRadius: "5px",
      border: "none",
    }}
  >
    Logar
  </button>
</form>
</div>

    </>
  );
}

// agora no NEXT.13 o caminho das paginas se da pela pasta, e dentro dela sempre teremos a págian page.tsx e a pag page.tsx na raiz da pasta app seria equivalente a página index.js ou a home /
// teste secound commit
