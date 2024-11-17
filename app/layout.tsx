
import Header1 from "@/components/Header1";
import "./globals.css";
import Header2 from "@/components/Header2";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header1/>
        <Header2/>
        {children}
      </body>
    </html>
  );
}
