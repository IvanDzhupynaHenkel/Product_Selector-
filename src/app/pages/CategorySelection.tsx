import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router";
import { Sparkles, X, ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

/* ─────────────────────────────────────────
   Category data
───────────────────────────────────────── */

// Import product images
import imgInjectionMolding from "@/assets/f5bbb9685401a7e2e9ef867404325fa0f066a628.png";
import imgCoating from "@/assets/491778134986b721123d331cd34cfe6f21e62f8c.png";
import imgAdhesives from "@/assets/35c1d645ff7f65b99f9030a95c7b57b745badfd9.png";
import imgPaperPackaging from "@/assets/04b353a53f3333b7d828e810bb826abcb3e194e9.png";
import imgTapes from "@/assets/cc8ce243f333e4fec556526473e73b20466135cc.png";
import imgLabels from "@/assets/8a9d5eb44904632d95a20a4e7d48ee87c5edebb6.png";
import imgMedical from "@/assets/9e8ea2dfd2364d4602fce72f96f0034d3cff4e95.png";
import imgGlass from "@/assets/Glass Bonding Solution.png";
import imgEncapsulation from "@/assets/3d1f2275d600eda4256601e6a21faed0140945b5.png";
import imgLamination from "@/assets/8fee2248c3024fea182c7009ab3bf09d8f5d92d9.png";

// Map categories to images
const categoryImages: Record<string, string> = {
  "Injection Molding": imgInjectionMolding,
  "Coating": imgCoating,
  "Adhesives": imgAdhesives,
  "Paper Packaging": imgPaperPackaging,
  "Tapes": imgTapes,
  "Labels": imgLabels,
  "Graphics": imgTapes,
  "Medical": imgMedical,
  "Thermosers Bonding Solution": imgLamination,
  "Glass Bonding Solution": imgGlass,
  "Alkaline Cleaners": imgCoating,
  "High Pressure Casting": imgInjectionMolding,
  "Gasketing": imgTapes,
  "Potting": imgEncapsulation,
  "Lamination": imgLamination,
  "Medical Elector": imgMedical,
  "E-Motor Gasketing": imgTapes,
  "E-Motor Magnet Bonding": imgAdhesives,
  "Fluid Management": imgCoating,
  "Aerospace SMP": imgAdhesives,
  "Silane Modified Polymers": imgAdhesives,
  "Semi-Paste & Film": imgLamination,
  "Semi-Encap & Underfill": imgEncapsulation,
  "CD-Structural Adhesives": imgAdhesives,
  "CD-Encap": imgEncapsulation,
  "CD-Underfill": imgEncapsulation,
  "CD-CAA": imgAdhesives,
  "CD-Thermal": imgCoating,
  "Thermal Management": imgCoating,
  "AMO 2D": imgLamination,
  "Forging": imgInjectionMolding,
};

const categories = [
  // AMO (Automotive OEMs)
  { businessUnit: "AMO", businessUnitFull: "AMO - Automotive OEMs", name: "Thermosers Bonding Solution", productCount: 34, regional: "Global" },
  { businessUnit: "AMO", businessUnitFull: "AMO - Automotive OEMs", name: "Glass Bonding Solution", productCount: 27, regional: "Global" },
  
  // APP Flexible Packaging
  { businessUnit: "APP Flexible Packaging", businessUnitFull: "APP Flexible Packaging", name: "Coating", productCount: 42, regional: "North America" },
  { businessUnit: "APP Flexible Packaging", businessUnitFull: "APP Flexible Packaging", name: "Adhesives", productCount: 56, regional: "North America" },
  
  // APP Paper Packaging
  { businessUnit: "APP Paper Packaging", businessUnitFull: "APP Paper Packaging", name: "Paper Packaging", productCount: 38, regional: "North America" },
  
  // APP Tapes & Labels
  { businessUnit: "APP Tapes & Labels", businessUnitFull: "APP Tapes & Labels", name: "Tapes", productCount: 47, regional: "North America" },
  { businessUnit: "APP Tapes & Labels", businessUnitFull: "APP Tapes & Labels", name: "Labels", productCount: 33, regional: "North America" },
  { businessUnit: "APP Tapes & Labels", businessUnitFull: "APP Tapes & Labels", name: "Graphics", productCount: 29, regional: "North America" },
  { businessUnit: "APP Tapes & Labels", businessUnitFull: "APP Tapes & Labels", name: "Medical", productCount: 51, regional: "North America" },
  
  // AMC (Automotive Components)
  { businessUnit: "AMC", businessUnitFull: "AMC - Automotive Components", name: "Alkaline Cleaners", productCount: 28, regional: "Global" },
  { businessUnit: "AMC", businessUnitFull: "AMC - Automotive Components", name: "High Pressure Casting", productCount: 58, regional: "Global" },
  { businessUnit: "AMC", businessUnitFull: "AMC - Automotive Components", name: "Gasketing", productCount: 63, regional: "Global" },
  { businessUnit: "AMC", businessUnitFull: "AMC - Automotive Components", name: "Potting", productCount: 41, regional: "Global" },
  { businessUnit: "AMC", businessUnitFull: "AMC - Automotive Components", name: "Lamination", productCount: 35, regional: "Global" },
  
  // ACM (General Manufacturing and Maintenance)
  { businessUnit: "ACM", businessUnitFull: "ACM - General Manufacturing and Maintenance", name: "Medical Elector", productCount: 44, regional: "Global" },
  { businessUnit: "ACM", businessUnitFull: "ACM - General Manufacturing and Maintenance", name: "E-Motor Gasketing", productCount: 52, regional: "Global" },
  { businessUnit: "ACM", businessUnitFull: "ACM - General Manufacturing and Maintenance", name: "E-Motor Magnet Bonding", productCount: 39, regional: "Global" },
  { businessUnit: "ACM", businessUnitFull: "ACM - General Manufacturing and Maintenance", name: "Fluid Management", productCount: 46, regional: "APAC" },
  
  // AMI (Industrials)
  { businessUnit: "AMI", businessUnitFull: "AMI - Industrials", name: "Aerospace SMP", productCount: 31, regional: "Global" },
  { businessUnit: "AMI", businessUnitFull: "AMI - Industrials", name: "Silane Modified Polymers", productCount: 48, regional: "Global" },
  
  // AME (Electronics)
  { businessUnit: "AME", businessUnitFull: "AME - Electronics", name: "Semi-Paste & Film", productCount: 67, regional: "Global" },
  { businessUnit: "AME", businessUnitFull: "AME - Electronics", name: "Semi-Encap & Underfill", productCount: 54, regional: "Global" },
  { businessUnit: "AME", businessUnitFull: "AME - Electronics", name: "CD-Structural Adhesives", productCount: 43, regional: "Global" },
  { businessUnit: "AME", businessUnitFull: "AME - Electronics", name: "CD-Encap", productCount: 38, regional: "Global" },
  { businessUnit: "AME", businessUnitFull: "AME - Electronics", name: "CD-Underfill", productCount: 41, regional: "Global" },
  { businessUnit: "AME", businessUnitFull: "AME - Electronics", name: "CD-CAA", productCount: 36, regional: "Global" },
  { businessUnit: "AME", businessUnitFull: "AME - Electronics", name: "CD-Thermal", productCount: 49, regional: "Global" },
  
  // Thermal Management
  { businessUnit: "Thermal Management", businessUnitFull: "Thermal Management", name: "Thermal Management", productCount: 58, regional: "Global" },
  
  // AMO 2D (Automotive OEMs & 2D)
  { businessUnit: "AMO 2D", businessUnitFull: "AMO 2D - Automotive OEMs & 2D", name: "AMO 2D", productCount: 45, regional: "Global" },
  
  // AMC Forging
  { businessUnit: "AMC Forging", businessUnitFull: "AMC Forging", name: "Forging", productCount: 41, regional: null },
];

const groupedCategories = categories.reduce((acc, cat) => {
  if (!acc[cat.businessUnit]) acc[cat.businessUnit] = { name: cat.businessUnitFull, categories: [] };
  acc[cat.businessUnit].categories.push(cat);
  return acc;
}, {} as Record<string, { name: string; categories: typeof categories }>);

/* ─────────────────────────────────────────
   AI extraction logic
───────────────────────────────────────── */
type ExtractedParams = {
  category: string;
  categoryDisplay: string;
  oneTwoC?: string;
  topAccount?: string;
  pumpability?: string;
  substrate?: string;
  cureCondition?: string;
  ibSegment?: string;
  productSearch?: string;
};

function extractFromPrompt(prompt: string): ExtractedParams {
  const lower = prompt.toLowerCase();
  // Default to Thermosers Bonding Solution — most queries are about structural adhesives
  const result: ExtractedParams = { category: "thermosers-bonding-solution", categoryDisplay: "Thermosers Bonding Solution" };

  // Category — most specific patterns first
  if (/carbon.?fiber|cfrp composite/.test(lower))          { result.category = "carbon-fiber";             result.categoryDisplay = "ACM Carbon Fiber"; }
  else if (/glass.?fiber/.test(lower))                      { result.category = "glass-fiber";              result.categoryDisplay = "ACM Glass Fiber"; }
  else if (/hybrid.?material/.test(lower))                  { result.category = "hybrid-materials";         result.categoryDisplay = "ACM Hybrid Materials"; }
  else if (/gasket/.test(lower))                            { result.category = "gasketing";                result.categoryDisplay = "AMC Gasketing"; }
  else if (/high.?pressure.?cast|hpdc/.test(lower))        { result.category = "high-pressure-casting";    result.categoryDisplay = "AMC High Pressure Casting"; }
  else if (/sand.?cast/.test(lower))                        { result.category = "sand-casting";             result.categoryDisplay = "AMC Sand Casting"; }
  else if (/investment.?cast/.test(lower))                  { result.category = "investment-casting";       result.categoryDisplay = "AMC Investment Casting"; }
  else if (/glass.?bond/.test(lower))                       { result.category = "glass-bonding-solution";   result.categoryDisplay = "AMO Glass Bonding"; }
  else if (/thermoset|structural.*bond|epoxy|methacrylate|adhesive|bonding/.test(lower)) { result.category = "thermosers-bonding-solution"; result.categoryDisplay = "Thermosers Bonding Solution"; }
  else if (/injection.?mold/.test(lower))                   { result.category = "injection-molding";        result.categoryDisplay = "APP Injection Molding"; }
  else if (/extrus/.test(lower))                            { result.category = "extrusion";                result.categoryDisplay = "APP Extrusion"; }
  else if (/thermoform/.test(lower))                        { result.category = "thermoforming";            result.categoryDisplay = "APP Thermoforming"; }
  else if (/forg/.test(lower))                              { result.category = "forging";                  result.categoryDisplay = "AMC Forging"; }

  // 1C / 2C
  if (/\b1[- ]?c\b|one.?component|single.?component/.test(lower))  result.oneTwoC = "1C";
  else if (/\b2[- ]?c\b|two.?component|dual.?component/.test(lower)) result.oneTwoC = "2C";

  // Top account + IB segment — same OEM detection drives both
  const oemMap: Array<[RegExp, string, string]> = [
    [/\bbmw\b/,                       "BMW",        "AM BMW"],
    [/mercedes|amg/,                  "Mercedes",   "AM Mercedes"],
    [/\bvw\b|volkswagen/,             "VW Group",   "AM VW-Group"],
    [/\bford\b/,                      "Ford",       "AM Ford-Group"],
    [/toyota/,                        "Toyota",     "AM Toyota"],
    [/stellantis|psa|opel|fiat/,      "Stellantis", "AM Stellantis"],
    [/hyundai/,                       "Hyundai",    "AM Hyundai-Group"],
    [/\bkia\b/,                       "Kia",        "AM Hyundai-Group"],
    [/geely/,                         "Geely",      "AM Geely / Volvo"],
    [/\bvolvo\b/,                     "Volvo",      "AM Geely / Volvo"],
    [/\bgm\b|general motors|chevrolet/, "GM",       "AM GM Group"],
    [/tesla/,                         "Tesla",      "AM Tesla"],
    [/renault/,                       "Renault",    "AM Renault-Nissan"],
    [/nissan/,                        "Nissan",     "AM Renault-Nissan"],
    [/\bjlr\b|jaguar|land rover/,     "JLR",        "AM JLR"],
    [/\bbyd\b/,                       "BYD",        "AM BYD"],
    [/\bnio\b/,                       "NIO",        "AM Chinese OEMs"],
    [/chinese oem/,                   "Chinese OEMs","AM Chinese OEMs"],
  ];
  for (const [pattern, account, segment] of oemMap) {
    if (pattern.test(lower)) {
      result.topAccount = account;
      result.ibSegment = segment;
      break;
    }
  }

  // Substrate — map to exact option strings
  const subMap: Array<[RegExp, string]> = [
    [/\balumini?um\b/,          "Aluminum"],
    [/cold.?rolled.?steel|crs/, "Cold Rolled Steel (CRS)"],
    [/galvanized.?steel|hdg/,   "Hot-Dip Galvanized Steel"],
    [/galvannealed/,            "Galvannealed Steel"],
    [/zinc.*magnesium/,         "Zinc/Magnesium Surfaces"],
    [/zinc/,                    "Zinc Coated Surfaces"],
    [/oily/,                    "Oily Substrates"],
    [/painted.?metal/,          "Painted Metal"],
    [/thermoset.*composit/,     "Thermosets Composites"],
    [/\bplastic/,               "Plastics"],
    [/\bcfrp\b/,                "CFRP"],
    [/\bgfrp\b/,                "GFRP"],
    [/\bsteel\b/,               "Cold Rolled Steel (CRS)"],
  ];
  for (const [pattern, val] of subMap) {
    if (pattern.test(lower)) { result.substrate = val; break; }
  }

  // Pumpability — exact option strings
  if (/non.?pumpable|paste|film/.test(lower))   result.pumpability = "Warm Temperature Pumpability";
  else if (/pump/.test(lower))                   result.pumpability = "Room Temperature Pumpability";

  // Cure condition — exact option strings
  if (/room.?temp|ambient|rt.?cure|\brt\b/.test(lower))    result.cureCondition = "Room Temperature Cure";
  else if (/\b[<]?\s*80\s*[°c]|low.?temp/i.test(lower))   result.cureCondition = "Low Temperature Cure (< 80°C)";
  else if (/120|standard.?temp/i.test(lower))              result.cureCondition = "Standard Temperature Cure (80–150°C)";
  else if (/150|180|high.?temp/i.test(lower))              result.cureCondition = "High Temperature Cure (> 150°C)";

  // Product name
  const m = lower.match(/teroson[\s-]ep[\s-]\d+/);
  if (m) result.productSearch = m[0].toUpperCase().replace(/\s+/g, " ");

  return result;
}

function buildSearchParams(p: ExtractedParams): URLSearchParams {
  const sp = new URLSearchParams();
  if (p.oneTwoC)        sp.set("oneTwoC", p.oneTwoC);
  if (p.topAccount)     sp.set("topAccount", p.topAccount);
  if (p.pumpability)    sp.set("pumpability", p.pumpability);
  if (p.substrate)      sp.set("substrate", p.substrate);
  if (p.cureCondition)  sp.set("cureCondition", p.cureCondition);
  if (p.ibSegment)      sp.set("ibSegment", p.ibSegment);
  if (p.productSearch)  sp.set("productSearch", p.productSearch);
  return sp;
}

const ANALYSIS_STEPS = [
  "Reading your request…",
  "Detecting product category…",
  "Extracting filter criteria…",
  "Matching parameters to catalogue…",
];

/* ─────────────────────────────────────────
   AI Search Modal
───────────────────────────────────────── */
const RECENT_PROMPTS_KEY = "ai_search_recent_prompts";

function getRecentPrompts(): string[] {
  try {
    return JSON.parse(localStorage.getItem(RECENT_PROMPTS_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveRecentPrompt(prompt: string) {
  const recent = getRecentPrompts().filter((p) => p !== prompt);
  recent.unshift(prompt);
  localStorage.setItem(RECENT_PROMPTS_KEY, JSON.stringify(recent.slice(0, 3)));
}

function AiSearchModal({ onClose }: { onClose: () => void }) {
  const navigate = useNavigate();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [prompt, setPrompt] = useState("");
  const [phase, setPhase] = useState<"input" | "analyzing" | "results">("input");
  const [analysisStep, setAnalysisStep] = useState(0);
  const [extracted, setExtracted] = useState<ExtractedParams | null>(null);
  const [recentPrompts, setRecentPrompts] = useState<string[]>(getRecentPrompts);

  // Auto-focus textarea on open
  useEffect(() => {
    setTimeout(() => textareaRef.current?.focus(), 120);
  }, []);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const handleSubmit = () => {
    if (!prompt.trim()) return;
    saveRecentPrompt(prompt.trim());
    setRecentPrompts(getRecentPrompts());
    setPhase("analyzing");
    setAnalysisStep(0);

    // Animate through analysis steps
    ANALYSIS_STEPS.forEach((_, i) => {
      setTimeout(() => setAnalysisStep(i), i * 420);
    });

    // After all steps, show results
    setTimeout(() => {
      const params = extractFromPrompt(prompt);
      setExtracted(params);
      setPhase("results");
    }, ANALYSIS_STEPS.length * 420 + 300);
  };

  const handleNavigate = () => {
    if (!extracted) return;
    const sp = buildSearchParams(extracted);
    const qs = sp.toString();
    navigate(`/criteria/${extracted.category}${qs ? `?${qs}` : ""}`);
  };

  const handleExample = (ex: string) => {
    setPrompt(ex);
    setTimeout(() => textareaRef.current?.focus(), 50);
  };

  // Compute extracted param pills
  const paramPills = extracted
    ? [
        { label: extracted.categoryDisplay, color: "bg-red-50 text-[#D4000E] border-red-100" },
        extracted.oneTwoC      && { label: extracted.oneTwoC,      color: "bg-slate-100 text-slate-700 border-slate-200" },
        extracted.substrate    && { label: extracted.substrate,    color: "bg-slate-100 text-slate-700 border-slate-200" },
        extracted.topAccount   && { label: extracted.topAccount,   color: "bg-blue-50 text-blue-700 border-blue-100" },
        extracted.ibSegment    && { label: extracted.ibSegment,    color: "bg-teal-50 text-teal-700 border-teal-100" },
        extracted.pumpability  && { label: extracted.pumpability,  color: "bg-slate-100 text-slate-700 border-slate-200" },
        extracted.cureCondition && { label: extracted.cureCondition, color: "bg-amber-50 text-amber-700 border-amber-100" },
        extracted.productSearch && { label: extracted.productSearch, color: "bg-purple-50 text-purple-700 border-purple-100" },
      ].filter(Boolean) as { label: string; color: string }[]
    : [];

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Card */}
      <motion.div
        className="relative z-10 w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden"
        initial={{ scale: 0.94, y: 16, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.94, y: 16, opacity: 0 }}
        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Header */}
        <div className="px-6 pt-6 pb-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "#D4000E" }}>
              <Sparkles className="w-3.5 h-3.5 text-white" />
            </div>
            <div>
              <h2 className="font-semibold text-slate-900">Smart Search</h2>
              <p className="text-xs text-slate-400">AI-powered product filter</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 flex items-center justify-center rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5">
          <AnimatePresence mode="wait">

            {/* ── Input phase ── */}
            {phase === "input" && (
              <motion.div
                key="input"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.16 }}
              >
                <p className="text-sm text-slate-500 mb-3">
                  Describe the product you need — substrate, cure method, customer, performance targets — in plain language.
                </p>

                <textarea
                  ref={textareaRef}
                  value={prompt}
                  onChange={e => setPrompt(e.target.value)}
                  onKeyDown={e => { if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) handleSubmit(); }}
                  placeholder='e.g. "1C pumpable epoxy for aluminum BIW bonding at BMW, high crash resistance"'
                  rows={4}
                  className="w-full px-3.5 py-3 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#D4000E] focus:ring-1 focus:ring-[#D4000E]/20 resize-none transition-colors leading-relaxed"
                />

                <p className="text-xs text-slate-400 mt-1 mb-4">⌘ + Enter to submit</p>

                {/* Recent searches */}
                {recentPrompts.length > 0 && (
                  <div className="mb-5">
                    <p className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-2">Recent searches</p>
                    <div className="flex flex-col gap-1.5">
                      {recentPrompts.map((ex) => (
                        <button
                          key={ex}
                          onClick={() => handleExample(ex)}
                          className="w-full text-left flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-100 hover:border-slate-300 hover:bg-slate-50 transition-all group"
                        >
                          <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#D4000E] flex-shrink-0 transition-colors" />
                          <span className="text-xs text-slate-600 group-hover:text-slate-900 transition-colors line-clamp-1">{ex}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={!prompt.trim()}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-medium text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 active:scale-[.98]"
                  style={{ background: "#D4000E" }}
                >
                  <Sparkles className="w-4 h-4" />
                  Search with AI
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            )}

            {/* ── Analyzing phase ── */}
            {phase === "analyzing" && (
              <motion.div
                key="analyzing"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.16 }}
                className="py-8"
              >
                <div className="flex flex-col items-center gap-6">
                  {/* Animated orb */}
                  <div className="relative w-16 h-16">
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{ background: "rgba(212,0,14,0.12)" }}
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
                    />
                    <div
                      className="absolute inset-2 rounded-full flex items-center justify-center"
                      style={{ background: "#D4000E" }}
                    >
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Step text */}
                  <div className="text-center min-h-[48px]">
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={analysisStep}
                        className="text-sm font-medium text-slate-700"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.2 }}
                      >
                        {ANALYSIS_STEPS[analysisStep]}
                      </motion.p>
                    </AnimatePresence>
                    <div className="flex items-center justify-center gap-1 mt-2">
                      {ANALYSIS_STEPS.map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: i <= analysisStep ? "#D4000E" : "#e2e8f0" }}
                          animate={{ scale: i === analysisStep ? [1, 1.4, 1] : 1 }}
                          transition={{ repeat: i === analysisStep ? Infinity : 0, duration: 0.8 }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Prompt preview */}
                  <p className="text-xs text-slate-400 italic text-center max-w-xs leading-relaxed">
                    "{prompt.length > 90 ? prompt.slice(0, 90) + "…" : prompt}"
                  </p>
                </div>
              </motion.div>
            )}

            {/* ── Results phase ── */}
            {phase === "results" && extracted && (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
              >
                {/* Success header */}
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <p className="text-sm font-medium text-slate-800">Parameters extracted successfully</p>
                </div>

                {/* Prompt echo */}
                <div className="px-3 py-2.5 bg-slate-50 rounded-lg border border-slate-100 mb-4">
                  <p className="text-xs text-slate-500 italic leading-relaxed">
                    "{prompt.length > 120 ? prompt.slice(0, 120) + "…" : prompt}"
                  </p>
                </div>

                {/* Extracted params */}
                <div className="mb-5">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2.5">Detected filters</p>
                  <div className="flex flex-wrap gap-2">
                    {paramPills.map((pill, i) => (
                      <motion.span
                        key={pill.label}
                        className={`px-2.5 py-1 rounded-full text-xs font-medium border ${pill.color}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.06 }}
                      >
                        {pill.label}
                      </motion.span>
                    ))}
                    {paramPills.length === 1 && (
                      <span className="px-2.5 py-1 rounded-full text-xs text-slate-400 border border-dashed border-slate-200">
                        No additional filters detected — showing all products
                      </span>
                    )}
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-slate-100 mb-4" />

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => { setPhase("input"); setExtracted(null); }}
                    className="text-sm text-slate-500 hover:text-slate-800 transition-colors"
                  >
                    ← Refine
                  </button>
                  <button
                    onClick={handleNavigate}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-medium text-white transition-all hover:opacity-90 active:scale-[.98]"
                    style={{ background: "#D4000E" }}
                  >
                    Open results
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ────────────────────────────────────────
   Main page
───────────────────────────────────────── */
export function CategorySelection() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <div className="max-w-7xl mx-auto p-6 md:p-12 pb-32">
        <div className="mb-12">
          <h1 className="font-medium text-slate-900 mb-2 font-[Henkel_GT_Flexa] font-bold" style={{ fontSize: "28px" }}>Which product family do you need?</h1>
          <p className="text-slate-600">
            Select a category to find the right product for your application, or use Smart Search below.
          </p>
        </div>

        <div className="space-y-12">
          {Object.entries(groupedCategories).map(([unit, data]) => (
            <div key={unit}>
              <h2 className="text-xs font-medium uppercase tracking-wide text-slate-500 mb-4">
                {data.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.categories.map((category) => {
                  const categoryImage = categoryImages[category.name];
                  
                  return (
                    <Link
                      key={category.name}
                      to={`/criteria/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                      className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all relative overflow-hidden"
                    >
                      {/* Business Unit badge - top right */}
                      <div className="absolute top-3.5 right-3.5 z-10">
                        <span className="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded">
                          {category.businessUnit}
                        </span>
                      </div>

                      {/* Image container - left side */}
                      {categoryImage && (
                        <div className="absolute left-6 top-3.5 h-[74px] w-[131px] overflow-hidden rounded">
                          <img 
                            src={categoryImage} 
                            alt={category.name}
                            className="h-full w-full object-contain shadow-sm"
                          />
                        </div>
                      )}

                      {/* Text content */}
                      <div className="pt-[87px] px-6 pb-4">
                        <h3 className="font-medium text-slate-900 mb-1 group-hover:text-[#D4000E] transition-colors text-lg">
                          {category.name}
                        </h3>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600">{category.productCount} products</span>
                          {category.regional && (
                            <span className="text-xs text-slate-500">{category.regional} only</span>
                          )}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200">
          <p className="text-sm text-slate-500 italic">
            This selector guides product recommendations based on technical criteria.
            Henkel expert consultation is recommended to confirm suitability.
          </p>
        </div>
      </div>

      {/* ── Floating AI Search button ── */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40">
        <motion.button
          onClick={() => setSearchOpen(true)}
          className="flex items-center gap-2.5 pl-4 pr-5 py-3 rounded-full text-white shadow-lg shadow-red-900/20 hover:shadow-xl hover:shadow-red-900/25 transition-shadow"
          style={{ background: "#D4000E" }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-medium">Smart Search</span>
        </motion.button>
      </div>

      {/* ── Modal ── */}
      <AnimatePresence>
        {searchOpen && <AiSearchModal onClose={() => setSearchOpen(false)} />}
      </AnimatePresence>
    </>
  );
}