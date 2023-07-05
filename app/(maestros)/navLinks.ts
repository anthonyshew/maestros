interface Link { href: string, text: string }

export const links: {
  mainLinks: Link[]
  sidebarLinks: Link[]
} = {
  mainLinks: [
    {
      href: "/monorepos/examples",
      text: "Examples"
    },
    {
      href: "/monorepos/glossary",
      text: "Glossary"
    },
    {
      href: "/monorepos/motivation",
      text: "Motivation"
    },
    {
      href: "/monorepos/credits",
      text: "Credits"
    },
  ],
  sidebarLinks: [
    {
      href: "/monorepos",
      text: "Home",
    },
    {
      href: "/monorepos/examples",
      text: "Examples",
    },
    {
      href: "/monorepos/glossary",
      text: "Glossary",
    },
  ]
}