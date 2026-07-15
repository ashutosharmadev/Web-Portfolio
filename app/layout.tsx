import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ashutosh Sharma | Software Engineering Student",
  description:
    "Portfolio of Ashutosh Sharma, an Information Technology student at NSUT building AI-powered software and full-stack products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${GeistSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
