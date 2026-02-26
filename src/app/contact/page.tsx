"use client";

import { useMemo, useState } from "react";
import { branch } from "@/config/branch";
import { Button } from "@/components/ui/Button";
import { LocationCard } from "@/components/LocationCard";
import { useLang } from "@/components/lang/LangProvider";
import { t } from "@/lib/i18n";

function getEndpoint() {
  return process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ENDPOINT || "";
}

export default function ContactPage() {
  const { lang } = useLang();
  const endpoint = useMemo(() => getEndpoint(), []);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="space-y-8">
      <header className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-black/5 md:p-8">
        <h1 className="text-2xl font-extrabold">{t.nav.contact[lang]}</h1>
        <p className="mt-2 text-black/70">
          {lang === "ko" ? "주소/운영시간/주차 안내" : "Address, hours, parking"}
        </p>
      </header>

      <LocationCard />

      <section className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-black/5 md:p-8">
        <h2 className="text-xl font-extrabold">{lang === "ko" ? "문의하기" : "Send a message"}</h2>
        {!endpoint && (
          <div className="mt-4 rounded-2xl border border-black/10 bg-sun/40 p-5">
            <p className="font-bold">{t.forms.missingEndpoint[lang]}</p>
            <p className="mt-2 text-sm">{branch.phone}</p>
          </div>
        )}

        {submitted ? (
          <div className="mt-5 rounded-2xl bg-paper p-6 ring-1 ring-black/5">
            <p className="text-lg font-extrabold">{t.forms.successTitle[lang]}</p>
            <p className="mt-2 text-black/70">{t.forms.successBody[lang]}</p>
          </div>
        ) : (
          <form
            className="mt-5 grid gap-4"
            action={endpoint || undefined}
            method="post"
            onSubmit={(e) => {
              if (!endpoint) { e.preventDefault(); return; }
              setTimeout(() => setSubmitted(true), 300);
            }}
          >
            <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />
            <Field label={lang === "ko" ? "이름" : "Name"}>
              <input name="name" required className="input" />
            </Field>
            <Field label={lang === "ko" ? "연락처" : "Phone"}>
              <input name="phone" required className="input" />
            </Field>
            <Field label={lang === "ko" ? "문의 내용" : "Message"}>
              <textarea name="message" rows={5} className="input" />
            </Field>
            <div className="flex items-start gap-3">
              <input id="consent2" name="consent" type="checkbox" required className="mt-1 h-4 w-4 accent-ink" />
              <label htmlFor="consent2" className="text-sm text-black/70">
                {t.forms.consent[lang]}
              </label>
            </div>
            <Button type="submit" disabled={!endpoint}>{t.forms.submit[lang]}</Button>
          </form>
        )}
      </section>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label className="text-sm font-bold">{label}</label>
      {children}
    </div>
  );
}
