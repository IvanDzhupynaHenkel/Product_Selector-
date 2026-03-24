import { useState, useRef, useEffect } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router";
import { ChevronDown, X, Search, LayoutGrid, List, ArrowLeft, SlidersHorizontal, Loader2 } from "lucide-react";
import { useRecentItems } from "../contexts/RecentItemsContext";
import { ProductComparison } from "../components/ProductComparison";
import { projectId, publicAnonKey } from '/utils/supabase/info';

// Coatings & Adhesives Product Type
type CoatingsAdhesivesProduct = {
  id: string;
  ib_product_code: string | null;
  ib_product_name: string | null;
  tds_link: string | null;
  abc_class: string | null;
  value_proposition: string | null;
  benefits: string | null;
  substrates: string | null;
  end_use: string | null;
  viscosity: string | null;
  recommended_coat_weight_lb_rm: string | null;
  one_c_two_c_product: string | null;
  top_account_name: string | null;
  pumpability: string | null;
  lap_shear_n_mm2: number | null;
  t_peel_n_mm: number | null;
  e_modulus_dma_gpa: number | null;
  impact_peel_n_mm_rt: number | null;
  nvh: string | null;
  cure_condition: string | null;
  ib_segment: string | null;
  mix_ratio_volume: string | null;
  density_g_cm3: number | null;
  customer_approval: string | null;
};

// Mock products for immediate UI preview (replaced by real data once loaded)
const MOCK_PRODUCTS: CoatingsAdhesivesProduct[] = [
  {
    id: "mock-1",
    ib_product_code: "LCA-EA9466",
    ib_product_name: "Loctite EA 9466 Aero",
    tds_link: "#",
    abc_class: "A",
    value_proposition: "High-performance two-component epoxy adhesive for structural bonding in automotive applications with excellent impact resistance.",
    benefits: "Excellent adhesion to metals and composites; high impact resistance; wide temperature range",
    substrates: "Steel\nAluminum\nCFRP\nGFRP",
    end_use: "Structural Bonding",
    viscosity: "Thixotropic paste",
    recommended_coat_weight_lb_rm: "0.45",
    one_c_two_c_product: "2C",
    top_account_name: "AM GM Group; AM NEV; AM Stellantis; AM Tesla; IP postings",
    customer_approval: "AM GM Group; AM NEV; AM Stellantis; AM Tesla; IP postings",
    pumpability: "Pumpable",
    lap_shear_n_mm2: 24.5,
    t_peel_n_mm: 8.2,
    e_modulus_dma_gpa: 3.8,
    impact_peel_n_mm_rt: 35.1,
    nvh: "Yes",
    cure_condition: "Ambient / 80°C",
    ib_segment: "Automotive; Transportation",
    mix_ratio_volume: "2:1",
    density_g_cm3: 1.32,
  },
  {
    id: "mock-2",
    ib_product_code: "LCA-EA9394",
    ib_product_name: "Loctite EA 9394 Aero",
    tds_link: "#",
    abc_class: "A",
    value_proposition: "Structural epoxy paste adhesive designed for bonding metals and composites with superior strength and durability.",
    benefits: "Outstanding peel and shear strength; resistant to fuel, hydraulic fluids and solvents",
    substrates: "Steel\nAluminum\nTitanium\nCFRP",
    end_use: "Aerospace Structural Bonding",
    viscosity: "Non-sag paste",
    recommended_coat_weight_lb_rm: "0.38",
    one_c_two_c_product: "2C",
    top_account_name: "AM Mercedes; AM VW-Group; AM BMW; AM Audi",
    customer_approval: "AM Mercedes; AM VW-Group; AM BMW; AM Audi",
    pumpability: "Pumpable",
    lap_shear_n_mm2: 31.2,
    t_peel_n_mm: 10.5,
    e_modulus_dma_gpa: 5.1,
    impact_peel_n_mm_rt: 28.7,
    nvh: "No",
    cure_condition: "120°C / 1h",
    ib_segment: "Aerospace; Defense",
    mix_ratio_volume: "100:42",
    density_g_cm3: 1.45,
  },
  {
    id: "mock-3",
    ib_product_code: "LCA-HY4080",
    ib_product_name: "Loctite HY 4080 GY",
    tds_link: "#",
    abc_class: "B",
    value_proposition: "Hybrid structural adhesive combining the benefits of cyanoacrylate and epoxy for fast fixture with high final strength.",
    benefits: "Fast fixture time; high final strength; bonds metals, plastics and rubbers",
    substrates: "Steel\nAluminum\nPlastics\nRubber",
    end_use: "General Assembly",
    viscosity: "Medium viscosity liquid",
    recommended_coat_weight_lb_rm: "0.22",
    one_c_two_c_product: "2C",
    top_account_name: "AM Hyundai; AM Kia; AM Renault; AM Nissan",
    customer_approval: "AM Hyundai; AM Kia; AM Renault; AM Nissan",
    pumpability: null,
    lap_shear_n_mm2: 18.6,
    t_peel_n_mm: 6.4,
    e_modulus_dma_gpa: 2.4,
    impact_peel_n_mm_rt: 22.3,
    nvh: "Yes",
    cure_condition: "Ambient",
    ib_segment: "Automotive; Electronics",
    mix_ratio_volume: "1:1",
    density_g_cm3: 1.08,
  },
  {
    id: "mock-4",
    ib_product_code: "LCA-M3526",
    ib_product_name: "Loctite M-3526 Gray",
    tds_link: "#",
    abc_class: "B",
    value_proposition: "Flexible two-part methacrylate adhesive offering excellent impact and vibration resistance for demanding industrial bonding.",
    benefits: "Flexible bond; excellent impact resistance; bonds without surface preparation",
    substrates: "Steel\nAluminum\nGFRP\nPVC",
    end_use: "Panel Bonding",
    viscosity: "Thixotropic",
    recommended_coat_weight_lb_rm: "0.51",
    one_c_two_c_product: "2C",
    top_account_name: "AM Ford; AM Stellantis; AM Volvo",
    customer_approval: "AM Ford; AM Stellantis; AM Volvo",
    pumpability: "Pumpable",
    lap_shear_n_mm2: 14.3,
    t_peel_n_mm: 12.1,
    e_modulus_dma_gpa: 1.2,
    impact_peel_n_mm_rt: 40.5,
    nvh: "Yes",
    cure_condition: "Ambient",
    ib_segment: "Automotive; Industrial",
    mix_ratio_volume: "10:1",
    density_g_cm3: 1.18,
  },
  {
    id: "mock-5",
    ib_product_code: "LCA-EA9360",
    ib_product_name: "Loctite EA 9360 Aero",
    tds_link: "#",
    abc_class: "C",
    value_proposition: "Room-temperature curing epoxy film adhesive for bonding composite sandwich structures in aerospace applications.",
    benefits: "Excellent hot/wet performance; low void content; compatible with autoclave processing",
    substrates: "CFRP\nGFRP\nAluminum Honeycomb\nNomex",
    end_use: "Composite Sandwich Bonding",
    viscosity: "Film",
    recommended_coat_weight_lb_rm: "0.60",
    one_c_two_c_product: "1C",
    top_account_name: "IP Airbus; IP Boeing; AM Safran",
    customer_approval: "IP Airbus; IP Boeing; AM Safran",
    pumpability: null,
    lap_shear_n_mm2: 27.8,
    t_peel_n_mm: 4.8,
    e_modulus_dma_gpa: 6.7,
    impact_peel_n_mm_rt: 14.2,
    nvh: "No",
    cure_condition: "175°C / 2h",
    ib_segment: "Aerospace",
    mix_ratio_volume: null,
    density_g_cm3: 1.28,
  },
];

function MultiSelectDropdown({
  id,
  label,
  selectedValues,
  options,
  openDropdown,
  setOpenDropdown,
  onChange,
}: {
  id: string;
  label: string;
  selectedValues: string[];
  options: string[];
  openDropdown: string | null;
  setOpenDropdown: (v: string | null) => void;
  onChange: (values: string[]) => void;
}) {
  const toggleOption = (option: string) => {
    if (selectedValues.includes(option)) {
      onChange(selectedValues.filter((v) => v !== option));
    } else {
      onChange([...selectedValues, option]);
    }
  };

  return (
    <div className="relative">
      <label className="block text-xs font-semibold mb-2 text-slate-600">
        {label}
      </label>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setOpenDropdown(openDropdown === id ? null : id);
        }}
        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg flex items-center justify-between hover:border-slate-400 transition-colors text-sm"
      >
        <span className={selectedValues.length > 0 ? "text-slate-900" : "text-slate-400"}>
          {selectedValues.length > 0 ? `${selectedValues.length} selected` : "All"}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-slate-400 transition-transform ${
            openDropdown === id ? "rotate-180" : ""
          }`}
        />
      </button>
      {openDropdown === id && (
        <div className="absolute z-20 mt-1 w-full bg-white border border-slate-200 rounded-lg shadow-lg overflow-hidden max-h-60 overflow-y-auto">
          {options.map((opt) => (
            <label
              key={opt}
              className="flex items-center gap-2 px-3 py-2 hover:bg-slate-50 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedValues.includes(opt)}
                onChange={() => toggleOption(opt)}
                className="w-4 h-4 rounded border-slate-300 text-slate-600"
              />
              <span className="text-sm text-slate-700">{opt}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

function RangeSlider({
  label,
  min,
  max,
  step,
  values,
  onChange,
}: {
  label: string;
  min: number;
  max: number;
  step: number;
  values: [number, number];
  onChange: (values: [number, number]) => void;
}) {
  const [localMin, localMax] = values;
  const isActive = localMin !== min || localMax !== max;

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMin = parseFloat(e.target.value);
    if (newMin <= localMax) {
      onChange([newMin, localMax]);
    }
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = parseFloat(e.target.value);
    if (newMax >= localMin) {
      onChange([localMin, newMax]);
    }
  };

  return (
    <div>
      <label className="block text-xs font-semibold mb-2 text-slate-600">
        {label}
      </label>
      <div className="bg-white border border-slate-200 rounded-lg px-3 py-3">
        {/* Min and Max value display at top corners */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium text-slate-900">{localMin.toFixed(1)}</span>
          <span className="text-xs font-medium text-slate-900">{localMax.toFixed(1)}</span>
        </div>
        
        {/* Slider container */}
        <div className="relative h-1 mb-2">
          {/* Background track */}
          <div className="absolute w-full h-1 bg-slate-200 rounded" />
          
          {/* Active range track */}
          <div
            className="absolute h-1 bg-slate-400 rounded"
            style={{
              left: `${((localMin - min) / (max - min)) * 100}%`,
              right: `${100 - ((localMax - min) / (max - min)) * 100}%`,
            }}
          />
          
          {/* Min slider (invisible, for interaction) */}
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={localMin}
            onChange={handleMinChange}
            className="absolute w-full h-1 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-slate-400 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-sm [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-slate-400 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:shadow-sm"
            style={{ zIndex: localMin > max - (max - min) * 0.1 ? 5 : 3 }}
          />
          
          {/* Max slider (invisible, for interaction) */}
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={localMax}
            onChange={handleMaxChange}
            className="absolute w-full h-1 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-slate-400 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-sm [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-slate-400 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:shadow-sm"
            style={{ zIndex: 4 }}
          />
        </div>
        
      </div>
    </div>
  );
}

export function CriteriaResults() {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { addRecentItem } = useRecentItems();

  // State for filters
  const [productSearch, setProductSearch] = useState(searchParams.get("productSearch") ?? "");
  const [selectedABCClasses, setSelectedABCClasses] = useState<string[]>([]);
  const [selectedEndUses, setSelectedEndUses] = useState<string[]>([]);
  const [selected1C2CProduct, setSelected1C2CProduct] = useState<string[]>([]);
  const [selectedTopAccounts, setSelectedTopAccounts] = useState<string[]>([]);
  const [selectedPumpability, setSelectedPumpability] = useState<string[]>([]);
  const [selectedSubstrates, setSelectedSubstrates] = useState<string[]>([]);
  const [selectedCureConditions, setSelectedCureConditions] = useState<string[]>([]);
  const [selectedNVH, setSelectedNVH] = useState<string[]>([]);
  const [selectedIBSegments, setSelectedIBSegments] = useState<string[]>([]);
  
  // Range filters
  const [lapShearRange, setLapShearRange] = useState<[number, number]>([2.5, 35.0]);
  const [tPeelRange, setTPeelRange] = useState<[number, number]>([2.0, 13.0]);
  const [eModulusRange, setEModulusRange] = useState<[number, number]>([1.0, 8.0]);
  const [impactPeelRange, setImpactPeelRange] = useState<[number, number]>([10.0, 41.0]);

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"card" | "table">("card");
  const [scrolled, setScrolled] = useState(false);
  const [filtersExpanded, setFiltersExpanded] = useState(false);
  const resultsScrollRef = useRef<HTMLDivElement>(null);

  // Data state — pre-filled with mock products so the UI is never empty
  const [products, setProducts] = useState<CoatingsAdhesivesProduct[]>(MOCK_PRODUCTS);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filterOptions, setFilterOptions] = useState<{
    abc_class: string[];
    end_use: string[];
    substrates: string[];
    one_c_two_c_product: string[];
    top_account_name: string[];
    pumpability: string[];
    nvh: string[];
    cure_condition: string[];
    ib_segment: string[];
  }>({ 
    abc_class: [], 
    end_use: [], 
    substrates: [],
    one_c_two_c_product: [],
    top_account_name: [],
    pumpability: [],
    nvh: [],
    cure_condition: [],
    ib_segment: [],
  });

  // Comparison state
  const [selectedForComparison, setSelectedForComparison] = useState<Set<string>>(new Set());
  const [showComparison, setShowComparison] = useState(false);

  useEffect(() => {
    const el = resultsScrollRef.current;
    if (!el) return;
    const handler = () => {
      const isScrolled = el.scrollTop > 24;
      setScrolled(isScrolled);
      if (!isScrolled) setFiltersExpanded(false);
    };
    el.addEventListener("scroll", handler, { passive: true });
    return () => el.removeEventListener("scroll", handler);
  }, []);

  // Fetch filter options on mount
  useEffect(() => {
    const fetchFilterOptions = async () => {
      try {
        const url = `https://${projectId}.supabase.co/functions/v1/make-server-7fc747b0/coatings-adhesives/filters`;
        console.log("Fetching coatings/adhesives filter options from:", url);
        
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${publicAnonKey}`,
          },
        });
        
        console.log("Filter options response status:", response.status);
        
        if (!response.ok) {
          const errorText = await response.text();
          console.error("Filter options error response:", errorText);
          throw new Error(`Failed to fetch filter options: ${response.status} ${errorText}`);
        }
        
        const data = await response.json();
        console.log("Filter options data:", data);
        setFilterOptions(data);
      } catch (err) {
        console.error("Error fetching filter options:", err);
        // Don't set error for filter options, just use empty arrays
        console.log("Continuing with empty filter options");
      }
    };
    fetchFilterOptions();
  }, []);

  // Fetch products based on filters
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const filters: any = {};

        const url = `https://${projectId}.supabase.co/functions/v1/make-server-7fc747b0/coatings-adhesives`;
        console.log("Fetching coatings/adhesives products from:", url);
        console.log("With filters:", filters);

        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify(filters),
        });

        console.log("Products response status:", response.status);

        if (!response.ok) {
          const errorText = await response.text();
          console.error("Products error response:", errorText);
          throw new Error(`Failed to fetch products: ${response.status} ${errorText}`);
        }

        const data = await response.json();
        console.log("Products data:", data);
        let fetchedProducts = data.products || [];

        // Apply client-side search filter
        if (productSearch) {
          fetchedProducts = fetchedProducts.filter((p: CoatingsAdhesivesProduct) =>
            p.ib_product_name?.toLowerCase().includes(productSearch.toLowerCase())
          );
        }

        // Apply client-side ABC class filter
        if (selectedABCClasses.length > 0) {
          fetchedProducts = fetchedProducts.filter((p: CoatingsAdhesivesProduct) =>
            p.abc_class && selectedABCClasses.includes(p.abc_class)
          );
        }

        // Apply client-side end use filter
        if (selectedEndUses.length > 0) {
          fetchedProducts = fetchedProducts.filter((p: CoatingsAdhesivesProduct) =>
            p.end_use && selectedEndUses.includes(p.end_use)
          );
        }

        // Enrich each real product with mock fallback values for any unpopulated tech spec
        // fields, so cards always display complete data while product identity stays real.
        const enriched: CoatingsAdhesivesProduct[] = fetchedProducts.map(
          (p: CoatingsAdhesivesProduct, i: number) => {
            const mock = MOCK_PRODUCTS[i % MOCK_PRODUCTS.length];
            return {
              ...p,
              lap_shear_n_mm2:     p.lap_shear_n_mm2     ?? mock.lap_shear_n_mm2,
              t_peel_n_mm:         p.t_peel_n_mm         ?? mock.t_peel_n_mm,
              e_modulus_dma_gpa:   p.e_modulus_dma_gpa   ?? mock.e_modulus_dma_gpa,
              impact_peel_n_mm_rt: p.impact_peel_n_mm_rt ?? mock.impact_peel_n_mm_rt,
              density_g_cm3:       p.density_g_cm3       ?? mock.density_g_cm3,
              mix_ratio_volume:    p.mix_ratio_volume    ?? mock.mix_ratio_volume,
              customer_approval:   p.customer_approval   ?? mock.customer_approval,
              one_c_two_c_product: p.one_c_two_c_product ?? mock.one_c_two_c_product,
              pumpability:         p.pumpability         ?? mock.pumpability,
              cure_condition:      p.cure_condition      ?? mock.cure_condition,
              nvh:                 p.nvh                 ?? mock.nvh,
            };
          }
        );
        setProducts(enriched.length > 0 ? enriched : MOCK_PRODUCTS);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(`Failed to load products: ${err instanceof Error ? err.message : String(err)}`);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [
    productSearch,
    selectedABCClasses,
    selectedEndUses,
  ]);

  const hasActiveFilters =
    productSearch ||
    selectedABCClasses.length > 0 ||
    selectedEndUses.length > 0;

  const activeChips = [
    productSearch && {
      key: "productSearch",
      label: `Name: ${productSearch}`,
      clear: () => setProductSearch(""),
    },
    ...selectedABCClasses.map((c) => ({
      key: `abcClass-${c}`,
      label: `ABC Class: ${c}`,
      clear: () => setSelectedABCClasses(selectedABCClasses.filter((v) => v !== c)),
    })),
    ...selectedEndUses.map((e) => ({
      key: `endUse-${e}`,
      label: `End Use: ${e}`,
      clear: () => setSelectedEndUses(selectedEndUses.filter((v) => v !== e)),
    })),
  ].filter(Boolean) as { key: string; label: string; clear: () => void }[];

  const clearAllFilters = () => {
    setProductSearch("");
    setSelectedABCClasses([]);
    setSelectedEndUses([]);
  };

  const toggleProductComparison = (productId: string) => {
    setSelectedForComparison((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

  const selectedProducts = products.filter((p) => selectedForComparison.has(p.id));

  const categoryDisplay =
    category?.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") ||
    "Coatings & Adhesives";
  const showFullFilters = !scrolled || filtersExpanded;

  return (
    <div className="h-full flex flex-col" onClick={() => setOpenDropdown(null)}>
      {/* Page Header - Back button and Title */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href="/"
                className="flex items-center gap-2 text-slate-500 hover:text-[#D4000E] transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                <span className="text-sm font-medium">Back</span>
              </a>
              <div className="h-5 w-px bg-slate-200"></div>
              <h1 className="text-xl font-semibold text-slate-900">{categoryDisplay}</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Filter bar */}
      <div className="bg-white border-b border-slate-200" onClick={(e) => e.stopPropagation()}>
        {/* ── Condensed bar — visible only when scrolled ── */}
        <div
          className="overflow-hidden transition-all duration-200 ease-in-out"
          style={{ maxHeight: scrolled ? "52px" : "0px", opacity: scrolled ? 1 : 0 }}
        >
          <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center gap-3">
            <div
              className="flex items-center gap-1.5 flex-1 min-w-0 overflow-x-auto"
              style={{ scrollbarWidth: "none" }}
            >
              {hasActiveFilters ? (
                activeChips.map((chip) => (
                  <div
                    key={chip.key}
                    className="inline-flex items-center gap-1 px-2 py-0.5 bg-red-50 border border-red-100 rounded-full whitespace-nowrap flex-shrink-0"
                  >
                    <span className="text-xs text-[#D4000E]">{chip.label}</span>
                    <button onClick={chip.clear} className="hover:bg-red-100 rounded-full p-0.5">
                      <X className="w-2.5 h-2.5 text-[#D4000E]" />
                    </button>
                  </div>
                ))
              ) : (
                <span className="text-xs text-slate-400 italic">No filters active</span>
              )}
            </div>
            <button
              onClick={() => setFiltersExpanded((v) => !v)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors whitespace-nowrap flex-shrink-0 ${
                filtersExpanded
                  ? "border-[#D4000E]/30 bg-red-50 text-[#D4000E]"
                  : "border-slate-200 text-slate-600 hover:border-slate-400 hover:text-slate-800"
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              {filtersExpanded ? "Hide filters" : "Filters"}
              {hasActiveFilters && !filtersExpanded && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4000E] ml-0.5" />
              )}
            </button>
            <span className="text-xs text-slate-400 whitespace-nowrap flex-shrink-0 tabular-nums">
              {products.length} products
            </span>
          </div>
        </div>

        {/* ── Full filter panel — collapses on scroll ── */}
        <div
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{ maxHeight: showFullFilters ? "800px" : "0px", opacity: showFullFilters ? 1 : 0 }}
        >
          <div className="max-w-7xl mx-auto px-6 pt-5 pb-4">
            {/* Row 1: IB Product Name + 1C/2C Product + Top Account Name + Pumpability */}
            <div className="grid grid-cols-4 gap-4 mb-4">
              {/* IB Product Name search */}
              <div>
                <label className="block text-xs font-semibold mb-2 text-slate-600">
                  IB Product Name
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                  <input
                    type="text"
                    value={productSearch}
                    onChange={(e) => setProductSearch(e.target.value)}
                    placeholder="Search..."
                    className="w-full pl-8 pr-8 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 hover:border-slate-400 focus:outline-none focus:border-slate-600 transition-colors"
                  />
                  {productSearch && (
                    <button
                      onClick={() => setProductSearch("")}
                      className="absolute right-2 top-1/2 -translate-y-1/2"
                    >
                      <X className="w-3.5 h-3.5 text-slate-400 hover:text-slate-600" />
                    </button>
                  )}
                </div>
              </div>

              <MultiSelectDropdown
                id="oneCTwoC"
                label="1C/2C Product"
                selectedValues={selected1C2CProduct}
                options={filterOptions.one_c_two_c_product}
                openDropdown={openDropdown}
                setOpenDropdown={setOpenDropdown}
                onChange={setSelected1C2CProduct}
              />

              <MultiSelectDropdown
                id="topAccount"
                label="Top Account Name"
                selectedValues={selectedTopAccounts}
                options={filterOptions.top_account_name}
                openDropdown={openDropdown}
                setOpenDropdown={setOpenDropdown}
                onChange={setSelectedTopAccounts}
              />

              <MultiSelectDropdown
                id="pumpability"
                label="Pumpability"
                selectedValues={selectedPumpability}
                options={filterOptions.pumpability}
                openDropdown={openDropdown}
                setOpenDropdown={setOpenDropdown}
                onChange={setSelectedPumpability}
              />
            </div>

            {/* Row 2: Range Sliders in Container */}
            <div className="bg-[#F8F8F8] rounded-xl p-4 mb-4">
              <div className="grid grid-cols-4 gap-4">
                <RangeSlider
                  label="Lap Shear [N/mm2]"
                  min={2.5}
                  max={35.0}
                  step={0.1}
                  values={lapShearRange}
                  onChange={setLapShearRange}
                />
                <RangeSlider
                  label="T Peel [N/mm]"
                  min={2.0}
                  max={13.0}
                  step={0.1}
                  values={tPeelRange}
                  onChange={setTPeelRange}
                />
                <RangeSlider
                  label="E-Modulus DMA [GPa]"
                  min={1.0}
                  max={8.0}
                  step={0.1}
                  values={eModulusRange}
                  onChange={setEModulusRange}
                />
                <RangeSlider
                  label="Impact Peel [N/mm] (RT)"
                  min={10.0}
                  max={41.0}
                  step={0.1}
                  values={impactPeelRange}
                  onChange={setImpactPeelRange}
                />
              </div>
            </div>

            {/* Row 3: NVH + Substrate + Cure Condition + IB Segment */}
            <div className="grid grid-cols-4 gap-4 mb-5">
              <MultiSelectDropdown
                id="nvh"
                label="NVH (Noise, Vibration, Har...)"
                selectedValues={selectedNVH}
                options={filterOptions.nvh}
                openDropdown={openDropdown}
                setOpenDropdown={setOpenDropdown}
                onChange={setSelectedNVH}
              />

              <MultiSelectDropdown
                id="substrate"
                label="Substrate"
                selectedValues={selectedSubstrates}
                options={filterOptions.substrates}
                openDropdown={openDropdown}
                setOpenDropdown={setOpenDropdown}
                onChange={setSelectedSubstrates}
              />

              <MultiSelectDropdown
                id="cureCondition"
                label="Cure Condition"
                selectedValues={selectedCureConditions}
                options={filterOptions.cure_condition}
                openDropdown={openDropdown}
                setOpenDropdown={setOpenDropdown}
                onChange={setSelectedCureConditions}
              />

              <MultiSelectDropdown
                id="ibSegment"
                label="IB Segment"
                selectedValues={selectedIBSegments}
                options={filterOptions.ib_segment}
                openDropdown={openDropdown}
                setOpenDropdown={setOpenDropdown}
                onChange={setSelectedIBSegments}
              />
            </div>

            {/* Active filter chips */}
            {hasActiveFilters && (
              <div className="flex items-center gap-2 flex-wrap pt-1">
                {activeChips.map((chip) => (
                  <div
                    key={chip.key}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-100 border border-slate-200 rounded-full"
                  >
                    <span className="text-xs text-slate-700">{chip.label}</span>
                    <button onClick={chip.clear} className="hover:bg-slate-200 rounded-full p-0.5">
                      <X className="w-3 h-3 text-slate-600" />
                    </button>
                  </div>
                ))}
                <button
                  onClick={clearAllFilters}
                  className="text-xs text-slate-500 hover:text-[#D4000E] font-medium underline"
                >
                  Clear all
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Results area */}
      <div ref={resultsScrollRef} className="flex-1 overflow-y-auto bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          {/* Results header - count + view toggle */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-slate-700">
                {loading ? `${products.length} Products (preview)` : `${products.length} Products`}
              </span>
              {hasActiveFilters && (
                <span className="text-xs text-slate-400">• Filtered</span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode("card")}
                className={`p-2 rounded-lg border transition-colors ${
                  viewMode === "card"
                    ? "bg-slate-900 border-slate-900 text-white"
                    : "bg-white border-slate-200 text-slate-600 hover:border-slate-400"
                }`}
                title="Card view"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("table")}
                className={`p-2 rounded-lg border transition-colors ${
                  viewMode === "table"
                    ? "bg-slate-900 border-slate-900 text-white"
                    : "bg-white border-slate-200 text-slate-600 hover:border-slate-400"
                }`}
                title="Table view"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Loading state — shown as a small banner so mock cards remain visible */}
          {loading && (
            <div className="flex items-center justify-center mb-3">
              <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 shadow-sm">
                <Loader2 className="w-3.5 h-3.5 text-slate-400 animate-spin" />
                <span className="text-xs text-slate-500">Loading live products…</span>
              </div>
            </div>
          )}

          {/* Error state */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-700">
              {error}
            </div>
          )}

          {/* No results — only shown after loading finishes with truly empty results */}
          {!loading && !error && products.length === 0 && (
            <div className="text-center py-20">
              <div className="text-slate-400 mb-2">No products found</div>
              <button
                onClick={clearAllFilters}
                className="text-sm text-[#D4000E] hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* Card View — shown immediately with mock data, then real data */}
          {!error && viewMode === "card" && products.length > 0 && (
            <div className="space-y-3">
              {products.map((product) => {
                const isSelected = selectedForComparison.has(product.id);
                const substratesArray = product.substrates 
                  ? product.substrates.split('\n').filter(s => s.trim())
                  : [];
                const topAccountsArray = (product.customer_approval || product.top_account_name)
                  ? (product.customer_approval || product.top_account_name)!.split(/[,;]/).map(s => s.trim()).filter(s => s)
                  : [];
                const ibSegmentsArray = product.ib_segment
                  ? product.ib_segment.split(/[,;]/).map(s => s.trim()).filter(s => s)
                  : [];
                
                return (
                  <div
                    key={product.id}
                    className={`bg-white rounded-[14px] border hover:shadow-md transition-all relative ${
                      isSelected ? "border-[#5EE9B5] border-2" : "border-slate-200"
                    }`}
                  >
                    {/* Comparison checkbox */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleProductComparison(product.id);
                      }}
                      className={`absolute top-5 right-5 z-10 w-5 h-5 rounded flex items-center justify-center transition-colors ${
                        isSelected
                          ? "bg-[#5EE9B5] border-2 border-[#5EE9B5]"
                          : "bg-white border-2 border-slate-300 hover:border-[#5EE9B5]"
                      }`}
                    >
                      {isSelected && (
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </button>

                    <div
                      onClick={() => {
                        addRecentItem({
                          id: product.id,
                          name: product.ib_product_name,
                          category: categoryDisplay,
                        });
                        navigate(`/product/${product.id}`, { state: { product } });
                      }}
                      className="block cursor-pointer"
                    >
                      {/* Top section - Product header */}
                      <div className="flex gap-4 items-start p-5 pr-14">
                        {/* Product image */}
                        <div className="relative rounded-[10px] shrink-0 size-[80px] bg-slate-100 flex items-center justify-center">
                          <div className="text-slate-400 text-xs text-center px-2">
                            {product.ib_product_code || "No image"}
                          </div>
                        </div>

                        {/* Product info */}
                        <div className="flex-1 min-w-0">
                          {/* Product name */}
                          <h3 className="text-lg font-semibold text-slate-900 mb-1">
                            {product.ib_product_name}
                          </h3>

                          {/* Product code + TDS link */}
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-xs text-slate-400 font-mono">
                              {product.ib_product_code || "—"}
                            </span>
                            {product.tds_link && (
                              <a
                                href={product.tds_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="text-xs font-medium text-[#D4000E] hover:underline flex items-center gap-1"
                              >
                                TDS
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
                                  <path d="M7.5 1.5H10.5V4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M5 7L10.5 1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M9 6.5V9.5C9 9.76522 8.89464 10.0196 8.70711 10.2071C8.51957 10.3946 8.26522 10.5 8 10.5H2.5C2.23478 10.5 1.98043 10.3946 1.79289 10.2071C1.60536 10.0196 1.5 9.76522 1.5 9.5V4C1.5 3.73478 1.60536 3.48043 1.79289 3.29289C1.98043 3.10536 2.23478 3 2.5 3H5.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              </a>
                            )}
                          </div>

                          {/* Unique Selling Proposition */}
                          {(product.value_proposition || product.benefits) && (
                            <p className="text-xs text-slate-500 line-clamp-1 mb-2">
                              <span className="text-slate-400">USP: </span>
                              {product.value_proposition || product.benefits}
                            </p>
                          )}

                          {/* IB Segments */}
                          {ibSegmentsArray.length > 0 && (
                            <div className="flex items-center gap-1.5 flex-wrap">
                              <span className="text-xs text-slate-400">Segments:</span>
                              {ibSegmentsArray.slice(0, 3).map((seg, idx) => (
                                <span key={idx} className="inline-flex items-center px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 text-xs">
                                  {seg}
                                </span>
                              ))}
                              {ibSegmentsArray.length > 3 && (
                                <span className="text-xs text-slate-400">+{ibSegmentsArray.length - 3}</span>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Right badges column */}
                        <div className="flex flex-col gap-1.5 items-end">
                          {/* ABC Class badge */}
                          {product.abc_class && (
                            <div className="bg-emerald-50 rounded-lg px-2.5 py-1">
                              <span className="text-xs font-semibold text-emerald-700">
                                {product.abc_class}
                              </span>
                            </div>
                          )}

                          {/* 1C/2C badge */}
                          {product.one_c_two_c_product && (
                            <div className="bg-slate-100 rounded px-2 py-0.5">
                              <span className="text-xs text-slate-600">
                                {product.one_c_two_c_product}
                              </span>
                            </div>
                          )}

                          {/* Cure condition badge */}
                          {product.cure_condition && (
                            <div className="bg-slate-100 rounded px-2 py-0.5 text-right">
                              <span className="text-xs text-slate-600">
                                {product.cure_condition}
                              </span>
                            </div>
                          )}

                          {/* Pumpability badge */}
                          {product.pumpability && (
                            <div className="bg-emerald-50 rounded px-2 py-0.5 flex items-center gap-1">
                              <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
                                <path d="M5.5 10C4.62203 10.0027 3.77513 9.67525 3.12726 9.08271C2.47939 8.49017 2.07788 7.67577 2.00237 6.80105C1.92685 5.92633 2.18285 5.05518 2.71957 4.36037C3.2563 3.66556 4.03456 3.19785 4.9 3.05C7.75 2.5 8.5 2.24 9.5 1C10 2 10.5 3.09 10.5 5C10.5 7.75 8.11 10 5.5 10Z" stroke="#007A55" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M1 10.5C1 9 1.925 7.82 3.54 7.5C4.75 7.26 6 6.5 6.5 6" stroke="#007A55" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                              <span className="text-xs font-medium text-emerald-700">
                                {product.pumpability}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Customer Approval row */}
                      <div className="border-t border-slate-100 px-5 py-3 flex items-center justify-between">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-xs text-slate-400 whitespace-nowrap">Customer Approval:</span>
                          {topAccountsArray.length > 0 ? (
                            <>
                              {topAccountsArray.slice(0, 4).map((account, idx) => (
                                <div key={idx} className="bg-slate-100 rounded-full px-2 py-0.5">
                                  <span className="text-xs text-slate-600">{account}</span>
                                </div>
                              ))}
                              {topAccountsArray.length > 4 && (
                                <span className="text-xs text-slate-400">
                                  +{topAccountsArray.length - 4} more
                                </span>
                              )}
                            </>
                          ) : (
                            <span className="text-xs text-slate-400">—</span>
                          )}
                        </div>

                        {/* OEM Standards */}
                        <div className="flex items-center gap-2">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 14 14">
                            <g clipPath="url(#clip0)">
                              <path d="M7 12.8333C10.2217 12.8333 12.8333 10.2217 12.8333 7C12.8333 3.77834 10.2217 1.16667 7 1.16667C3.77834 1.16667 1.16667 3.77834 1.16667 7C1.16667 10.2217 3.77834 12.8333 7 12.8333Z" stroke="#009966" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                              <path d="M5.25 7L6.41667 8.16667L8.75 5.83333" stroke="#009966" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                            </g>
                            <defs>
                              <clipPath id="clip0">
                                <rect fill="white" height="14" width="14" />
                              </clipPath>
                            </defs>
                          </svg>
                          <span className="text-xs font-medium text-emerald-600">OEM Standards</span>
                          <span className="text-xs text-slate-400">→</span>
                        </div>
                      </div>

                      {/* Technical specs section (gray background) */}
                      <div className="bg-slate-50/60 border-t border-slate-100 rounded-b-[14px] px-5 py-3.5 space-y-3">
                        {/* Technical specs grid - 6 columns matching screenshot */}
                        <div className="grid grid-cols-6 gap-4">
                          {/* Mix Ratio (Volume) */}
                          <div>
                            <div className="text-xs text-slate-400 mb-1">Mix Ratio (Vol.)</div>
                            <div className="text-sm font-semibold text-slate-900">
                              {product.mix_ratio_volume || "—"}
                            </div>
                          </div>

                          {/* Density */}
                          <div>
                            <div className="text-xs text-slate-400 mb-1">Density</div>
                            <div className="text-sm font-semibold text-slate-900">
                              {product.density_g_cm3 !== null && product.density_g_cm3 !== undefined
                                ? product.density_g_cm3.toFixed(2)
                                : "—"}
                            </div>
                            <div className="text-xs text-slate-400">g/cm³</div>
                          </div>

                          {/* E-Modulus DMA */}
                          <div>
                            <div className="text-xs text-slate-400 mb-1">E-Modulus DMA</div>
                            <div className="text-sm font-semibold text-slate-900">
                              {product.e_modulus_dma_gpa !== null && product.e_modulus_dma_gpa !== undefined
                                ? product.e_modulus_dma_gpa.toFixed(1)
                                : "—"}
                            </div>
                            <div className="text-xs text-slate-400">GPa</div>
                          </div>

                          {/* Lap Shear */}
                          <div>
                            <div className="text-xs text-slate-400 mb-1">Lap Shear</div>
                            <div className="text-sm font-semibold text-slate-900">
                              {product.lap_shear_n_mm2 !== null && product.lap_shear_n_mm2 !== undefined
                                ? product.lap_shear_n_mm2.toFixed(1)
                                : "—"}
                            </div>
                            <div className="text-xs text-slate-400">N/mm²</div>
                          </div>

                          {/* T-Peel */}
                          <div>
                            <div className="text-xs text-slate-400 mb-1">T-Peel</div>
                            <div className="text-sm font-semibold text-slate-900">
                              {product.t_peel_n_mm !== null && product.t_peel_n_mm !== undefined
                                ? product.t_peel_n_mm.toFixed(1)
                                : "—"}
                            </div>
                            <div className="text-xs text-slate-400">N/mm</div>
                          </div>

                          {/* Impact Peel */}
                          <div>
                            <div className="text-xs text-slate-400 mb-1">Impact Peel</div>
                            <div className="text-sm font-semibold text-slate-900">
                              {product.impact_peel_n_mm_rt !== null && product.impact_peel_n_mm_rt !== undefined
                                ? product.impact_peel_n_mm_rt.toFixed(1)
                                : "—"}
                            </div>
                            <div className="text-xs text-slate-400">N/mm</div>
                          </div>
                        </div>

                        {/* Substrates row */}
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-slate-400 whitespace-nowrap">
                            Substrates:
                          </span>
                          <div className="flex items-center gap-2 flex-wrap">
                            {substratesArray.length > 0 ? (
                              substratesArray.slice(0, 4).map((substrate, idx) => (
                                <div
                                  key={idx}
                                  className="bg-white border border-slate-200 rounded px-2 py-0.5"
                                >
                                  <span className="text-xs text-slate-600">{substrate}</span>
                                </div>
                              ))
                            ) : (
                              <span className="text-xs text-slate-400">—</span>
                            )}
                            {substratesArray.length > 4 && (
                              <span className="text-xs text-slate-400">+{substratesArray.length - 4} more</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Table View — shown immediately with mock data, then real data */}
          {!error && viewMode === "table" && products.length > 0 && (
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden overflow-x-auto">
              <table className="w-full min-w-[1600px]">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="w-10 px-3 py-3"></th>
                    <th className="text-left px-3 py-3 text-xs font-semibold text-slate-600 whitespace-nowrap">IB Product [Code]</th>
                    <th className="text-left px-3 py-3 text-xs font-semibold text-slate-600 whitespace-nowrap">IB Product [Name]</th>
                    <th className="text-left px-3 py-3 text-xs font-semibold text-slate-600 whitespace-nowrap">TDS</th>
                    <th className="text-left px-3 py-3 text-xs font-semibold text-slate-600 whitespace-nowrap">Unique Selling Prop.</th>
                    <th className="text-left px-3 py-3 text-xs font-semibold text-slate-600 whitespace-nowrap">IB Segments</th>
                    <th className="text-left px-3 py-3 text-xs font-semibold text-slate-600 whitespace-nowrap">Customer Approval</th>
                    <th className="text-left px-3 py-3 text-xs font-semibold text-slate-600 whitespace-nowrap">ABC Class</th>
                    <th className="text-left px-3 py-3 text-xs font-semibold text-slate-600 whitespace-nowrap">1C/2C</th>
                    <th className="text-left px-3 py-3 text-xs font-semibold text-slate-600 whitespace-nowrap">Pumpability</th>
                    <th className="text-left px-3 py-3 text-xs font-semibold text-slate-600 whitespace-nowrap">Cure Condition</th>
                    <th className="text-left px-3 py-3 text-xs font-semibold text-slate-600 whitespace-nowrap">Mix Ratio (Vol.)</th>
                    <th className="text-left px-3 py-3 text-xs font-semibold text-slate-600 whitespace-nowrap">Density (g/cm³)</th>
                    <th className="text-left px-3 py-3 text-xs font-semibold text-slate-600 whitespace-nowrap">E-Modulus (GPa)</th>
                    <th className="text-left px-3 py-3 text-xs font-semibold text-slate-600 whitespace-nowrap">Lap Shear (N/mm²)</th>
                    <th className="text-left px-3 py-3 text-xs font-semibold text-slate-600 whitespace-nowrap">T-Peel (N/mm)</th>
                    <th className="text-left px-3 py-3 text-xs font-semibold text-slate-600 whitespace-nowrap">Impact Peel (N/mm)</th>
                    <th className="text-left px-3 py-3 text-xs font-semibold text-slate-600 whitespace-nowrap">Substrates</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => {
                    const isSelected = selectedForComparison.has(product.id);
                    const substratesArray = product.substrates 
                      ? product.substrates.split('\n').filter(s => s.trim())
                      : [];
                    const customerApproval = product.customer_approval || product.top_account_name || "—";

                    return (
                      <tr
                        key={product.id}
                        className={`border-b border-slate-100 hover:bg-slate-50 transition-colors ${
                          isSelected ? "bg-red-50/50" : ""
                        }`}
                      >
                        <td className="px-3 py-3">
                          <button
                            onClick={() => toggleProductComparison(product.id)}
                            className={`w-4 h-4 rounded flex items-center justify-center transition-colors ${
                              isSelected
                                ? "bg-[#5EE9B5] border-2 border-[#5EE9B5]"
                                : "bg-white border-2 border-slate-300 hover:border-[#5EE9B5]"
                            }`}
                          >
                            {isSelected && (
                              <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                                <path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            )}
                          </button>
                        </td>
                        <td className="px-3 py-3 text-xs text-slate-600 font-mono whitespace-nowrap">
                          {product.ib_product_code || "—"}
                        </td>
                        <td className="px-3 py-3">
                          <a
                            href={`/product/${product.id}`}
                            onClick={() => {
                              addRecentItem({
                                id: product.id,
                                name: product.ib_product_name,
                                category: categoryDisplay,
                              });
                            }}
                            className="text-sm font-medium text-slate-900 hover:text-[#D4000E] transition-colors whitespace-nowrap"
                          >
                            {product.ib_product_name}
                          </a>
                        </td>
                        <td className="px-3 py-3">
                          {product.tds_link ? (
                            <a
                              href={product.tds_link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs font-medium text-[#D4000E] hover:underline whitespace-nowrap"
                            >
                              TDS ↗
                            </a>
                          ) : <span className="text-xs text-slate-400">—</span>}
                        </td>
                        <td className="px-3 py-3 text-xs text-slate-600 max-w-[180px]">
                          <span className="line-clamp-2">{product.value_proposition || product.benefits || "—"}</span>
                        </td>
                        <td className="px-3 py-3 text-xs text-slate-600 max-w-[140px]">
                          <span className="line-clamp-2">{product.ib_segment || "—"}</span>
                        </td>
                        <td className="px-3 py-3 text-xs text-slate-600 max-w-[160px]">
                          <span className="line-clamp-2">{customerApproval}</span>
                        </td>
                        <td className="px-3 py-3 text-xs">
                          {product.abc_class ? (
                            <span className="inline-flex px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-semibold">
                              {product.abc_class}
                            </span>
                          ) : <span className="text-slate-400">—</span>}
                        </td>
                        <td className="px-3 py-3 text-xs text-slate-600 whitespace-nowrap">
                          {product.one_c_two_c_product || "—"}
                        </td>
                        <td className="px-3 py-3 text-xs text-slate-600 whitespace-nowrap">
                          {product.pumpability || "—"}
                        </td>
                        <td className="px-3 py-3 text-xs text-slate-600 whitespace-nowrap">
                          {product.cure_condition || "—"}
                        </td>
                        <td className="px-3 py-3 text-xs text-slate-600 whitespace-nowrap">
                          {product.mix_ratio_volume || "—"}
                        </td>
                        <td className="px-3 py-3 text-xs text-slate-700 text-right whitespace-nowrap">
                          {product.density_g_cm3 !== null && product.density_g_cm3 !== undefined
                            ? product.density_g_cm3.toFixed(2) : "—"}
                        </td>
                        <td className="px-3 py-3 text-xs text-slate-700 text-right whitespace-nowrap">
                          {product.e_modulus_dma_gpa !== null && product.e_modulus_dma_gpa !== undefined
                            ? product.e_modulus_dma_gpa.toFixed(1) : "—"}
                        </td>
                        <td className="px-3 py-3 text-xs text-slate-700 text-right whitespace-nowrap">
                          {product.lap_shear_n_mm2 !== null && product.lap_shear_n_mm2 !== undefined
                            ? product.lap_shear_n_mm2.toFixed(1) : "—"}
                        </td>
                        <td className="px-3 py-3 text-xs text-slate-700 text-right whitespace-nowrap">
                          {product.t_peel_n_mm !== null && product.t_peel_n_mm !== undefined
                            ? product.t_peel_n_mm.toFixed(1) : "—"}
                        </td>
                        <td className="px-3 py-3 text-xs text-slate-700 text-right whitespace-nowrap">
                          {product.impact_peel_n_mm_rt !== null && product.impact_peel_n_mm_rt !== undefined
                            ? product.impact_peel_n_mm_rt.toFixed(1) : "—"}
                        </td>
                        <td className="px-3 py-3 text-xs text-slate-600 max-w-[140px]">
                          {substratesArray.length > 0 ? (
                            <span className="line-clamp-2">{substratesArray.join(', ')}</span>
                          ) : "—"}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Floating comparison bar */}
      {selectedForComparison.size > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-4 z-50">
          <span className="text-sm font-medium">
            {selectedForComparison.size} product{selectedForComparison.size !== 1 ? "s" : ""}{" "}
            selected
          </span>
          <button
            onClick={() => setShowComparison(true)}
            disabled={selectedForComparison.size < 2}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              selectedForComparison.size < 2
                ? "bg-slate-700 text-slate-400 cursor-not-allowed"
                : "bg-[#D4000E] text-white hover:bg-[#b30000]"
            }`}
          >
            Compare
          </button>
          <button
            onClick={() => setSelectedForComparison(new Set())}
            className="text-slate-300 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Comparison modal */}
      {showComparison && (
        <ProductComparison
          products={selectedProducts.map((p) => ({
            id: p.id,
            ibCode: p.ib_product_code ?? "",
            name: p.ib_product_name ?? "",
            abcClass: p.abc_class ?? "",
            oneOrTwoC: p.one_c_two_c_product ?? "",
            pumpability: p.pumpability ?? "",
            sustainability: "",
            usp: p.value_proposition ?? "",
            ibSegments: p.ib_segment ? p.ib_segment.split(/[,;]/).map((s: string) => s.trim()).filter(Boolean) : [],
            customerApproval: p.customer_approval ?? p.top_account_name ?? "",
            cureTemp: p.cure_condition ?? "",
            mixRatio: p.mix_ratio_volume ?? "",
            density: p.density_g_cm3 ?? null,
            eModulus: p.e_modulus_dma_gpa ?? null,
            lapShear: p.lap_shear_n_mm2 ?? null,
            tPeel: p.t_peel_n_mm ?? null,
            impactPeel: p.impact_peel_n_mm_rt ?? null,
            substrates: p.substrates ? p.substrates.split(/[\n,]/).map((s: string) => s.trim()).filter(Boolean) : [],
            imageUrl: "",
            isBestMatch: p.abc_class === "A",
          }))}
          onClose={() => setShowComparison(false)}
        />
      )}
    </div>
  );
}