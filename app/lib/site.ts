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
  tel: '+9779841002208',
  display: '+977 984-100-2208',
};

const email = 'ashok@adventurenepal.tours';
const mapsQuery = 'Adventure Vacation Pvt.Ltd, Lakeside, Pokhara';

// Official Google Business pin (Adventure Vacation Pvt.Ltd, Pokhara)
// From https://maps.app.goo.gl/83HHUSv9TPdxXbL3A
const mapsLat = 28.2103948;
const mapsLng = 83.9585605;
const mapsCid = '10347854958206995159';

export const site: Site = {
  name: 'Adventure Nepal',
  phone,
  email,
  mapsQuery,
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
