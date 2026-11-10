"use client";

import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { contactData } from "@/lib/data";

export default function Contact() {
  const [status, setStatus] = useState("");
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);
  const copyEmail = async () => {
    clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(contactData.email);
      setStatus("Email copied");
    } catch {
      setStatus("Could not copy. Select the email address or use Email me.");
    }
    timer.current = setTimeout(() => setStatus(""), 5000);
  };
  return (
    <section
      id="contact"
      className="site-shell contact-section"
      aria-labelledby="contact-heading"
    >
      <div>
        <p className="eyebrow">Get in touch / 05</p>
        <h2 id="contact-heading">
          Let’s talk
          <br />
          about the next step.
        </h2>
        <p className="contact-intro">
          Seeking a Junior Software Developer role in Perth.
          <br />
          I’d be happy to discuss an opportunity or my project work.
        </p>
      </div>
      <div className="contact-details">
        <span className="small-label">Say hello</span>
        <a className="email-address" href={`mailto:${contactData.email}`}>
          {contactData.email}
        </a>
        <div className="button-row">
          <a
            className="site-button primary"
            href={`mailto:${contactData.email}`}
          >
            <Mail size={16} aria-hidden="true" />
            Email me
          </a>
          <button
            className="site-button secondary"
            type="button"
            onClick={copyEmail}
          >
            {status === "Email copied" ? (
              <Check size={16} aria-hidden="true" />
            ) : (
              <Copy size={16} aria-hidden="true" />
            )}
            Copy email
          </button>
        </div>
        <p className="copy-status" role="status">
          {status}
        </p>
        <a
          className="text-link"
          href="https://github.com/Hayeensss"
          target="_blank"
          rel="noopener noreferrer"
        >
          Find me on GitHub
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
