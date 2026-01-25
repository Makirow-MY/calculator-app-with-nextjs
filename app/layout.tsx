import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Calculated App",
  description: "Created using Next.js by MYcoder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       style={{
           fontFamily: "system-ui, -apple-system, Ubuntu, Roboto, sans-serif",
       }}
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
