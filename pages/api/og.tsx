import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

const font = fetch(
  new URL("../../public/fonts/Rubik/static/Rubik-Medium.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const postTitle = searchParams.get("title");
  const fontData = await font;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          backgroundImage: 'url("https://shew.dev/images/og-bg.png")',
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            marginLeft: 190,
            marginRight: 190,
            display: "flex",
            fontSize: 150,
            fontFamily: "Rubik",
            color: "white",
            whiteSpace: "pre-wrap",
          }}
        >
          {postTitle ?? "Welcome to my site!"}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
          <img
            src="https://shew.dev/images/me.png"
            width={150}
            height={150}
            tw="rounded-full mb-10"
          />
          <div tw="text-8xl text-slate-300">Anthony Shew</div>
          <div tw="text-6xl text-slate-300 mt-8">
            Engineer. Educator. Full stack comedian.
          </div>
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: "Rubik",
          data: fontData,
          style: "normal",
        },
      ],
    }
  );
}
