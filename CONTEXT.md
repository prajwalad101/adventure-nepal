# Adventure Nepal

Marketing site for booking small-group trips in Nepal. Public brand identity and the package catalog are the core domain.

## Language

**Site**:
The public brand identity visitors see and contact — name, phone, email, and maps query. WhatsApp and mailto/tel links are derived from these.
_Avoid_: Config, settings, constants, brand config

**Phone**:
The single company contact number, with a dialable form (`tel`) and a human-readable form (`display`). Shared globally — never per-package. WhatsApp uses the same number (derived from `tel`).
_Avoid_: Contact number, mobile, WhatsApp number (as a separate identity)

**Package**:
A bookable trip offering (slug, name, itinerary, price, etc.). Contact details are not part of a package — they belong to the Site.
_Avoid_: Tour, trip product (when referring to the catalog entity)

**Maps query**:
The single English search string used to open or embed the office location in Google Maps. Distinct from the localized street address shown in UI copy.
_Avoid_: Address (when you mean the maps search string)

**Public email**:
The single company email used both as the mailto visitors see and as the inquiry delivery inbox. Owned by the Site — not an env setting.
_Avoid_: Contact email, CONTACT_TO_EMAIL
