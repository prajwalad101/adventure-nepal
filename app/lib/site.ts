export type SitePhone = {
  tel: string;
  display: string;
};

export type Site = {
  name: string;
  phone: SitePhone;
  email: string;
  mapsQuery: string;
  telHref: string;
  mailtoHref: string;
  mapsEmbedUrl: string;
  mapsLinkUrl: string;
  whatsappUrl: (prefill: string) => string;
};

const phone: SitePhone = {
  tel: "+9779841002208",
  display: "+977 984-100-2208",
};

const email = "hello@adventurenepal.com";
const mapsQuery = "Adventure Nepal, Lakeside, Pokhara";

export const site: Site = {
  name: "Adventure Nepal",
  phone,
  email,
  mapsQuery,
  telHref: `tel:${phone.tel}`,
  mailtoHref: `mailto:${email}`,
  // ponytail: swap for the exact embed URL from the Google Business listing when provided
  mapsEmbedUrl: `https://www.google.com/maps?q=${encodeURIComponent(mapsQuery)}&output=embed`,
  mapsLinkUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`,
  whatsappUrl(prefill) {
    const id = phone.tel.replace(/^\+/, "");
    return `https://wa.me/${id}?text=${encodeURIComponent(prefill)}`;
  },
};
