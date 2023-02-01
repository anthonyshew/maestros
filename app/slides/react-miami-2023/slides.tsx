import Image from "next/image";

export type Slide = {
  title: string;
  cliFlair: string;
  items:
    | [React.ReactNode]
    | [React.ReactNode, React.ReactNode]
    | [React.ReactNode, React.ReactNode, React.ReactNode, React.ReactNode];
};

const slideContent: Slide[] = [
  {
    title: "I am a title",
    cliFlair: "~/test",
    items: [
      <p key="thing">I would love to get rendered.</p>,
      <Image
        key="test"
        src="/images/placeholder.png"
        alt="test"
        width={100}
        height={100}
      />,
    ],
  },
  {
    title: "I am the second slide",
    cliFlair: "~/test-2",
    items: [
      <p key="thing">I am your second slide and I have information.</p>,
      <Image
        key="test"
        src="/images/placeholder.png"
        alt="test"
        width={100}
        height={100}
      />,
      <ol key="item-3">
        <li>these</li>
        <li>are</li>
        <li>bullets</li>
      </ol>,
      <Image
        key="test-2"
        src="/images/placeholder.png"
        alt="test"
        width={100}
        height={100}
      />,
    ],
  },
  {
    title: "I am the second slide",
    cliFlair: "~/test-2",
    items: [<p key="tester">I leave you...with this.</p>],
  },
];

export default slideContent;
