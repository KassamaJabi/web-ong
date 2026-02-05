import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full absolute top-0 left-0 z-10">
      <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
        <span className="text-sm font-medium tracking-wide opacity-90">
          Kassama Jabi
        </span>

        <nav className="flex gap-6 text-sm">
          <Link
            href="/?preview=true"
            className="opacity-80 hover:opacity-100 transition"
          >
            Home
          </Link>

          <Link
            href="/projects?preview=true"
            className="opacity-80 hover:opacity-100 transition"
          >
            Projects
          </Link>
        </nav>
      </div>
    </header>
  );
}