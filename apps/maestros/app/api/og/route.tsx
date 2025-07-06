import { ImageResponse } from "next/og";
import { tagline } from "#/app/constants";

export const runtime = "edge";

export async function GET(req: Request) {
	const fontBold = await fetch(
		new URL("../../../public/fonts/Inter-Bold.ttf", import.meta.url),
	).then((res) => res.arrayBuffer());

	const fontMedium = await fetch(
		new URL("../../../public/fonts/Inter-Medium.ttf", import.meta.url),
	).then((res) => res.arrayBuffer());

	const searchParams = new URL(req.url).searchParams;
	const title = searchParams.get("title") ?? "Anthony Shew";
	const subtitle = searchParams.get("subtitle");

	const titleIsMyName = title === "Anthony Shew";

	return new ImageResponse(
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
					marginBottom: 70,
					display: "flex",
					fontSize: 140,
					color: "white",
					fontFamily: "Inter Bold",
					whiteSpace: "pre-wrap",
				}}
			>
				{title}
			</div>
			{subtitle ? (
				<div
					style={{
						marginLeft: 190,
						marginRight: 190,
						marginBottom: 120,
						display: "flex",
						fontSize: 50,
						fontFamily: "Inter",
						whiteSpace: "pre-wrap",
					}}
					tw="text-slate-300"
				>
					{subtitle}
				</div>
			) : null}
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<img
					alt=""
					height={250}
					src="https://shew.dev/images/me.jpg"
					tw="rounded-full mb-10"
					width={250}
				/>
				<div style={{ fontFamily: "Inter" }} tw="text-7xl text-white">
					{titleIsMyName ? "" : "Anthony Shew"}
				</div>
				<div tw="text-6xl text-slate-400 mt-8">{tagline}</div>
			</div>
		</div>,
		{
			width: 1920,
			height: 1080,
			fonts: [
				{
					name: "Inter",
					data: fontMedium,
					style: "normal",
					weight: 400,
				},
				{
					name: "Inter Bold",
					data: fontBold,
					style: "normal",
					weight: 700,
				},
			],
		},
	);
}
