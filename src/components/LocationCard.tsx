"use client";

import { branch } from "@/config/branch";
import { Button } from "@/components/ui/Button";
import { useLang } from "@/components/lang/LangProvider";
import { t } from "@/lib/i18n";

export function LocationCard() {
  const { lang } = useLang();

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(branch.addressKo);
      alert(lang === "ko" ? "주소가 복사되었습니다." : "Address copied.");
    } catch {
      alert(lang === "ko" ? "복사에 실패했습니다." : "Copy failed.");
    }
  };

  return (
    <div className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-black/5 md:p-8">
      <h2 className="text-xl font-extrabold">{t.sections.location[lang]}</h2>
      <div className="mt-3 space-y-1 text-sm text-black/70">
        <p><span className="font-bold">주소:</span> {branch.addressKo}</p>
        <p><span className="font-bold">{lang === "ko" ? "운영시간:" : "Hours:"}</span> {lang === "ko" ? branch.hoursKo : branch.hoursEn}</p>
        <p className="text-xs text-black/50">{lang === "ko" ? branch.closedNoteKo : branch.closedNoteEn}</p>
        <p><span className="font-bold">{lang === "ko" ? "주차:" : "Parking:"}</span> {lang === "ko" ? branch.parkingKo : branch.parkingEn}</p>
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        <Button asChild>
          <a href={branch.links.naverMap} target="_blank" rel="noreferrer">{t.cta.openNaver[lang]}</a>
        </Button>
        <Button variant="outline" type="button" onClick={copy}>
          {t.cta.copyAddr[lang]}
        </Button>
        <Button variant="outline" asChild>
          <a href={`tel:${branch.phone}`}>{t.cta.call[lang]}</a>
        </Button>
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
