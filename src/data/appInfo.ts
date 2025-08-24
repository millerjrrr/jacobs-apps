type ExtraLink = {
  name: string;
  url: string;
};

export type AppInfo = {
  id: string;
  name: string;
  image: string;
  description: string;
  technologies: string;
  ios?: string;
  android?: string;
  site?: string;
  extraLink?: ExtraLink;
};

export const appInfo: AppInfo[] = [
  {
    id: "banana-cards",
    name: "Banana Cards",
    image: `${process.env.PUBLIC_URL}/images/banana-lingo-app-icon.png`,
    description:
      "Banana Cards is a playful yet powerful language learning app built on the science of spaced repetition. Rather than translating from one language to another, the app helps users form direct associations between images and sounds. By presenting carefully curated pictures alongside their corresponding spoken words, learners naturally absorb vocabulary without relying on their native language. \n\n This intuitive method makes Banana Cards ideal for early learners, including young children—and maybe even pets. Through smart repetition and visual bonding, the app helps users internalize new words the same way we learn our first language: by connecting what we see with what we hear.",
    technologies:
      "Banana Cards was built using React Native and Expo, which allow the app to run smoothly on both iOS and Android using a single codebase. It uses Redux Toolkit to manage data across the app, helping ensure a fast and consistent experience for users. Expo AV powers the audio playback features, while AsyncStorage keeps user progress saved on the device, even when offline. The layout and visual styling are handled using styled-components, enabling a modern and polished interface.\n\nThis project showcases the ability to create a complete mobile app from the ground up—designed, coded, and optimized for real users. It highlights skills in building responsive interfaces, integrating multimedia features like sound, and structuring apps for long-term maintainability.",
    ios: "https://apps.apple.com/us/app/banana-cards/id6749454845 ",
    android:
      "https://play.google.com/store/apps/details?id=com.bananacards.app",
  },
  {
    id: "link-king",
    name: "Link-King",
    image: `${process.env.PUBLIC_URL}/images/link-king-app-icon.png`,
    description:
      "Link-King is a language learning app, designed to help advanced learners rapidly improve their vocabulary in a new language. By building lasting connections between words in your native language and their equivalents in your target language, this approach offers a smarter and more efficient way to expand your vocabulary. Check out our website using the link above!",
    technologies:
      "Link-King is a sophisticated language learning app built with React Native and Expo, enabling smooth performance on both iOS and Android devices from a single codebase. The app uses advanced smart structured spaced repetition techniques to help learners build strong, lasting connections between words.\n\n" +
      "A dedicated server powers user data syncing across devices, ensuring a seamless and consistent experience whether on phone or tablet. This backend infrastructure supports user authentication and progress tracking, enabling users to pick up right where they left off.\n\n" +
      "The app features modern tools like Redux Toolkit for efficient state management, Expo Authentication for secure logins via Google and Apple, gesture-based navigation, and customizable themes—all wrapped in a polished, user-friendly interface styled with styled-components.\n\n" +
      "In addition to the app, I developed a dedicated WordPress website that supports Link-King with information, updates, and outreach, showcasing my full-stack skills across mobile and web platforms.\n\n" +
      "All of the app’s code is publicly available on GitHub, demonstrating open, production-ready software development with scalable architecture, user authentication, multimedia support, and a seamless user experience.",

    site: "https://link-king.com",
  },
  {
    id: "griddier",
    name: "Griddier",
    image: `${process.env.PUBLIC_URL}/images/griddier-app-icon.png`,
    description:
      "Griddier is an app built for poker players aiming to master their preflop strategy with precision. It offers a systematic, highly efficient way to memorize poker grids, requiring only a small but consistent time investment. Designed to help serious players elevate their game, Griddier makes learning complex preflop ranges manageable and effective.\n\nCurrently, I’m looking for a partner to rebrand and market Griddier under their own brand. If you’re interested in this opportunity, please get in touch at jacob@link-king.com.",
    technologies:
      "Griddier was built using React Native and the Expo framework, meaning it's a truly cross-platform mobile app — one codebase that runs smoothly on both Android and iOS devices. At its core, it uses React, the same technology behind many of the world’s most popular apps like Facebook and Instagram.\n\nFor lightning-fast performance and a snappy user experience, Griddier uses Redux Toolkit to manage state and redux-persist to save user progress directly on the device — no internet connection required. That means users can drill poker hands anywhere, anytime.\n\nThe app leverages dayjs for handling time and date logic (like daily streaks), and papaparse for working with CSV files so players can import custom ranges. It also integrates native tools like expo-document-picker and expo-file-system for seamless file handling and react-native-toast-message for clean, non-intrusive user feedback.\n\nAll of this is packaged in a lightweight, stylish interface with smooth transitions thanks to expo-linear-gradient and @expo/vector-icons.\n\nGriddier is modern, efficient, and intentionally offline-first — focused on helping players get better with just a few minutes a day, anywhere in the world.",
    ios: " https://testflight.apple.com/join/f7PkK8Et",
    extraLink: { name: "Range Builder", url: "/griddier-range-builder" },
  },
];
