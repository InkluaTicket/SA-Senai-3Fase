import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className='bg-cinza-principal-50 2xl'>
        {children}
      </body>
    </html>
  );
}
