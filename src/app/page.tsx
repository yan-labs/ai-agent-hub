import Link from "next/link";

const featuredAgents = [
  {
    name: "OpenClaw",
    description: "2026 breakout open-source personal AI assistant",
    category: "General",
    rating: 4.9,
    slug: "openclaw",
  },
  {
    name: "Cursor",
    description: "AI-first code editor with $29.3B valuation",
    category: "Coding",
    rating: 4.8,
    slug: "cursor",
  },
  {
    name: "Claude Code",
    description: "Anthropic's CLI tool for autonomous coding",
    category: "Coding",
    rating: 4.7,
    slug: "claude-code",
  },
  {
    name: "OpenCode",
    description: "AI-powered IDE with intelligent code completion",
    category: "Coding",
    rating: 4.6,
    slug: "opencode",
  },
  {
    name: "Trae",
    description: "ByteDance's AI-powered coding assistant",
    category: "Coding",
    rating: 4.5,
    slug: "trae",
  },
  {
    name: "v0",
    description: "Vercel's AI generator for UI and React components",
    category: "Frontend",
    rating: 4.7,
    slug: "v0",
  },
];

const categories = [
  { name: "Coding", count: 45, slug: "coding" },
  { name: "Writing", count: 32, slug: "writing" },
  { name: "Marketing", count: 28, slug: "marketing" },
  { name: "Data Analysis", count: 21, slug: "data-analysis" },
  { name: "Automation", count: 38, slug: "automation" },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
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
          </nav>
          <Link
            href="/agents"
            className="bg-zinc-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors"
          >
            Browse Agents
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-20 border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-zinc-900 mb-6">
            Discover the Best AI Agents
            <span className="text-blue-600"> in 2026</span>
          </h1>
          <p className="text-xl text-zinc-600 mb-8 max-w-2xl mx-auto">
            Your ultimate resource for AI agents, workflows, and integration tools.
            Find the perfect AI agent for coding, writing, marketing, and more.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/agents"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Explore Agents
            </Link>
            <Link
              href="/workflows"
              className="bg-zinc-100 text-zinc-900 px-6 py-3 rounded-lg font-medium hover:bg-zinc-200 transition-colors"
            >
              View Workflows
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-zinc-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-zinc-900 mb-8">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/agents?category=${cat.slug}`}
                className="bg-white p-4 rounded-xl border border-zinc-200 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className="font-semibold text-zinc-900">{cat.name}</div>
                <div className="text-sm text-zinc-500">{cat.count} agents</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Agents */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-zinc-900">Featured AI Agents</h2>
            <Link href="/agents" className="text-blue-600 font-medium hover:underline">
              View all →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredAgents.map((agent) => (
              <Link
                key={agent.slug}
                href={`/agents/${agent.slug}`}
                className="bg-white p-6 rounded-xl border border-zinc-200 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-zinc-900">{agent.name}</h3>
                    <span className="text-xs text-zinc-500 bg-zinc-100 px-2 py-1 rounded">
                      {agent.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-amber-500">★</span>
                    <span className="font-medium text-zinc-900">{agent.rating}</span>
                  </div>
                </div>
                <p className="text-zinc-600 text-sm">{agent.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to automate your workflow?
          </h2>
          <p className="text-blue-100 mb-8">
            Explore our curated collection of AI agent workflows and integrations.
          </p>
          <Link
            href="/workflows"
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
          >
            Browse Workflows
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-zinc-400">
              <span className="font-semibold text-white">AI Agent Hub</span> © 2026
            </div>
            <nav className="flex gap-6">
              <Link href="/agents" className="text-zinc-400 hover:text-white">
                Agents
              </Link>
              <Link href="/workflows" className="text-zinc-400 hover:text-white">
                Workflows
              </Link>
              <Link href="/integrations" className="text-zinc-400 hover:text-white">
                Integrations
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}