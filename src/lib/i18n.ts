export type Lang = "ko" | "en";

export const defaultLang: Lang = "ko";

export function normalizeLang(value: string | null | undefined): Lang {
  return value === "en" ? "en" : "ko";
}

export const t = {
  nav: {
    home: { ko: "홈", en: "Home" },
    programs: { ko: "프로그램", en: "Programs" },
    booking: { ko: "상담 예약", en: "Book" },
    notices: { ko: "공지/블로그", en: "Notices" },
    contact: { ko: "오시는 길", en: "Contact" },
  },
  cta: {
    book: { ko: "상담 예약", en: "Book a Consultation" },
    call: { ko: "전화 문의", en: "Call" },
    map: { ko: "길찾기", en: "Directions" },
    copyAddr: { ko: "주소 복사", en: "Copy address" },
    openNaver: { ko: "네이버 지도 열기", en: "Open Naver Map" },
  },
  forms: {
    guardianName: { ko: "보호자 성함", en: "Parent/Guardian Name" },
    phone: { ko: "연락처", en: "Phone" },
    student: { ko: "학생 이름", en: "Student Name" },
    gradeAge: { ko: "학년/나이", en: "Grade/Age" },
    preferredTime: { ko: "희망 시간대", en: "Preferred time" },
    message: { ko: "문의 내용", en: "Message" },
    consent: {
      ko: "개인정보 수집 및 이용에 동의합니다.",
      en: "I agree to the collection and use of personal information.",
    },
    submit: { ko: "보내기", en: "Submit" },
    successTitle: { ko: "접수가 완료되었습니다!", en: "Submitted successfully!" },
    successBody: {
      ko: "담당자가 확인 후 연락드리겠습니다. 급한 문의는 전화로 부탁드립니다.",
      en: "We’ll review and get back to you. For urgent questions, please call us.",
    },
    missingEndpoint: {
      ko: "폼 전송 설정이 아직 완료되지 않았습니다. 전화로 문의해 주세요.",
      en: "Form endpoint is not configured yet. Please call us.",
    },
  },
  sections: {
    trust: { ko: "왜 뮤엠영어인가요?", en: "Why MU:M English?" },
    location: { ko: "오시는 길", en: "Location" },
    amenities: { ko: "시설 안내", en: "Amenities" },
    faq: { ko: "자주 묻는 질문", en: "FAQ" },
  },
};
