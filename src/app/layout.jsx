import { GlobalContextProvider } from "@/contexts/GlobalContext";
import "./globals.css";
import AccesibilitySidebar from "@/components/accesibility/AccesibilitySidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className='bg-cinza-principal-50 2xl font-principal'>
        <GlobalContextProvider>
          <AccesibilitySidebar />
        {children}
        </GlobalContextProvider>
      </body>
    </html>
  );
}
