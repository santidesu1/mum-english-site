"use client";

import { useLang } from "./LangProvider";

export function LangToggle() {
  const { lang, setLang } = useLang();

  return (
    <div className="inline-flex items-center rounded-full bg-paper ring-1 ring-black/10 p-1">
      <button
        className={`rounded-full px-3 py-1 text-xs font-extrabold ${lang === "ko" ? "bg-sun text-ink" : "text-black/70"}`}
        onClick={() => setLang("ko")}
        type="button"
      >
        KO
      </button>
      <button
        className={`rounded-full px-3 py-1 text-xs font-extrabold ${lang === "en" ? "bg-sun text-ink" : "text-black/70"}`}
        onClick={() => setLang("en")}
        type="button"
      >
        EN
      </button>
    </div>
  );
}
