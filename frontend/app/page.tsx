import Image from 'next/image';
import Header from './components/Header';
import { getProjects } from '../lib/getProjects';

type PageProps = {
  searchParams?: {
    preview?: string;
  };
};

export default async function Home({ searchParams }: PageProps) {
  const isPreview = searchParams?.preview === 'true';
  const projects = isPreview ? await getProjects() : [];

  return (
    <main className="relative min-h-screen">

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center justify-center"
        style={{ backgroundColor: 'var(--color-arena)' }}
      >
        {/* Fondo imagen + overlay */}
        <div className="absolute inset-0">
          {/* <Image
            src="/hero.png"
            alt="Kassama Jabi"
            fill
            className="object-cover"
            priority
          /> */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(90, 42, 20, 0.55)' }}
          />
        </div>

        {/* Contenido hero */}
        <div className="relative z-10 px-6 text-center text-white max-w-xl space-y-8">

          {/* Logo */}
          <div className="mx-auto w-36 h-36 relative">
            <Image
              src="/logo.png"
              alt="Logo Kassama Jabi"
              fill
              className="object-contain rounded-full bg-[var(--color-blanco)] p-3 shadow-lg"
            />
          </div>

          <p className="uppercase tracking-widest text-sm opacity-90">
            Organización sin ánimo de lucro
          </p>

          <h1 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight">
            Kassama Jabi
          </h1>

          <p className="text-lg leading-relaxed opacity-95">
            Kassama es nuestro origen, el amor el camino hacia la esperanza.
          </p>

          {!isPreview && (
            <p className="text-base opacity-80">
              Próximamente compartiremos más información.
            </p>
          )}
        </div>
      </section>

      {/* CONTENIDO SOLO EN PREVIEW */}
      {isPreview && (
        <>
          <Header />

          <section className="bg-[var(--color-blanco)]">
            <div className="mx-auto max-w-6xl px-6 py-24 space-y-24">

              {/* Misión */}
              <div className="max-w-3xl space-y-4">
                <h2 className="font-serif text-2xl font-semibold text-[var(--color-baobab)]">
                  Nuestra misión
                </h2>

                <p className="text-lg leading-relaxed text-slate-700">
                  Kassama Jabi es una organización comprometida con el
                  fortalecimiento de comunidades, el acceso a derechos
                  básicos y el acompañamiento humano en contextos vulnerables.
                </p>

                <p className="text-lg leading-relaxed text-slate-700">
                  Trabajamos desde la cercanía, el respeto cultural y
                  la continuidad en el tiempo.
                </p>
              </div>

              {/* Proyectos */}
              <div className="space-y-12">
                <h2 className="font-serif text-2xl font-semibold text-[var(--color-baobab)]">
                  Proyectos
                </h2>

                <div className="grid gap-10">
                  {projects.map((project: any) => (
                    <article
                      key={project.id}
                      className="border-l-4 pl-6 space-y-2"
                      style={{ borderColor: 'var(--color-ocre)' }}
                    >
                      <h3 className="text-xl font-medium text-slate-800">
                        {project.title}
                      </h3>

                      {project.excerpt && (
                        <p className="text-slate-600 leading-relaxed">
                          {project.excerpt}
                        </p>
                      )}
                    </article>
                  ))}
                </div>
              </div>

            </div>
          </section>
        </>
      )}
    </main>
  );
}
