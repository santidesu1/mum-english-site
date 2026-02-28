"use client";

import { useState } from "react";
import { branch } from "@/config/branch";
import { Button } from "@/components/ui/Button";
import { useLang } from "@/components/lang/LangProvider";
import { t } from "@/lib/i18n";

export default function BookingPage() {
  const { lang } = useLang();
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return <Success title={t.forms.successTitle[lang]} body={t.forms.successBody[lang]} />;
  }

  return (
    <div className="space-y-8">
      <header className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-black/5 md:p-8">
        <h1 className="text-2xl font-extrabold">{t.nav.visit[lang]}</h1>
        <p className="mt-2 text-black/70">
          {lang === "ko"
            ? "간단히 작성해 주시면 방문 상담 일정을 안내드리겠습니다."
            : "Fill this out and we’ll schedule a visit."}
        </p>
        <p className="mt-3 text-sm text-black/60">
  {(lang === "ko" ? branch.closedNoteKo : branch.closedNoteEn)} ·{" "}
{(lang === "ko" ? "운영시간:" : "Hours:")}{" "}
{(lang === "ko" ? branch.hoursKo : branch.hoursEn)}
</p>
      </header>

      <form
        action="https://formspree.io/f/mvzblery"
        method="POST"
        className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-black/5 md:p-8"
        onSubmit={() => {
          // Allow normal POST to Formspree; show a local success screen quickly.
          setTimeout(() => setSubmitted(true), 300);
        }}
      >
        {/* honeypot */}
        <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

        <div className="grid gap-4 md:grid-cols-2">
          <Field label={t.forms.guardianName[lang]}>
            <input name="guardian_name" required className="input" />
          </Field>
          <Field label={t.forms.phone[lang]}>
            <input name="phone" required className="input" />
          </Field>
          <Field label={t.forms.student[lang]}>
            <input name="student_name" required className="input" />
          </Field>
          <Field label={t.forms.gradeAge[lang]}>
            <input name="grade_age" required className="input" />
          </Field>
        </div>

        <div className="mt-4 grid gap-4">
          <Field label={t.forms.preferredTime[lang]}>
            <input
              name="preferred_time"
              className="input"
              placeholder={lang === "ko" ? "예: 평일 16시 이후" : "e.g., weekdays after 16:00"}
            />
          </Field>
          <Field label={t.forms.message[lang]}>
            <textarea
              name="message"
              rows={5}
              className="input"
              placeholder={lang === "ko" ? "현재 상황/목표를 간단히 적어주세요." : "Tell us goals and current level."}
            />
          </Field>
        </div>

        <div className="mt-5 flex items-start gap-3">
          <input id="consent" name="consent" type="checkbox" required className="mt-1 h-4 w-4 accent-ink" />
          <label htmlFor="consent" className="text-sm text-black/70">
            {t.forms.consent[lang]}
          </label>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button type="submit">{t.forms.submit[lang]}</Button>
          <Button variant="outline" type="button" asChild>
            <a href={`tel:${branch.phone}`}>{lang === "ko" ? "전화로 문의" : "Call instead"}</a>
          </Button>
        </div>

        <p className="mt-4 text-xs text-black/50">
          {lang === "ko"
            ? "※ 주말 및 대한민국 공휴일은 휴무입니다."
            : "※ Closed on weekends and Korean national holidays."}
        </p>
      </form>
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

function Success({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl bg-white p-10 shadow-soft ring-1 ring-black/5">
      <div className="inline-flex items-center gap-2 rounded-full bg-sun px-4 py-2 text-sm font-extrabold">완료</div>
      <h1 className="mt-4 text-2xl font-extrabold">{title}</h1>
      <p className="mt-2 text-black/70">{body}</p>
      <div className="mt-6">
        <Button asChild>
          <a href="/">홈으로</a>
        </Button>
      </div>
    </div>
  );
}
