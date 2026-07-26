export type SitePhone = {
  tel: string;
  display: string;
};

export type Site = {
  name: string;
  legalName: string;
  url: string;
  phone: SitePhone;
  email: string;
  address: string;
  mapsQuery: string;
  geo: { lat: number; lng: number };
  telHref: string;
  mailtoHref: string;
  mapsEmbedUrl: string;
  mapsLinkUrl: string;
  whatsappUrl: (prefill: string) => string;
};

const phone: SitePhone = {
  tel: '+9779841002208',
  display: '+977 984-100-2208',
};

const email = 'ashok@adventurenepal.tours';
const mapsQuery = 'Adventure Vacation Pvt.Ltd, Lakeside, Pokhara';
const address = 'Street No. 15, Lakeside, Pokhara, Nepal';

// Official Google Business pin (Adventure Vacation Pvt.Ltd, Pokhara)
// From https://maps.app.goo.gl/83HHUSv9TPdxXbL3A
const mapsLat = 28.2103948;
const mapsLng = 83.9585605;
const mapsCid = '10347854958206995159';

const DEFAULT_SITE_URL = 'https://adventurenepal.tours';

function resolveSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL;
  return raw.replace(/\/$/, '');
}

export const site: Site = {
  name: 'Adventure Nepal',
  legalName: 'Adventure Vacation Pvt.Ltd',
  url: resolveSiteUrl(),
  phone,
  email,
  address,
  mapsQuery,
  geo: { lat: mapsLat, lng: mapsLng },
  telHref: `tel:${phone.tel}`,
  mailtoHref: `mailto:${email}`,
  // CID + coords pin the Google Business listing (text search alone can miss)
  mapsEmbedUrl: `https://www.google.com/maps?cid=${mapsCid}&ll=${mapsLat},${mapsLng}&z=17&output=embed`,
  mapsLinkUrl: 'https://maps.app.goo.gl/83HHUSv9TPdxXbL3A',
  whatsappUrl(prefill) {
    const id = phone.tel.replace(/^\+/, '');
    return `https://wa.me/${id}?text=${encodeURIComponent(prefill)}`;
  },
};
