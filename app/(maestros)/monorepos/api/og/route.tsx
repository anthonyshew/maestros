import { ImageResponse } from "next/server";

export const runtime = "edge";

export async function GET(req: Request) {
  const fontMedium = await fetch(
    new URL("../../../../../public/fonts/Inter-Medium.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const fontBold = await fetch(
    new URL("../../../../../public/fonts/Inter-Bold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const searchParams = new URL(req.url).searchParams;
  const title = searchParams.get("title") ?? "Monorepo Maestros";
  const subtitle = searchParams.get("subtitle");

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
          backgroundImage: 'url("https://shew.dev/images/maestros/og-bg.png")',
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            marginLeft: 190,
            marginRight: 190,
            display: "flex",
            fontSize: 100,
            fontFamily: "Inter",
            color: "white",
            whiteSpace: "pre-wrap",
          }}
          tw="text-8xl"
        >
          {title ?? "Monorepo Maestros"}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {subtitle ? (
            <div
              tw="text-6xl text-slate-300 mt-8"
              style={{ fontFamily: "Inter" }}
            >
              {subtitle}
            </div>
          ) : null}
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
