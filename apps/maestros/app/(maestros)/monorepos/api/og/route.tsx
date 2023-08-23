import { ImageResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(req: Request) {
  const fontMedium = await fetch(
    new URL('../../../../../public/fonts/Inter-Medium.ttf', import.meta.url),
  ).then((res) => res.arrayBuffer());

  const fontBold = await fetch(
    new URL('../../../../../public/fonts/Inter-Bold.ttf', import.meta.url),
  ).then((res) => res.arrayBuffer());

  const searchParams = new URL(req.url).searchParams;
  const title = searchParams.get('title') ?? 'Monorepo Maestros';
  const subtitle = searchParams.get('subtitle');

  const marginX = 230;
  const marginY = marginX + 40;

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          backgroundImage: 'url("https://shew.dev/images/maestros/og-bg.png")',
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
        }}
      >
        <div
          style={{
            marginLeft: marginX,
            marginRight: marginX,
            marginTop: marginY,
            display: 'flex',
            fontSize: 100,
            fontFamily: 'Inter',
            color: 'white',
            whiteSpace: 'pre-wrap',
          }}
          tw="text-8xl"
        >
          {title}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: marginX,
          }}
        >
          {subtitle ? (
            <div
              style={{ fontFamily: 'Inter' }}
              tw="text-6xl text-slate-300 mt-8"
            >
              {subtitle}
            </div>
          ) : null}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            marginLeft: marginX,
          }}
        >
          {title !== 'Monorepo Maestros' ? (
            <div tw="text-yellow-400 text-6xl mt-60">Monorepo Maestros</div>
          ) : null}
          <div tw="text-yellow-400 text-5xl mt-8">
            The ultimate monorepo reference.
          </div>
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: 'Inter Bold',
          data: fontMedium,
          style: 'normal',
          weight: 400,
        },
        {
          name: 'Inter',
          data: fontBold,
          style: 'normal',
          weight: 700,
        },
      ],
    },
  );
}
