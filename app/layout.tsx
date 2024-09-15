import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
// import { Metadata } from "next";
import { Analytics } from "./components/analytics";
import Popup from "./components/popup"
// export const metadata: Metadata = {
//   title: {
//     default: "indimind",
//     // // // template: "%s | indimind",
//   },
//   description: "Indimind is an india based consultancy agency, which provides soltion for many fields such as mechanical, interior designing, marketing, web developement, graphic designing, 'digital marketing and much more......",
//   keywords: ['indimind', 'web development service', 'consultancy services', 'best consultancy', 'part manufacturing service', 'graphic design service', 'digital marketing service','indimind services','next.js website development','react website'],
//   openGraph: {
//     title: "indimind.in",
//     description:
//       "an india based consultancy agency, which provides soltion for many fields such as mechanical, interior designing, marketing, web developement and much more.",
//     url: "https://indimind.in",
//     siteName: "indimind",
//     images: [
//       {
//         url: "https://indimind.in/og.png",
//         width: 1920,
//         height: 1080,
//       },
//     ],
//     locale: "en-US",
//     type: "website",
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
//   twitter: {
//     title: "Indimind",
//     card: "summary_large_image",
//   },
//   icons: {
//     shortcut: "/favicon.png",
//   },
// };
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}
