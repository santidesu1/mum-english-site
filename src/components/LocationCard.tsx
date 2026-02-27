"use client";

import { branch } from "@/config/branch";
import { Button } from "@/components/ui/Button";
import { useLang } from "@/components/lang/LangProvider";
import { t } from "@/lib/i18n";

export function LocationCard() {
  const { lang } = useLang();

  const addressText = lang === "ko" ? branch.addressKo : branch.addressEn;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(addressText);
      alert(lang === "ko" ? "주소가 복사되었습니다." : "Address copied.");
    } catch {
      alert(lang === "ko" ? "복사에 실패했습니다." : "Copy failed.");
    }
  };

  return (
    <div className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-black/5 md:p-8">
      <h2 className="text-xl font-extrabold">{t.sections.location[lang]}</h2>

      <div className="mt-3 space-y-2 text-sm text-black/70">
        {/* Address row + actions (close to the address, not far right) */}
        <div className="flex flex-wrap items-center gap-2">
          <p className="min-w-0 flex-1">
            <span className="font-bold">{lang === "ko" ? "주소:" : "Address:"}</span>{" "}
            {addressText}
          </p>

          <div className="flex shrink-0 items-center gap-2">
            <Button
              asChild
              className="h-8 rounded-full px-3 text-sm font-extrabold"
            >
              <a href={branch.links.naverMap} target="_blank" rel="noreferrer">
                {t.cta.openNaver[lang]}
              </a>
            </Button>

            <Button
              variant="outline"
              type="button"
              onClick={copy}
              className="h-8 rounded-full px-3 text-sm font-extrabold"
            >
              {t.cta.copyAddr[lang]}
            </Button>
          </div>
        </div>

        <p>
          <span className="font-bold">{lang === "ko" ? "운영시간:" : "Hours:"}</span>{" "}
          {lang === "ko" ? branch.hoursKo : branch.hoursEn}
        </p>

        <p className="text-xs text-black/50">
          {lang === "ko" ? branch.closedNoteKo : branch.closedNoteEn}
        </p>

        <p>
          <span className="font-bold">{lang === "ko" ? "주차:" : "Parking:"}</span>{" "}
          {lang === "ko" ? branch.parkingKo : branch.parkingEn}
        </p>

        {/* Phone row + Call button (RIGHT NEXT TO the number) */}
        <div className="flex flex-wrap items-center gap-2">
          <p>
            <span className="font-bold">{lang === "ko" ? "전화:" : "Phone:"}</span>{" "}
            {branch.phone}
          </p>

          <Button
            variant="outline"
            asChild
            className="h-8 rounded-full px-3 text-sm font-extrabold"
          >
            <a href={`tel:${branch.phone}`}>{t.cta.call[lang]}</a>
          </Button>
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
