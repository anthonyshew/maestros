export type DeckTheme = {
  main: string;
  body: string;
  cliPrefix?: string;
  cli?: string;
};

export const themesStyles = {
  "react-miami-2023": {
    body: "",
    main: "flex flex-col min-h-screen min-w-full justify-center items-center",
    cliPrefix: "text-black",
    cli: "ml-2 text-cyan-400",
  },
  // I did an `as` down here so that I could keep Tailwind Intellisense above
} as { [key: string]: DeckTheme };
