export default function HeroImage() {
  return (
    <div className="rounded-3xl border border-[#b08047]/40 dark:border-[#38BDF8]/30 bg-white dark:bg-gray-900 p-8 md:p-10">
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Hayeen (Hanyu Xue)</p>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">Web projects.<br />Business experience.</h2>
      <dl className="space-y-5 text-gray-700 dark:text-gray-300">
        <div><dt className="font-semibold">Education</dt><dd>Master of Information Technology, UWA</dd></div>
        <div><dt className="font-semibold">Projects</dt><dd>Smart Doorbell System and Portfolio Website</dd></div>
        <div><dt className="font-semibold">Current role</dt><dd>Procurement Coordinator, Eco Sakura Energy</dd></div>
      </dl>
    </div>
  );
}
