import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { Metadata } from "next";
const navigation = [
  //{ name: "Projects", href: "/projects" },
  {name:"Services", href:"/services"},
  { name: "Contact", href: "/contact" },
];

export const metadata: Metadata = {
  // title: {
    // default: "indimind",
    // // // template: "%s | indimind",
  // },
  title:"indimind",
  description: "Indimind is an india based consultancy agency, which provides soltion for many fields such as mechanical, interior designing, marketing, web developement, graphic designing, 'digital marketing and much more......",
  keywords: ['indimind', 'web development service', 'consultancy services', 'best consultancy', 'part manufacturing service', 'graphic design service', 'digital marketing service','indimind services','next.js website development','react website'],
  openGraph: {
    title: "indimind.in",
    description:
      "an india based consultancy agency, which provides soltion for many fields such as mechanical, interior designing, marketing, web developement and much more.",
    url: "https://indimind.in",
    siteName: "indimind",
    images: [
      {
        url: "https://indimind.in/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
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
  twitter: {
    title: "Indimind",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        indimind
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
        Inspire India to innovate.
        </h2>
      </div>
    </div>
  );

}
