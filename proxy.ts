import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Skip internals and files with extensions (images, favicon, etc.)
  matcher: "/((?!_next|.*\\..*).*)",
};
