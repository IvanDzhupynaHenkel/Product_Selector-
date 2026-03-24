import svgPaths from "./svg-qnp2zqbkj9";

function Label() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[16px] min-h-px min-w-px relative text-[#45556c] text-[12px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        IB Product Name
      </p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute bg-white h-[38px] left-0 rounded-[10px] top-0 w-[296px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip px-[32px] py-[8px] relative rounded-[inherit] size-full">
        <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#90a1b9] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
          Search...
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[12px] size-[14px] top-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p8cdb700} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M12.25 12.25L9.74167 9.74167" id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[38px] relative shrink-0 w-full" data-name="Container">
      <TextInput />
      <Icon />
    </div>
  );
}

function Container2() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Label />
      <Container3 />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[16px] min-h-px min-w-px relative text-[#45556c] text-[12px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        1C / 2C Product
      </p>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16.125px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[20px] left-[8.5px] text-[#90a1b9] text-[14px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          All
        </p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[38px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[13px] py-px relative size-full">
          <Text />
          <Icon1 />
        </div>
      </div>
    </div>
  );
}

function Ot() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Ot">
      <Label1 />
      <Button />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[16px] min-h-px min-w-px relative text-[#45556c] text-[12px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Top Account Name
      </p>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16.125px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[20px] left-[8.5px] text-[#90a1b9] text-[14px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          All
        </p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white h-[38px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[13px] py-px relative size-full">
          <Text1 />
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function Ot1() {
  return (
    <div className="col-3 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Ot">
      <Label2 />
      <Button1 />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[16px] min-h-px min-w-px relative text-[#45556c] text-[12px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Pumpability
      </p>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16.125px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[20px] left-[8.5px] text-[#90a1b9] text-[14px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          All
        </p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white h-[38px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[13px] py-px relative size-full">
          <Text2 />
          <Icon3 />
        </div>
      </div>
    </div>
  );
}

function Ot2() {
  return (
    <div className="col-4 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Ot">
      <Label3 />
      <Button2 />
    </div>
  );
}

function Container1() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[62px] relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Ot />
      <Ot1 />
      <Ot2 />
    </div>
  );
}

function Label4() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-0 w-[281.5px]" data-name="Label">
      <p className="flex-[1_0_0] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[0] min-h-px min-w-px relative text-[#45556c] text-[0px] text-[12px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <span className="leading-[16px]">{`Lap Shear `}</span>
        <span className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16px] text-[#90a1b9]" style={{ fontVariationSettings: "'opsz' 9" }}>
          [N/mm²]
        </span>
      </p>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[16px] relative shrink-0 w-[24.781px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#62748e] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
          2.50
        </p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[16px] relative shrink-0 w-[32.531px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#62748e] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
          35.00
        </p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-center justify-between left-0 top-[24px] w-[281.5px]" data-name="Container">
      <Text3 />
      <Text4 />
    </div>
  );
}

function Container7() {
  return <div className="absolute bg-[#e2e8f0] h-[4px] left-0 rounded-[4px] top-[6px] w-[281.5px]" data-name="Container" />;
}

function Container8() {
  return <div className="absolute bg-[#62748e] h-[4px] left-0 rounded-[4px] top-[6px] w-[281.5px]" data-name="Container" />;
}

function RangeSlider() {
  return <div className="absolute h-[4px] left-0 top-[6px] w-[281.5px]" data-name="Range Slider" />;
}

function RangeSlider1() {
  return <div className="absolute h-[4px] left-0 top-[6px] w-[281.5px]" data-name="Range Slider" />;
}

function Container6() {
  return (
    <div className="absolute h-[16px] left-0 top-[44px] w-[281.5px]" data-name="Container">
      <Container7 />
      <Container8 />
      <RangeSlider />
      <RangeSlider1 />
    </div>
  );
}

function Si() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="si">
      <Label4 />
      <Container5 />
      <Container6 />
    </div>
  );
}

function Label5() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-0 w-[281.5px]" data-name="Label">
      <p className="flex-[1_0_0] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[0] min-h-px min-w-px relative text-[#45556c] text-[0px] text-[12px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <span className="leading-[16px]">{`T Peel `}</span>
        <span className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16px] text-[#90a1b9]" style={{ fontVariationSettings: "'opsz' 9" }}>
          [N/mm]
        </span>
      </p>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[16px] relative shrink-0 w-[25.078px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#62748e] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
          2.00
        </p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[16px] relative shrink-0 w-[29.109px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#62748e] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
          13.00
        </p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-center justify-between left-0 top-[24px] w-[281.5px]" data-name="Container">
      <Text5 />
      <Text6 />
    </div>
  );
}

function Container11() {
  return <div className="absolute bg-[#e2e8f0] h-[4px] left-0 rounded-[4px] top-[6px] w-[281.5px]" data-name="Container" />;
}

function Container12() {
  return <div className="absolute bg-[#62748e] h-[4px] left-0 rounded-[4px] top-[6px] w-[281.5px]" data-name="Container" />;
}

function RangeSlider2() {
  return <div className="absolute h-[4px] left-0 top-[6px] w-[281.5px]" data-name="Range Slider" />;
}

function RangeSlider3() {
  return <div className="absolute h-[4px] left-0 top-[6px] w-[281.5px]" data-name="Range Slider" />;
}

function Container10() {
  return (
    <div className="absolute h-[16px] left-0 top-[44px] w-[281.5px]" data-name="Container">
      <Container11 />
      <Container12 />
      <RangeSlider2 />
      <RangeSlider3 />
    </div>
  );
}

function Si1() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="si">
      <Label5 />
      <Container9 />
      <Container10 />
    </div>
  );
}

function Label6() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-0 w-[281.5px]" data-name="Label">
      <p className="flex-[1_0_0] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[0] min-h-px min-w-px relative text-[#45556c] text-[0px] text-[12px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <span className="leading-[16px]">{`E-Modulus DMA `}</span>
        <span className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16px] text-[#90a1b9]" style={{ fontVariationSettings: "'opsz' 9" }}>
          [GPa]
        </span>
      </p>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[16px] relative shrink-0 w-[21.984px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#62748e] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
          1.00
        </p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[16px] relative shrink-0 w-[25.375px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#62748e] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
          8.00
        </p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-center justify-between left-0 top-[24px] w-[281.5px]" data-name="Container">
      <Text7 />
      <Text8 />
    </div>
  );
}

function Container15() {
  return <div className="absolute bg-[#e2e8f0] h-[4px] left-0 rounded-[4px] top-[6px] w-[281.5px]" data-name="Container" />;
}

function Container16() {
  return <div className="absolute bg-[#62748e] h-[4px] left-0 rounded-[4px] top-[6px] w-[281.5px]" data-name="Container" />;
}

function RangeSlider4() {
  return <div className="absolute h-[4px] left-0 top-[6px] w-[281.5px]" data-name="Range Slider" />;
}

function RangeSlider5() {
  return <div className="absolute h-[4px] left-0 top-[6px] w-[281.5px]" data-name="Range Slider" />;
}

function Container14() {
  return (
    <div className="absolute h-[16px] left-0 top-[44px] w-[281.5px]" data-name="Container">
      <Container15 />
      <Container16 />
      <RangeSlider4 />
      <RangeSlider5 />
    </div>
  );
}

function Si2() {
  return (
    <div className="col-3 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="si">
      <Label6 />
      <Container13 />
      <Container14 />
    </div>
  );
}

function Label7() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-0 w-[281.5px]" data-name="Label">
      <p className="flex-[1_0_0] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[0] min-h-px min-w-px relative text-[#45556c] text-[0px] text-[12px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <span className="leading-[16px]">{`Impact Peel (RT) `}</span>
        <span className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16px] text-[#90a1b9]" style={{ fontVariationSettings: "'opsz' 9" }}>
          [N/mm]
        </span>
      </p>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[16px] relative shrink-0 w-[29.578px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#62748e] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
          10.00
        </p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[16px] relative shrink-0 w-[29.297px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#62748e] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
          41.00
        </p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-center justify-between left-0 top-[24px] w-[281.5px]" data-name="Container">
      <Text9 />
      <Text10 />
    </div>
  );
}

function Container19() {
  return <div className="absolute bg-[#e2e8f0] h-[4px] left-0 rounded-[4px] top-[6px] w-[281.5px]" data-name="Container" />;
}

function Container20() {
  return <div className="absolute bg-[#62748e] h-[4px] left-0 rounded-[4px] top-[6px] w-[281.5px]" data-name="Container" />;
}

function RangeSlider6() {
  return <div className="absolute h-[4px] left-0 top-[6px] w-[281.5px]" data-name="Range Slider" />;
}

function RangeSlider7() {
  return <div className="absolute h-[4px] left-0 top-[6px] w-[281.5px]" data-name="Range Slider" />;
}

function Container18() {
  return (
    <div className="absolute h-[16px] left-0 top-[44px] w-[281.5px]" data-name="Container">
      <Container19 />
      <Container20 />
      <RangeSlider6 />
      <RangeSlider7 />
    </div>
  );
}

function Si3() {
  return (
    <div className="col-4 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="si">
      <Label7 />
      <Container17 />
      <Container18 />
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#f8fafc] h-[94px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] p-[17px] relative size-full">
        <Si />
        <Si1 />
        <Si2 />
        <Si3 />
      </div>
    </div>
  );
}

function Label8() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[16px] min-h-px min-w-px relative text-[#45556c] text-[12px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        NVH (Noise, Vibration, Harshness)
      </p>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16.125px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[20px] left-[8.5px] text-[#90a1b9] text-[14px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          All
        </p>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white h-[38px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[13px] py-px relative size-full">
          <Text11 />
          <Icon4 />
        </div>
      </div>
    </div>
  );
}

function Ot3() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Ot">
      <Label8 />
      <Button3 />
    </div>
  );
}

function Label9() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[16px] min-h-px min-w-px relative text-[#45556c] text-[12px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Substrate
      </p>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16.125px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[20px] left-[8.5px] text-[#90a1b9] text-[14px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          All
        </p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-white h-[38px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[13px] py-px relative size-full">
          <Text12 />
          <Icon5 />
        </div>
      </div>
    </div>
  );
}

function Ot4() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Ot">
      <Label9 />
      <Button4 />
    </div>
  );
}

function Label10() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[16px] min-h-px min-w-px relative text-[#45556c] text-[12px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Cure Condition
      </p>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16.125px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[20px] left-[8.5px] text-[#90a1b9] text-[14px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          All
        </p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-white h-[38px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[13px] py-px relative size-full">
          <Text13 />
          <Icon6 />
        </div>
      </div>
    </div>
  );
}

function Ot5() {
  return (
    <div className="col-3 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Ot">
      <Label10 />
      <Button5 />
    </div>
  );
}

function Label11() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[16px] min-h-px min-w-px relative text-[#45556c] text-[12px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        IB Segment
      </p>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16.125px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[20px] left-[8.5px] text-[#90a1b9] text-[14px] text-center top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          All
        </p>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-white h-[38px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[13px] py-px relative size-full">
          <Text14 />
          <Icon7 />
        </div>
      </div>
    </div>
  );
}

function Ot6() {
  return (
    <div className="col-4 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Ot">
      <Label11 />
      <Button6 />
    </div>
  );
}

function Container21() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[62px] relative shrink-0 w-full" data-name="Container">
      <Ot3 />
      <Ot4 />
      <Ot5 />
      <Ot6 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start pt-[20px] px-[24px] relative size-full" data-name="Container">
      <Container1 />
      <Container4 />
      <Container21 />
    </div>
  );
}