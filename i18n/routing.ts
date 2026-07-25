import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ne"],
  defaultLocale: "en",
  localePrefix: {
    mode: "always",
    // Nepali lives at /np while keeping the proper "ne" language code
    prefixes: { ne: "/np" },
  },
});
