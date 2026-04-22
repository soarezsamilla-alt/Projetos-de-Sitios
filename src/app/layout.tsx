
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pack +100 Projetos de Sítios Produtivos | Edição Premium 2026',
  description: 'A coleção definitiva de projetos de sítios produtivos do Brasil. +100 plantas dimensionadas com medidas, divisões e layouts prontos para executar.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
