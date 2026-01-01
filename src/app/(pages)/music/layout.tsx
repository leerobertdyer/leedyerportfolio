import Nav from "@/components/Nav/Nav";
import { ROUTES } from "@/utils/consts";
import { Metadata } from "next";

type PropsDefinition = {
    children: React.ReactNode;
  };


export const metadata: Metadata = {
    title: "Lee Dyer - Music",
    description: "Lee Dyer - Alt/Acoustic/Folk/Indie",
    openGraph: {
      title: "Lee Dyer - Music",
      description: "Lee Dyer - Alt/Acoustic/Folk/Indie",
      url: "https://www.leedyer.com/music",
      images: [
        {
          url: "https://www.leedyer.com/images/leeStage1.png",
          width: 1200,
          height: 630,
          alt: "Lee Dyer Singing",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Lee Dyer - Music",
      description: "Lee Dyer - Alt/Acoustic/Folk/Indie",
      images: [
        "https://www.leedyer.com/images/leeStage1.png",
        "https://www.leedyer.com/images/leeBlueKneeling.jpg",
      ],
    },
  };
  

export default function Layout({ children }: PropsDefinition) {
    return (
        <>
            <Nav links={ROUTES.music} />
            {children}
        </>
    )
}