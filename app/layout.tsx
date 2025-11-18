import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import Footer from "./components/footer";
import { Navbar } from "./components/nav";
import { DESCRIPTION, NAME } from "./copywriting";
import "./global.css";
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: NAME,
    template: `%s | ${NAME}`,
  },
  description: DESCRIPTION,
  openGraph: {
    title: NAME,
    description: DESCRIPTION,
    url: baseUrl,
    siteName: NAME,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(GeistSans.variable, GeistMono.variable)}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  function getTheme() {
                    var stored = localStorage.getItem('theme');
                    if (stored && (stored === 'dark' || stored === 'light')) {
                      return stored;
                    }
                    if (stored === 'system' || !stored) {
                      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                    }
                    return 'light';
                  }
                  
                  var theme = getTheme();
                  document.documentElement.classList.remove('light', 'dark');
                  document.documentElement.classList.add(theme);
                  document.documentElement.style.colorScheme = theme;
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased max-w-xl mx-8 mt-8 sm:mx-auto bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
          storageKey="theme"
        >
          <main className="min-w-0 mt-6 flex flex-col h-[90vh]">
            <div className="flex-1">
              <Navbar />
              {children}
            </div>
            <Footer />
            <Analytics />
            <SpeedInsights />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
