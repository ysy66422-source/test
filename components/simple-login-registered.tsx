/* eslint-disable @next/next/no-img-element -- Figma MCP assets */

import Link from "next/link";

// ─── Status Bar ───────────────────────────────────────────────────────────────
const imgTop =
  "https://www.figma.com/api/mcp/asset/a953d1bc-30cb-4365-8008-59af17ec0a1a";

// ─── Navigation Header ────────────────────────────────────────────────────────
const imgIcon32GnbBack =
  "https://www.figma.com/api/mcp/asset/e2e0ddc7-ca00-42d9-b073-25f2d65af4f8";
const imgIcon32GnbBack1 =
  "https://www.figma.com/api/mcp/asset/76c4acc6-44f9-440f-ba05-0765a9429fa4";
const imgIcon32GnbSearch =
  "https://www.figma.com/api/mcp/asset/92790d7a-ba64-4bf6-ad46-4fd05dc7fbfc";

// ─── Site Row ─────────────────────────────────────────────────────────────────
const imgAuctionLogo =
  "https://www.figma.com/api/mcp/asset/7f521299-5e0e-41de-8d61-78a2e911a881";
const imgGmarketLogo =
  "https://www.figma.com/api/mcp/asset/af1f774b-fbe8-44c2-9ffa-d1f77ced0eb9";
const imgGmarketMask =
  "https://www.figma.com/api/mcp/asset/c241c06d-ef28-4b90-8348-2c3086ff9a78";
const imgArrowRight =
  "https://www.figma.com/api/mcp/asset/94957e00-6853-4d4c-ae17-b3df3149bd73";

// ─── 더보기 ────────────────────────────────────────────────────────────────────
const imgMorePlus =
  "https://www.figma.com/api/mcp/asset/d1ed4bca-1817-4cf5-a794-8f9ad938df99";
const imgMorePlusFill =
  "https://www.figma.com/api/mcp/asset/f0ecf388-150d-4b81-8ab9-4980c16e0e3e";

// ─── GNB — 중앙 + 버튼 ────────────────────────────────────────────────────────
const imgCenterBtn =
  "https://www.figma.com/api/mcp/asset/8580c06b-9824-47bd-995a-b3c061c218f8";

// ─── GNB — 홈 아이콘 ──────────────────────────────────────────────────────────
const imgHome1503 =
  "https://www.figma.com/api/mcp/asset/65b2e676-d501-4c12-82f7-175dfb219fbd";
const imgHome276265 =
  "https://www.figma.com/api/mcp/asset/d78ba725-9ce1-4cd6-90b8-1ee6a74d5b92";

// ─── GNB — 쇼핑혜택 아이콘 ────────────────────────────────────────────────────
const imgBenefitsVector =
  "https://www.figma.com/api/mcp/asset/f22ef5b6-b65e-4786-97ca-99c727b3c021";
const imgBenefits265 =
  "https://www.figma.com/api/mcp/asset/ccd2c6d0-035d-4b52-8814-1c2cace0c82c";
const imgBenefits2587 =
  "https://www.figma.com/api/mcp/asset/bc282201-213b-461c-b13f-432922e23199";

// ─── GNB — 마이페이지 아이콘 ──────────────────────────────────────────────────
const imgMypage1702 =
  "https://www.figma.com/api/mcp/asset/d3eb05d3-8c77-43f8-895f-85eada23958b";
const imgMypage1703 =
  "https://www.figma.com/api/mcp/asset/6e284223-661d-40d2-b9bf-ff9ae07e1c4e";
const imgMypage2574 =
  "https://www.figma.com/api/mcp/asset/5d382da1-5be7-4f0c-aa24-e09828d35047";
const imgMypage240 =
  "https://www.figma.com/api/mcp/asset/ae0a00c1-3d03-4c23-8a8c-d25c0b4039da";

// ─── GNB — 전체메뉴 아이콘 ────────────────────────────────────────────────────
const imgMenuVector1 =
  "https://www.figma.com/api/mcp/asset/6f5e86fb-03a2-46b6-b864-2f4b4be2e806";
const imgMenuVector2 =
  "https://www.figma.com/api/mcp/asset/02b6fd82-f608-43a4-985c-26383701510e";

// ─── GNB — 홈 인디케이터 ──────────────────────────────────────────────────────
const imgBottom =
  "https://www.figma.com/api/mcp/asset/e94478eb-f392-428d-a6ef-2ac3ea6530b2";

// ─────────────────────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────────────────────

type SiteRowProps = {
  name: string;
  logoSrc: string;
  maskSrc?: string;
};

function SiteRow({ name, logoSrc, maskSrc }: SiteRowProps) {
  return (
    <div className="w-full rounded-[16px] bg-white">
      <div className="flex items-center justify-between px-5 py-5">
        <div className="flex min-w-0 flex-1 items-center gap-2">
          <div className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white">
            {maskSrc ? (
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  WebkitMaskImage: `url('${maskSrc}')`,
                  maskImage: `url('${maskSrc}')`,
                  WebkitMaskSize: "32px 32px",
                  maskSize: "32px 32px",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskPosition: "center",
                }}
              >
                <img alt="" src={logoSrc} className="block size-[34px] max-w-none" />
              </div>
            ) : (
              <img
                alt=""
                src={logoSrc}
                className="absolute inset-0 block size-full max-w-none object-cover"
              />
            )}
          </div>
          <p className="truncate text-[16px] font-bold leading-[1.4] text-[#222]">{name}</p>
        </div>
        <div className="flex size-4 shrink-0 items-center justify-center">
          <img alt="" src={imgArrowRight} className="block size-4 max-w-none" />
        </div>
      </div>
    </div>
  );
}

// ─── GNB 홈 아이콘 ────────────────────────────────────────────────────────────
function IconHome() {
  return (
    <div className="relative h-6 w-full shrink-0">
      <div className="absolute bottom-0 right-3 h-6 w-6">
        <div className="absolute" style={{ inset: "-4.17%" }}>
          <img alt="" src={imgHome1503} className="block size-full max-w-none" />
        </div>
      </div>
      <div className="absolute h-[2px] w-[10px]" style={{ bottom: 12, right: 19 }}>
        <img alt="" src={imgHome276265} className="absolute inset-0 block size-full max-w-none" />
      </div>
    </div>
  );
}

// ─── GNB 쇼핑혜택 아이콘 ──────────────────────────────────────────────────────
function IconBenefits() {
  return (
    <div className="relative w-full shrink-0" style={{ height: 26.229 }}>
      {/* 메인 패스 */}
      <div
        className="absolute"
        style={{ bottom: 0.26, right: 9.02, width: 28.98, height: 26.229 }}
      >
        <img alt="" src={imgBenefitsVector} className="absolute inset-0 block size-full max-w-none" />
      </div>
      {/* 선 */}
      <div
        className="absolute"
        style={{ bottom: 10.23, right: 20.38, width: 6.288, height: 6.288 }}
      >
        <div className="absolute" style={{ inset: "-8.43%" }}>
          <img alt="" src={imgBenefits265} className="block size-full max-w-none" />
        </div>
      </div>
      {/* 타원 위 */}
      <div
        className="absolute"
        style={{ bottom: 14.83, right: 24.98, width: 2.462, height: 2.462 }}
      >
        <div className="absolute" style={{ inset: "-30.46%" }}>
          <img alt="" src={imgBenefits2587} className="block size-full max-w-none" />
        </div>
      </div>
      {/* 타원 아래 */}
      <div
        className="absolute"
        style={{ bottom: 9.46, right: 19.62, width: 2.462, height: 2.462 }}
      >
        <div className="absolute" style={{ inset: "-30.46%" }}>
          <img alt="" src={imgBenefits2587} className="block size-full max-w-none" />
        </div>
      </div>
    </div>
  );
}

// ─── GNB 마이페이지 아이콘 ────────────────────────────────────────────────────
function IconMypage() {
  return (
    <div className="relative h-6 w-full shrink-0">
      <div className="absolute size-3" style={{ bottom: 14.38, right: 27.07 }}>
        <img alt="" src={imgMypage1702} className="absolute inset-0 block size-full max-w-none" />
      </div>
      <div className="absolute size-3" style={{ bottom: 14.38, right: 17.86 }}>
        <img alt="" src={imgMypage1703} className="absolute inset-0 block size-full max-w-none" />
      </div>
      <div className="absolute size-6" style={{ bottom: 0, right: 12.23 }}>
        <div className="absolute" style={{ inset: "-4.17%" }}>
          <img alt="" src={imgMypage2574} className="block size-full max-w-none" />
        </div>
      </div>
      <div className="absolute h-0" style={{ bottom: 12.5, right: 21.98, width: 4.5 }}>
        <div className="absolute" style={{ inset: "-1px -22.22%" }}>
          <img alt="" src={imgMypage240} className="block size-full max-w-none" />
        </div>
      </div>
    </div>
  );
}

// ─── GNB 전체메뉴 아이콘 ──────────────────────────────────────────────────────
function IconMenu() {
  return (
    <div className="relative h-6 w-full shrink-0">
      {/* 상단 좌 */}
      <div className="absolute size-[11px]" style={{ bottom: 13, right: 20.99 }}>
        <img alt="" src={imgMenuVector1} className="absolute inset-0 block size-full max-w-none" />
      </div>
      <div className="absolute size-[9px]" style={{ bottom: 14, right: 21.99 }}>
        <div className="absolute" style={{ inset: "-11.11%" }}>
          <img alt="" src={imgMenuVector2} className="block size-full max-w-none" />
        </div>
      </div>
      {/* 상단 우 */}
      <div className="absolute size-[11px]" style={{ bottom: 13, right: 7.99 }}>
        <img alt="" src={imgMenuVector1} className="absolute inset-0 block size-full max-w-none" />
      </div>
      <div className="absolute size-[9px]" style={{ bottom: 14, right: 8.99 }}>
        <div className="absolute" style={{ inset: "-11.11%" }}>
          <img alt="" src={imgMenuVector2} className="block size-full max-w-none" />
        </div>
      </div>
      {/* 하단 좌 */}
      <div className="absolute size-[11px]" style={{ bottom: 0, right: 20.99 }}>
        <img alt="" src={imgMenuVector1} className="absolute inset-0 block size-full max-w-none" />
      </div>
      <div className="absolute size-[9px]" style={{ bottom: 1, right: 21.99 }}>
        <div className="absolute" style={{ inset: "-11.11%" }}>
          <img alt="" src={imgMenuVector2} className="block size-full max-w-none" />
        </div>
      </div>
      {/* 하단 우 */}
      <div className="absolute size-[11px]" style={{ bottom: 0, right: 7.99 }}>
        <img alt="" src={imgMenuVector1} className="absolute inset-0 block size-full max-w-none" />
      </div>
      <div className="absolute size-[9px]" style={{ bottom: 1, right: 8.99 }}>
        <div className="absolute" style={{ inset: "-11.11%" }}>
          <img alt="" src={imgMenuVector2} className="block size-full max-w-none" />
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────────────────────────
export function SimpleLoginRegistered() {
  return (
    <div
      className="flex min-h-screen w-full flex-col items-start gap-8 bg-[#f6f7fb]"
      style={{ fontFamily: "Pretendard, sans-serif" }}
    >
      {/* ── Status Bar ── */}
      <div className="relative h-[41px] w-full shrink-0">
        <img
          alt=""
          src={imgTop}
          className="absolute inset-0 block size-full max-w-none object-cover"
        />
      </div>

      {/* ── Navigation Header ── */}
      <div className="flex h-[48px] w-full shrink-0 items-center justify-between px-4">
        {/* 뒤로 가기 */}
        <Link href="/" aria-label="뒤로 가기" className="flex size-8 items-center justify-center">
          {/* Figma masked back icon */}
          <div
            className="relative shrink-0"
            style={{ width: 20.425, height: 16.781 }}
          >
            <div
              className="absolute inset-0"
              style={{
                WebkitMaskImage: `url('${imgIcon32GnbBack}')`,
                maskImage: `url('${imgIcon32GnbBack}')`,
                WebkitMaskSize: "32px 32px",
                maskSize: "32px 32px",
                WebkitMaskPosition: "-5.786px -7.609px",
                maskPosition: "-5.786px -7.609px",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
              }}
            >
              <div className="absolute" style={{ inset: "-5.96% -4.9%" }}>
                <img alt="" src={imgIcon32GnbBack1} className="block size-full max-w-none" />
              </div>
            </div>
          </div>
        </Link>

        <p className="text-[18px] font-bold leading-normal text-[#222]">간편로그인</p>

        <button type="button" aria-label="검색" className="flex size-8 items-center justify-center">
          <img alt="" src={imgIcon32GnbSearch} className="absolute block size-8 max-w-none" />
        </button>
      </div>

      {/* ── Tabs + 계정 목록 ── */}
      <div className="flex w-full shrink-0 flex-col items-start px-6">
        {/* 탭 */}
        <div className="flex w-full items-center gap-5 pb-4">
          <span className="text-[16px] font-bold leading-normal text-[#959595]">전체 사이트</span>
          <div className="relative">
            <span className="text-[16px] font-bold leading-normal text-[#222]">등록된 계정</span>
            <span className="absolute -bottom-[1px] left-0 h-[2px] w-full rounded-full bg-[#222]" />
          </div>
        </div>

        {/* 계정 목록 */}
        <div className="flex w-full flex-col gap-4">
          <SiteRow name="옥션" logoSrc={imgAuctionLogo} />
          <SiteRow name="지마켓" logoSrc={imgGmarketLogo} maskSrc={imgGmarketMask} />
          <SiteRow name="옥션" logoSrc={imgAuctionLogo} />
          <SiteRow name="옥션" logoSrc={imgAuctionLogo} />
          <SiteRow name="옥션" logoSrc={imgAuctionLogo} />

          {/* 더보기 */}
          <button type="button" className="flex w-full items-center justify-center gap-1 py-2">
            <div
              className="relative shrink-0"
              style={{ width: 10.067, height: 9.828 }}
            >
              <div
                className="absolute inset-0"
                style={{
                  WebkitMaskImage: `url('${imgMorePlus}')`,
                  maskImage: `url('${imgMorePlus}')`,
                  WebkitMaskSize: "18px 18px",
                  maskSize: "18px 18px",
                  WebkitMaskPosition: "-3.966px -4.086px",
                  maskPosition: "-3.966px -4.086px",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                }}
              >
                <img alt="" src={imgMorePlusFill} className="absolute inset-0 block size-full max-w-none" />
              </div>
            </div>
            <span className="text-[14px] font-medium leading-normal text-[#2d6af6]">더보기</span>
          </button>
        </div>
      </div>

      {/* ── GNB (Figma 1802:360 반응형) ── */}
      <div className="mt-auto flex w-full shrink-0 flex-col items-start">

        {/* 중앙 + 버튼 */}
        <div className="flex w-full items-center justify-center px-[163px]">
          <div className="relative size-[56px]">
            <img
              alt="추가"
              src={imgCenterBtn}
              className="absolute inset-0 block size-full max-w-none"
            />
          </div>
        </div>

        {/* 네비게이션 바 */}
        <div className="flex w-full flex-col items-start bg-white px-[22px] py-3">
          <div className="flex w-full items-center justify-between">

            {/* 홈 */}
            <div className="flex w-12 shrink-0 flex-col items-center gap-[7px]">
              <IconHome />
              <p className="w-full text-center text-[11px] leading-normal text-black">홈</p>
            </div>

            {/* 쇼핑혜택 */}
            <div className="flex w-12 shrink-0 flex-col items-center gap-[6px]">
              <IconBenefits />
              <p className="w-full text-center text-[11px] leading-normal text-black">쇼핑혜택</p>
            </div>

            {/* 중앙 빈 공간 (+ 버튼 자리) */}
            <div className="h-[13px] w-12 shrink-0" />

            {/* 마이페이지 */}
            <div className="flex w-12 shrink-0 flex-col items-center gap-[7px]">
              <IconMypage />
              <p className="w-full text-[11px] leading-normal text-black">마이페이지</p>
            </div>

            {/* 전체메뉴 */}
            <div className="flex w-12 shrink-0 flex-col items-center gap-[7px]">
              <IconMenu />
              <p className="w-full text-center text-[11px] leading-normal text-black">전체메뉴</p>
            </div>

          </div>
        </div>

        {/* 홈 인디케이터 */}
        <div className="relative h-6 w-full shrink-0">
          <img
            alt=""
            src={imgBottom}
            className="absolute inset-0 block size-full max-w-none"
          />
        </div>
      </div>
    </div>
  );
}
