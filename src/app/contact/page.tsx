"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { LocationCard } from "@/components/LocationCard";
import { useLang } from "@/components/lang/LangProvider";
import { t } from "@/lib/i18n";

export default function ContactPage() {
  const { lang } = useLang();
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="space-y-8">
      <header className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-black/5 md:p-8">
        <h1 className="text-2xl font-extrabold">{lang === "ko" ? t.nav.contact[lang] : "Contact Us"}</h1>
        <p className="mt-2 text-black/70">
          {lang === "ko" ? "주소/운영시간/주차 안내" : "Address · hours · parking · Send us a message · Give us a call"}
        </p>
      </header>

      <LocationCard />

      <section className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-black/5 md:p-8">
        <h2 className="text-xl font-extrabold">
          {lang === "ko" ? "문의하기" : "Send us a message"}
        </h2>

        {submitted ? (
          <div className="mt-5 rounded-2xl bg-paper p-6 ring-1 ring-black/5">
            <p className="text-lg font-extrabold">{t.forms.successTitle[lang]}</p>
            <p className="mt-2 text-black/70">{t.forms.successBody[lang]}</p>
          </div>
        ) : (
          <form
            className="mt-5 grid gap-4"
            action="https://formspree.io/f/xvzblvwy"
            method="POST"
            onSubmit={() => {
              // Let the real POST submit to Formspree; show a quick success UI for the user.
              setTimeout(() => setSubmitted(true), 300);
            }}
          >
            {/* Honeypot anti-spam */}
            <input
              type="text"
              name="company"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <Field label={lang === "ko" ? "이름" : "Child's Name"}>
              <input name="name" required className="input" />
            </Field>

            <Field label={lang === "ko" ? "연락처" : "Phone"}>
              <input name="phone" required className="input" />
            </Field>

            <Field label={lang === "ko" ? "문의 내용" : "Message"}>
              <textarea name="message" rows={5} className="input" required />
            </Field>

            <div className="flex items-start gap-3">
              <input
                id="consent2"
                name="consent"
                type="checkbox"
                required
                className="mt-1 h-4 w-4 accent-ink"
              />
              <label htmlFor="consent2" className="text-sm text-black/70">
                {t.forms.consent[lang]}
              </label>
            </div>

            <Button type="submit">{t.forms.submit[lang]}</Button>
          </form>
        )}
      </section>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label className="text-sm font-bold">{label}</label>
      {children}
    </div>
  );
}
