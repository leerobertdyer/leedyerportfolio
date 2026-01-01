import Nav from "@/components/Nav/Nav";
import { ROUTES } from "@/utils/consts";
import { Metadata } from "next";

type PropsDefinition = {
  children: React.ReactNode;
};


export const metadata: Metadata = {
  openGraph: {
    title: "Lee Dyer ~ Full Stack Developer",
    description:
    "Lee Dyer is a full stack developer specializing in React, Next.js, TypeScript, Node.js, and postgres. View his projects or get in touch",
    url: "https://www.leedyer.com/coding",
    images: [
      {
        url: "https://www.leedyer.com/images/profilePicSmaller.jpg",
        width: 1200,
        height: 630,
        alt: "Lee Dyer Profile Picture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lee Dyer - Music",
    description: "Lee Dyer - Alt/Acoustic/Folk/Indie",
    images: [
      "https://www.leedyer.com/images/profilePicSmaller.jpg",
      "https://www.leedyer.com/images/leeBlueKneeling.jpg",
    ],
  },
};

export default function Layout({ children }: PropsDefinition) {
  return (
    <>
      <Nav links={ROUTES.coding} />
      {children}
    </>
  );
}
