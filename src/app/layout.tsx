import { LangProvider } from "@/components/lang/LangProvider";
import type { Metadata } from "next";
import "./globals.css";
import { branch } from "@/config/branch";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { StickyMobileBar } from "@/components/StickyMobileBar";

export const metadata: Metadata = {
  title: `${branch.nameKo} | ${branch.addressKo}`,
  description: `${branch.taglineKo} · ${branch.hoursKo} · ${branch.parkingKo}`,
  openGraph: {
    title: branch.nameKo,
    description: `${branch.taglineKo} · ${branch.addressKo}`,
    type: "website",
  },
};

function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: branch.nameKo,
    telephone: branch.phone,
    email: branch.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: branch.addressKo,
      addressLocality: "Suwon-si",
      addressRegion: "Gyeonggi-do",
      addressCountry: "KR",
    },
    url: branch.links.naverBlog,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen">
       <LangProvider>
        <LocalBusinessJsonLd />
        <SiteHeader />
        <main className="mx-auto w-full max-w-6xl px-4 pb-24 pt-6 md:px-6 md:pb-8">
          {children}
        </main>
        <SiteFooter />
        <StickyMobileBar />     
       </LangProvider>
      </body>
    </html>
  );
}
