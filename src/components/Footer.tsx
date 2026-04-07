const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-8">
      <div className="container max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted-foreground">
          Designed & Built by Saksham Gurbhele
        </p>
        <p className="font-mono text-xs text-muted-foreground/50">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
