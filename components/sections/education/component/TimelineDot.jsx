import InstitutionLogo from "./InstitutionLogo";

export default function TimelineDot({ logoUrl, altText }) {
  return (
    <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-white dark:bg-gray-800 border-4 border-gray-200 dark:border-indigo-700/70 z-10 flex items-center justify-center shadow-md dark:shadow-indigo-900/30">
      <InstitutionLogo logoUrl={logoUrl} altText={altText} />
    </div>
  );
}
