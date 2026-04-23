/* eslint-disable @next/next/no-img-element -- Figma MCP assets */

const imgGmarketLogo =
  "https://www.figma.com/api/mcp/asset/7af48357-caf9-4a69-935a-9d8aa3b2dfdc";
const imgLogoMask =
  "https://www.figma.com/api/mcp/asset/7a42c63f-275e-4d50-a0c5-79b9529a0a1b";
const imgBackIconFill =
  "https://www.figma.com/api/mcp/asset/6bf80b20-2169-43e1-885c-aef94817f5ca";
const imgEyeShow =
  "https://www.figma.com/api/mcp/asset/11b82292-79ef-40a4-ba63-ca172dac9b3e";
const imgEyeHide =
  "https://www.figma.com/api/mcp/asset/4f9b58cd-816c-4d2a-b87e-e82f88eadb06";
const imgStatusBar =
  "https://www.figma.com/api/mcp/asset/c84a36c9-05be-44bc-bf8d-0db2c1a25621";
const imgHomeIndicator =
  "https://www.figma.com/api/mcp/asset/953b9d43-8811-4d2b-b868-dcff0b0b7aa7";

export function ShoppingLogin() {
  return (
    <div className="relative mx-auto bg-[#f6f7fb]"
         style={{ width: 390, minHeight: 844 }}>

      {/* ── iOS Status Bar ── */}
      <div className="pointer-events-none absolute left-0 top-0 h-[41px] w-full">
        <img
          alt=""
          className="absolute inset-0 block h-full w-full max-w-none object-cover"
          src={imgStatusBar}
        />
      </div>

      {/* ── Navigation Header ── */}
      <div className="absolute left-0 top-[43px] flex h-[48px] w-full items-center justify-between px-4">
        {/* Back button */}
        <button
          type="button"
          aria-label="뒤로 가기"
          className="flex h-8 w-8 items-center justify-center"
        >
          <div className="relative h-[17px] w-[20px]">
            <img
              alt=""
              className="absolute inset-0 block h-full w-full max-w-none"
              src={imgBackIconFill}
            />
          </div>
        </button>

        {/* Title */}
        <p
          className="text-[18px] font-bold not-italic leading-normal text-[#222]"
          style={{ fontFamily: "Pretendard, sans-serif" }}
        >
          간편 로그인
        </p>

        {/* Right placeholder (keeps title centered) */}
        <div className="h-8 w-8" aria-hidden="true" />
      </div>

      {/* ── Main Content ── */}
      <div className="absolute left-0 top-[115px] flex w-full flex-col items-start gap-8 px-6">
        {/* App identity — logo + name */}
        <div className="flex w-full flex-col items-center gap-[15px]">
          {/* Logo */}
          <div className="relative h-[70px] w-[70px] overflow-hidden rounded-full">
            <img
              alt=""
              className="pointer-events-none absolute inset-[-1.4px] block max-w-none"
              style={{ width: 73.758, height: 73.758 }}
              src={imgGmarketLogo}
            />
          </div>

          {/* Brand name */}
          <p
            className="text-center text-[18px] font-bold not-italic leading-normal text-[#222]"
            style={{ fontFamily: "Pretendard, sans-serif" }}
          >
            지마켓
          </p>
        </div>

        {/* Form fields */}
        <div className="flex w-full flex-col gap-4">
          {/* ID field */}
          <div className="flex h-[64px] w-full items-center rounded-[16px] bg-white px-5 py-4">
            <div className="flex items-center gap-[21px]">
              <span
                className="w-[50px] text-[14px] font-normal not-italic leading-normal text-[#9294a0]"
                style={{ fontFamily: "Pretendard, sans-serif" }}
              >
                아이디
              </span>
              <span
                className="text-[18px] font-semibold not-italic leading-normal text-black"
                style={{ fontFamily: "Pretendard, sans-serif" }}
              >
                choisol222
              </span>
            </div>
          </div>

          {/* Password field */}
          <div className="flex w-full items-center rounded-[16px] bg-white px-5 py-4">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-[21px]">
                <span
                  className="w-[50px] text-[14px] font-normal not-italic leading-normal text-[#9294a0]"
                  style={{ fontFamily: "Pretendard, sans-serif" }}
                >
                  비밀번호
                </span>
                <span
                  className="text-[18px] font-semibold not-italic leading-normal text-black"
                  style={{ fontFamily: "Pretendard, sans-serif" }}
                >
                  ***********
                </span>
              </div>

              {/* Eye icon buttons */}
              <div className="flex items-center gap-px">
                <button
                  type="button"
                  aria-label="비밀번호 표시"
                  className="flex h-8 w-8 items-center justify-center"
                >
                  <img
                    alt=""
                    className="block h-[14px] w-[22px] max-w-none"
                    src={imgEyeShow}
                  />
                </button>
                <button
                  type="button"
                  aria-label="비밀번호 숨기기"
                  className="flex h-8 w-8 items-center justify-center"
                >
                  <img
                    alt=""
                    className="block h-[17px] w-[23px] max-w-none"
                    src={imgEyeHide}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Buttons ── */}
      <div className="absolute left-0 w-full px-5 pt-6"
           style={{ top: 627 }}>
        {/* Row 1 — 삭제(active) / 등록하기(disabled) */}
        <div className="mb-[9px] flex gap-[9px]">
          <button
            type="button"
            className="flex h-[63px] flex-1 items-center justify-center rounded-[16px] border border-[#2d6af6] bg-[#e7efff] p-5"
          >
            <span
              className="text-[16px] font-bold not-italic leading-normal text-[#2d6af6]"
              style={{ fontFamily: "Pretendard, sans-serif" }}
            >
              삭제
            </span>
          </button>
          <button
            type="button"
            disabled
            className="flex h-[63px] flex-1 items-center justify-center rounded-[16px] bg-[#e7efff] p-5"
          >
            <span
              className="text-[16px] font-bold not-italic leading-normal text-[#9dbafb]"
              style={{ fontFamily: "Pretendard, sans-serif" }}
            >
              등록하기
            </span>
          </button>
        </div>

        {/* Row 2 — 삭제(active) / 등록하기(filled) */}
        <div className="flex gap-[9px]">
          <button
            type="button"
            className="flex h-[63px] flex-1 items-center justify-center rounded-[16px] border border-[#2d6af6] bg-[#e7efff] p-5"
          >
            <span
              className="text-[16px] font-bold not-italic leading-normal text-[#2d6af6]"
              style={{ fontFamily: "Pretendard, sans-serif" }}
            >
              삭제
            </span>
          </button>
          <button
            type="button"
            className="flex h-[63px] flex-1 items-center justify-center rounded-[16px] bg-[#2d6af6] p-5"
          >
            <span
              className="text-[16px] font-bold not-italic leading-normal text-white"
              style={{ fontFamily: "Pretendard, sans-serif" }}
            >
              등록하기
            </span>
          </button>
        </div>
      </div>

      {/* ── Home Indicator ── */}
      <div className="absolute bottom-0 left-0 h-6 w-full">
        <img
          alt=""
          className="absolute inset-0 block h-full w-full max-w-none"
          src={imgHomeIndicator}
        />
      </div>
    </div>
  );
}
