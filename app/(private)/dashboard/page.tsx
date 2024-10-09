"use client";

import { CardMazos } from "@/components/ui/CardMazos";

const projects = [
  {
    title: "Stripe",
    description: "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
    footer: "50 flashcards",
    favorito: false,
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
    footer: "50 flashcards",
    favorito: true,
  },
  {
    title: "Google",
    description: "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
    footer: "50 flashcards",
    favorito: true,
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
    footer: "50 flashcards",
    favorito: true,
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
    footer: "50 flashcards",
    favorito: true,
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
    footer: "50 flashcards",
    favorito: true,
  },
];
export default function FavoritosPage() {
  return <CardMazos items={projects} />;
}
