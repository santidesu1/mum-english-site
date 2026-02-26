# 뮤엠영어 수원역푸르지오자이점 웹사이트 (Next.js)

이 프로젝트는 **DB 없이** 운영되는 웹사이트입니다.
- 배포: Vercel
- 폼 전송: Formspree (상담 예약 / 문의)

## 1) 로컬 실행
```bash
npm install
cp .env.example .env.local
# 아래 2개 값을 채우고 저장하세요
# NEXT_PUBLIC_FORMSPREE_BOOKING_ENDPOINT=https://formspree.io/f/xxxx
# NEXT_PUBLIC_FORMSPREE_CONTACT_ENDPOINT=https://formspree.io/f/yyyy
npm run dev
```

## 2) Formspree 설정 (필수)
Formspree 공식 문서 방식: `<form action="https://formspree.io/f/{form_id}" method="post">`  citeturn0search1

1. Formspree 회원가입
2. Form 2개 생성:
   - Booking
   - Contact
3. 각각의 Endpoint를 복사:
   - `https://formspree.io/f/FORM_ID`
4. `.env.local`에 입력 후 재실행

## 3) Vercel 배포 (가장 쉬움)
Vercel은 Next.js를 “제로 설정”으로 배포할 수 있습니다. citeturn0search2turn0search5

1. GitHub에 새 repo 생성 → 이 프로젝트 업로드
2. Vercel 로그인 → **New Project** → GitHub repo 선택
3. Environment Variables에 아래 2개 추가:
   - `NEXT_PUBLIC_FORMSPREE_BOOKING_ENDPOINT`
   - `NEXT_PUBLIC_FORMSPREE_CONTACT_ENDPOINT`
   (Next.js에서 `NEXT_PUBLIC_` 변수는 브라우저에 번들링됩니다.) citeturn0search0turn0search6
4. Deploy 클릭

## 4) 학원 정보 수정
`src/config/branch.ts` 파일에서 이름/주소/전화/링크/운영시간 등을 수정하면 됩니다.

## 5) 공지/블로그 글 추가
`src/content/posts.ts`에 새 항목을 추가하세요.
(현재는 DB 없이 간단히 운영하기 위해 파일 기반으로 구성했습니다.)
