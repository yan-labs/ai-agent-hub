import Link from "next/link";
import { agents, getAgentBySlug } from "@/data/agents";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return agents.map((agent) => ({ slug: agent.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const agent = getAgentBySlug(slug);
  if (!agent) return { title: "Not Found" };

  return {
    title: `${agent.name} - AI Agent Review | AI Agent Hub`,
    description: agent.description,
  };
}

export default async function AgentDetailPage({ params }: Props) {
  const { slug } = await params;
  const agent = getAgentBySlug(slug);

  if (!agent) {
    notFound();
  }

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
            <Link href="/integrations" className="text-zinc-600 hover:text-zinc-900">
              Integrations
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/agents" className="text-blue-600 hover:underline mb-6 inline-block">
          ← Back to Agents
        </Link>

        {/* Agent Header */}
        <div className="bg-white rounded-2xl p-8 border border-zinc-200 mb-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-zinc-900 mb-2">{agent.name}</h1>
              <span className="text-sm text-zinc-500 bg-zinc-100 px-3 py-1 rounded-full">
                {agent.category}
              </span>
            </div>
            <div className="flex items-center gap-1 bg-amber-50 px-3 py-1 rounded-full">
              <span className="text-amber-500 text-lg">★</span>
              <span className="font-bold text-amber-600">{agent.rating}</span>
              <span className="text-amber-600">({agent.reviews} reviews)</span>
            </div>
          </div>

          <p className="text-zinc-600 text-lg mb-6">{agent.description}</p>

          <div className="flex flex-wrap gap-3 mb-6">
            {agent.features.map((feature) => (
              <span
                key={feature}
                className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full"
              >
                {feature}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={agent.website}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Visit Website
            </a>
            <span className="text-zinc-600 py-2">{agent.pricing}</span>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-2xl p-8 border border-zinc-200 mb-8">
          <h2 className="text-xl font-bold text-zinc-900 mb-4">Key Features</h2>
          <ul className="space-y-3">
            {agent.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-zinc-600">
                <span className="text-green-500">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Related Agents */}
        <div className="bg-white rounded-2xl p-8 border border-zinc-200">
          <h2 className="text-xl font-bold text-zinc-900 mb-4">Related Agents</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {agents
              .filter((a) => a.category === agent.category && a.slug !== agent.slug)
              .slice(0, 2)
              .map((related) => (
                <Link
                  key={related.slug}
                  href={`/agents/${related.slug}`}
                  className="p-4 rounded-xl border border-zinc-200 hover:border-blue-300 transition-colors"
                >
                  <div className="font-semibold text-zinc-900">{related.name}</div>
                  <div className="text-sm text-zinc-500">{related.category}</div>
                </Link>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
}