"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("Error:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
        Oops!
      </h1>
      <h2 className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
        Something went wrong
      </h2>
      <p className="text-gray-600 dark:text-gray-400 text-center max-w-md mb-8">
        An unexpected error has occurred. Our team has been notified.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-[#b08047] hover:bg-[#9a703d] text-white rounded-lg transition-colors duration-200"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="px-6 py-3 border border-[#b08047] text-[#b08047] hover:bg-[#b08047] hover:text-white rounded-lg transition-colors duration-200"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
