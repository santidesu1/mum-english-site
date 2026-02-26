export type Post = {
  slug: string;
  title: { ko: string; en: string };
  dateISO: string; // YYYY-MM-DD
  category: "notice" | "tips" | "event";
  excerpt: { ko: string; en: string };
  bodyMarkdown: { ko: string; en: string };
};

export const posts: Post[] = [
  {
    slug: "open-parent-briefing-2026-01-28",
    title: { ko: "오픈 학부모설명회 안내", en: "Open Parent Briefing" },
    dateISO: "2026-01-22",
    category: "event",
    excerpt: {
      ko: "1월 28일(수) 오전 10시 30분 — 사전 예약 시 참석자 전원 선물 증정",
      en: "Jan 28 (Wed) 10:30 — gifts for all attendees with reservation",
    },
    bodyMarkdown: {
      ko: `### 오픈 학부모설명회\n\n- 일정: **1월 28일(수) 오전 10시 30분**\n- 안내: 사전 예약 시 참석자 전원 선물 증정\n- 문의: **010-5640-6281**\n\n> *주말 및 대한민국 공휴일은 휴무입니다.*`,
      en: `### Open Parent Briefing\n\n- Time: **Jan 28 (Wed) 10:30**\n- Note: Gifts for all reserved attendees\n- Contact: **010-5640-6281**\n\n> *Closed on weekends and Korean national holidays.*`,
    },
  },
  {
    slug: "phonics-special-7-9",
    title: { ko: "7–9세 파닉스 전문반 신입생 모집", en: "Phonics Special Class (Ages 7–9)" },
    dateISO: "2026-02-01",
    category: "notice",
    excerpt: {
      ko: "7–8–9세 파닉스 전문반 신입생을 모집합니다.",
      en: "Recruiting new students for our phonics-focused class (ages 7–9).",
    },
    bodyMarkdown: {
      ko: `### 신입생 모집\n\n- 대상: **7–8–9세**\n- 내용: 파닉스 중심 기초 루틴\n- 상담 예약: 홈페이지 상담 예약 또는 전화 문의`,
      en: `### Recruiting\n\n- Ages: **7–9**\n- Focus: phonics foundations + routine\n- Book: use the booking form or call us`,
    },
  },
];
