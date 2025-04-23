import FooterCopyright from "./component/FooterCopyright";
import FooterLogo from "./component/FooterLogo";
import FooterSocialLinks from "./component/FooterSocialLinks";
import FooterTagline from "./component/FooterTagline";

export default function Footer() {
  return (
    <footer className="py-16 bg-white dark:bg-gradient-to-r dark:from-[#0F172A] dark:to-[#1E293B]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <FooterLogo />

          {/* Tagline */}
          <FooterTagline />

          {/* Social Icons */}
          <FooterSocialLinks />

          {/* Copyright */}
          <FooterCopyright />
        </div>
      </div>
    </footer>
  );
}
