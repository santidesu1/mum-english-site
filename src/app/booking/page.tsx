"use client";

import { useMemo, useState } from "react";
import { branch } from "@/config/branch";
import { Button } from "@/components/ui/Button";
import { useLang } from "@/components/lang/LangProvider";
import { t } from "@/lib/i18n";

function getEndpoint() {
  return process.env.NEXT_PUBLIC_FORMSPREE_BOOKING_ENDPOINT || "";
}

export default function BookingPage() {
  const { lang } = useLang();
  const endpoint = useMemo(() => getEndpoint(), []);
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return <Success title={t.forms.successTitle[lang]} body={t.forms.successBody[lang]} />;
  }

  return (
    <div className="space-y-8">
      <header className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-black/5 md:p-8">
        <h1 className="text-2xl font-extrabold">{t.nav.visit?.[lang] ?? (lang === "ko" ? "상담 예약" : "Book a Visit")}</h1>

        <p className="mt-2 text-black/70">
          {lang === "ko"
            ? "간단히 작성해 주시면 방문 상담 일정을 안내드리겠습니다."
            : "Fill out this form and we’ll set up a visit time for you."}
        </p>

        <p className="mt-3 text-sm text-black/60">
          {(lang === "ko" ? branch.closedNoteKo : branch.closedNoteEn)} ·{" "}
          {lang === "ko" ? "운영시간:" : "Hours:"} {lang === "ko" ? branch.hoursKo : branch.hoursEn}
        </p>
      </header>

      {!endpoint && (
        <div className="rounded-2xl border border-black/10 bg-sun/40 p-5">
          <p className="font-bold">{t.forms.missingEndpoint[lang]}</p>
          <p className="mt-2 text-sm">{lang === "ko" ? `전화: ${branch.phone}` : `Call: ${branch.phone}`}</p>
        </div>
      )}

      <form
        action={endpoint || undefined}
        method="post"
        className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-black/5 md:p-8"
        onSubmit={(e) => {
          if (!endpoint) {
            e.preventDefault();
            return;
          }
          setTimeout(() => setSubmitted(true), 300);
        }}
      >
        {/* honeypot */}
        <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

        <div className="grid gap-4 md:grid-cols-2">
          <Field label={lang === "ko" ? "학생 이름" : "Child’s Name"}>
            <input name="student_name" required className="input" />
          </Field>

          <Field label={lang === "ko" ? "학년/나이" : "Grade / Age"}>
            <input name="grade_age" required className="input" />
          </Field>

          <Field label={lang === "ko" ? "보호자 연락처" : "Parent/Guardian Phone"}>
            <input name="phone" required className="input" />
          </Field>

          <Field label={lang === "ko" ? "선호 시간" : "Preferred Time"}>
            <input
              name="preferred_time"
              required
              className="input"
              placeholder={lang === "ko" ? "예: 평일 16시 이후" : "e.g., weekdays after 16:00"}
            />
          </Field>
        </div>

        <div className="mt-4 grid gap-4">
          <Field label={lang === "ko" ? "메모" : "Notes"}>
            <textarea
              name="message"
              rows={5}
              required
              className="input"
              placeholder={lang === "ko" ? "현재 상황/목표를 간단히 적어주세요." : "Goals, current level, anything we should know."}
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
          <Button type="submit" disabled={!endpoint}>
            {lang === "ko" ? "방문 상담 요청" : "Request a Visit"}
          </Button>
          <Button variant="outline" type="button" asChild>
            <a href={`tel:${branch.phone}`}>{lang === "ko" ? "전화로 문의" : "Call instead"}</a>
          </Button>
        </div>

        <p className="mt-4 text-xs text-black/50">
          {lang === "ko" ? "※ 주말 및 대한민국 공휴일은 휴무입니다." : "※ Closed on weekends and Korean national holidays."}
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
      <div className="inline-flex items-center gap-2 rounded-full bg-sun px-4 py-2 text-sm font-extrabold">
        {t.forms.successPill?.ko ? (title ? (title && "완료") : "완료") : "Done"}
      </div>
      <h1 className="mt-4 text-2xl font-extrabold">{title}</h1>
      <p className="mt-2 text-black/70">{body}</p>
      <div className="mt-6">
        <Button asChild>
          <a href="/">{lang === "ko" ? "홈으로" : "Back home"}</a>
        </Button>
      </div>
    </div>
  );
}
