import { useState, useRef } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { servicesData } from "@/data/servicesData";
import { blogPosts } from "@/data/blogData";

/* ─── About subsections ─── */
const aboutSections = [
  {
    label: "Who We Are",
    desc: "Our story, team, and the principles that guide every project.",
    href: "/about#who-we-are",
  },
  {
    label: "How We Work",
    desc: "Our process — from discovery call to post-launch support.",
    href: "/about#how-we-work",
  },
  {
    label: "Our Values",
    desc: "The beliefs that shape how we build and work with clients.",
    href: "/about#our-values",
  },
  {
    label: "Get in Touch",
    desc: "Ready to start? Let's talk about your project.",
    href: "#contact",
  },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (href: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    setMobileExpanded(null);
    if (href.includes("#") && !href.startsWith("#")) {
      // e.g. /about#who-we-are
      const [path, hash] = href.split("#");
      if (location.pathname === path) {
        document.querySelector(`#${hash}`)?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate(path);
        setTimeout(() => document.querySelector(`#${hash}`)?.scrollIntoView({ behavior: "smooth" }), 300);
      }
    } else if (href.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }), 100);
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    if (href.startsWith("#")) return location.pathname === "/" && location.hash === href;
    return location.pathname.startsWith(href) && href !== "/";
  };

  const openDropdown = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(label);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 140);
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services", hasDropdown: true },
    { label: "About", href: "/about", hasDropdown: true },
    { label: "Blogs", href: "/blog", hasDropdown: true },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <header
      className="sticky top-0 z-50 border-b border-border/50 backdrop-blur-xl"
      style={{ background: "rgba(2, 4, 10, 0.92)" }}
      onMouseLeave={() => scheduleClose()}
    >
      {/* ── Main nav row ── */}
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between gap-8">

        {/* Logo */}
        <a
          href="/"
          onClick={(e) => { e.preventDefault(); navigate("/"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="flex items-center gap-2.5 shrink-0 cursor-pointer"
        >
          <img src="/images/np-logo.png" alt="NP Logo" className="h-9 w-auto" />
          <img src="/images/neo-perion-text.png" alt="NEO PERION" className="h-7 w-auto hidden sm:block" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavigation(item.href)}
              onMouseEnter={() => item.hasDropdown ? openDropdown(item.label) : setActiveDropdown(null)}
              className={`relative flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors duration-200 group ${
                isActive(item.href) ? "text-white" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
              {item.hasDropdown && (
                <ChevronDown
                  size={13}
                  className={`opacity-50 transition-transform duration-200 ${
                    activeDropdown === item.label ? "rotate-180 opacity-80" : ""
                  }`}
                />
              )}
              <span
                className={`absolute bottom-0 left-4 right-4 h-px bg-primary origin-left transition-transform duration-300 ${
                  isActive(item.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </button>
          ))}
        </div>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          <Button
            onClick={() => handleNavigation("#contact")}
            className="hidden md:inline-flex bg-primary hover:bg-primary-glow text-primary-foreground font-semibold text-sm px-5 h-9 transition-all duration-200 shadow-soft"
          >
            Contact us
          </Button>
          <button
            className="md:hidden flex items-center justify-center w-9 h-9 text-foreground hover:bg-white/5 rounded transition-colors duration-200"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className={`transition-transform duration-300 ${mobileMenuOpen ? "rotate-90" : "rotate-0"}`}>
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </span>
          </button>
        </div>
      </nav>

      {/* ══════════════════════════════════════
          FULL-WIDTH MEGA MENU
      ══════════════════════════════════════ */}
      <div
        className={`hidden md:block absolute top-full left-0 right-0 border-b border-border/40 transition-all duration-200 origin-top ${
          activeDropdown && activeDropdown !== "Home" && activeDropdown !== "Contact Us"
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-1 pointer-events-none"
        }`}
        style={{
          background: "rgba(3, 5, 14, 0.98)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 16px 48px -12px rgba(0,0,0,0.7)",
        }}
        onMouseEnter={() => { if (closeTimer.current) clearTimeout(closeTimer.current); }}
        onMouseLeave={() => scheduleClose()}
      >
        <div className="container mx-auto px-6">

          {/* ── SERVICES MEGA MENU ── */}
          {activeDropdown === "Services" && (
            <div className="py-8 flex gap-12">
              {/* Left: section label */}
              <div className="w-52 shrink-0 pt-1">
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary/60 mb-2">What we build</p>
                <h3 className="text-base font-bold text-foreground/90 leading-snug mb-3">
                  End-to-end digital services
                </h3>
                <p className="text-[12px] text-muted-foreground/70 leading-relaxed mb-5">
                  From design to deployment — click any service to explore in detail.
                </p>
                <button
                  onClick={() => handleNavigation("/services")}
                  className="inline-flex items-center gap-1.5 text-[12px] font-medium text-primary/70 hover:text-primary transition-colors duration-150"
                >
                  All services <ArrowRight size={11} />
                </button>
              </div>

              {/* Divider */}
              <div className="w-px bg-border/40 shrink-0" />

              {/* Right: 3-col service grid */}
              <div className="flex-1 grid grid-cols-3 gap-1 py-1">
                {servicesData.map((service) => {
                  const Icon = service.icon;
                  return (
                    <button
                      key={service.slug}
                      onClick={() => handleNavigation(`/services/${service.slug}`)}
                      className="group flex items-start gap-3 px-4 py-3 rounded-lg hover:bg-primary/[0.07] transition-all duration-150 text-left"
                    >
                      <div className="w-8 h-8 rounded-md bg-primary/[0.08] border border-primary/[0.12] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/[0.14] transition-colors duration-150">
                        <Icon size={15} className="text-primary opacity-70 group-hover:opacity-100" />
                      </div>
                      <div>
                        <p className="text-[13px] font-semibold text-foreground/85 group-hover:text-foreground transition-colors duration-150 leading-snug">
                          {service.title}
                        </p>
                        <p className="text-[11px] text-muted-foreground/60 mt-0.5 leading-snug">
                          {service.tagline}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* ── ABOUT MEGA MENU ── */}
          {activeDropdown === "About" && (
            <div className="py-8 flex gap-12">
              {/* Left: label */}
              <div className="w-52 shrink-0 pt-1">
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary/60 mb-2">Company</p>
                <h3 className="text-base font-bold text-foreground/90 leading-snug mb-3">
                  Built on trust &amp; craft
                </h3>
                <p className="text-[12px] text-muted-foreground/70 leading-relaxed">
                  Get to know the team and the values behind every project we ship.
                </p>
              </div>

              {/* Divider */}
              <div className="w-px bg-border/40 shrink-0" />

              {/* Right: 4-col about items */}
              <div className="flex-1 grid grid-cols-4 gap-1 py-1">
                {aboutSections.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavigation(item.href)}
                    className="group flex flex-col gap-1.5 px-4 py-3 rounded-lg hover:bg-primary/[0.07] transition-all duration-150 text-left"
                  >
                    <p className="text-[13px] font-semibold text-foreground/85 group-hover:text-foreground transition-colors duration-150">
                      {item.label}
                    </p>
                    <p className="text-[11px] text-muted-foreground/60 leading-relaxed">
                      {item.desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── BLOGS MEGA MENU ── */}
          {activeDropdown === "Blogs" && (
            <div className="py-8 flex gap-12">
              {/* Left: label */}
              <div className="w-52 shrink-0 pt-1">
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary/60 mb-2">Latest articles</p>
                <h3 className="text-base font-bold text-foreground/90 leading-snug mb-3">
                  Insights &amp; case studies
                </h3>
                <p className="text-[12px] text-muted-foreground/70 leading-relaxed mb-5">
                  Deep dives into AI, engineering, and the systems we build.
                </p>
                <button
                  onClick={() => handleNavigation("/blog")}
                  className="inline-flex items-center gap-1.5 text-[12px] font-medium text-primary/70 hover:text-primary transition-colors duration-150"
                >
                  View all articles <ArrowRight size={11} />
                </button>
              </div>

              {/* Divider */}
              <div className="w-px bg-border/40 shrink-0" />

              {/* Right: 2-col blog grid */}
              <div className="flex-1 grid grid-cols-2 gap-1 py-1 max-h-[340px] overflow-y-auto pr-1">
                {blogPosts.map((post) => (
                  <button
                    key={post.slug}
                    onClick={() => handleNavigation(`/blog/${post.slug}`)}
                    className="group flex flex-col gap-1 px-4 py-3 rounded-lg hover:bg-primary/[0.07] transition-all duration-150 text-left"
                  >
                    <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-primary/50 group-hover:text-primary/70 transition-colors duration-150">
                      {post.category}
                    </span>
                    <span className="text-[12px] font-medium text-foreground/75 group-hover:text-foreground transition-colors duration-150 line-clamp-2 leading-snug">
                      {post.title}
                    </span>
                    <span className="text-[10px] text-muted-foreground/40 mt-0.5">
                      {post.readTime}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

      {/* ══════════════════════════════════════
          MOBILE MENU
      ══════════════════════════════════════ */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-[640px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-border/50 px-4 py-3 space-y-0.5">
          {navItems.map((item) => (
            <div key={item.href}>
              <button
                onClick={() => {
                  if (item.hasDropdown) {
                    setMobileExpanded(mobileExpanded === item.label ? null : item.label);
                  } else {
                    handleNavigation(item.href);
                  }
                }}
                className={`w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-primary bg-primary/[0.08]"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
              >
                <span>{item.label}</span>
                {item.hasDropdown && (
                  <ChevronDown
                    size={14}
                    className={`opacity-50 transition-transform duration-200 ${
                      mobileExpanded === item.label ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>

              {/* Mobile sub-items */}
              {item.hasDropdown && (
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    mobileExpanded === item.label ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="ml-3 pl-3 py-1 border-l border-border/40 space-y-0.5 mt-0.5">

                    {item.label === "Services" && servicesData.map((s) => (
                      <button
                        key={s.slug}
                        onClick={() => handleNavigation(`/services/${s.slug}`)}
                        className="w-full text-left px-3 py-2 text-[13px] text-foreground/60 hover:text-foreground rounded transition-colors hover:bg-white/5"
                      >
                        {s.title}
                      </button>
                    ))}

                    {item.label === "About" && aboutSections.map((s) => (
                      <button
                        key={s.label}
                        onClick={() => handleNavigation(s.href)}
                        className="w-full text-left px-3 py-2 text-[13px] text-foreground/60 hover:text-foreground rounded transition-colors hover:bg-white/5"
                      >
                        {s.label}
                      </button>
                    ))}

                    {item.label === "Blogs" && (
                      <>
                        {blogPosts.map((post) => (
                          <button
                            key={post.slug}
                            onClick={() => handleNavigation(`/blog/${post.slug}`)}
                            className="w-full text-left px-3 py-2 rounded transition-colors hover:bg-white/5"
                          >
                            <span className="text-[10px] font-semibold tracking-wider uppercase text-primary/50 block">
                              {post.category}
                            </span>
                            <span className="text-[12px] text-foreground/60 hover:text-foreground line-clamp-1">
                              {post.title}
                            </span>
                          </button>
                        ))}
                        <button
                          onClick={() => handleNavigation("/blog")}
                          className="w-full text-left px-3 py-2 text-[12px] font-medium text-primary/70 hover:text-primary transition-colors"
                        >
                          View all articles →
                        </button>
                      </>
                    )}

                  </div>
                </div>
              )}
            </div>
          ))}

          <div className="pt-3 pb-1">
            <Button
              onClick={() => handleNavigation("#contact")}
              className="w-full bg-primary hover:bg-primary-glow text-primary-foreground font-semibold text-sm h-10 transition-all duration-200"
            >
              Contact us
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
