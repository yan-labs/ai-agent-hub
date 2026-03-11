import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Agent Blog - Insights & Guides",
  description: "Expert guides on AI agent development, tools, and best practices. Learn how to build and deploy AI agents in 2026.",
};

const blogPosts = [
  {
    slug: "top-20-ai-agent-tools-2026",
    title: "Top 20 AI Agent Tools in 2026",
    excerpt: "Discover the most powerful AI agent tools transforming automation, productivity, and workflows in 2026.",
    date: "2026-03-11",
    category: "Tools",
    readTime: "12 min",
  },
  {
    slug: "ai-agent-development-guide-2026",
    title: "Complete AI Agent Development Guide 2026",
    excerpt: "Your comprehensive roadmap to building intelligent, autonomous AI agents.",
    date: "2026-03-11",
    category: "Development",
    readTime: "15 min",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <header className="bg-white border-b border-zinc-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-zinc-900">
            🤖 AI Agent Hub
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/agents" className="text-zinc-600 hover:text-zinc-900">
              Agents
            </Link>
            <Link href="/workflows" className="text-zinc-600 hover:text-zinc-900">
              Workflows
            </Link>
            <Link href="/integrations" className="text-zinc-600 hover:text-zinc-900">
              Integrations
            </Link>
            <Link href="/blog" className="text-zinc-900 font-medium">
              Blog
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-zinc-900 mb-4">AI Agent Blog</h1>
        <p className="text-xl text-zinc-600 mb-12">
          Expert guides on AI agent development, tools, and best practices.
        </p>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-white p-6 rounded-xl border border-zinc-200 hover:border-blue-300 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-4 mb-3">
                <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
                  {post.category}
                </span>
                <span className="text-sm text-zinc-500">{post.date}</span>
                <span className="text-sm text-zinc-500">{post.readTime}</span>
              </div>
              <h2 className="text-xl font-semibold text-zinc-900 mb-2">
                {post.title}
              </h2>
              <p className="text-zinc-600">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}