import { X, ExternalLink, CheckCircle2, Leaf } from "lucide-react";

type Product = {
  id: string;
  ibCode: string;
  name: string;
  abcClass: string;
  oneOrTwoC: string;
  pumpability: string;
  sustainability: string;
  usp: string;
  ibSegments: string[];
  customerApproval: string;
  cureTemp: string;
  mixRatio: string;
  density: number;
  eModulus: number;
  lapShear: number;
  tPeel: number;
  impactPeel: number;
  substrates: string[];
  imageUrl: string;
  isBestMatch: boolean;
};

const abcClassColors: Record<string, { bg: string; text: string }> = {
  A1: { bg: "bg-emerald-50", text: "text-emerald-700" },
  A2: { bg: "bg-teal-50", text: "text-teal-700" },
  A4: { bg: "bg-blue-50", text: "text-blue-700" },
  B1: { bg: "bg-amber-50", text: "text-amber-700" },
  B2: { bg: "bg-slate-100", text: "text-slate-500" },
};

type Props = {
  products: Product[];
  onClose: () => void;
};

export function ProductComparison({ products, onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-7xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-slate-900">
            Product Comparison ({products.length} products)
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-slate-500" />
          </button>
        </div>

        {/* Comparison Table */}
        <div className="flex-1 overflow-auto">
          <table className="w-full">
            <thead className="bg-slate-50 sticky top-0 z-10">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider border-r border-slate-200 bg-slate-50 sticky left-0 z-20 w-48">
                  Attribute
                </th>
                {products.map((product) => (
                  <th
                    key={product.id}
                    className="px-4 py-3 text-left text-sm font-medium text-slate-900 border-r border-slate-200 min-w-[280px]"
                  >
                    <div className="flex flex-col gap-2">
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-20 h-20 object-cover rounded-lg bg-slate-100 mx-auto"
                      />
                      <div>
                        <div className="font-semibold">{product.name}</div>
                        <div className="text-xs text-slate-500 font-mono">
                          {product.ibCode}
                        </div>
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* ABC Class */}
              <ComparisonRow
                label="ABC Class"
                values={products.map((p) => {
                  const cls = abcClassColors[p.abcClass] ?? abcClassColors.B2;
                  return (
                    <span
                      key={p.id}
                      className={`inline-block px-2.5 py-1 rounded-md text-xs font-semibold ${cls.bg} ${cls.text}`}
                    >
                      {p.abcClass}
                    </span>
                  );
                })}
              />

              {/* Type */}
              <ComparisonRow
                label="Type (1C/2C)"
                values={products.map((p) => p.oneOrTwoC)}
              />

              {/* Pumpability */}
              <ComparisonRow
                label="Pumpability"
                values={products.map((p) =>
                  p.pumpability.replace(" Pumpability", "")
                )}
              />

              {/* Sustainability */}
              <ComparisonRow
                label="Sustainability"
                values={products.map((p) => (
                  <div
                    key={p.id}
                    className="flex items-center gap-1 px-2 py-0.5 bg-emerald-50 text-emerald-700 text-xs rounded w-fit"
                  >
                    <Leaf className="w-3 h-3" />
                    <span className="font-medium">{p.sustainability}</span>
                  </div>
                ))}
              />

              {/* USP */}
              <ComparisonRow
                label="Key Features"
                values={products.map((p) => (
                  <div key={p.id} className="text-sm text-slate-600">
                    {p.usp}
                  </div>
                ))}
              />

              {/* Cure Temperature */}
              <ComparisonRow
                label="Cure Temperature"
                values={products.map((p) => p.cureTemp)}
                highlightDifferences
              />

              {/* Mix Ratio */}
              <ComparisonRow
                label="Mix Ratio"
                values={products.map((p) => p.mixRatio)}
                highlightDifferences
              />

              {/* Customer Approval */}
              <ComparisonRow
                label="Customer Approval"
                values={products.map((p) =>
                  p.customerApproval && p.customerApproval !== "—" ? (
                    <div
                      key={p.id}
                      className="flex items-center gap-1 text-emerald-600"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span className="text-sm font-medium">
                        {p.customerApproval}
                      </span>
                    </div>
                  ) : (
                    <span className="text-slate-400">—</span>
                  )
                )}
              />

              {/* Divider */}
              <tr>
                <td
                  colSpan={products.length + 1}
                  className="px-4 py-2 bg-slate-100"
                >
                  <div className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                    Mechanical Properties
                  </div>
                </td>
              </tr>

              {/* Lap Shear */}
              <ComparisonRow
                label="Lap Shear"
                values={products.map((p) => `${p.lapShear.toFixed(1)} N/mm²`)}
                highlightDifferences
                isNumeric
              />

              {/* T-Peel */}
              <ComparisonRow
                label="T-Peel"
                values={products.map((p) => `${p.tPeel.toFixed(1)} N/mm`)}
                highlightDifferences
                isNumeric
              />

              {/* Impact Peel */}
              <ComparisonRow
                label="Impact Peel"
                values={products.map((p) => `${p.impactPeel.toFixed(1)} N/mm`)}
                highlightDifferences
                isNumeric
              />

              {/* E-Modulus */}
              <ComparisonRow
                label="E-Modulus"
                values={products.map((p) => `${p.eModulus.toFixed(1)} GPa`)}
                highlightDifferences
                isNumeric
              />

              {/* Density */}
              <ComparisonRow
                label="Density"
                values={products.map((p) => `${p.density.toFixed(2)} g/cm³`)}
                highlightDifferences
                isNumeric
              />

              {/* Divider */}
              <tr>
                <td
                  colSpan={products.length + 1}
                  className="px-4 py-2 bg-slate-100"
                >
                  <div className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                    Application
                  </div>
                </td>
              </tr>

              {/* Substrates */}
              <ComparisonRow
                label="Substrates"
                values={products.map((p) => (
                  <div key={p.id} className="flex gap-1 flex-wrap">
                    {p.substrates.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 bg-slate-100 border border-slate-200 text-slate-600 text-xs rounded"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                ))}
              />

              {/* IB Segments */}
              <ComparisonRow
                label="IB Segments"
                values={products.map((p) => (
                  <div key={p.id} className="flex gap-1 flex-wrap">
                    {p.ibSegments.slice(0, 3).map((seg) => (
                      <span
                        key={seg}
                        className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded-full"
                      >
                        {seg}
                      </span>
                    ))}
                    {p.ibSegments.length > 3 && (
                      <span className="text-xs text-slate-400">
                        +{p.ibSegments.length - 3} more
                      </span>
                    )}
                  </div>
                ))}
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function ComparisonRow({
  label,
  values,
  highlightDifferences = false,
  isNumeric = false,
}: {
  label: string;
  values: (string | number | React.ReactNode)[];
  highlightDifferences?: boolean;
  isNumeric?: boolean;
}) {
  // Find min/max for numeric highlighting
  let minValue: number | null = null;
  let maxValue: number | null = null;
  
  if (highlightDifferences && isNumeric) {
    const numericValues = values
      .map((v) => {
        if (typeof v === "string") {
          const match = v.match(/[\d.]+/);
          return match ? parseFloat(match[0]) : null;
        }
        return null;
      })
      .filter((v): v is number => v !== null);

    if (numericValues.length > 0) {
      minValue = Math.min(...numericValues);
      maxValue = Math.max(...numericValues);
    }
  }

  return (
    <tr className="border-b border-slate-200 hover:bg-slate-50/50">
      <td className="px-4 py-3 text-sm font-medium text-slate-700 bg-white border-r border-slate-200 sticky left-0 z-10">
        {label}
      </td>
      {values.map((value, idx) => {
        let cellClass = "px-4 py-3 text-sm text-slate-900 border-r border-slate-200";
        
        // Highlight best/worst for numeric values
        if (highlightDifferences && isNumeric && typeof value === "string") {
          const match = value.match(/[\d.]+/);
          const numVal = match ? parseFloat(match[0]) : null;
          if (numVal !== null) {
            if (numVal === maxValue) {
              cellClass += " bg-emerald-50";
            } else if (numVal === minValue) {
              cellClass += " bg-amber-50";
            }
          }
        }

        return (
          <td key={idx} className={cellClass}>
            {value}
          </td>
        );
      })}
    </tr>
  );
}
