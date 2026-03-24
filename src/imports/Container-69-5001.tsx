import svgPaths from "./svg-ji1pps1566";
import imgImageTerosonEp5400 from "figma:asset/147d15021f6438b4897ea828a4299c6c66723d0b.png";

function ImageTerosonEp() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[80px]" data-name="Image (TEROSON EP 5400)">
      <div aria-hidden="true" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none rounded-[10px]">
        <div className="absolute bg-[#f8fafc] bg-clip-padding border-0 border-[transparent] border-solid inset-0 rounded-[10px]" />
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid max-w-none object-cover rounded-[10px] size-full" src={imgImageTerosonEp5400} />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[27px] left-0 top-0 w-[955.969px]" data-name="Heading 3">
      <p className="absolute font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[27px] left-0 text-[#0f172b] text-[18px] top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        TEROSON EP 5400
      </p>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[16px] relative shrink-0 w-[72.25px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Menlo:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#90a1b9] text-[12px] top-0 whitespace-nowrap">0000046697</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[26.2px] size-[12px] top-[2px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M7.5 1.5H10.5V4.5" id="Vector" stroke="var(--stroke-0, #D4000E)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 7L10.5 1.5" id="Vector_2" stroke="var(--stroke-0, #D4000E)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pc1a2200} id="Vector_3" stroke="var(--stroke-0, #D4000E)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[16px] relative shrink-0 w-[38.203px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[16px] left-[11.5px] text-[#d4000e] text-[12px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>{`TDS `}</p>
        <Icon />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[16px] items-center left-0 top-[29px] w-[955.969px]" data-name="Container">
      <Text />
      <Button />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[19.5px] left-0 overflow-clip top-[53px] w-[955.969px]" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#62748e] text-[12px] top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        Medium-modulus structural adhesive with exceptional fatigue resistance. Preferred for closure panel bonding.
      </p>
    </div>
  );
}

function Container3() {
  return (
    <div className="flex-[955.969_0_0] h-[72.5px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Heading />
        <Container4 />
        <Paragraph />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="bg-[#ecfdf5] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-[32.359px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[10px] py-[4px] relative size-full">
        <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#007a55] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          A1
        </p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="bg-[#f1f5f9] h-[20px] relative rounded-[4px] shrink-0 w-[28.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[8px] py-[2px] relative size-full">
        <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#45556c] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
          1C
        </p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="bg-[#f1f5f9] h-[19px] relative rounded-[4px] shrink-0 w-[122.031px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-full absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[15px] left-[115px] text-[#62748e] text-[12px] text-right top-px whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
          Room Temperature
        </p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p2ca4b00} id="Vector" stroke="var(--stroke-0, #007A55)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p226b8c80} id="Vector_2" stroke="var(--stroke-0, #007A55)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#007a55] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          High
        </p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#ecfdf5] h-[20px] relative rounded-[4px] shrink-0 w-[57.344px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center px-[8px] relative size-full">
        <Icon1 />
        <Text4 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[101px] relative shrink-0 w-[122.031px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-end relative size-full">
        <Text1 />
        <Text2 />
        <Text3 />
        <Container6 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[1094_0_0] h-[101px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Container3 />
        <Container5 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[101px] items-start left-[20px] top-[16px] w-[1190px]" data-name="Container">
      <ImageTerosonEp />
      <Container2 />
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute bg-[#f1f5f9] content-stretch flex h-[20px] items-start left-0 px-[8px] py-[2px] rounded-[33554400px] top-0 w-[104.266px]" data-name="Text">
      <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#45556c] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        AM BMW Group
      </p>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute bg-[#f1f5f9] content-stretch flex h-[20px] items-start left-[110.27px] px-[8px] py-[2px] rounded-[33554400px] top-0 w-[92.391px]" data-name="Text">
      <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#45556c] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        AM Mercedes
      </p>
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute bg-[#f1f5f9] content-stretch flex h-[20px] items-start left-[208.66px] px-[8px] py-[2px] rounded-[33554400px] top-0 w-[88.156px]" data-name="Text">
      <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#45556c] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        AM Stellantis
      </p>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[296.813px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text5 />
        <Text6 />
        <Text7 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_69_5027)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_69_5027">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#096] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          BMW GS97010-5
        </p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon2 />
        <Text8 />
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[16px] relative shrink-0 w-[75.563px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#90a1b9] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
          7 IDH items →
        </p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[16px] relative shrink-0 w-[202.313px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container10 />
        <Text9 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex h-[37px] items-center justify-between left-0 pt-px px-[20px] top-[129px] w-[1230px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <Container8 />
      <Container9 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-0 w-[185px]" data-name="Container">
      <p className="flex-[1_0_0] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#90a1b9] text-[12px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        Lap Shear
      </p>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[20px] left-0 top-[18px] w-[185px]" data-name="Container">
      <p className="absolute font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[20px] left-0 text-[#1d293d] text-[14px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        22.4
      </p>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[38px] w-[185px]" data-name="Container">
      <p className="flex-[1_0_0] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#90a1b9] text-[12px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        N/mm²
      </p>
    </div>
  );
}

function Container13() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Container14 />
      <Container15 />
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-0 w-[185px]" data-name="Container">
      <p className="flex-[1_0_0] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#90a1b9] text-[12px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        T-Peel
      </p>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute h-[20px] left-0 top-[18px] w-[185px]" data-name="Container">
      <p className="absolute font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[20px] left-0 text-[#1d293d] text-[14px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        7.9
      </p>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[38px] w-[185px]" data-name="Container">
      <p className="flex-[1_0_0] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#90a1b9] text-[12px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        N/mm
      </p>
    </div>
  );
}

function Container17() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Container18 />
      <Container19 />
      <Container20 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-0 w-[185px]" data-name="Container">
      <p className="flex-[1_0_0] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#90a1b9] text-[12px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        Impact Peel
      </p>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute h-[20px] left-0 top-[18px] w-[185px]" data-name="Container">
      <p className="absolute font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[20px] left-0 text-[#1d293d] text-[14px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        31.5
      </p>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[38px] w-[185px]" data-name="Container">
      <p className="flex-[1_0_0] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#90a1b9] text-[12px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        N/mm
      </p>
    </div>
  );
}

function Container21() {
  return (
    <div className="col-3 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Container22 />
      <Container23 />
      <Container24 />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-0 w-[185px]" data-name="Container">
      <p className="flex-[1_0_0] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#90a1b9] text-[12px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        E-Modulus
      </p>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute h-[20px] left-0 top-[18px] w-[185px]" data-name="Container">
      <p className="absolute font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[20px] left-0 text-[#1d293d] text-[14px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        3.1
      </p>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[38px] w-[185px]" data-name="Container">
      <p className="flex-[1_0_0] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#90a1b9] text-[12px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        GPa
      </p>
    </div>
  );
}

function Container25() {
  return (
    <div className="col-4 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Container26 />
      <Container27 />
      <Container28 />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-0 w-[185px]" data-name="Container">
      <p className="flex-[1_0_0] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#90a1b9] text-[12px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        Density
      </p>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute h-[20px] left-0 top-[18px] w-[185px]" data-name="Container">
      <p className="absolute font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[20px] left-0 text-[#1d293d] text-[14px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        1.3
      </p>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[38px] w-[185px]" data-name="Container">
      <p className="flex-[1_0_0] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#90a1b9] text-[12px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        g/cm³
      </p>
    </div>
  );
}

function Container29() {
  return (
    <div className="col-5 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Container30 />
      <Container31 />
      <Container32 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#90a1b9] text-[12px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        Cure
      </p>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[20px] left-0 text-[#1d293d] text-[14px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        170°C / 25 min
      </p>
    </div>
  );
}

function Container33() {
  return (
    <div className="col-6 content-stretch flex flex-col gap-[2px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Container34 />
      <Container35 />
    </div>
  );
}

function Container12() {
  return (
    <div className="gap-x-[16px] gap-y-[4px] grid grid-cols-[repeat(6,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[54px] relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Container17 />
      <Container21 />
      <Container25 />
      <Container29 />
      <Container33 />
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[16px] relative shrink-0 w-[62.813px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#90a1b9] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
          Substrates:
        </p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute bg-white content-stretch flex h-[22px] items-start left-0 px-[9px] py-[3px] rounded-[4px] top-0 w-[45.906px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#45556c] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        Steel
      </p>
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute bg-white content-stretch flex h-[22px] items-start left-[51.91px] px-[9px] py-[3px] rounded-[4px] top-0 w-[73.516px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#45556c] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        Aluminum
      </p>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[22px] relative shrink-0 w-[125.422px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text11 />
        <Text12 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex gap-[12px] h-[22px] items-center relative shrink-0 w-full" data-name="Container">
      <Text10 />
      <Container37 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-[rgba(248,250,252,0.6)] content-stretch flex flex-col gap-[12px] h-[113px] items-start left-0 pt-[13px] px-[20px] rounded-bl-[14px] rounded-br-[14px] top-[166px] w-[1230px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none rounded-bl-[14px] rounded-br-[14px]" />
      <Container12 />
      <Container36 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white border border-[#e2e8f0] border-solid relative rounded-[14px] size-full" data-name="Container">
      <Container1 />
      <Container7 />
      <Container11 />
    </div>
  );
}