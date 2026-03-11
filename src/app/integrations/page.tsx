import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Agent Integrations - API & Tools Comparison",
  description: "Compare AI agent APIs, integrations, and tools. Find the best solutions for your needs.",
};

const integrations = [
  {
    name: "OpenAI API",
    description: "GPT-4 and GPT-4o API for advanced AI capabilities",
    category: "LLM",
    pricing: "Pay per token",
    documentation: "https://platform.openai.com/docs",
  },
  {
    name: "Anthropic API",
    description: "Claude API with thinking mode and computer use",
    category: "LLM",
    pricing: "Pay per token",
    documentation: "https://docs.anthropic.com",
  },
  {
    name: "x402 Protocol",
    description: "Micropayments for AI agent services on Solana",
    category: "Payments",
    pricing: "Per request",
    documentation: "https://x402.org",
  },
  {
    name: "GitHub Actions",
    description: "CI/CD automation for AI agent workflows",
    category: "DevOps",
    pricing: "Free tier available",
    documentation: "https://docs.github.com/en/actions",
  },
  {
    name: "Vercel AI SDK",
    description: "Build AI-powered applications with React",
    category: "SDK",
    pricing: "Free",
    documentation: "https://sdk.vercel.ai",
  },
  {
    name: "LangChain",
    description: "Build applications with LLMs and agents",
    category: "SDK",
    pricing: "Free / Enterprise",
    documentation: "https://js.langchain.com",
  },
];

const categories = [...new Set(integrations.map((i) => i.category))];

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-zinc-50">
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
            <Link href="/integrations" className="text-blue-600 font-medium">
              Integrations
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 mb-2">AI Agent Integrations</h1>
          <p className="text-zinc-600">
            APIs, SDKs, and tools to enhance your AI agent workflows
          </p>
        </div>

        {/* Categories */}
        <div className="flex gap-2 mb-8">
          {categories.map((cat) => (
            <span
              key={cat}
              className="px-3 py-1 rounded-full text-sm font-medium bg-zinc-200 text-zinc-700"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-zinc-50 border-b border-zinc-200">
              <tr>
                <th className="text-left px-6 py-3 font-semibold text-zinc-900">Integration</th>
                <th className="text-left px-6 py-3 font-semibold text-zinc-900">Description</th>
                <th className="text-left px-6 py-3 font-semibold text-zinc-900">Category</th>
                <th className="text-left px-6 py-3 font-semibold text-zinc-900">Pricing</th>
                <th className="text-left px-6 py-3 font-semibold text-zinc-900"></th>
              </tr>
            </thead>
            <tbody>
              {integrations.map((integration, i) => (
                <tr key={integration.name} className={i !== 0 ? "border-t border-zinc-100" : ""}>
                  <td className="px-6 py-4">
                    <span className="font-medium text-zinc-900">{integration.name}</span>
                  </td>
                  <td className="px-6 py-4 text-zinc-600">{integration.description}</td>
                  <td className="px-6 py-4">
                    <span className="text-xs bg-zinc-100 text-zinc-700 px-2 py-1 rounded">
                      {integration.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-zinc-600">{integration.pricing}</td>
                  <td className="px-6 py-4">
                    <a
                      href={integration.documentation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm"
                    >
                      Docs →
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}