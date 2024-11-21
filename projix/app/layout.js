import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  title: "projix",
  description: "A Project Management App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

