/** @type {import('next').NextConfig} */
const nextConfig = {
  // Gera pasta `out/` com HTML + _next estáticos — ideal para Hostinger/hospedagem só de arquivos.
  // Faça o deploy de TODO o conteúdo de `out/` na raiz do site (mesma build = hashes iguais).
  output: "export",
  images: {
    unoptimized: true,
  },
}

export default nextConfig
