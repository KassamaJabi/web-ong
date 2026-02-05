import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  const isPreview = searchParams.get('preview') === 'true';

  // Siempre permitimos:
  // - la home (placeholder)
  // - assets internos
  if (
    pathname === '/' ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon') ||
    pathname.match(/\.(png|jpg|jpeg|svg|webp)$/)
  ) {
    return NextResponse.next();
  }

  // Si NO es preview → redirigimos a la home
  if (!isPreview) {
    const url = request.nextUrl.clone();
    url.pathname = '/';
    url.search = '';
    return NextResponse.redirect(url);
  }

  // Preview → dejamos pasar
  return NextResponse.next();
}
