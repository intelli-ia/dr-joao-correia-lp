export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#152942",
        borderTop: "1px solid rgba(255,255,242,0.08)",
      }}
    >
      <div className="max-w-7xl mx-auto px-8 py-8 flex flex-col items-center gap-2">
        <p
          className="text-sm"
          style={{ color: "rgba(255,255,242,0.45)", fontFamily: "Cairo, sans-serif" }}
        >
          © 2026 Dr. João Correia. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
