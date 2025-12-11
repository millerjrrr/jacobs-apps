export interface AppInfo {
  name: string;
  website: string;
  preview: string;
  description: string;
}

export type AppId = "link-king" | "banana-cards" | "griddier";

export const appInfo: Record<AppId, AppInfo> = {
  "link-king": {
    name: "Link-King",
    website: "https://link-king.com",
    preview: "https://link-king.com/app-specific/link-king/og-preview.jpg",
    description: "Smarter spaced repetition for serious language learners.",
  },
  "banana-cards": {
    website: "https://banana-cards.com",
    name: "Banana Cards",
    preview:
      "https://banana-cards.com/app-specific/banana-cards/og-preview.jpg",
    description: "Flashcards for toddlers and early learners.",
  },
  griddier: {
    website: "https://griddier.com",
    name: "Griddier",
    preview: "https://griddier.com/app-specific/griddier/og-preview.jpg",
    description:
      "A mobile app designed to help skilled poker players optimize their preflop play.",
  },
};
