import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Agent Workflows - Pre-built Automation Templates",
  description: "Discover ready-to-use AI agent workflows for automation, integration, and productivity.",
};

const workflows = [
  {
    name: "Code Review Automation",
    description: "Automated code review workflow using Claude Code with custom review rules.",
    category: "Development",
    agents: ["Claude Code", "GitHub Actions"],
    difficulty: "Intermediate",
    slug: "code-review-automation",
  },
  {
    name: "Content Pipeline",
    description: "End-to-end content creation workflow from outline to published article.",
    category: "Content",
    agents: ["Claude", "v0"],
    difficulty: "Beginner",
    slug: "content-pipeline",
  },
  {
    name: "Data Analysis Bot",
    description: "Automated data analysis and visualization generation workflow.",
    category: "Data",
    agents: ["Python Agent", "ChatGPT"],
    difficulty: "Advanced",
    slug: "data-analysis-bot",
  },
  {
    name: "Customer Support Agent",
    description: "AI-powered customer support with ticket classification and response generation.",
    category: "Support",
    agents: ["Claude", "Custom Agent"],
    difficulty: "Intermediate",
    slug: "customer-support-agent",
  },
  {
    name: "SEO Content Generator",
    description: "Generate SEO-optimized content with keyword research and meta tags.",
    category: "Marketing",
    agents: ["Claude", "OpenAI"],
    difficulty: "Beginner",
    slug: "seo-content-generator",
  },
  {
    name: "API Integration Hub",
    description: "Unified API integration workflow connecting multiple AI services.",
    category: "Integration",
    agents: ["OpenClaw", "Custom Agent"],
    difficulty: "Advanced",
    slug: "api-integration-hub",
  },
];

export default function WorkflowsPage() {
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
            <Link href="/workflows" className="text-blue-600 font-medium">
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
          <h1 className="text-3xl font-bold text-zinc-900 mb-2">AI Agent Workflows</h1>
          <p className="text-zinc-600">
            Pre-built automation templates to boost your productivity
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workflows.map((workflow) => (
            <div
              key={workflow.slug}
              className="bg-white p-6 rounded-xl border border-zinc-200 hover:border-blue-300 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-medium text-zinc-500 bg-zinc-100 px-2 py-1 rounded">
                  {workflow.category}
                </span>
                <span
                  className={`text-xs font-medium px-2 py-1 rounded ${
                    workflow.difficulty === "Beginner"
                      ? "bg-green-50 text-green-700"
                      : workflow.difficulty === "Intermediate"
                      ? "bg-amber-50 text-amber-700"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {workflow.difficulty}
                </span>
              </div>
              <h3 className="font-semibold text-zinc-900 text-lg mb-2">{workflow.name}</h3>
              <p className="text-zinc-600 text-sm mb-4">{workflow.description}</p>
              <div className="text-sm text-zinc-500 mb-4">
                Uses: {workflow.agents.join(", ")}
              </div>
              <button className="w-full bg-zinc-900 text-white py-2 rounded-lg font-medium hover:bg-zinc-800 transition-colors">
                View Template
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}