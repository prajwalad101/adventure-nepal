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

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=75`;

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
      { src: u("1605640840605-14ac1855827b"), alt: "Dry Himalayan peaks above the Mustang valley" },
      { src: u("1571401835393-8c5f35328320"), alt: "Prayer flags below Machhapuchhre's fishtail summit" },
      { src: u("1545652985-5edd365b12eb"), alt: "Traveller facing snow peaks above the clouds" },
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
      { src: u("1533130061792-64b345e4a833"), alt: "Ama Dablam catching the last light of day" },
      { src: u("1506905925346-21bda4d32df4"), alt: "Himalayan summits rising above a sea of clouds" },
      { src: u("1464822759023-fed622ff2c3b"), alt: "Alpine valley with snow peaks on the horizon" },
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
      { src: u("1544735716-392fe2489ffa"), alt: "Snow-covered Annapurna range under a clear sky" },
      { src: u("1454496522488-7a8e488e8606"), alt: "Trekking trail with misty Himalayan ridges" },
      { src: u("1470071459604-3b5ec3a7fe05"), alt: "Foggy foothills on the mountain approach" },
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
      { src: u("1526772662000-3f88f10405ff"), alt: "Green hills reflected in a calm lake" },
      { src: u("1501785888041-af3ef285b470"), alt: "Lake shore with mountains at golden hour" },
      { src: u("1476514525535-07fb3b4ae5f1"), alt: "Wooden boats moored on a quiet lake" },
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
      { src: u("1441974231531-c6227db76b6e"), alt: "Sunlight through tall forest trees" },
      { src: u("1519904981063-b0cf448d479e"), alt: "Morning mist over green foothills" },
      { src: u("1470071459604-3b5ec3a7fe05"), alt: "Foggy hills at dawn" },
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
      { src: u("1506905925346-21bda4d32df4"), alt: "Himalayan summits above a sea of clouds" },
      { src: u("1441974231531-c6227db76b6e"), alt: "Sunlight through tall forest trees" },
      { src: u("1464822759023-fed622ff2c3b"), alt: "Alpine valley with snow peaks on the horizon" },
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
