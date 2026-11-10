# Hayeen's Portfolio

A personal website for Hayeen (Hanyu Xue), a Perth-based UWA Master of Information Technology graduate seeking Junior Software Developer roles.

[Website](https://hayeenxue.com) · [GitHub profile](https://github.com/Hayeensss)

## Purpose and contribution

The site presents my education, web projects and current Procurement Coordinator experience. It is built with Next.js, React and Tailwind CSS.

- Project content and source links come from [lib/data.js](lib/data.js).
- The current contact section offers direct email, copying the email address and a GitHub link. It does not submit a contact form.
- A previous contact-form action with Zod validation and a Resend integration remains in [app/actions/send.js](app/actions/send.js) as historical project work; it is not called by the current contact section.
- The downloadable CV is served from `public/resume.pdf` and should match the maintained software CV.

## Selected work

- [Smart Doorbell web application](https://github.com/Hayeensss/Smart_Doorbell)
- [Smart Doorbell notification worker](https://github.com/Hayeensss/SmartDoorbell_Notification)
- This portfolio website

## Run locally

```bash
npm ci
npm run dev
```

For a production build, run `npm run build` and then `npm start`.

The current public pages and direct-email contact section do not require email-service configuration. The historical contact-form action is not exposed by this UI. Never commit credentials.

## Interface

An editorial single-page layout gives Smart Doorbell a full-width system illustration and contribution breakdown, followed by a compact portfolio entry and an asymmetric background/education area. It retains the original Acorn and Inter fonts, warm-brown light theme and navy/sky-blue dark theme. The header contains Work, About, Contact, CV and a theme switch; the mobile menu supports Escape and closes after navigation. Theme preference follows the system until explicitly changed. Contact links open the visitor’s email app; copying the address shows an inline result. Reduced-motion preferences are respected, and content is rendered without scroll-reveal dependencies.

## Content maintenance

Keep the website, GitHub introduction and CV consistent. List actual projects with source links, preserve accurate education dates, and do not substitute stock project descriptions or placeholder demos. Personal projects are separate from commercial employment. A listed integration describes source implementation, not an assurance that its external service is currently operating.
