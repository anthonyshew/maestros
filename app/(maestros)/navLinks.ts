interface Link { href: string, text: string }

export const links: {
  mainLinks: Link[]
  sidebarLinks: Array<Link & { items?: { hashlink: string, href: string }[] }>
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
      href: "/monorepos/understanding-monorepos",
      text: "Understanding monorepos",
    },
    {
      href: "/monorepos/glossary",
      text: "Glossary",
    },
  ]
}