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
  const titleIsDefault = title === "Monorepo Maestros";

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
          backgroundColor: "black",
        }}
      >
        <div
          style={{
            marginLeft: 190,
            marginRight: 190,
            marginBottom: 120,
            display: "flex",
            fontSize: 140,
            fontFamily: "Inter",
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
          <div tw="text-8xl text-slate-300" style={{ fontFamily: "Inter" }}>
            {titleIsDefault ? "" : "Monorepo Maestros"}
          </div>
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
