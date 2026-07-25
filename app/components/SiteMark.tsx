import { site } from "../lib/site";

/** Brand mark with the trailing word accented — presentation of `site.name`. */
export default function SiteMark() {
  const [lead, ...rest] = site.name.split(/\s+/);
  return (
    <>
      {lead}
      <span className="text-marigold-deep"> {rest.join(" ")}</span>
    </>
  );
}
