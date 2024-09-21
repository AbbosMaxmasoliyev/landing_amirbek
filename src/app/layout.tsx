import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";


// Metadata for Amirbek Bozorov's personal or portfolio site
export const metadata: Metadata = {
  title: "Amirbek Bozorov - Portfolio",
  description: "Welcome to the official portfolio of Amirbek Bozorov. Explore projects, achievements, and career insights.",

  // Open Graph (OG) tags for better social media link previews
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://amirbekbozorov.com", // Update this with the actual URL
    title: "Amirbek Bozorov - Portfolio",
    description: "Explore Amirbek Bozorov's work, projects, and accomplishments.",
    siteName: "Amirbek Bozorov",
    images: [
      {
        url: "https://amirbekbozorov.com/og-image.jpg", // Update with actual image URL
        width: 1200,
        height: 630,
        alt: "Amirbek Bozorov Portfolio",
      },
    ],
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    site: "@amirbekbozorov", // Update with actual Twitter username
    creator: "@amirbekbozorov",
    title: "Amirbek Bozorov - Portfolio",
    description: "Welcome to Amirbek Bozorov's official portfolio website.",
    images: ["https://amirbekbozorov.com/twitter-card-image.jpg"], // Update with actual image URL
  },

  // Additional metadata for SEO
  alternates: {
    canonical: "https://amirbekbozorov.com", // Update with the canonical URL
  },

  // Icons
  icons: {
    icon: "/favicon.ico", // Favicon for the website
    apple: "/apple-touch-icon.png", // For Apple devices
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-montserrat antialiased`}
      >
        <main >
          {children}
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center py-12">
          <p className="flex items-center text-[40px] xl:text-[80px] text-center  m-auto  font-bold flex-wrap ">Let'ts build to <Image src={require("./images/amirbek.png")} width={50} height={50} alt="" className="size-20 rounded-full object-cover" />gether</p>
        </footer>
      </body>
    </html>
  );
}
