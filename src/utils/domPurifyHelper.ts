import dynamic from "next/dynamic";

const SanitizedHtml = dynamic(
  () => import("@/components/SanitizedHtml/SanitizedHtml"),
  {
    ssr: false,
  }
);

export default SanitizedHtml;
