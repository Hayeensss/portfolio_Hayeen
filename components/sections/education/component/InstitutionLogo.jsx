import Image from "next/image";

export default function InstitutionLogo({ logoUrl, altText }) {
  if (!logoUrl || typeof logoUrl !== "string") {
    return null;
  }

  return (
    <div className="relative w-10 h-10 rounded-full overflow-hidden">
      <Image
        src={logoUrl || null}
        alt={altText}
        fill
        className="object-contain p-1"
      />
    </div>
  );
}
