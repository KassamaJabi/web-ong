'use client';

import { useSearchParams } from 'next/navigation';

export default function Home() {
  const searchParams = useSearchParams();
  const isPreview = searchParams.get('preview') === 'true';

  if (isPreview) {
    return (
      <main style={{ padding: '4rem', fontFamily: 'sans-serif' }}>
        <h1>Kassama Jabi (preview)</h1>
        <p>Esta es la versión privada de la web.</p>
        <p>Aquí irá el contenido real conectado al CMS.</p>
      </main>
    );
  }

  return (
     <main
      className="min-h-screen flex items-center justify-center px-6"
      style={{
        background: `
          linear-gradient(
            180deg,
            var(--color-tierra) 0%,
            var(--color-ocre) 60%,
            #9A3F1A 100%
          )
        `,
        color: 'var(--color-blanco)',
  }}
    >
      <div className="max-w-xl text-center space-y-6">
        <p className="uppercase tracking-widest text-sm opacity-80">
          ONG inscrita
        </p>

        <h1 className="text-4xl md:text-5xl font-semibold">
          Kassama Jabi
        </h1>

        <p className="text-lg leading-relaxed opacity-90">
          Estamos construyendo el próximo paso de Kassama Jabi.
          Un espacio para acompañar, fortalecer comunidades y
          trabajar desde la dignidad.
        </p>

        <p className="text-sm opacity-75">
          Muy pronto compartiremos más información.
        </p>
      </div>
    </main>
  );
}

/*export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}*/
