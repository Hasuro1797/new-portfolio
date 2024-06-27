import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Poppins } from "next/font/google";
import "./globals.css";


const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "Manuel Villarroel | Full Stack Developer",
  description: "Experto en tecnologías front-end y back-end, con habilidades demostradas en la creación de aplicaciones web robustas y escalables.",
};

export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string }
}>) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={poppins.className}>
      <NextIntlClientProvider messages={messages}>
        {children}
        <footer className="w-full flex justify-center items-center py-8 px-4">
          <span className="text-center text-[12px] xs:text-[14px] text-primary-200 font-medium ">© 2024 Manuel Villarroel. Todos los derechos reservados.</span>
        </footer>
      </NextIntlClientProvider>
      </body>
    </html>
  );
}
