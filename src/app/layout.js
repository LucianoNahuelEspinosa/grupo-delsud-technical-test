import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.scss";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Flexy",
  description: "Prueba técnica para el puesto de Desarrollador Fullstack en Grupo Delsud",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={font.className}>{children}</body>
    </html>
  );
}
