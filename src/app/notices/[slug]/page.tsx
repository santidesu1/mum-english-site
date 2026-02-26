import { notFound } from "next/navigation";
import { posts } from "@/content/posts";
import { renderMarkdown } from "@/lib/markdown";

export default function NoticeDetail({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  const html = renderMarkdown(post.bodyMarkdown.ko);

  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-black/5 md:p-8">
        <p className="text-sm text-black/60">{post.dateISO}</p>
        <h1 className="mt-2 text-2xl font-extrabold">{post.title.ko}</h1>
        <div
          className="prose prose-neutral mt-6 max-w-none"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
      <div className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-black/5">
        <a href="/notices" className="font-bold underline">← 공지 목록</a>
      </div>
    </div>
  );
}
