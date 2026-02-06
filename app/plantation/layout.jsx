import { Inter } from 'next/font/google'
import '../globals.css';
export const metadata = {
  title: "Oxiaura Plantation | Oxiaura Group Sri Lanka",
  description:
    "Oxiaura Plantation, part of Oxiaura Group, focuses on sustainable agriculture and premium plantation products in Sri Lanka.",

  keywords: [
    "Oxiaura Plantation",
    "Oxiaura Group",
    "Sri Lanka Plantation",
    "Agarwood",
    "Vanilla",
    "TJC Mango",
    "Scotch Bonnet",
    "Sustainable Agriculture",
    "Premium Plantation Products",
    "Sri Lanka Agriculture",
    "Oxiaura Sustainability",
    "sandlwood plantaion",
    "passion fruit plantation",
    "watermelon plantation",
  ],

  openGraph: {
    title: "Oxiaura Plantation | Oxiaura Group",
    description:
      "Discover sustainable plantation excellence with Oxiaura Plantation in Sri Lanka.",
    url: "https://oxiaura.com",
    siteName: "Oxiaura Plantation",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Oxiaura Plantation",
      },
    ],
    locale: "en_LK",
    type: "website",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}