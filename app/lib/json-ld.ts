import { getPathname } from "../../i18n/navigation";
import type { TourPackage } from "./packages";
import { absoluteUrl, parsePriceNpr } from "./seo";
import { site } from "./site";

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["TravelAgency", "LocalBusiness"],
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    telephone: site.phone.tel,
    email: site.email,
    image: absoluteUrl("/web-app-manifest-512x512.png"),
    address: {
      "@type": "PostalAddress",
      streetAddress: "Street No. 15, Lakeside",
      addressLocality: "Pokhara",
      addressCountry: "NP",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    hasMap: site.mapsLinkUrl,
  };
}

export function packageJsonLd(pkg: TourPackage, locale: string) {
  const pageUrl = absoluteUrl(
    getPathname({
      locale,
      href: `/packages/${pkg.slug}`,
      forcePrefix: true,
    }),
  );
  const homeUrl = absoluteUrl(
    getPathname({ locale, href: "/", forcePrefix: true }),
  );
  const price = parsePriceNpr(pkg.price);
  const images = pkg.images.map((img) => absoluteUrl(img.src));

  const trip = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: pkg.name,
    description: `${pkg.name} from ${pkg.origin}: ${pkg.duration}, ${pkg.transport}.`,
    url: pageUrl,
    image: images,
    touristType: "Adventure travelers",
    itinerary: pkg.itinerary.map((leg) => ({
      "@type": "TouristAttraction",
      name: leg.title,
      description: leg.stops.join("; "),
    })),
    provider: {
      "@type": "TravelAgency",
      name: site.name,
      url: site.url,
      telephone: site.phone.tel,
    },
    ...(price !== undefined
      ? {
          offers: {
            "@type": "Offer",
            priceCurrency: "NPR",
            price,
            url: pageUrl,
            availability: "https://schema.org/InStock",
          },
        }
      : {}),
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: site.name,
        item: homeUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: pkg.name,
        item: pageUrl,
      },
    ],
  };

  return [trip, breadcrumbs];
}
