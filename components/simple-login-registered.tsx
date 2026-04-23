/* eslint-disable @next/next/no-img-element -- Figma MCP assets */

import Link from "next/link";

// ─── Status Bar ──────────────────────────────────────────────────────────────
const imgStatusBar =
  "https://www.figma.com/api/mcp/asset/797be8f8-1709-422d-8bc8-08dd38a51d7c";

// ─── Navigation Header ───────────────────────────────────────────────────────
const imgBackIcon =
  "https://www.figma.com/api/mcp/asset/890f20f4-83fa-4717-b4cc-e7c0918c6b7e";
const imgSearch =
  "https://www.figma.com/api/mcp/asset/c4eadf1a-fa74-43fe-be20-345b2c7aac5d";

// ─── Site Row ────────────────────────────────────────────────────────────────
const imgAuctionLogo =
  "https://www.figma.com/api/mcp/asset/7630a23d-d117-4e4c-98ac-e12b8d2bc27b";
const imgGmarketLogo =
  "https://www.figma.com/api/mcp/asset/77c5ab5b-ee6f-44a2-a0df-89cf5761036b";
const imgGmarketMask =
  "https://www.figma.com/api/mcp/asset/7b2ccfb8-9020-4ab4-98ee-106ab1cbec56";
const imgArrowRight =
  "https://www.figma.com/api/mcp/asset/0b51f222-8751-4f56-b312-7e7298759abd";

// ─── 더보기 ──────────────────────────────────────────────────────────────────
const imgMorePlus =
  "https://www.figma.com/api/mcp/asset/edc96da3-5300-44de-8d44-f9d429e521aa";

// ─── GNB assets (Figma node 1766:522) ───────────────────────────────────────
// Navigation Bar 배경 pill
const imgGroup =
  "https://www.figma.com/api/mcp/asset/70e1e77f-2803-4045-af02-0eb52c15fd00";
// 홈 아이콘 — 로컬 이미지 사용
const imgIcon32Home = "/images/Clip path group.png";
// 마이페이지 아이콘 mask + fill
const img207012 =
  "https://www.figma.com/api/mcp/asset/0ad1a1cf-f62c-408e-8abd-880abbad93de";
const img207013 =
  "https://www.figma.com/api/mcp/asset/ff825ecb-49fb-494c-9d96-2746db5eaa1b";
// 중앙 + 버튼 배경 + 아이콘
const imgGroup1 =
  "https://www.figma.com/api/mcp/asset/fa1ba21b-f30b-45fc-be19-33bf95eae920";
const img207137 =
  "https://www.figma.com/api/mcp/asset/382a4722-4d9b-4e7e-beec-182325e96c5a";
// 홈 인디케이터
const imgBottom =
  "https://www.figma.com/api/mcp/asset/e85884d5-dddd-43ae-9882-2c4f4ecf9453";
// 전체메뉴 2×2 아이콘 (색1, 색2)
const img276280 =
  "https://www.figma.com/api/mcp/asset/51eb0348-8c43-4e97-811c-1675207dee1e";
const img276283 =
  "https://www.figma.com/api/mcp/asset/897f8293-5212-41a4-b705-5e4c7bb06f13";
// 쇼핑혜택 아이콘
const img1748 =
  "https://www.figma.com/api/mcp/asset/9f17311d-7d4e-41ec-82cb-f9cb2890848f";
const img265 =
  "https://www.figma.com/api/mcp/asset/38827d2f-3d05-4809-89a0-e51f53500af9";
const img2587 =
  "https://www.figma.com/api/mcp/asset/6f914f01-02f6-4e38-b078-c40b800794e8";

// ─── Helpers ─────────────────────────────────────────────────────────────────
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
          <p className="truncate text-[16px] font-bold leading-[1.4] text-[#222]">
            {name}
          </p>
        </div>
        <div className="flex size-4 shrink-0 items-center justify-center">
          <img alt="" src={imgArrowRight} className="block size-4 max-w-none" />
        </div>
      </div>
    </div>
  );
}

// ─── GNB Component ───────────────────────────────────────────────────────────
// Figma 노드 1766:522 : absolute, top:696px, w:390px, h:114px
// 모든 자식 요소는 bottom/right 기준 절대좌표
function Gnb() {
  const maskStyle = (url: string, size: string, pos: string): React.CSSProperties => ({
    WebkitMaskImage: `url('${url}')`,
    maskImage: `url('${url}')`,
    WebkitMaskSize: size,
    maskSize: size,
    WebkitMaskPosition: pos,
    maskPosition: pos,
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
  });

  return (
    <div
      className="absolute left-0 overflow-visible"
      style={{ top: 696, width: 390, height: 114 }}
    >
      {/* Navigation Bar 배경 pill — 이미지가 컨테이너 바깥으로 확장(그림자 포함) */}
      <div
        className="absolute overflow-visible"
        style={{ bottom: 24, right: 0, height: 72, width: 390 }}
      >
        <div
          className="absolute"
          style={{ top: "-18.06%", right: "-4.1%", bottom: "-26.39%", left: "-4.1%" }}
        >
          <img alt="" src={imgGroup} className="block size-full max-w-none" />
        </div>
      </div>

      {/* 홈 아이콘 — 로컬 PNG */}
      <div
        className="absolute"
        style={{ bottom: 56, right: 324, width: 24, height: 24 }}
      >
        <img alt="홈" src={imgIcon32Home} className="block size-full max-w-none object-contain" />
      </div>

      {/* 홈 레이블 */}
      <p
        className="absolute whitespace-nowrap text-[11px] leading-normal text-black"
        style={{
          bottom: 49, right: 367.75,
          transform: "translateX(100%) translateY(100%)",
          fontFamily: "Pretendard, sans-serif",
        }}
      >
        홈
      </p>

      {/* 쇼핑혜택 아이콘 */}
      {/* 패스 1748 */}
      <div
        className="absolute"
        style={{
          bottom: 54.89, right: 251.49, width: 28.98, height: 26.229,
          ...maskStyle(img207012, "32px 32px", "-1.528px -2.886px"),
        }}
      >
        <img alt="" src={img1748} className="absolute inset-0 block size-full max-w-none" />
      </div>
      {/* 선 265 */}
      <div
        className="absolute"
        style={{
          bottom: 64.86, right: 262.86, width: 6.288, height: 6.288,
          ...maskStyle(img207012, "32px 32px", "-12.856px -12.856px"),
        }}
      >
        <div className="absolute" style={{ inset: "-8.43%" }}>
          <img alt="" src={img265} className="block size-full max-w-none" />
        </div>
      </div>
      {/* 타원 2587 */}
      <div
        className="absolute"
        style={{
          bottom: 69.45, right: 267.45, width: 2.462, height: 2.462,
          ...maskStyle(img207012, "32px 32px", "-12.087px -12.087px"),
        }}
      >
        <div className="absolute" style={{ inset: "-30.46%" }}>
          <img alt="" src={img2587} className="block size-full max-w-none" />
        </div>
      </div>
      {/* 타원 2588 */}
      <div
        className="absolute"
        style={{
          bottom: 64.09, right: 262.09, width: 2.462, height: 2.462,
          ...maskStyle(img207012, "32px 32px", "-17.45px -17.45px"),
        }}
      >
        <div className="absolute" style={{ inset: "-30.46%" }}>
          <img alt="" src={img2587} className="block size-full max-w-none" />
        </div>
      </div>

      {/* 쇼핑혜택 레이블 */}
      <p
        className="absolute whitespace-nowrap text-[11px] leading-normal text-black"
        style={{
          bottom: 49, right: 312.01,
          transform: "translateX(100%) translateY(100%)",
          fontFamily: "Pretendard, sans-serif",
        }}
      >
        쇼핑혜택
      </p>

      {/* 중앙 + 버튼 배경 */}
      <div
        className="absolute overflow-visible"
        style={{ bottom: 58, right: 167, width: 56, height: 56 }}
      >
        <div
          className="absolute"
          style={{ top: "-17.86%", right: "-35.71%", bottom: "-53.57%", left: "-35.71%" }}
        >
          <img alt="" src={imgGroup1} className="block size-full max-w-none" />
        </div>
      </div>
      {/* 중앙 + 아이콘 */}
      <div
        className="absolute"
        style={{ bottom: 74, right: 182, width: 25, height: 24 }}
      >
        <img alt="" src={img207137} className="absolute inset-0 block size-full max-w-none" />
      </div>

      {/* 마이페이지 아이콘 */}
      <div
        className="absolute"
        style={{
          bottom: 56, right: 112, width: 24, height: 24,
          ...maskStyle(img207012, "32px 32px", "-4px -4px"),
        }}
      >
        <div className="absolute" style={{ inset: "-4.17%" }}>
          <img alt="" src={img207013} className="block size-full max-w-none" />
        </div>
      </div>

      {/* 마이페이지 레이블 */}
      <p
        className="absolute whitespace-nowrap text-[11px] leading-normal text-black"
        style={{
          bottom: 49, right: 174.77,
          transform: "translateX(100%) translateY(100%)",
          fontFamily: "Pretendard, sans-serif",
        }}
      >
        마이페이지
      </p>

      {/* 전체메뉴 2×2 아이콘 */}
      {/* top-left */}
      <div className="absolute" style={{ bottom: 69, right: 55, width: 11, height: 11 }}>
        <img alt="" src={img276280} className="absolute inset-0 block size-full max-w-none" />
      </div>
      {/* bottom-left */}
      <div className="absolute" style={{ bottom: 56, right: 55, width: 11, height: 11 }}>
        <img alt="" src={img276283} className="absolute inset-0 block size-full max-w-none" />
      </div>
      {/* top-right */}
      <div className="absolute" style={{ bottom: 69, right: 42, width: 11, height: 11 }}>
        <img alt="" src={img276280} className="absolute inset-0 block size-full max-w-none" />
      </div>
      {/* bottom-right */}
      <div className="absolute" style={{ bottom: 56, right: 42, width: 11, height: 11 }}>
        <img alt="" src={img276283} className="absolute inset-0 block size-full max-w-none" />
      </div>

      {/* 전체메뉴 레이블 */}
      <p
        className="absolute whitespace-nowrap text-[11px] leading-normal text-black"
        style={{
          bottom: 49, right: 100.01,
          transform: "translateX(100%) translateY(100%)",
          fontFamily: "Pretendard, sans-serif",
        }}
      >
        전체메뉴
      </p>

      {/* 홈 인디케이터 */}
      <div className="absolute bottom-0 left-0 h-6 w-full">
        <img alt="" src={imgBottom} className="absolute inset-0 block size-full max-w-none" />
      </div>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────
export function SimpleLoginRegistered() {
  return (
    <div
      className="relative mx-auto bg-[#f6f7fb]"
      style={{ width: 390, height: 844, fontFamily: "Pretendard, sans-serif", overflow: "hidden" }}
    >
      {/* ── Status Bar ── */}
      <div className="pointer-events-none absolute left-0 top-0 h-[41px] w-full">
        <img
          alt=""
          src={imgStatusBar}
          className="absolute inset-0 block h-full w-full max-w-none object-cover"
        />
      </div>

      {/* ── Navigation Header ── */}
      <div className="absolute left-0 top-[43px] flex h-[48px] w-full items-center justify-between px-4">
        <Link
          href="/"
          aria-label="뒤로 가기"
          className="flex size-8 items-center justify-center"
        >
          <img alt="" src={imgBackIcon} className="block h-[17px] w-[21px] max-w-none" />
        </Link>
        <p className="text-[18px] font-bold leading-normal text-[#222]">간편로그인</p>
        <button type="button" aria-label="검색" className="flex size-8 items-center justify-center">
          <img alt="" src={imgSearch} className="block size-8 max-w-none" />
        </button>
      </div>

      {/* ── Tabs ── */}
      <div className="absolute left-0 top-[115px] w-full px-6">
        <div className="flex items-center gap-5 pb-4">
          <span className="text-[16px] font-bold leading-normal text-[#959595]">전체 사이트</span>
          <div className="relative">
            <span className="text-[16px] font-bold leading-normal text-[#222]">등록된 계정</span>
            <span className="absolute -bottom-[1px] left-0 h-[2px] w-full rounded-full bg-[#222]" />
          </div>
        </div>

        {/* 계정 목록 */}
        <div className="flex w-full max-w-[342px] flex-col gap-4 pb-40">
          <SiteRow name="옥션" logoSrc={imgAuctionLogo} />
          <SiteRow name="지마켓" logoSrc={imgGmarketLogo} maskSrc={imgGmarketMask} />
          <SiteRow name="옥션" logoSrc={imgAuctionLogo} />
          <SiteRow name="옥션" logoSrc={imgAuctionLogo} />
          <SiteRow name="옥션" logoSrc={imgAuctionLogo} />

          <button type="button" className="flex w-full items-center justify-center gap-1 py-2">
            <img alt="" src={imgMorePlus} className="h-[10px] w-[10px]" />
            <span className="text-[14px] font-medium leading-normal text-[#2d6af6]">더보기</span>
          </button>
        </div>
      </div>

      {/* ── GNB (Figma 1766:522) ── */}
      <Gnb />
    </div>
  );
}
