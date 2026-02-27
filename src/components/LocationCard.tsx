cd ~/mum-english-site

cat > src/components/LocationCard.tsx <<'EOF'
"use client";

import { branch } from "@/config/branch";
import { Button } from "@/components/ui/Button";
import { useLang } from "@/components/lang/LangProvider";
import { t } from "@/lib/i18n";

function CopyIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8 7.5V6.2C8 5.54 8.54 5 9.2 5H18.8C19.46 5 20 5.54 20 6.2V15.8C20 16.46 19.46 17 18.8 17H17.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect x="4" y="7.5" width="13.5" height="13.5" rx="2" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

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

      <div className="mt-3 space-y-2 text-sm text-black/70">
        <div className="flex flex-wrap items-center gap-2">
          <p className="min-w-0">
            <span className="font-bold">{lang === "ko" ? "주소:" : "Address:"}</span>{" "}
            {branch.addressKo}
          </p>

          <div className="flex items-center gap-2">
            <Button variant="outline" asChild className="h-9 px-3">
              <a href={branch.links.naverMap} target="_blank" rel="noreferrer">
                {t.cta.openNaver[lang]}
              </a>
            </Button>

            <Button
              variant="outline"
              type="button"
              onClick={copy}
              className="h-9 px-3"
              aria-label={lang === "ko" ? "주소 복사" : "Copy address"}
              title={lang === "ko" ? "주소 복사" : "Copy address"}
            >
              <CopyIcon />
            </Button>
          </div>
        </div>

        <p>
          <span className="font-bold">{lang === "ko" ? "운영시간:" : "Hours:"}</span>{" "}
          {lang === "ko" ? branch.hoursKo : branch.hoursEn}
        </p>

        <p className="text-xs text-black/50">{lang === "ko" ? branch.closedNoteKo : branch.closedNoteEn}</p>

        <p>
          <span className="font-bold">{lang === "ko" ? "주차:" : "Parking:"}</span>{" "}
          {lang === "ko" ? branch.parkingKo : branch.parkingEn}
        </p>

        <div className="flex flex-wrap items-center gap-2">
          <p>
            <span className="font-bold">{lang === "ko" ? "전화:" : "Phone:"}</span>{" "}
            {branch.phone}
          </p>

          <Button variant="outline" asChild className="h-9 px-3">
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
EOF
