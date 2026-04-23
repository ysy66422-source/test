/* eslint-disable @next/next/no-img-element -- Figma MCP assets; expiring remote URLs */

import Link from "next/link";

const imgBlockLayer =
  "https://www.figma.com/api/mcp/asset/85e24822-499f-4aac-8c2e-daea24deb057";
const imgBackIcon =
  "https://www.figma.com/api/mcp/asset/96ec9fbf-d534-4ffe-b438-80f23139c682";
const imgStatusBar =
  "https://www.figma.com/api/mcp/asset/051e5a8a-c2f8-4ccb-af95-4d8ab7e11975";

export function SimpleLoginEmpty() {
  return (
    /* 390×844 iPhone frame */
    <div
      className="relative mx-auto overflow-hidden bg-[#f6f7fb]"
      style={{ width: 390, minHeight: 844, fontFamily: "Pretendard, sans-serif" }}
    >
      {/* ────────────────────────────────────────
          iOS Status Bar
      ──────────────────────────────────────── */}
      <div className="pointer-events-none absolute left-0 top-0 h-[41px] w-full">
        <img
          alt=""
          src={imgStatusBar}
          className="absolute inset-0 block h-full w-full max-w-none object-cover"
        />
      </div>

      {/* ────────────────────────────────────────
          Navigation Header  (top: 43px, h: 48px)
      ──────────────────────────────────────── */}
      <div className="absolute left-0 top-[43px] flex h-[48px] w-full items-center justify-between px-4">
        {/* 뒤로 가기 → 등록된 계정 목록 (Figma 1375:39962) */}
        <Link
          href="/simple-login/accounts"
          aria-label="뒤로 가기"
          className="flex h-8 w-8 items-center justify-center"
        >
          <img
            alt=""
            src={imgBackIcon}
            className="block h-[17px] w-[21px] max-w-none"
          />
        </Link>

        {/* 타이틀 */}
        <p className="text-[18px] font-bold leading-normal text-[#222]">
          간편 로그인
        </p>

        {/* 우측 여백 (가운데 정렬 유지용) */}
        <div className="h-8 w-8" aria-hidden="true" />
      </div>

      {/* ────────────────────────────────────────
          Tab Bar  (top: 115px)
      ──────────────────────────────────────── */}
      <div className="absolute left-0 top-[115px] w-full px-6">
        <div className="flex items-center gap-5 pb-4">
          {/* 전체 사이트 — inactive */}
          <button
            type="button"
            className="text-[16px] font-bold leading-normal text-[#959595]"
          >
            전체 사이트
          </button>

          {/* 등록된 계정 — active (밑줄 인디케이터) */}
          <div className="relative">
            <button
              type="button"
              className="text-[16px] font-bold leading-normal text-[#222]"
            >
              등록된 계정
            </button>
            <span className="absolute -bottom-[1px] left-0 h-[2px] w-full rounded-full bg-[#222]" />
          </div>
        </div>

        {/* ──────────────────────────────────────
            Empty-state Card
        ────────────────────────────────────── */}
        <div className="w-full rounded-[16px] bg-white py-[34px]">
          <div className="flex flex-col items-center gap-[7px]">
            {/* 일러스트 */}
            <img
              alt="등록된 계정 없음"
              src={imgBlockLayer}
              className="block h-[122px] w-[122px] max-w-none"
            />

            {/* 설명 텍스트 */}
            <p className="text-center text-[16px] font-normal leading-[1.4] text-[#222]">
              등록한 계정이 없습니다.&nbsp;
              <br />
              자주 이용하시는 사이트의 계정을
              <br />
              등록하고 간편하게 로그인해보세요.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
