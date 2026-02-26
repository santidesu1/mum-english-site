import Link from "next/link";
import { branch } from "@/config/branch";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-3 md:px-6">
        <div>
          <p className="text-sm font-extrabold">{branch.nameKo}</p>
          <p className="mt-2 text-sm text-black/70">{branch.addressKo}</p>
          <p className="mt-1 text-sm text-black/70">{branch.phone}</p>
          <p className="mt-1 text-xs text-black/50">{branch.hoursKo} · {branch.closedNoteKo}</p>
        </div>
        <div className="text-sm">
          <p className="font-extrabold">바로가기</p>
          <div className="mt-2 grid gap-2 text-black/70">
            <Link href="/booking" className="hover:underline">상담 예약</Link>
            <Link href="/notices" className="hover:underline">공지/블로그</Link>
            <Link href="/contact" className="hover:underline">오시는 길</Link>
          </div>
        </div>
        <div className="text-sm">
          <p className="font-extrabold">정책</p>
          <div className="mt-2 grid gap-2 text-black/70">
            <Link href="/policies/privacy" className="hover:underline">개인정보처리방침</Link>
            <Link href="/policies/terms" className="hover:underline">이용약관</Link>
          </div>
          <div className="mt-4 flex gap-3">
            <a className="underline font-bold" target="_blank" rel="noreferrer" href={branch.links.naverBlog}>Blog</a>
            <a className="underline font-bold" target="_blank" rel="noreferrer" href={branch.links.instagram}>Instagram</a>
          </div>
        </div>
      </div>
      <div className="border-t border-black/5 py-4 text-center text-xs text-black/50">
        © {new Date().getFullYear()} {branch.nameKo}. All rights reserved.
      </div>
    </footer>
  );
}
