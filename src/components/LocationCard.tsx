"use client";

import Image from "next/image";
import { branch } from "@/config/branch";
import { t } from "@/lib/i18n";
import { useLang } from "@/components/lang/LangProvider";

const pill =
  "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-extrabold transition";
const pillOutline =
  `${pill} border border-black/15 bg-white text-black hover:bg-black/5`;
const pillPrimary =
  `${pill} bg-ink text-white hover:opacity-90`;

export function LocationCard() {
  const { lang } = useLang();

  const address = lang === "ko" ? branch.addressKo : branch.addressEn;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      alert(lang === "ko" ? "주소가 복사되었습니다." : "Address copied.");
    } catch {
      alert(lang === "ko" ? "복사에 실패했습니다." : "Copy failed.");
    }
  };

  return (
    <div className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-black/5 md:p-8">
      <h2 className="text-xl font-extrabold">
        {lang === "ko" ? t.sections.location.ko : "Visit us"}
      </h2>

      <div className="mt-4 grid gap-2 text-sm text-black/70">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <p className="min-w-[88px] font-bold">
            {lang === "ko" ? "주소:" : "Address:"}
          </p>

          <p className="flex-1">{address}</p>

          <div className="flex items-center gap-2">
            <a
              href={branch.links.naverMap}
              target="_blank"
              rel="noreferrer"
              className={pillOutline}
              aria-label="Open Naver Map"
              title="Open Naver Map"
            >
              <img
              src="/icons/naver-map.png"
              alt="Naver Map"
              className="h-5 w-5 object-contain"
            />
            </a>

            <button
              type="button"
              onClick={copy}
              className={pillOutline}
              aria-label="Copy address"
              title="Copy address"
            >
              <span className="text-base">📋</span>
            </button>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <p className="min-w-[88px] font-bold">
            {lang === "ko" ? "운영시간:" : "Hours:"}
          </p>
          <p>{lang === "ko" ? branch.hoursKo : branch.hoursEn}</p>
        </div>

        <p className="text-xs text-black/50">
          {lang === "ko" ? branch.closedNoteKo : branch.closedNoteEn}
        </p>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <p className="min-w-[88px] font-bold">
            {lang === "ko" ? "주차:" : "Parking:"}
          </p>
          <p>{lang === "ko" ? branch.parkingKo : branch.parkingEn}</p>
        </div>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <p className="min-w-[88px] font-bold">
            {lang === "ko" ? "전화:" : "Phone:"}
          </p>

          <div className="flex items-center gap-2">
            <p>{branch.phone}</p>
            <a
              href={`tel:${branch.phone}`}
              className={pillOutline}
              aria-label="Call"
              title="Call"
            >
              <span className="text-base">📞</span>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-paper p-5 ring-1 ring-black/5">
        <p className="text-sm font-extrabold">{t.sections.amenities[lang]}</p>
        <ul className="mt-2 grid list-disc gap-1 pl-5 text-sm text-black/70">
          {(lang === "ko" ? branch.amenitiesKo : branch.amenitiesEn).map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
