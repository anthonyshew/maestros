import { tagline } from "#/app/constants";
import { ImageResponse } from "next/server";

export const runtime = "edge";

export async function GET(req: Request) {
  const fontBold = await fetch(
    new URL("../../../public/fonts/Inter-Bold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const fontMedium = await fetch(
    new URL("../../../public/fonts/Inter-Medium.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const searchParams = new URL(req.url).searchParams;
  const title = searchParams.get("title") ?? "Anthony Shew";
  const titleIsMyName = title === "Anthony Shew";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: 'url("https://shew.dev/images/og-bg.png")',
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            marginLeft: 190,
            marginRight: 190,
            marginBottom: 120,
            display: "flex",
            fontSize: 140,
            color: "white",
            whiteSpace: "pre-wrap",
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://shew.dev/images/me.jpg"
            width={250}
            height={250}
            tw="rounded-full mb-10"
          />
          <div
            tw="text-8xl text-slate-300"
            style={{ fontFamily: "Inter Bold" }}
          >
            {titleIsMyName ? "" : "Anthony Shew"}
          </div>
          <div tw="text-6xl text-slate-300 mt-8">{tagline}</div>
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: "Inter Bold",
          data: fontMedium,
          style: "normal",
          weight: 400,
        },
        {
          name: "Inter",
          data: fontBold,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
