/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "http://localhost:3000", // Replace with your actual site URL
  generateRobotsTxt: true, // (Optional) Generate a robots.txt file
  // ...other options
};
