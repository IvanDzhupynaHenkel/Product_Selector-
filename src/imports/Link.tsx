import imgGeminiGeneratedImageAd9Qmad9Qmad9Qma1 from "figma:asset/f5bbb9685401a7e2e9ef867404325fa0f066a628.png";

function Text() {
  return (
    <div className="absolute bg-[#f1f5f9] content-stretch flex h-[20px] items-start left-[294px] px-[8px] py-[2px] rounded-[4px] top-[14px] w-[38.383px]" data-name="Text">
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#45556c] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        APP
      </p>
    </div>
  );
}

function CategorySelection() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="CategorySelection">
      <p className="absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[27px] left-0 text-[#0f172b] text-[18px] top-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Injection Molding
      </p>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start justify-end left-[238.6px] top-[2px] w-[66.063px]" data-name="Text">
      <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#62748e] text-[12px] text-right whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        Europe only
      </p>
    </div>
  );
}

function CategorySelection1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="CategorySelection">
      <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[20px] left-0 text-[#45556c] text-[14px] top-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        11 products
      </p>
      <Text1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[26px] top-[87px] w-[313.664px]">
      <CategorySelection />
      <CategorySelection1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[74px] left-[26px] overflow-clip top-[14px] w-[131px]">
      <div className="absolute h-[158px] left-[-3px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.05)] top-[-44px] w-[134px]" data-name="Gemini_Generated_Image_ad9qmad9qmad9qma 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-0.14%] max-w-none top-0 w-[100.28%]" src={imgGeminiGeneratedImageAd9Qmad9Qmad9Qma1} />
        </div>
      </div>
    </div>
  );
}

export default function Link() {
  return (
    <div className="bg-white overflow-clip relative rounded-[10px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.1)] size-full" data-name="Link">
      <Text />
      <Frame />
      <Frame1 />
    </div>
  );
}