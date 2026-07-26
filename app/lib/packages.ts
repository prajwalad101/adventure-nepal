import { packagesNe } from "./packages.ne";

export type PackageImage = { src: string; alt: string };

export type ItineraryDay = {
  day: string;
  title: string;
  stops: string[];
};

export type TourPackage = {
  slug: string;
  name: string;
  destination: string;
  origin: string;
  price: string;
  duration: string;
  transport: string;
  images: PackageImage[];
  highlights: string[];
  itinerary: ItineraryDay[];
  includes: string[];
  reserve?: string;
  departure?: string;
  notes?: string[];
};

const JEEP = "4WD Jeep · 6–7 seat sharing";

export const packages: TourPackage[] = [
  {
    slug: "muktinath-tour-package",
    name: "Muktinath Tour Package",
    destination: "Muktinath",
    origin: "Pokhara",
    price: "Rs 6,000",
    duration: "1 night · 2 days",
    transport: JEEP,
    images: [
      { src: "/images/packages/muktinath/temple-pagoda.webp", alt: "Muktinath temple pagoda beneath snow-dusted Himalayan peaks" },
      { src: "/images/packages/muktinath/mountain-pass.webp", alt: "High mountain pass with snow peaks above the clouds" },
      { src: "/images/packages/muktinath/valley-village.webp", alt: "Muktinath village nestled in an arid Himalayan valley" },
      { src: "/images/packages/muktinath/eroded-cliffs.webp", alt: "Eroded cliffs along the Kali Gandaki valley near Jomsom" },
    ],
    highlights: [
      "Sarangkot Ganesh Temple",
      "Kusma Bungee Jump",
      "Baglung Kalika Bhagwati",
      "Gandaki Golden Bridge",
      "Galeshwor Dham",
      "Mahavir Jharana",
      "Tatopani Shower",
      "Rupse Jharana",
      "Marpha Village",
      "Jomsom Bazaar",
      "Dhumba Lake",
      "Kagbeni Dham",
      "Selfie Point",
      "Muktinath Darshan",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Pokhara to Jomsom or Marpha",
        stops: [
          "Drive from Pokhara toward Mustang, sightseeing along the way",
          "Night stay at Jomsom or Marpha (as available)",
        ],
      },
      {
        day: "Day 2",
        title: "Muktinath Darshan and return",
        stops: [
          "Visit Muktinath Temple and the listed places",
          "Drive back to Pokhara",
        ],
      },
    ],
    includes: ["Transportation", "Hotel accommodation", "Breakfast", "Dinner"],
    departure: "Everyday departure from Pokhara · morning 07:30 AM",
    notes: [
      "The overnight stop is Jomsom or Marpha depending on the day's schedule.",
    ],
  },
  {
    slug: "upper-mustang-tour-package",
    name: "Upper Mustang Tour Package",
    destination: "Upper Mustang",
    origin: "Pokhara",
    price: "Rs 12,000",
    duration: "3 nights · 4 days",
    transport: JEEP,
    images: [
      { src: "/images/packages/upper-mustang/cliffs-valley.webp", alt: "Eroded cliffs and arid valley floor in Upper Mustang" },
      { src: "/images/packages/upper-mustang/chorten.webp", alt: "Colorful Buddhist chorten against Mustang hills" },
      { src: "/images/packages/upper-mustang/white-horse.webp", alt: "White horse grazing below ochre cliffs in Upper Mustang" },
      { src: "/images/packages/upper-mustang/eroded-plateau.webp", alt: "Layered plateau and distant peaks in Upper Mustang" },
    ],
    highlights: [
      "Sarangkot Ganesh Temple",
      "Kusma Bungee Jump",
      "Baglung Kalika Bhagwati",
      "Gandaki Golden Bridge",
      "Galeshwor Mahadev",
      "Mahavir Jharana",
      "Tatopani Shower",
      "Rupse Jharana",
      "Marpha Village",
      "Jomsom Bazaar",
      "Dhumba Lake",
      "Kagbeni",
      "Selfie Point",
      "Muktinath Darshan",
      "Chhusang Valley",
      "Kali Gandaki (searching for Shaligram)",
      "Lo Manthang Durbar",
      "Lo Manthang Village",
      "Chhoser Cave",
      "Lo Manthang Gumba",
      "China–Korala Border",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Pokhara to Jomsom or Marpha",
        stops: [
          "Drive from Pokhara up the Kali Gandaki valley",
          "Night stay at Jomsom or Marpha (as available)",
        ],
      },
      {
        day: "Day 2",
        title: "Marpha to Upper Mustang",
        stops: [
          "Drive from Marpha into Upper Mustang",
          "Night stay at Lo Manthang",
        ],
      },
      {
        day: "Day 3",
        title: "Lo Manthang to Korala Border and return",
        stops: [
          "Drive to the China–Korala border and back",
          "Night stay at Lete, Marpha or Jomsom (as available)",
        ],
      },
      {
        day: "Day 4",
        title: "Lete to Pokhara",
        stops: ["Drive back down the valley — drop in Pokhara"],
      },
    ],
    includes: [
      "Transportation by jeep",
      "Hotel accommodation",
      "Breakfast",
      "Dinner",
    ],
    notes: [
      "Overnight stops on Days 1 and 3 depend on the day's driving and room availability.",
    ],
  },
  {
    slug: "manang-tour-package",
    name: "Manang Tour Package",
    destination: "Manang",
    origin: "Pokhara",
    price: "Rs 12,000",
    duration: "2 nights · 3 days",
    transport: JEEP,
    images: [
      { src: "/images/packages/manang/peaks-prayer-flags.webp", alt: "Prayer flags against snow peaks in Manang" },
      { src: "/images/packages/manang/village-stupa.webp", alt: "Stone village and white stupa below a snow mountain in Manang" },
      { src: "/images/packages/manang/colorful-lodges.webp", alt: "Colorful lodge huts with Himalayan peaks behind Manang" },
    ],
    highlights: [
      "Octopus Waterfall",
      "Boong Waterfall",
      "Dharapani Village",
      "Chame",
      "Manang Wine Factory",
      "Green Lake",
      "Pisang Valley",
      "Blue Lake",
      "Gangapurna Lake",
      "Manang Valley",
      "Taal Village",
      "Marsyangdi Dam",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Pokhara to Chame",
        stops: [
          "Explore Octopus Waterfall, Boong Waterfall and Dharapani Village on the way",
          "Night stay at Chame, Manang",
        ],
      },
      {
        day: "Day 2",
        title: "Chame to Manang Valley",
        stops: [
          "Explore Manang Wine Factory, Green Lake, Pisang Valley, Blue Lake and Gangapurna Lake",
          "Explore Manang Valley",
          "Night stay at Taal Village",
        ],
      },
      {
        day: "Day 3",
        title: "Taal Village to Pokhara",
        stops: [
          "Explore Marsyangdi Dam on the way",
          "Drive back to Pokhara",
        ],
      },
    ],
    includes: ["Transportation", "Hotel accommodation", "Breakfast", "Dinner"],
    reserve: "Private Scorpio reserve, Pokhara to Manang — Rs 50,000",
  },
  {
    slug: "rara-lake-tour-package",
    name: "Rara Lake Tour Package",
    destination: "Rara Lake",
    origin: "Pokhara",
    price: "Rs 25,000",
    duration: "6 nights · 7 days",
    transport: JEEP,
    images: [
      { src: "/images/packages/rara-lake/pier-rafts.webp", alt: "Blue rafts at a pier on Rara Lake with snow peaks beyond" },
      { src: "/images/packages/rara-lake/shoreline-trees.webp", alt: "Bare shoreline trees reflected in calm Rara Lake water" },
      { src: "/images/packages/rara-lake/alpine-shore.webp", alt: "Wide alpine shore looking across deep blue Rara Lake" },
      { src: "/images/packages/rara-lake/lakeside-gazebo.webp", alt: "Lakeside gazebo and snow mountains under an overcast sky at Rara" },
    ],
    highlights: [
      "Rara Lake",
      "Murma Top",
      "Jumla Bazaar",
      "Nagma Bazaar",
      "Kalikot Bazaar",
      "Dailekh oil resources projects",
      "Dailekh Jwala Temple",
      "Jajarkot Durbar",
      "Musikot",
      "Rukumkot",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Pokhara to Kohalpur",
        stops: [
          "393 km drive, roughly 9–10 hours",
          "Night stay at Kohalpur",
        ],
      },
      {
        day: "Day 2",
        title: "Kohalpur to Kalikot",
        stops: ["250 km drive, roughly 9 hours", "Night stay at Kalikot"],
      },
      {
        day: "Day 3",
        title: "Kalikot to Rara (Salleri)",
        stops: ["150 km drive, roughly 8–9 hours", "Night stay at Rara Salleri"],
      },
      {
        day: "Day 4",
        title: "Rara Lake to Jumla",
        stops: [
          "Explore Rara Lake from early morning until 12 noon",
          "Drive to Jumla via Nagma Bazaar — 190 km, roughly 7 hours",
          "Night stay at Jumla Bazaar",
        ],
      },
      {
        day: "Day 5",
        title: "Jumla to Dailekh (Chamunda)",
        stops: [
          "Drive the Mid-Hill Highway — 170 km, roughly 8 hours",
          "Night stay at Dailekh (Chamunda)",
        ],
      },
      {
        day: "Day 6",
        title: "Dailekh to Rukum (Musikot)",
        stops: [
          "Drive via Jajarkot Bazaar — 270 km, roughly 11 hours",
          "Night stay at Musikot",
        ],
      },
      {
        day: "Day 7",
        title: "Rukum (Musikot) to Pokhara",
        stops: ["Drive via Rukumkot — 265 km, roughly 11 hours — drop in Pokhara"],
      },
    ],
    includes: ["Transportation", "Hotel accommodation", "Breakfast", "Dinner"],
    reserve: "Private Scorpio jeep reserve — Rs 1,05,000",
    notes: [
      "About 1,688 km of driving over the seven days — long road days, big rewards.",
    ],
  },
  {
    slug: "dhorpatan-tour-package",
    name: "Dhorpatan Tour Package",
    destination: "Dhorpatan",
    origin: "Pokhara",
    price: "Rs 6,000",
    duration: "1 night · 2 days",
    transport: JEEP,
    images: [
      { src: "/images/packages/dhorpatan/misty-meadow.webp", alt: "Misty alpine meadow with wildflowers around Dhorpatan" },
      { src: "/images/packages/dhorpatan/red-gumba.webp", alt: "Red Himalayan gumba and chorten against pine forest in Dhorpatan" },
    ],
    highlights: [
      "Kusma Bungee",
      "Baglung Kalika",
      "Golden Bridge",
      "Galkot View Tower",
      "Dhorpatan",
      "Uttar Ganga Temple",
      "Rudra Taal",
      "Galkot Gaighat Jharana",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Pokhara to Dhorpatan",
        stops: [
          "Explore Kusma Bungee, Baglung Kalika, Golden Bridge and Galkot View Tower on the way",
          "Night stay at Dhorpatan",
        ],
      },
      {
        day: "Day 2",
        title: "Explore Dhorpatan and return to Pokhara",
        stops: [
          "Explore Dhorpatan, Uttar Ganga Temple, Rudra Taal and Galkot Gaighat Jharana",
          "Drive back to Pokhara",
        ],
      },
    ],
    includes: [
      "Transportation",
      "Hotel accommodation",
      "Breakfast (1 time)",
      "Lunch (1 time)",
      "Dinner",
    ],
    reserve: "Private Scorpio reserve, Pokhara to Dhorpatan — Rs 30,000",
  },
  {
    slug: "bukipatan-dhorpatan-tour-package",
    name: "Bukipatan (Dhorpatan) Tour Package",
    destination: "Bukipatan, Dhorpatan",
    origin: "Pokhara",
    price: "Rs 8,500",
    duration: "2 nights · 3 days",
    transport: JEEP,
    images: [
      { src: "/images/packages/bukipatan/sheep-meadow.webp", alt: "Sheep grazing on green hills below misty peaks at Bukipatan" },
      { src: "/images/packages/bukipatan/grazing-flock.webp", alt: "Flock grazing on highland pasture at Bukipatan" },
      { src: "/images/packages/bukipatan/highland-camp.webp", alt: "Trekkers and tents on misty green slopes toward Bukipatan" },
      { src: "/images/packages/dhorpatan/misty-meadow.webp", alt: "Misty alpine meadow with wildflowers around Dhorpatan" },
      { src: "/images/packages/dhorpatan/red-gumba.webp", alt: "Red Himalayan gumba and chorten against pine forest in Dhorpatan" },
    ],
    highlights: [
      "Kusma Bungee",
      "Baglung Kalika",
      "Golden Bridge",
      "Galkot View Tower",
      "Dhorpatan",
      "Bukipatan",
      "Uttar Ganga Temple",
      "Rudra Taal",
      "Galkot Gaighat Jharana",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Pokhara to Dhorpatan",
        stops: [
          "Explore Kusma Bungee, Baglung Kalika, Golden Bridge and Galkot View Tower on the way",
          "Night stay at Dhorpatan",
        ],
      },
      {
        day: "Day 2",
        title: "Explore Dhorpatan, hike to Bukipatan",
        stops: [
          "Explore Dhorpatan",
          "Hike 3–4 hours to Bukipatan",
          "Night stay at Bukipatan",
        ],
      },
      {
        day: "Day 3",
        title: "Bukipatan back to Pokhara",
        stops: [
          "Explore Bukipatan",
          "Return via Uttar Ganga Temple, Rudra Taal and Galkot Gaighat Jharana",
          "Drive back to Pokhara",
        ],
      },
    ],
    includes: [
      "Transportation",
      "Hotel accommodation",
      "Breakfast (2 times)",
      "Lunch (2 times)",
      "Dinner",
    ],
    reserve: "Private Scorpio reserve, Pokhara to Dhorpatan — Rs 30,000",
    notes: ["Day 2 includes a 3–4 hour hike to Bukipatan — bring walking shoes."],
  },
];

export function getPackages(locale = "en"): TourPackage[] {
  if (locale !== "ne") return packages;
  return packages.map((p) => ({ ...p, ...packagesNe[p.slug] }));
}

export function getPackage(slug: string, locale = "en") {
  return getPackages(locale).find((p) => p.slug === slug);
}
