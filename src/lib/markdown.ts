import { marked } from "marked";
import sanitizeHtml from "sanitize-html";

export function renderMarkdown(md: string): string {
  const raw = marked.parse(md, { breaks: true }) as string;
  return sanitizeHtml(raw, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(["h1", "h2", "h3"]),
    allowedAttributes: {
      a: ["href", "name", "target", "rel"],
    },
    transformTags: {
      a: (tagName: string, attribs: Record<string,string>) => ({
        tagName,
        attribs: {
          ...attribs,
          target: "_blank",
          rel: "noreferrer",
        },
      }),
    },
  });
}
