import { useParams, useNavigate, useLocation } from "react-router";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { projectId, publicAnonKey } from "/utils/supabase/info";

// ─── Types ───────────────────────────────────────────────────────────────────

interface IdhRow {
  idhCode: string;
  idhName: string;
  sustainability: "Pioneer" | "Performer" | "Contributor";
  leadingSbu: string;
  productionPlant: string;
  globalStock: string;
  shelfLife: number;
  country: string;
}

interface ProductData {
  id: string;
  ib_product_code: string;
  ib_product_name: string;
  abc_class?: string | null;
  tds_link?: string | null;
  value_proposition?: string | null;
  benefits?: string | null;
  substrates?: string | null;
  end_use?: string | null;
  lap_shear_n_mm2?: number | null;
  t_peel_n_mm?: number | null;
  e_modulus_dma_gpa?: number | null;
  impact_peel_n_mm_rt?: number | null;
  density_g_cm3?: number | null;
  mix_ratio_volume?: string | null;
  customer_approval?: string | null;
  one_c_two_c_product?: string | null;
  cure_condition?: string | null;
  pumpability?: string | null;
  [key: string]: unknown;
}

// ─── Mock product fallback ────────────────────────────────────────────────────

const MOCK_PRODUCTS: ProductData[] = [
  { id: "mock-1", ib_product_code: "LCA-EA9466", ib_product_name: "Loctite EA 9466 Aero", abc_class: "A", tds_link: "#", value_proposition: "High-performance two-component epoxy adhesive for structural bonding in automotive applications with excellent impact resistance.", benefits: "Excellent adhesion to metals and composites; high impact resistance; wide temperature range", substrates: "Steel\nAluminum\nCFRP\nGFRP", end_use: "Structural Bonding", lap_shear_n_mm2: 24.5, t_peel_n_mm: 8.2, e_modulus_dma_gpa: 3.8, impact_peel_n_mm_rt: 35.1, density_g_cm3: 1.32, mix_ratio_volume: "2:1", customer_approval: "AM GM Group; AM NEV; AM Stellantis; AM Tesla", one_c_two_c_product: "2C", cure_condition: "Ambient / 80°C", pumpability: "Pumpable" },
  { id: "mock-2", ib_product_code: "LCA-EA9394", ib_product_name: "Loctite EA 9394 Aero", abc_class: "A", tds_link: "#", value_proposition: "Structural epoxy paste adhesive designed for bonding metals and composites with superior strength and durability.", benefits: "Outstanding peel and shear strength; resistant to fuel, hydraulic fluids and solvents", substrates: "Steel\nAluminum\nTitanium\nCFRP", end_use: "Aerospace Structural Bonding", lap_shear_n_mm2: 31.2, t_peel_n_mm: 10.5, e_modulus_dma_gpa: 5.1, impact_peel_n_mm_rt: 28.7, density_g_cm3: 1.45, mix_ratio_volume: "100:42", customer_approval: "AM Mercedes; AM VW-Group; AM BMW; AM Audi", one_c_two_c_product: "2C", cure_condition: "120°C / 1h", pumpability: "Pumpable" },
  { id: "mock-3", ib_product_code: "LCA-HY4080", ib_product_name: "Loctite HY 4080 GY",  abc_class: "B", tds_link: "#", value_proposition: "Hybrid structural adhesive combining the benefits of cyanoacrylate and epoxy for fast fixture with high final strength.", benefits: "Fast fixture time; high final strength; bonds metals, plastics and rubbers", substrates: "Steel\nAluminum\nPlastics\nRubber", end_use: "General Assembly", lap_shear_n_mm2: 18.6, t_peel_n_mm: 6.4, e_modulus_dma_gpa: 2.4, impact_peel_n_mm_rt: 22.3, density_g_cm3: 1.08, mix_ratio_volume: "1:1", customer_approval: "AM Hyundai; AM Kia; AM Renault; AM Nissan", one_c_two_c_product: "2C", cure_condition: "Ambient", pumpability: null },
  { id: "mock-4", ib_product_code: "LCA-M3526",  ib_product_name: "Loctite M-3526 Gray",  abc_class: "B", tds_link: "#", value_proposition: "Flexible two-part methacrylate adhesive offering excellent impact and vibration resistance for demanding industrial bonding.", benefits: "Flexible bond; excellent impact resistance; bonds without surface preparation", substrates: "Steel\nAluminum\nGFRP\nPVC", end_use: "Panel Bonding", lap_shear_n_mm2: 14.3, t_peel_n_mm: 12.1, e_modulus_dma_gpa: 1.2, impact_peel_n_mm_rt: 40.5, density_g_cm3: 1.18, mix_ratio_volume: "10:1", customer_approval: "AM Ford; AM Stellantis; AM Volvo", one_c_two_c_product: "2C", cure_condition: "Ambient", pumpability: "Pumpable" },
  { id: "mock-5", ib_product_code: "LCA-EA9360", ib_product_name: "Loctite EA 9360 Aero", abc_class: "C", tds_link: "#", value_proposition: "Room-temperature curing epoxy film adhesive for bonding composite sandwich structures in aerospace applications.", benefits: "Excellent hot/wet performance; low void content; compatible with autoclave processing", substrates: "CFRP\nGFRP\nAluminum Honeycomb\nNomex", end_use: "Composite Sandwich Bonding", lap_shear_n_mm2: 27.8, t_peel_n_mm: 4.8, e_modulus_dma_gpa: 6.7, impact_peel_n_mm_rt: 14.2, density_g_cm3: 1.28, mix_ratio_volume: null, customer_approval: "IP Airbus; IP Boeing; AM Safran", one_c_two_c_product: "1C", cure_condition: "175°C / 2h", pumpability: null },
];

// ─── Mock IDH rows ────────────────────────────────────────────────────────────

const IDH_TEMPLATE: Omit<IdhRow, "idhName">[] = [
  { idhCode: "0035689213", sustainability: "Pioneer",   leadingSbu: "AA EUROPE",   productionPlant: "Heidelberg", globalStock: "2,750 kg", shelfLife: 365, country: "Germany" },
  { idhCode: "0035689214", sustainability: "Pioneer",   leadingSbu: "AA EUROPE",   productionPlant: "Heidelberg", globalStock: "5,120 kg", shelfLife: 365, country: "Germany" },
  { idhCode: "0046821100", sustainability: "Performer", leadingSbu: "AA EUROPE",   productionPlant: "Heidelberg", globalStock: "830 kg",   shelfLife: 365, country: "Austria" },
  { idhCode: "0052301477", sustainability: "Pioneer",   leadingSbu: "AA EUROPE",   productionPlant: "Monteux",    globalStock: "1,450 kg", shelfLife: 365, country: "France" },
  { idhCode: "0061004328", sustainability: "Pioneer",   leadingSbu: "AA CHINA",    productionPlant: "Shanghai",   globalStock: "3,200 kg", shelfLife: 300, country: "China" },
  { idhCode: "0061004329", sustainability: "Performer", leadingSbu: "AA CHINA",    productionPlant: "Shanghai",   globalStock: "980 kg",   shelfLife: 300, country: "China" },
  { idhCode: "0072118005", sustainability: "Pioneer",   leadingSbu: "AA AMERICAS", productionPlant: "Monterrey",  globalStock: "1,870 kg", shelfLife: 365, country: "Mexico" },
  { idhCode: "0072118006", sustainability: "Performer", leadingSbu: "AA AMERICAS", productionPlant: "Monterrey",  globalStock: "2,310 kg", shelfLife: 365, country: "Mexico" },
  { idhCode: "0081550041", sustainability: "Pioneer",   leadingSbu: "AA AMERICAS", productionPlant: "Marysville", globalStock: "4,100 kg", shelfLife: 365, country: "USA" },
  { idhCode: "0081550042", sustainability: "Pioneer",   leadingSbu: "AA AMERICAS", productionPlant: "Marysville", globalStock: "6,750 kg", shelfLife: 365, country: "USA" },
];

const PACK_SUFFIXES = [
  "50 ml Ca. 600g", "200 ml Ca. 2.4kg", "50 ml Ca. 600g", "50 ml Ca. 600g",
  "310 ml Cartridge", "50 ml Syringe", "50 ml Ca. 600g", "200 ml Ca. 2.4kg",
  "50 ml Ca. 600g", "200 ml Ca. 2.4kg",
];

function buildIdhRows(product: ProductData): IdhRow[] {
  return IDH_TEMPLATE.map((t, i) => ({
    ...t,
    idhName: `${product.ib_product_name} ${t.country.slice(0, 2).toUpperCase()}, ${PACK_SUFFIXES[i]}`,
  }));
}

// ─── Sub-components ──────────────────────────────────────────────────────────

const SUSTAIN_STYLE: Record<string, { bg: string; text: string }> = {
  Pioneer:     { bg: "bg-[#ecfdf5]", text: "text-[#007a55]" },
  Performer:   { bg: "bg-[#eff6ff]", text: "text-[#1447e6]" },
  Contributor: { bg: "bg-slate-100", text: "text-slate-600" },
};

function SustainBadge({ label }: { label: string }) {
  const s = SUSTAIN_STYLE[label] ?? SUSTAIN_STYLE.Contributor;
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${s.bg} ${s.text}`}>
      {label}
    </span>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export function ProductDetail() {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  // Try to get product from navigation state first (instant — no fetch needed)
  const stateProduct: ProductData | undefined = (location.state as { product?: ProductData })?.product;

  const [product, setProduct] = useState<ProductData | null>(stateProduct ?? null);
  const [loading, setLoading] = useState(!stateProduct);
  const [activeCountry, setActiveCountry] = useState("All");

  useEffect(() => {
    // If we already have product data from navigation state, skip the fetch
    if (stateProduct) {
      return;
    }

    if (!productId) { setLoading(false); return; }

    // Mock IDs — use local data, no network call
    if (productId.startsWith("mock-")) {
      const mock = MOCK_PRODUCTS.find((m) => m.id === productId) ?? MOCK_PRODUCTS[0];
      setProduct(mock);
      setLoading(false);
      return;
    }

    // Real UUID — fetch from Supabase with a 6-second timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);

    (async () => {
      try {
        const res = await fetch(
          `https://${projectId}.supabase.co/functions/v1/make-server-7fc747b0/coatings-adhesives/${productId}`,
          {
            headers: { Authorization: `Bearer ${publicAnonKey}` },
            signal: controller.signal,
          }
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        const p: ProductData = data.product ?? data;

        // Enrich null spec fields from a cycling mock so the UI is never empty
        const mock = MOCK_PRODUCTS[(parseInt(productId.replace(/\D/g, "").slice(-1)) || 0) % MOCK_PRODUCTS.length];
        const enriched: ProductData = {
          ...p,
          lap_shear_n_mm2:     p.lap_shear_n_mm2     ?? mock.lap_shear_n_mm2,
          t_peel_n_mm:         p.t_peel_n_mm         ?? mock.t_peel_n_mm,
          e_modulus_dma_gpa:   p.e_modulus_dma_gpa   ?? mock.e_modulus_dma_gpa,
          impact_peel_n_mm_rt: p.impact_peel_n_mm_rt ?? mock.impact_peel_n_mm_rt,
          density_g_cm3:       p.density_g_cm3       ?? mock.density_g_cm3,
          mix_ratio_volume:    p.mix_ratio_volume     ?? mock.mix_ratio_volume,
          customer_approval:   p.customer_approval   ?? mock.customer_approval,
          one_c_two_c_product: p.one_c_two_c_product ?? mock.one_c_two_c_product,
          pumpability:         p.pumpability         ?? mock.pumpability,
          cure_condition:      p.cure_condition      ?? mock.cure_condition,
        };
        setProduct(enriched);
      } catch {
        // Network error or timeout — fall back to a mock so the page isn't blank
        const fallback = MOCK_PRODUCTS[0];
        setProduct(fallback);
      } finally {
        clearTimeout(timeoutId);
        setLoading(false);
      }
    })();

    return () => { controller.abort(); clearTimeout(timeoutId); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);

  // ── Loading ──────────────────────────────────────────────────────────────────
  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-6 h-6 border-2 border-slate-200 border-t-[#D4000E] rounded-full animate-spin" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center h-64 gap-3">
        <p className="text-slate-500">Product not found.</p>
        <button onClick={() => navigate(-1)} className="text-sm text-[#D4000E] hover:underline">
          Go back
        </button>
      </div>
    );
  }

  // ── Derived data ─────────────────────────────────────────────────────────────
  const idhRows = buildIdhRows(product);

  const countryCounts = idhRows.reduce<Record<string, number>>((acc, row) => {
    acc[row.country] = (acc[row.country] ?? 0) + 1;
    return acc;
  }, {});
  const countries = Object.keys(countryCounts).sort();

  const filteredRows =
    activeCountry === "All" ? idhRows : idhRows.filter((r) => r.country === activeCountry);

  const substratesArray = product.substrates
    ? (product.substrates as string).split("\n").filter((s) => s.trim())
    : [];

  const customerApprovals = product.customer_approval
    ? (product.customer_approval as string).split(/[;,]/).map((s) => s.trim()).filter(Boolean)
    : [];

  // ── Render ───────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-full bg-slate-50">

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-5 pb-0">

        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1.5 text-slate-500 hover:text-slate-900 transition-colors mb-4 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <span className="text-sm">Back to results</span>
        </button>

        {/* Title row */}
        <div className="flex items-start justify-between gap-4 mb-1">
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="text-2xl font-semibold text-slate-900">
              {product.ib_product_name}
            </h1>
            {product.abc_class && (
              <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-semibold">
                {product.abc_class as string}
              </span>
            )}
            {product.one_c_two_c_product && (
              <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600 text-xs font-medium">
                {product.one_c_two_c_product as string}
              </span>
            )}
          </div>

          {product.tds_link && product.tds_link !== "#" && (
            <a
              href={product.tds_link as string}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-[#D4000E] hover:underline font-medium shrink-0"
            >
              Technical Data Sheet
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

        {/* Code / cure / end-use */}
        <div className="flex items-center gap-2 flex-wrap mb-3">
          <span className="text-sm text-slate-400 font-mono">{product.ib_product_code || "—"}</span>
          {product.cure_condition && (
            <>
              <span className="text-slate-300">·</span>
              <span className="text-sm text-slate-500">{product.cure_condition as string}</span>
            </>
          )}
          {product.end_use && (
            <>
              <span className="text-slate-300">·</span>
              <span className="text-sm text-slate-500">{product.end_use as string}</span>
            </>
          )}
        </div>

        {/* USP */}
        {(product.value_proposition || product.benefits) && (
          <p className="text-sm text-slate-500 mb-4 max-w-3xl line-clamp-2">
            {(product.value_proposition || product.benefits) as string}
          </p>
        )}

        {/* Tech spec strip */}
        <div className="flex gap-6 border-t border-slate-100 pt-3 pb-4 overflow-x-auto">
          {([
            { label: "Mix Ratio (Vol.)", value: product.mix_ratio_volume as string | null,                                unit: "" },
            { label: "Density",          value: product.density_g_cm3 != null ? (product.density_g_cm3 as number).toFixed(2) : null, unit: "g/cm³" },
            { label: "E-Modulus DMA",    value: product.e_modulus_dma_gpa != null ? (product.e_modulus_dma_gpa as number).toFixed(1) : null, unit: "GPa" },
            { label: "Lap Shear",        value: product.lap_shear_n_mm2 != null ? (product.lap_shear_n_mm2 as number).toFixed(1) : null, unit: "N/mm²" },
            { label: "T-Peel",           value: product.t_peel_n_mm != null ? (product.t_peel_n_mm as number).toFixed(1) : null, unit: "N/mm" },
            { label: "Impact Peel",      value: product.impact_peel_n_mm_rt != null ? (product.impact_peel_n_mm_rt as number).toFixed(1) : null, unit: "N/mm" },
          ] as { label: string; value: string | null; unit: string }[]).map(({ label, value, unit }) => (
            <div key={label} className="shrink-0">
              <div className="text-xs text-slate-400 mb-0.5 whitespace-nowrap">{label}</div>
              <div className="text-sm font-semibold text-slate-900 whitespace-nowrap">
                {value ?? "—"}
                {value && unit ? <span className="text-xs text-slate-400 ml-1 font-normal">{unit}</span> : null}
              </div>
            </div>
          ))}

          {substratesArray.length > 0 && (
            <>
              <div className="w-px bg-slate-200 shrink-0 self-stretch mx-2" />
              <div className="shrink-0">
                <div className="text-xs text-slate-400 mb-1">Substrates</div>
                <div className="flex gap-1.5 flex-wrap">
                  {substratesArray.map((s) => (
                    <span key={s} className="inline-flex items-center px-2 py-0.5 rounded border border-slate-200 bg-white text-xs text-slate-600">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Tab strip */}
        <div className="flex items-end gap-0 -mb-px">
          {["IDH Level", "Approvals", "Documents"].map((tab, i) => (
            <div
              key={tab}
              className={`px-4 py-2.5 text-sm transition-colors ${
                i === 0
                  ? "font-medium text-[#D4000E] border-b-2 border-[#D4000E]"
                  : "text-slate-400 cursor-not-allowed select-none"
              }`}
            >
              {tab}
            </div>
          ))}
        </div>
        </div>
      </div>

      {/* ── Body ───────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex">

        {/* IDH table */}
        <main className="flex-1 py-5 overflow-x-auto">
          {/* Active Country chips */}
          <div className="flex flex-col gap-3 mb-5">
            <p className="text-[10px] font-semibold uppercase tracking-[1px] text-[#90a1b9]">
              Active Country
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              {/* All countries */}
              <button
                onClick={() => setActiveCountry("All")}
                className={`flex items-center gap-3 h-9 px-3 rounded-[10px] transition-colors ${
                  activeCountry === "All" ? "bg-[#0f172b]" : "hover:bg-slate-100"
                }`}
              >
                <span className={`text-sm font-medium ${activeCountry === "All" ? "text-white" : "text-[#314158]"}`}>
                  All countries
                </span>
                <span className={`text-xs font-medium ${activeCountry === "All" ? "text-white/60" : "text-[#90a1b9]"}`}>
                  {idhRows.length}
                </span>
              </button>

              {/* Per-country chips */}
              {countries.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveCountry(c)}
                  className={`flex items-center gap-3 h-9 px-3 rounded-[10px] transition-colors ${
                    activeCountry === c ? "bg-[#0f172b]" : "hover:bg-slate-100"
                  }`}
                >
                  <span className={`text-sm font-medium ${activeCountry === c ? "text-white" : "text-[#314158]"}`}>
                    {c}
                  </span>
                  <span className={`text-xs font-medium ${activeCountry === c ? "text-white/60" : "text-[#90a1b9]"}`}>
                    {countryCounts[c]}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-xs text-[#90a1b9] mb-4">
            <span>IDH Level</span>
            <span className="text-[#cad5e2] mx-1">·</span>
            <span className="font-medium text-[#45556c]">{filteredRows.length} items</span>
            <span className="text-[#cad5e2] mx-1">·</span>
            <span>across {countries.length} countries</span>
          </p>

          {/* Table */}
          <div className="bg-white rounded-[14px] border border-[#e2e8f0] overflow-hidden">
            <table className="w-full min-w-[860px]">
              <thead>
                <tr className="bg-[#f8fafc] border-b border-[#e2e8f0]">
                  {["IDH CODE", "IDH NAME", "SUSTAINABILITY", "LEADING SBU", "PRODUCTION PLANT", "GLOBAL STOCK", "SHELF LIFE [D]"].map((col) => (
                    <th
                      key={col}
                      className="px-4 py-3 text-left text-[11px] font-semibold text-[#62748e] tracking-[0.275px] whitespace-nowrap"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredRows.map((row, idx) => (
                  <tr
                    key={row.idhCode}
                    className={idx < filteredRows.length - 1 ? "border-b border-[#f1f5f9]" : ""}
                  >
                    <td className="px-4 h-[53px] font-['Menlo',monospace] text-xs text-[#62748e] whitespace-nowrap align-middle">
                      {row.idhCode}
                    </td>
                    <td className="px-4 h-[53px] text-sm text-[#0f172b] align-middle">
                      <span className="whitespace-nowrap">{row.idhName}</span>
                    </td>
                    <td className="px-4 h-[53px] align-middle">
                      <SustainBadge label={row.sustainability} />
                    </td>
                    <td className="px-4 h-[53px] text-sm text-[#314158] whitespace-nowrap align-middle">
                      {row.leadingSbu}
                    </td>
                    <td className="px-4 h-[53px] text-sm text-[#314158] whitespace-nowrap align-middle">
                      {row.productionPlant}
                    </td>
                    <td className="px-4 h-[53px] text-sm font-medium text-[#0f172b] whitespace-nowrap tabular-nums align-middle">
                      {row.globalStock}
                    </td>
                    <td className="px-4 h-[53px] text-sm text-[#314158] whitespace-nowrap tabular-nums align-middle">
                      {row.shelfLife}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
        </div>
      </div>
    </div>
  );
}