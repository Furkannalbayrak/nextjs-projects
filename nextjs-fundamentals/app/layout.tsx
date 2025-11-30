import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Headers from "@/components/Headers";
import { Inter, Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Headers />

          <main className="max-w-5xl mx-auto px-8 py-8">
            {children}
          </main>

        </ThemeProvider>
      </body>
    </html>
  );
}
