import { cn } from "@/lib/utils";

export interface SpecRow {
  /** Row header — the criterion or factor (first column). */
  label: string;
  /** One value per `columns` entry, in order. */
  values: string[];
}

interface SpecTableProps {
  heading: string;
  /** Optional lead-in sentence above the table. */
  intro?: string;
  /** Header for the row-label column, e.g. "Kriterium" or "Kostenfaktor". */
  firstColLabel: string;
  /** Value-column headers (length must match each row's `values`). */
  columns: string[];
  rows: SpecRow[];
  /**
   * Index into `columns` to emphasise (accent border + white fill) — e.g. the
   * "Maßanfertigung vom Meisterbetrieb" column. Omit for a neutral table.
   */
  highlightColumn?: number;
}

const HEADING_CLASS = cn(
  "text-[28px] leading-[1.15] sm:text-[34px] sm:leading-[1.05]",
  "lg:text-[59px] lg:leading-[59px] tracking-[-1px] sm:tracking-[-1.5px] lg:tracking-[-2px]"
);

/**
 * Comparison / spec table as an airy section. Renders an N-column matrix
 * (criterion → values) as a real table on desktop and as stacked cards on
 * mobile, so a dense "what's the difference / what drives the price" block
 * becomes a scannable, snippet-friendly surface. Props-driven and reused for
 * several tables on one page. Design-system tokens only (beige wash, Urbanist).
 */
export function SpecTable({
  heading,
  intro,
  firstColLabel,
  columns,
  rows,
  highlightColumn,
}: SpecTableProps) {
  const isHi = (col: number) => col === highlightColumn;

  return (
    <section
      className="py-12 lg:py-[84px]"
      style={{
        backgroundColor: "rgba(203,191,181,0.59)",
        fontFamily: "var(--font-urbanist), Helvetica, Arial, sans-serif",
      }}
    >
      <div className="mx-auto w-full max-w-[1224px] px-6 lg:px-8">
        <h2
          className={HEADING_CLASS}
          style={{ color: "rgb(61,61,61)", fontWeight: 500, maxWidth: "880px" }}
        >
          {heading}
        </h2>

        {intro && (
          <p
            className="mt-5 max-w-[760px] text-[16px] leading-[28px] font-medium"
            style={{ color: "rgb(102,102,102)" }}
          >
            {intro}
          </p>
        )}

        {/* Desktop: real table */}
        <div className="mt-10 hidden lg:block">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr>
                <th
                  className="w-[22%] px-5 py-4 align-bottom text-[18px] font-medium"
                  style={{ color: "rgb(61,61,61)" }}
                >
                  {firstColLabel}
                </th>
                {columns.map((col, i) => (
                  <th
                    key={col}
                    className={cn(
                      "px-5 py-4 align-bottom text-[18px] font-medium",
                      isHi(i) && "border-t-2"
                    )}
                    style={{
                      color: "rgb(61,61,61)",
                      backgroundColor: isHi(i) ? "rgb(255,255,255)" : "transparent",
                      borderTopColor: isHi(i) ? "rgb(237,168,33)" : undefined,
                    }}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="border-t border-black/10">
                  <th
                    scope="row"
                    className="px-5 py-5 align-top text-[16px] font-medium"
                    style={{ color: "rgb(61,61,61)" }}
                  >
                    {row.label}
                  </th>
                  {row.values.map((value, i) => (
                    <td
                      key={columns[i]}
                      className="px-5 py-5 align-top text-[14px] leading-[23.8px] font-medium"
                      style={{
                        color: "rgb(102,102,102)",
                        backgroundColor: isHi(i) ? "rgb(255,255,255)" : "transparent",
                      }}
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile: each row stacked as a card */}
        <div className="mt-8 flex flex-col gap-5 lg:hidden">
          {rows.map((row) => (
            <div key={row.label} className="bg-white p-5">
              <h3
                className="text-[20px] font-medium leading-[1.2]"
                style={{ color: "rgb(61,61,61)" }}
              >
                {row.label}
              </h3>
              <dl className="mt-3 flex flex-col gap-3">
                {row.values.map((value, i) => (
                  <div key={columns[i]}>
                    <dt
                      className="text-[14px] font-medium uppercase tracking-[2px]"
                      style={{ color: isHi(i) ? "rgb(237,168,33)" : "rgb(61,61,61)" }}
                    >
                      {columns[i]}
                    </dt>
                    <dd
                      className="mt-1 text-[14px] leading-[23.8px] font-medium"
                      style={{ color: "rgb(102,102,102)" }}
                    >
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
