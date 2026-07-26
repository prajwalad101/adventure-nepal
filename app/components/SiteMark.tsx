import Image from "next/image";
import { site } from "../lib/site";
import logo from "../applogo.png";

/** Brand mark — logo icon with accented site name. */
export default function SiteMark() {
  const [lead, ...rest] = site.name.split(/\s+/);
  return (
    <span className="inline-flex items-center gap-2.5">
      <Image
        src={logo}
        alt=""
        width={36}
        height={36}
        className="size-9 rounded-lg"
        priority
      />
      <span>
        {lead}
        <span className="text-marigold-deep"> {rest.join(" ")}</span>
      </span>
    </span>
  );
}
