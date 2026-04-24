/* eslint-disable @next/next/no-img-element -- Figma MCP assets */

import Link from "next/link";

const imgBlockLayer =
  "https://www.figma.com/api/mcp/asset/8833ec73-5588-4ed1-9c42-e3da431a4da2";
const imgStatusBar =
  "https://www.figma.com/api/mcp/asset/79bd19ee-5638-46c1-8829-7c7d4fbfc464";
const imgBackIcon =
  "https://www.figma.com/api/mcp/asset/5e49976e-b22c-4c30-9835-dab4abfb186e";

export function SimpleLoginEmpty() {
  return (
    /* 반응형 — 고정 너비 제거, flex 컬럼 흐름 레이아웃 */
    <div
      className="flex min-h-screen w-full items-start bg-[#f6f7fb]"
      style={{ fontFamily: "Pretendard, sans-serif" }}
    >
      <div className="flex w-full flex-1 flex-col items-center gap-3">

        {/* ── Status Bar ── */}
        <div className="w-full shrink-0">
          <div className="relative h-[41px] w-full">
            <img
              alt=""
              src={imgStatusBar}
              className="absolute inset-0 block h-full w-full max-w-none object-cover"
            />
          </div>
        </div>

        {/* ── Navigation Header ── */}
        <div className="flex h-[48px] w-full shrink-0 items-center justify-between px-4">
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

          <p className="text-[18px] font-bold leading-normal text-[#222]">
            간편 로그인
          </p>

          {/* 우측 여백 — 타이틀 가운데 정렬 유지 */}
          <div className="h-8 w-8" aria-hidden="true" />
        </div>

        {/* ── Tab Bar + 콘텐츠 ── */}
        <div className="flex w-full shrink-0 flex-col items-start px-6">

          {/* 탭 */}
          <div className="flex w-full items-center gap-5 pb-4">
            <button
              type="button"
              className="text-[16px] font-bold leading-normal text-[#959595]"
            >
              전체 사이트
            </button>
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

          {/* Empty-state Card */}
          <div className="w-full rounded-[16px] bg-white py-[34px]">
            <div className="flex flex-col items-center gap-[7px]">
              {/* 일러스트 — 래퍼: 페이드인 0.8s → 유지 3s → 반복 / 이미지: Y축 회전 */}
              <div
                className="animate-fade-in-hold opacity-0"
                style={{ perspective: "600px" }}
              >
                <img
                  alt="등록된 계정 없음"
                  src={imgBlockLayer}
                  className="block h-[122px] w-[122px] max-w-none"
                  style={{
                    animation: "spinY 3s linear infinite",
                    transformOrigin: "center center",
                  }}
                />
              </div>

              {/* 안내 텍스트 */}
              <p className="text-center text-[16px] font-normal leading-[1.4] text-[#222]">
                등록한 계정이 없습니다.{" "}
                <br />
                자주 이용하시는 사이트의 계정을
                <br />
                등록하고 간편하게 로그인해보세요.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
