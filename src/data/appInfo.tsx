export interface AppInfo {
  name: string;
  website: string;
}

export type AppId = "link-king" | "banana-cards" | "griddier";

export const appInfo: Record<AppId, AppInfo> = {
  "link-king": {
    name: "Link-King",
    website: "https://link-king.com",
  },
  "banana-cards": {
    website: "https://banana-cards.com",
    name: "Banana Cards",
  },
  griddier: {
    website: "https://griddier.com",
    name: "Griddier",
  },
};
