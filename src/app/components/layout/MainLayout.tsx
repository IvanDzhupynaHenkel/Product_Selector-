import { Outlet, Link } from "react-router";
import { User, Globe, ChevronDown } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import henkelLogo from "../../../imports/henkel-logo-standalone-svg.svg";
import { useState, useRef, useEffect } from "react";

export function MainLayout() {
  const [language, setLanguage] = useState<"en" | "zh">("en");
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const LANGUAGES = [
    { code: "en" as const, label: "English" },
    { code: "zh" as const, label: "Chinese" },
  ];

  return (
    <div className="flex h-screen bg-white" style={{ fontFamily: 'DM Sans, sans-serif' }}>
      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Top navigation bar */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            {/* Henkel logo */}
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <ImageWithFallback
                src={henkelLogo}
                alt="Henkel"
                className="h-8"
              />
            </Link>
            <div className="w-px h-6 bg-slate-300" />
            <h1 className="text-slate-900 font-medium font-[Henkel_GT_Flexa] text-[16px]">Product Selector</h1>
          </div>

          <div className="flex items-center gap-3">
            {/* Language dropdown — left of avatar */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen((o) => !o)}
                className="flex items-center gap-1.5 h-[26px] px-[13px] rounded-lg text-xs font-medium text-slate-700 bg-white border border-slate-200 shadow-sm hover:bg-slate-50 transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-slate-400" />
                <span>{language === "en" ? "English" : "Chinese"}</span>
                <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform ${langOpen ? "rotate-180" : ""}`} />
              </button>

              {langOpen && (
                <div className="absolute right-0 top-full mt-1.5 w-36 bg-white rounded-lg border border-slate-200 shadow-lg z-50 py-1 overflow-hidden">
                  {LANGUAGES.map(({ code, label }) => (
                    <button
                      key={code}
                      onClick={() => { setLanguage(code); setLangOpen(false); }}
                      className={`w-full text-left px-3 py-2 text-sm transition-colors ${
                        language === code
                          ? "text-slate-900 font-medium bg-slate-50"
                          : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* User avatar */}
            <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
              <User className="w-5 h-5 text-slate-600" />
            </div>
          </div>
        </header>

        {/* Page content with sidebar */}
        <div className="flex-1 flex overflow-hidden">
          <main className="flex-1 overflow-y-auto bg-slate-50">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
