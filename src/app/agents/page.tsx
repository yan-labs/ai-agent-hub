import Link from "next/link";
import { agents, categories } from "@/data/agents";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Agent Directory - Find the Best AI Agents",
  description: "Browse our curated directory of the best AI agents. Find agents for coding, writing, marketing, and more.",
};

export default function AgentsPage() {
  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Header */}
      <header className="bg-white border-b border-zinc-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-zinc-900">
            🤖 AI Agent Hub
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/agents" className="text-blue-600 font-medium">
              Agents
            </Link>
            <Link href="/workflows" className="text-zinc-600 hover:text-zinc-900">
              Workflows
            </Link>
            <Link href="/integrations" className="text-zinc-600 hover:text-zinc-900">
              Integrations
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 mb-2">AI Agent Directory</h1>
          <p className="text-zinc-600">
            Discover {agents.length}+ curated AI agents for every use case
          </p>
        </div>

        {/* Categories */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={cat.slug ? `/agents?category=${cat.slug}` : "/agents"}
              className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap bg-white border border-zinc-200 hover:border-blue-300 transition-colors"
            >
              {cat.name}
            </Link>
          ))}
        </div>

        {/* Agents Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent) => (
            <Link
              key={agent.slug}
              href={`/agents/${agent.slug}`}
              className="bg-white p-6 rounded-xl border border-zinc-200 hover:border-blue-300 hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-zinc-900 text-lg">{agent.name}</h3>
                  <span className="text-xs text-zinc-500 bg-zinc-100 px-2 py-1 rounded">
                    {agent.category}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-amber-500">★</span>
                  <span className="font-medium text-zinc-900">{agent.rating}</span>
                </div>
              </div>
              <p className="text-zinc-600 text-sm mb-4 line-clamp-2">{agent.description}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-500">{agent.pricing}</span>
                <span className="text-blue-600 font-medium">Learn more →</span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}