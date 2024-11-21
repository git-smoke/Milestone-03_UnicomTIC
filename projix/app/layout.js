import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "projix",
  description: "A Project Management App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {/* header */}
          <main className="min-h-screen">
            {children}
          </main>
          <footer className="bg-gray-900 py-12">
            <div className="container mx-auto text-center text-gray-200">
              <p>Made With 💗 Sankeerthan Dayanidi</p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}

