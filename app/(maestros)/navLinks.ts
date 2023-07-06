import { cva } from "class-variance-authority"

interface Link { href: string, text: string }


export const links: {
  mainLinks: Link[]
  // sidebarLinks: Array<Link & { items?: { hashlink: string, href: string }[] }>
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
}

export const linkStyles = cva("", {
  variants: {
    position: {
      isNested: 'ml-4'
    },
    status: {
      unpublished: "pointer-events-none text-foreground/70"
    }
  }
})