// import { type NextRequest } from 'next/server';

// import { updateSession } from '@it-diots/supabase/middleware';

// export async function middleware(request: NextRequest) {
//   return await updateSession(request);
// }

// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except for:
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      * - signup (explicitly excluded)
//      * Feel free to modify this pattern to include more paths.
//      */
//     '/((?!_next/static|_next/image|favicon.ico|error|signup|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
//   ],
// };

/** TODO: Middleware 설정시 주석 해제, 아래 함수 삭제 */
export function middleware() {}
