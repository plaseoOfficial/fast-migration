interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface BueroProcessStepsProps {
  heading: string;
  steps: ProcessStep[];
}

export function BueroProcessSteps({ heading, steps }: BueroProcessStepsProps) {
  return (
    <section
      className="py-12 lg:py-[84px]"
      style={{
        backgroundColor: "rgba(203,191,181,0.59)",
        fontFamily: "var(--font-urbanist), Helvetica, Arial, sans-serif",
      }}
    >
      <div className="mx-auto w-full max-w-[1224px] px-5 sm:px-6 lg:px-8">
        <h2
          className="text-[28px] leading-[1.15] sm:text-[34px] sm:leading-[1.05] lg:text-[65px] lg:leading-[65px] font-medium tracking-[-1px] sm:tracking-[-1.5px] lg:tracking-[-2px] mb-10 lg:mb-14"
          style={{ color: "rgb(61,61,61)", maxWidth: "700px" }}
        >
          {heading}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-3">
          {steps.map((step, i) => (
            <div key={step.number} className="flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-[37px] lg:text-[45px] font-medium leading-[1]"
                  style={{ color: "rgb(237,168,33)" }}
                >
                  {step.number}
                </span>
                {i < steps.length - 1 && (
                  <div
                    className="hidden lg:block flex-1 h-px mt-1"
                    style={{ backgroundColor: "rgba(0,0,0,0.10)" }}
                  />
                )}
              </div>
              <h3
                className="text-[16px] font-medium mb-2 leading-[1.3]"
                style={{ color: "rgb(61,61,61)" }}
              >
                {step.title}
              </h3>
              <p
                className="text-[14px] leading-[1.7] font-medium"
                style={{ color: "rgb(102,102,102)" }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
