export default function Footer() {
  return (
    <footer className="site-shell site-footer">
      <p>
        Hayeen (Hanyu Xue)<span>Perth, Western Australia</span>
      </p>
      <div>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          CV
        </a>
        <a
          href="https://github.com/Hayeensss"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a href="#hero">Back to top ↑</a>
      </div>
      <small>© {new Date().getFullYear()} Hayeen</small>
    </footer>
  );
}
