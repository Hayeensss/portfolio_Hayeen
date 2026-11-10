# Hayeen's Portfolio

A personal website for Hayeen (Hanyu Xue), a Perth-based UWA Master of Information Technology graduate seeking Junior Software Developer roles.

[Website](https://portfolio-hayeen.vercel.app) · [GitHub profile](https://github.com/Hayeensss)

## Purpose and contribution

The site presents my education, web projects and current Procurement Coordinator experience. It is built with Next.js, React and Tailwind CSS.

- Reusable project cards render entries from [lib/data.js](lib/data.js).
- The contact form uses a server action with Zod validation and a Resend integration in [app/actions/send.js](app/actions/send.js).
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

The contact form requires your own `RESEND_API_KEY`, `RESEND_FROM_EMAIL` and `RESEND_TO_EMAIL`. Use an authorised sender and a test recipient for development. Never commit credentials. Contact-form delivery is separate from the public portfolio content and is not implied by a successful site build.

## Content maintenance

Keep the website, GitHub introduction and CV consistent. List actual projects with source links, preserve accurate education dates, and do not substitute stock project descriptions or placeholder demos. Personal projects are separate from commercial employment. A listed integration describes source implementation, not an assurance that its external service is currently operating.
