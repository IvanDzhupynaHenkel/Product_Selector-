import clsx from "clsx";
import svgPaths from "./svg-8if2l14vyh";

function Icon({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}
type Wrapper4Props = {
  additionalClassNames?: string;
};

function Wrapper4({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper4Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">{children}</div>
    </div>
  );
}
type Wrapper3Props = {
  additionalClassNames?: string;
};

function Wrapper3({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper3Props>) {
  return (
    <div className={clsx("min-h-px min-w-px relative", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">{children}</div>
    </div>
  );
}
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return <Wrapper2 additionalClassNames={clsx("flex-[1_0_0] min-h-px min-w-px relative", additionalClassNames)}>{children}</Wrapper2>;
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return <Wrapper2 additionalClassNames={clsx("relative shrink-0", additionalClassNames)}>{children}</Wrapper2>;
}
type SustainBadgeText1Props = {
  text: string;
};

function SustainBadgeText1({ text }: SustainBadgeText1Props) {
  return (
    <div className="absolute bg-[#eff6ff] content-stretch flex h-[20px] items-center left-[16px] px-[10px] py-[2px] rounded-[33554400px] top-[17.5px] w-[76.813px]">
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#1447e6] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        {text}
      </p>
    </div>
  );
}
type TableCellText2Props = {
  text: string;
  additionalClassNames?: string;
};

function TableCellText2({ text, additionalClassNames = "" }: TableCellText2Props) {
  return (
    <div className={clsx("flex-[1_0_0] min-h-px min-w-px relative", additionalClassNames)}>
      <p className="absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[20px] left-[16px] text-[#0f172b] text-[14px] top-[16.5px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        {text}
      </p>
    </div>
  );
}
type TableCellText1Props = {
  text: string;
  additionalClassNames?: string;
};

function TableCellText1({ text, additionalClassNames = "" }: TableCellText1Props) {
  return (
    <div className={clsx("flex-[1_0_0] min-h-px min-w-px relative", additionalClassNames)}>
      <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[20px] left-[16px] text-[#314158] text-[14px] top-[16.5px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        {text}
      </p>
    </div>
  );
}
type SustainBadgeTextProps = {
  text: string;
};

function SustainBadgeText({ text }: SustainBadgeTextProps) {
  return (
    <div className="absolute bg-[#ecfdf5] content-stretch flex h-[20px] items-center left-[16px] px-[10px] py-[2px] rounded-[33554400px] top-[17.5px] w-[62.969px]">
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#007a55] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        {text}
      </p>
    </div>
  );
}
type TextText4Props = {
  text: string;
};

function TextText4({ text }: TextText4Props) {
  return (
    <div className="absolute h-[20px] left-[16px] overflow-clip top-[16.5px] w-[458.906px]">
      <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[20px] left-0 text-[#0f172b] text-[14px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        {text}
      </p>
    </div>
  );
}
type TableCellTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TableCellText({ text, additionalClassNames = "" }: TableCellTextProps) {
  return (
    <div className={clsx("flex-[1_0_0] min-h-px min-w-px relative", additionalClassNames)}>
      <p className="absolute font-['Menlo:Regular',sans-serif] leading-[16px] left-[16px] not-italic text-[#62748e] text-[12px] top-[18.5px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type HeaderCellTextProps = {
  text: string;
  additionalClassNames?: string;
};

function HeaderCellText({ text, additionalClassNames = "" }: HeaderCellTextProps) {
  return (
    <div className={clsx("absolute h-[41px] top-0", additionalClassNames)}>
      <p className="absolute font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[16.5px] left-[16px] text-[#62748e] text-[11px] top-[12px] tracking-[0.275px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        {text}
      </p>
    </div>
  );
}
type TextText3Props = {
  text: string;
  additionalClassNames?: string;
};

function TextText3({ text, additionalClassNames = "" }: TextText3Props) {
  return (
    <div className={clsx("h-[16px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#90a1b9] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          {text}
        </p>
      </div>
    </div>
  );
}
type ContainerText2Props = {
  text: string;
  additionalClassNames?: string;
};

function ContainerText2({ text, additionalClassNames = "" }: ContainerText2Props) {
  return (
    <Wrapper2 additionalClassNames={clsx("h-[40px] relative shrink-0", additionalClassNames)}>
      <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[20px] left-[16px] text-[#90a1b9] text-[14px] top-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        {text}
      </p>
    </Wrapper2>
  );
}
type TextText2Props = {
  text: string;
  additionalClassNames?: string;
};

function TextText2({ text, additionalClassNames = "" }: TextText2Props) {
  return (
    <div className={clsx("absolute bg-white content-stretch flex h-[22px] items-center px-[9px] py-[3px] rounded-[4px] top-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#45556c] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        {text}
      </p>
    </div>
  );
}
type ContainerProps = {
  text: string;
  text1: string;
};

function Container({ text, text1 }: ContainerProps) {
  return (
    <div className="h-[20px] relative shrink-0 w-full">
      <p className="absolute font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[0] left-0 text-[#0f172b] text-[0px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <span className="leading-[20px] text-[14px]">{text}</span>
        <span className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16px] text-[#90a1b9] text-[12px]" style={{ fontVariationSettings: "'opsz' 9" }}>
          {text1}
        </span>
      </p>
    </div>
  );
}
type ContainerText1Props = {
  text: string;
};

function ContainerText1({ text }: ContainerText1Props) {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#90a1b9] text-[12px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        {text}
      </p>
    </div>
  );
}
type ContainerTextProps = {
  text: string;
};

function ContainerText({ text }: ContainerTextProps) {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full">
      <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#90a1b9] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        {text}
      </p>
    </div>
  );
}
type TextText1Props = {
  text: string;
  additionalClassNames?: string;
};

function TextText1({ text, additionalClassNames = "" }: TextText1Props) {
  return (
    <div className={clsx("absolute h-[20px] top-[2px]", additionalClassNames)}>
      <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[20px] left-0 text-[#62748e] text-[14px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        {text}
      </p>
    </div>
  );
}
type TextTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TextText({ text, additionalClassNames = "" }: TextTextProps) {
  return (
    <div className={clsx("absolute h-[24px] top-0 w-[3.172px]", additionalClassNames)}>
      <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[24px] left-0 text-[#cad5e2] text-[16px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        {text}
      </p>
    </div>
  );
}

export default function ProductSalector() {
  return (
    <div className="bg-white content-stretch flex items-start relative size-full" data-name="Product Salector">
      <Wrapper3 additionalClassNames="flex-[2157_0_0] h-[1215px]">
        <div className="absolute bg-[#f8fafc] content-stretch flex h-[40px] items-center justify-end left-0 pb-px pr-[24px] top-0 w-[2157px]" data-name="Container">
          <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
          <div className="h-[26px] relative shrink-0 w-[165.891px]" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
              <div className="relative shrink-0 size-[14px]" data-name="Icon">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <g clipPath="url(#clip0_76_870)" id="Icon">
                    <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                    <path d={svgPaths.p21d23a70} id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                    <path d="M1.16667 7H12.8333" id="Vector_3" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                  </g>
                  <defs>
                    <clipPath id="clip0_76_870">
                      <rect fill="white" height="14" width="14" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="bg-white h-[26px] relative rounded-[8px] shrink-0 w-[66px]" data-name="Button">
                <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[13px] py-[5px] relative size-full">
                  <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#0f172b] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                    English
                  </p>
                </div>
              </div>
              <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[12px] py-[4px] relative size-full">
                  <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#45556c] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                    Chinese
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-white content-stretch flex h-[64px] items-center justify-between left-0 pb-px px-[24px] top-[40px] w-[2157px]" data-name="Header">
          <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
          <div className="h-[32px] relative shrink-0 w-[206.75px]" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
              <Wrapper4 additionalClassNames="h-[32px] w-[43.047px]">
                <Wrapper3 additionalClassNames="flex-[1_0_0] h-[32px]">
                  <div className="absolute inset-[14.13%_1.22%]" data-name="Vector">
                    <div className="absolute inset-[-1.23%_-0.67%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.5643 23.5204">
                        <path d={svgPaths.p34d2b00} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="0.564431" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute inset-[12.5%_0]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.0474 23.9996">
                      <path d={svgPaths.p31461c00} fill="var(--fill-0, #E1000F)" id="Vector" />
                    </svg>
                  </div>
                </Wrapper3>
              </Wrapper4>
              <div className="bg-[#cad5e2] h-[24px] shrink-0 w-px" data-name="Container" />
              <Wrapper1 additionalClassNames="h-[24px]">
                <p className="absolute font-['Henkel_GT_Flexa:Medium',sans-serif] leading-[24px] left-0 not-italic text-[#0f172b] text-[16px] top-[-1px] whitespace-nowrap">Product Selector</p>
              </Wrapper1>
            </div>
          </div>
          <Wrapper4 additionalClassNames="size-[40px]">
            <div className="bg-[#e2e8f0] flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[33554400px]" data-name="Container">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
                  <div className="relative shrink-0 size-[20px]" data-name="Icon">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g id="Icon">
                        <path d={svgPaths.p2026e800} id="Vector" stroke="var(--stroke-0, #45556C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d={svgPaths.p32ab0300} id="Vector_2" stroke="var(--stroke-0, #45556C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Wrapper4>
        </div>
        <div className="absolute h-[1111px] left-0 overflow-clip top-[104px] w-[2157px]" data-name="Container">
          <div className="absolute bg-[#f8fafc] h-[1111px] left-0 overflow-clip top-0 w-[2101px]" data-name="Main Content">
            <div className="absolute bg-[#f8fafc] h-[1212px] left-0 top-0 w-[2101px]" data-name="ProductDetail">
              <div className="absolute bg-white border-[#e2e8f0] border-b border-solid h-[297px] left-0 top-0 w-[2101px]" data-name="Container">
                <div className="absolute content-stretch flex gap-[6px] h-[20px] items-center left-[410px] top-[20px] w-[119.734px]" data-name="Button">
                  <Icon>
                    <g id="Icon">
                      <path d={svgPaths.p203476e0} id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      <path d="M12.6667 8H3.33333" id="Vector_2" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </g>
                  </Icon>
                  <Wrapper1 additionalClassNames="h-[20px]">
                    <p className="-translate-x-1/2 absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[20px] left-[49px] text-[#62748e] text-[14px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                      Back to results
                    </p>
                  </Wrapper1>
                </div>
                <div className="absolute content-stretch flex h-[32px] items-start justify-between left-[410px] pr-[1723.359px] top-[56px] w-[2053px]" data-name="Container">
                  <Wrapper additionalClassNames="h-[32px] w-[329.641px]">
                    <div className="absolute content-stretch flex h-[32px] items-start left-0 top-0 w-[282.094px]" data-name="Heading 1">
                      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[32px] relative shrink-0 text-[#0f172b] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                        LOCTITE LIOFOL OP 1338
                      </p>
                    </div>
                    <div className="absolute bg-[#f1f5f9] content-stretch flex h-[24px] items-center left-[294.09px] px-[10px] py-[4px] rounded-[10px] top-[4px] w-[35.547px]" data-name="Text">
                      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#45556c] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                        2C
                      </p>
                    </div>
                  </Wrapper>
                </div>
                <div className="absolute h-[24px] left-[410px] top-[92px] w-[2053px]" data-name="Container">
                  <div className="absolute h-[20px] left-0 top-[2px] w-[84.297px]" data-name="Text">
                    <p className="absolute font-['Menlo:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#90a1b9] text-[14px] top-0 whitespace-nowrap">0000111668</p>
                  </div>
                  <TextText text="·" additionalClassNames="left-[92.3px]" />
                  <TextText1 text="Ambient / 80°C" additionalClassNames="left-[103.47px] w-[101.234px]" />
                  <TextText text="·" additionalClassNames="left-[212.7px]" />
                  <TextText1 text="General Packaging" additionalClassNames="left-[223.88px] w-[119.25px]" />
                </div>
                <div className="absolute h-[40px] left-[410px] overflow-clip top-[128px] w-[768px]" data-name="Paragraph">
                  <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[20px] left-0 text-[#62748e] text-[14px] top-0 w-[767px]" style={{ fontVariationSettings: "'opsz' 9" }}>
                    Designed for use as a durable, low COF overprint varnish having a matte finish. This coating should be evaluated by the customer for proper COF.
                  </p>
                </div>
                <div className="absolute border-[#f1f5f9] border-solid border-t h-[71px] left-[410px] overflow-clip top-[184px] w-[2053px]" data-name="Container">
                  <div className="absolute content-stretch flex flex-col gap-[2px] h-[42px] items-start left-0 top-[12px] w-[81.875px]" data-name="Container">
                    <ContainerText text="Mix Ratio (Vol.)" />
                    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
                      <p className="absolute font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[20px] left-0 text-[#0f172b] text-[14px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                        2:1
                      </p>
                    </div>
                  </div>
                  <div className="absolute content-stretch flex flex-col gap-[2px] h-[42px] items-start left-[105.88px] top-[12px] w-[61.078px]" data-name="Container">
                    <ContainerText1 text="Density" />
                    <Container text="1.32" text1="g/cm³" />
                  </div>
                  <div className="absolute content-stretch flex flex-col gap-[2px] h-[42px] items-start left-[190.95px] top-[12px] w-[89.828px]" data-name="Container">
                    <ContainerText text="E-Modulus DMA" />
                    <Container text="3.8" text1="GPa" />
                  </div>
                  <div className="absolute content-stretch flex flex-col gap-[2px] h-[42px] items-start left-[304.78px] top-[12px] w-[70.875px]" data-name="Container">
                    <ContainerText1 text="Lap Shear" />
                    <Container text="24.5" text1="N/mm²" />
                  </div>
                  <div className="absolute content-stretch flex flex-col gap-[2px] h-[42px] items-start left-[399.66px] top-[12px] w-[58.234px]" data-name="Container">
                    <ContainerText1 text="T-Peel" />
                    <Container text="8.2" text1="N/mm" />
                  </div>
                  <div className="absolute content-stretch flex flex-col gap-[2px] h-[42px] items-start left-[481.89px] top-[12px] w-[65.156px]" data-name="Container">
                    <ContainerText text="Impact Peel" />
                    <Container text="35.1" text1="N/mm" />
                  </div>
                  <div className="absolute bg-[#e2e8f0] h-[42px] left-[579.05px] top-[12px] w-px" data-name="Container" />
                  <div className="absolute content-stretch flex flex-col gap-[4px] h-[42px] items-start left-[612.05px] top-[12px] w-[277.031px]" data-name="Container">
                    <ContainerText1 text="Substrates" />
                    <div className="h-[22px] relative shrink-0 w-full" data-name="Container">
                      <TextText2 text="Polypropylene" additionalClassNames="left-0 w-[96.984px]" />
                      <TextText2 text="Polyethylene" additionalClassNames="left-[102.98px] w-[88.594px]" />
                      <TextText2 text="Primed Foil" additionalClassNames="left-[197.58px] w-[79.453px]" />
                    </div>
                  </div>
                </div>
                <div className="absolute content-stretch flex h-[42px] items-end left-[410px] top-[255px] w-[2053px]" data-name="Container">
                  <div className="h-[42px] relative shrink-0 w-[92.078px]" data-name="Container">
                    <div aria-hidden="true" className="absolute border-[#d4000e] border-b-2 border-solid inset-0 pointer-events-none" />
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                      <p className="absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[20px] left-[16px] text-[#d4000e] text-[14px] top-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                        IDH Level
                      </p>
                    </div>
                  </div>
                  <ContainerText2 text="Approvals" additionalClassNames="w-[96.516px]" />
                  <ContainerText2 text="Documents" additionalClassNames="w-[106.953px]" />
                </div>
                <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[426px] top-[321px] w-[799px]">
                  <div className="h-[15px] relative shrink-0 w-[175px]" data-name="Paragraph">
                    <p className="absolute font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[15px] left-0 text-[#90a1b9] text-[10px] top-0 tracking-[1px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                      Active Country
                    </p>
                  </div>
                  <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
                    <div className="bg-[#0f172b] content-stretch flex gap-[12px] h-[36px] items-center px-[12px] relative rounded-[10px] shrink-0" data-name="Button">
                      <Wrapper additionalClassNames="h-[20px] w-[82.469px]">
                        <p className="-translate-x-1/2 absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[20px] left-[41.5px] text-[14px] text-center text-white top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                          All countries
                        </p>
                      </Wrapper>
                      <div className="h-[16px] relative shrink-0 w-[12.25px]" data-name="Text">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
                          <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.6)] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                            10
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[12px] h-[36px] items-center px-[12px] relative rounded-[10px] shrink-0" data-name="Button">
                      <Wrapper additionalClassNames="h-[20px] w-[46.766px]">
                        <p className="-translate-x-1/2 absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[20px] left-[23.5px] text-[#314158] text-[14px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                          Austria
                        </p>
                      </Wrapper>
                      <TextText3 text="1" additionalClassNames="w-[4.094px]" />
                    </div>
                    <div className="content-stretch flex gap-[12px] h-[36px] items-center px-[12px] relative rounded-[10px] shrink-0" data-name="Button">
                      <Wrapper additionalClassNames="h-[20px] w-[37.891px]">
                        <p className="-translate-x-1/2 absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[20px] left-[19px] text-[#314158] text-[14px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                          China
                        </p>
                      </Wrapper>
                      <TextText3 text="2" additionalClassNames="w-[7px]" />
                    </div>
                    <div className="content-stretch flex gap-[12px] h-[36px] items-center px-[12px] relative rounded-[10px] shrink-0" data-name="Button">
                      <Wrapper additionalClassNames="h-[20px] w-[45.219px]">
                        <p className="-translate-x-1/2 absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[20px] left-[23px] text-[#314158] text-[14px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                          France
                        </p>
                      </Wrapper>
                      <TextText3 text="1" additionalClassNames="w-[4.094px]" />
                    </div>
                    <div className="content-stretch flex gap-[12px] h-[36px] items-center px-[12px] relative rounded-[10px] shrink-0" data-name="Button">
                      <Wrapper additionalClassNames="h-[20px] w-[60.656px]">
                        <p className="-translate-x-1/2 absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[20px] left-[30.5px] text-[#314158] text-[14px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                          Germany
                        </p>
                      </Wrapper>
                      <TextText3 text="2" additionalClassNames="w-[7px]" />
                    </div>
                    <div className="content-stretch flex gap-[12px] h-[36px] items-center px-[12px] relative rounded-[10px] shrink-0" data-name="Button">
                      <Wrapper additionalClassNames="h-[20px] w-[47.031px]">
                        <p className="-translate-x-1/2 absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[20px] left-[24px] text-[#314158] text-[14px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                          Mexico
                        </p>
                      </Wrapper>
                      <TextText3 text="2" additionalClassNames="w-[7px]" />
                    </div>
                    <div className="content-stretch flex gap-[12px] h-[36px] items-center px-[12px] relative rounded-[10px] shrink-0" data-name="Button">
                      <Wrapper additionalClassNames="h-[20px] w-[27.031px]">
                        <p className="-translate-x-1/2 absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[20px] left-[14px] text-[#314158] text-[14px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                          USA
                        </p>
                      </Wrapper>
                      <TextText3 text="2" additionalClassNames="w-[7px]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex h-[915px] items-start left-[410px] top-[399px] w-[1580px]" data-name="Container">
                <div className="flex-[1893_0_0] h-[915px] min-h-px min-w-px relative" data-name="Main Content">
                  <div className="overflow-clip rounded-[inherit] size-full">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pt-[20px] px-[20px] relative size-full">
                      <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
                        <p className="flex-[1_0_0] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px relative text-[#90a1b9] text-[0px] text-[12px]" style={{ fontVariationSettings: "'opsz' 9" }}>
                          <span className="leading-[16px]">IDH Level</span>
                          <span className="leading-[16px] text-[#cad5e2]">·</span>
                          <span className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[16px] text-[#45556c]" style={{ fontVariationSettings: "'opsz' 14" }}>
                            10 items
                          </span>
                          <span className="leading-[16px] text-[#cad5e2]" style={{ fontVariationSettings: "'opsz' 9" }}>
                            ·
                          </span>
                          <span className="leading-[16px]">across 6 countries</span>
                        </p>
                      </div>
                      <div className="bg-white h-[572.5px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
                        <div className="overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex flex-col items-start p-px relative size-full">
                            <div className="h-[570.5px] relative shrink-0 w-full" data-name="Table">
                              <div className="absolute h-[41px] left-0 top-0 w-[1851px]" data-name="Table Header">
                                <div className="absolute bg-[#f8fafc] border-[#e2e8f0] border-b border-solid h-[41px] left-0 top-0 w-[1851px]" data-name="Table Row">
                                  <HeaderCellText text="IDH CODE" additionalClassNames="left-0 w-[196.828px]" />
                                  <HeaderCellText text="IDH NAME" additionalClassNames="left-[196.83px] w-[490.906px]" />
                                  <HeaderCellText text="SUSTAINABILITY" additionalClassNames="left-[687.73px] w-[227.547px]" />
                                  <HeaderCellText text="LEADING SBU" additionalClassNames="left-[915.28px] w-[230.609px]" />
                                  <HeaderCellText text="PRODUCTION PLANT" additionalClassNames="left-[1145.89px] w-[273.172px]" />
                                  <HeaderCellText text="GLOBAL STOCK" additionalClassNames="left-[1419.06px] w-[221.203px]" />
                                  <HeaderCellText text="SHELF LIFE [D]" additionalClassNames="left-[1640.27px] w-[210.734px]" />
                                </div>
                              </div>
                              <div className="absolute h-[529.5px] left-0 top-[41px] w-[1851px]" data-name="Table Body">
                                <div className="absolute content-stretch flex items-center left-0 top-0 w-[1538px]" data-name="Table Row">
                                  <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
                                  <TableCellText text="0035689213" additionalClassNames="h-[53px]" />
                                  <div className="flex-[1_0_0] h-[53px] min-h-px min-w-px relative" data-name="Table Cell">
                                    <TextText4 text="LOCTITE LIOFOL OP 1338 GE, 50 ml Ca. 600g" />
                                  </div>
                                  <div className="flex-[1_0_0] h-[53px] min-h-px min-w-px relative" data-name="Table Cell">
                                    <SustainBadgeText text="Pioneer" />
                                  </div>
                                  <TableCellText1 text="AA EUROPE" additionalClassNames="h-[53px]" />
                                  <TableCellText1 text="Heidelberg" additionalClassNames="h-[53px]" />
                                  <TableCellText2 text="2,750 kg" additionalClassNames="h-[53px]" />
                                  <TableCellText1 text="365" additionalClassNames="h-[53px]" />
                                </div>
                                <div className="absolute content-stretch flex items-center left-0 top-[53px] w-[1538px]" data-name="Table Row">
                                  <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
                                  <TableCellText text="0035689214" additionalClassNames="h-[53px]" />
                                  <div className="flex-[1_0_0] h-[53px] min-h-px min-w-px relative" data-name="Table Cell">
                                    <TextText4 text="LOCTITE LIOFOL OP 1338 GE, 200 ml Ca. 2.4kg" />
                                  </div>
                                  <div className="flex-[1_0_0] h-[53px] min-h-px min-w-px relative" data-name="Table Cell">
                                    <SustainBadgeText text="Pioneer" />
                                  </div>
                                  <TableCellText1 text="AA EUROPE" additionalClassNames="h-[53px]" />
                                  <TableCellText1 text="Heidelberg" additionalClassNames="h-[53px]" />
                                  <TableCellText2 text="5,120 kg" additionalClassNames="h-[53px]" />
                                  <TableCellText1 text="365" additionalClassNames="h-[53px]" />
                                </div>
                                <div className="absolute content-stretch flex items-center left-0 top-[106px] w-[1538px]" data-name="Table Row">
                                  <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
                                  <TableCellText text="0046821100" additionalClassNames="h-[53px]" />
                                  <div className="flex-[1_0_0] h-[53px] min-h-px min-w-px relative" data-name="Table Cell">
                                    <TextText4 text="LOCTITE LIOFOL OP 1338 AU, 50 ml Ca. 600g" />
                                  </div>
                                  <div className="flex-[1_0_0] h-[53px] min-h-px min-w-px relative" data-name="Table Cell">
                                    <SustainBadgeText1 text="Performer" />
                                  </div>
                                  <TableCellText1 text="AA EUROPE" additionalClassNames="h-[53px]" />
                                  <TableCellText1 text="Heidelberg" additionalClassNames="h-[53px]" />
                                  <TableCellText2 text="830 kg" additionalClassNames="h-[53px]" />
                                  <TableCellText1 text="365" additionalClassNames="h-[53px]" />
                                </div>
                                <div className="absolute content-stretch flex items-center left-0 top-[159px] w-[1538px]" data-name="Table Row">
                                  <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
                                  <TableCellText text="0052301477" additionalClassNames="h-[53px]" />
                                  <div className="flex-[1_0_0] h-[53px] min-h-px min-w-px relative" data-name="Table Cell">
                                    <TextText4 text="LOCTITE LIOFOL OP 1338 FR, 50 ml Ca. 600g" />
                                  </div>
                                  <div className="flex-[1_0_0] h-[53px] min-h-px min-w-px relative" data-name="Table Cell">
                                    <SustainBadgeText text="Pioneer" />
                                  </div>
                                  <TableCellText1 text="AA EUROPE" additionalClassNames="h-[53px]" />
                                  <TableCellText1 text="Monteux" additionalClassNames="h-[53px]" />
                                  <TableCellText2 text="1,450 kg" additionalClassNames="h-[53px]" />
                                  <TableCellText1 text="365" additionalClassNames="h-[53px]" />
                                </div>
                                <div className="absolute content-stretch flex items-center left-0 top-[212px] w-[1538px]" data-name="Table Row">
                                  <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
                                  <TableCellText text="0061004328" additionalClassNames="h-[53px]" />
                                  <div className="flex-[1_0_0] h-[53px] min-h-px min-w-px relative" data-name="Table Cell">
                                    <TextText4 text="LOCTITE LIOFOL OP 1338 CH, 310 ml Cartridge" />
                                  </div>
                                  <div className="flex-[1_0_0] h-[53px] min-h-px min-w-px relative" data-name="Table Cell">
                                    <SustainBadgeText text="Pioneer" />
                                  </div>
                                  <TableCellText1 text="AA CHINA" additionalClassNames="h-[53px]" />
                                  <TableCellText1 text="Shanghai" additionalClassNames="h-[53px]" />
                                  <TableCellText2 text="3,200 kg" additionalClassNames="h-[53px]" />
                                  <TableCellText1 text="300" additionalClassNames="h-[53px]" />
                                </div>
                                <div className="absolute content-stretch flex items-center left-0 top-[265px] w-[1538px]" data-name="Table Row">
                                  <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
                                  <TableCellText text="0061004329" additionalClassNames="h-[53px]" />
                                  <div className="flex-[1_0_0] h-[53px] min-h-px min-w-px relative" data-name="Table Cell">
                                    <TextText4 text="LOCTITE LIOFOL OP 1338 CH, 50 ml Syringe" />
                                  </div>
                                  <div className="flex-[1_0_0] h-[53px] min-h-px min-w-px relative" data-name="Table Cell">
                                    <SustainBadgeText1 text="Performer" />
                                  </div>
                                  <TableCellText1 text="AA CHINA" additionalClassNames="h-[53px]" />
                                  <TableCellText1 text="Shanghai" additionalClassNames="h-[53px]" />
                                  <TableCellText2 text="980 kg" additionalClassNames="h-[53px]" />
                                  <TableCellText1 text="300" additionalClassNames="h-[53px]" />
                                </div>
                                <div className="absolute content-stretch flex items-center left-0 top-[318px] w-[1538px]" data-name="Table Row">
                                  <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
                                  <TableCellText text="0072118005" additionalClassNames="h-[53px]" />
                                  <div className="flex-[1_0_0] h-[53px] min-h-px min-w-px relative" data-name="Table Cell">
                                    <TextText4 text="LOCTITE LIOFOL OP 1338 ME, 50 ml Ca. 600g" />
                                  </div>
                                  <div className="flex-[1_0_0] h-[53px] min-h-px min-w-px relative" data-name="Table Cell">
                                    <SustainBadgeText text="Pioneer" />
                                  </div>
                                  <TableCellText1 text="AA AMERICAS" additionalClassNames="h-[53px]" />
                                  <TableCellText1 text="Monterrey" additionalClassNames="h-[53px]" />
                                  <TableCellText2 text="1,870 kg" additionalClassNames="h-[53px]" />
                                  <TableCellText1 text="365" additionalClassNames="h-[53px]" />
                                </div>
                                <div className="absolute content-stretch flex items-center left-0 top-[371px] w-[1538px]" data-name="Table Row">
                                  <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
                                  <TableCellText text="0072118006" additionalClassNames="h-[53px]" />
                                  <div className="flex-[1_0_0] h-[53px] min-h-px min-w-px relative" data-name="Table Cell">
                                    <TextText4 text="LOCTITE LIOFOL OP 1338 ME, 200 ml Ca. 2.4kg" />
                                  </div>
                                  <div className="flex-[1_0_0] h-[53px] min-h-px min-w-px relative" data-name="Table Cell">
                                    <SustainBadgeText1 text="Performer" />
                                  </div>
                                  <TableCellText1 text="AA AMERICAS" additionalClassNames="h-[53px]" />
                                  <TableCellText1 text="Monterrey" additionalClassNames="h-[53px]" />
                                  <TableCellText2 text="2,310 kg" additionalClassNames="h-[53px]" />
                                  <TableCellText1 text="365" additionalClassNames="h-[53px]" />
                                </div>
                                <div className="absolute content-stretch flex items-center left-0 top-[424px] w-[1538px]" data-name="Table Row">
                                  <div aria-hidden="true" className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
                                  <TableCellText text="0081550041" additionalClassNames="h-[53px]" />
                                  <div className="flex-[1_0_0] h-[53px] min-h-px min-w-px relative" data-name="Table Cell">
                                    <TextText4 text="LOCTITE LIOFOL OP 1338 US, 50 ml Ca. 600g" />
                                  </div>
                                  <div className="flex-[1_0_0] h-[53px] min-h-px min-w-px relative" data-name="Table Cell">
                                    <SustainBadgeText text="Pioneer" />
                                  </div>
                                  <TableCellText1 text="AA AMERICAS" additionalClassNames="h-[53px]" />
                                  <TableCellText1 text="Marysville" additionalClassNames="h-[53px]" />
                                  <TableCellText2 text="4,100 kg" additionalClassNames="h-[53px]" />
                                  <TableCellText1 text="365" additionalClassNames="h-[53px]" />
                                </div>
                                <div className="absolute content-stretch flex items-center left-0 top-[477px] w-[1538px]" data-name="Table Row">
                                  <TableCellText text="0081550042" additionalClassNames="h-[52.5px]" />
                                  <div className="flex-[1_0_0] h-[52.5px] min-h-px min-w-px relative" data-name="Table Cell">
                                    <TextText4 text="LOCTITE LIOFOL OP 1338 US, 200 ml Ca. 2.4kg" />
                                  </div>
                                  <div className="flex-[1_0_0] h-[52.5px] min-h-px min-w-px relative" data-name="Table Cell">
                                    <SustainBadgeText text="Pioneer" />
                                  </div>
                                  <TableCellText1 text="AA AMERICAS" additionalClassNames="h-[52.5px]" />
                                  <TableCellText1 text="Marysville" additionalClassNames="h-[52.5px]" />
                                  <TableCellText2 text="6,750 kg" additionalClassNames="h-[52.5px]" />
                                  <TableCellText1 text="365" additionalClassNames="h-[52.5px]" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-white h-[1111px] left-[2101px] top-0 w-[56px]" data-name="RecentItemsSidebar">
            <div className="content-stretch flex flex-col items-start overflow-clip pl-px relative rounded-[inherit] size-full">
              <div className="h-[61px] relative shrink-0 w-[55px]" data-name="Container">
                <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-px px-[12px] relative size-full">
                  <div className="flex-[31_0_0] h-[28px] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
                    <div className="flex flex-row items-center size-full">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[6px] relative size-full">
                        <Icon>
                          <g clipPath="url(#clip0_76_864)" id="Icon">
                            <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                            <path d="M8 4V8L10.6667 9.33333" id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          </g>
                          <defs>
                            <clipPath id="clip0_76_864">
                              <rect fill="white" height="16" width="16" />
                            </clipPath>
                          </defs>
                        </Icon>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border-[#e2e8f0] border-l border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </Wrapper3>
    </div>
  );
}