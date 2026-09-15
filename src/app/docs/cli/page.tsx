'use client';

import React from 'react';
import Link from 'next/link';
import { Terminal, Sparkles, Check, ArrowRight, ShieldCheck, Box, RefreshCw, FolderArchive, PackageCheck, Zap, Activity } from 'lucide-react';
import { CodeBlock } from '@/components/docs/CodeBlock';
import { TableOfContents, TocItem } from '@/components/layout/TableOfContents';
import { DenebStarIcon } from '@/components/brand/DenebLogo';

export default function CliReferencePage() {
  const tocItems: TocItem[] = [
    { id: 'overview', title: 'CLI Overview' },
    { id: 'arc-flags', title: 'ARC Flags & AI Modes' },
    { id: 'action-buttons', title: 'Smart Action Button Engine' },
    { id: 'doctor', title: 'deneb doctor' },
    { id: 'init', title: 'deneb init' },
    { id: 'update', title: 'deneb update' },
    { id: 'validate', title: 'deneb validate' },
    { id: 'zip', title: 'deneb zip' },
    { id: 'validate-and-zip', title: 'deneb validate-and-zip' },
    { id: 'add', title: 'deneb add' },
    { id: 'create', title: 'deneb create' },
    { id: 'lab', title: 'deneb lab' },
  ];

  return (
    <div className="flex w-full gap-8 lg:gap-10">
      <div className="flex-1 min-w-0 py-6 space-y-10">
        <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
          <Link href="/docs/installation" className="hover:text-white transition-colors">
            Docs
          </Link>
          <span>/</span>
          <span className="text-[#818CF8] font-semibold">CLI Reference</span>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
              CLI Reference
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#818CF8]/15 text-[#A5B4FC] border border-[#818CF8]/30 flex items-center gap-1">
              <DenebStarIcon className="w-2.5 h-2.5" />
              @deneb-ui/cli
            </span>
          </div>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            The official command line interface for authoring, configuring, updating, validating, and packaging DENEB storefront templates for the Fivora platform.
          </p>
        </div>

        {/* Quick Commands Summary Table */}
        <section id="overview" className="space-y-4">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Terminal className="w-5 h-5 text-[#818CF8]" />
            <span>Command Quick Reference</span>
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm text-left border border-[#23283B] rounded-xl overflow-hidden min-w-[560px]">
              <thead className="bg-[#0E1220] text-[#CBD5E1] font-mono uppercase text-[11px] border-b border-[#23283B]">
                <tr>
                  <th className="p-3 sm:p-4">Command</th>
                  <th className="p-3 sm:p-4">Purpose</th>
                  <th className="p-3 sm:p-4">Key Output</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#23283B] text-[#94A3B8]">
                <tr>
                  <td className="p-3 sm:p-4 font-mono font-bold text-white">deneb doctor</td>
                  <td className="p-3 sm:p-4">Run comprehensive environment, manifest & asset diagnostic checks</td>
                  <td className="p-3 sm:p-4 text-emerald-400">System & compliance scorecard</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-mono font-bold text-white">deneb init</td>
                  <td className="p-3 sm:p-4">Universal storefront converter powered by Deneb ARC (AST pipeline)</td>
                  <td className="p-3 sm:p-4 text-emerald-400">fivora-template.json, site-data.json, editable AST</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-mono font-bold text-white">deneb init --dry-run</td>
                  <td className="p-3 sm:p-4">Preview the transformation plan and schema without modifying any files</td>
                  <td className="p-3 sm:p-4 text-amber-400">Non-destructive plan simulation</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-mono font-bold text-white">deneb init --explain</td>
                  <td className="p-3 sm:p-4">Print detailed explanations of why each element was converted and matched</td>
                  <td className="p-3 sm:p-4 text-amber-400">Semantic AST reasoning log</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-mono font-bold text-white">deneb init --ai</td>
                  <td className="p-3 sm:p-4">Run ARC with AI assistance (ChatGPT / OpenAI API key from .env)</td>
                  <td className="p-3 sm:p-4 text-purple-400">Intelligent fallback adaptation</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-mono font-bold text-white">deneb init --ai-dry-run</td>
                  <td className="p-3 sm:p-4">Test the AI adaptation loop without creating GitHub pull requests</td>
                  <td className="p-3 sm:p-4 text-purple-400">AI reasoning diff sandbox</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-mono font-bold text-white">deneb update</td>
                  <td className="p-3 sm:p-4">Update @deneb-ui packages & refresh DENEB components</td>
                  <td className="p-3 sm:p-4 text-emerald-400">Latest npm packages & src/components/ui sync</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-mono font-bold text-white">deneb validate</td>
                  <td className="p-3 sm:p-4">Check website configuration & visual editing contracts</td>
                  <td className="p-3 sm:p-4 text-emerald-400">Preflight diagnostic report</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-mono font-bold text-white">deneb zip</td>
                  <td className="p-3 sm:p-4">Zip project cleanly without junk files (node_modules, .next, .git)</td>
                  <td className="p-3 sm:p-4 text-emerald-400">fivora-template.zip</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-mono font-bold text-white">deneb validate-and-zip</td>
                  <td className="p-3 sm:p-4">Validate preflight checks and bundle clean upload ZIP in 1 step</td>
                  <td className="p-3 sm:p-4 text-[#818CF8]">Verified fivora-template.zip</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ARC Advanced Flags & AI Modes */}
        <section id="arc-flags" className="space-y-4 pt-4 border-t border-[#23283B]">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#818CF8]" />
            <span>Deneb ARC Flags & AI Modes</span>
          </h2>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            Deneb ARC (Adaptive Refactoring Compiler) features developer-friendly flags for transparent inspection, non-destructive safety previews, curated recipes, and AI-assisted AST reasoning:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-[#23283B] bg-[#0A0D17] space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold">
                <Terminal className="w-4 h-4" />
                <span>--dry-run</span>
              </div>
              <p className="text-xs text-[#CBD5E1] font-semibold">Preview Plan Without Writing</p>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Scans reachable pages, builds the transformation plan, inspects data schema bindings, and checks for Fivora contract violations without touching a single file on disk.
              </p>
              <CodeBlock
                code="npx @deneb-ui/cli init --dry-run"
                language="bash"
                filename="terminal"
              />
            </div>

            <div className="p-4 rounded-xl border border-[#23283B] bg-[#0A0D17] space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold">
                <Terminal className="w-4 h-4" />
                <span>--explain</span>
              </div>
              <p className="text-xs text-[#CBD5E1] font-semibold">Detailed Rule Matching Log</p>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Prints line-by-line AST reasoning showing which element was matched, why it was converted (e.g. hero title, price, CTA button), and which semantic rule triggered the editability contract.
              </p>
              <CodeBlock
                code="npx @deneb-ui/cli init --explain"
                language="bash"
                filename="terminal"
              />
            </div>

            <div className="p-4 rounded-xl border border-[#23283B] bg-[#0A0D17] space-y-2">
              <div className="flex items-center gap-2 text-purple-400 font-mono text-xs font-bold">
                <Sparkles className="w-4 h-4" />
                <span>--ai</span>
              </div>
              <p className="text-xs text-[#CBD5E1] font-semibold">AI-Assisted Adaptation (ChatGPT)</p>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Uses your OpenAI API key from <code className="text-white font-mono">.env</code> (default: <code className="text-white font-mono">gpt-4o-mini</code>) to resolve ambiguous components, complex layouts, or custom third-party UI libraries with high semantic fidelity.
              </p>
              <CodeBlock
                code="npx @deneb-ui/cli init --ai"
                language="bash"
                filename="terminal"
              />
            </div>

            <div className="p-4 rounded-xl border border-[#23283B] bg-[#0A0D17] space-y-2">
              <div className="flex items-center gap-2 text-purple-400 font-mono text-xs font-bold">
                <Sparkles className="w-4 h-4" />
                <span>--ai-dry-run</span>
              </div>
              <p className="text-xs text-[#CBD5E1] font-semibold">Test AI Loop Without PRs</p>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Tests the complete AI adaptation loop, validates prompt schemas and AST diffs in sandbox memory, without modifying source files or creating GitHub pull requests.
              </p>
              <CodeBlock
                code="npx @deneb-ui/cli init --ai-dry-run"
                language="bash"
                filename="terminal"
              />
            </div>
          </div>

          <div className="p-4 rounded-xl border border-[#23283B] bg-[#0E1220] space-y-2 text-xs text-[#94A3B8]">
            <div className="font-semibold text-white flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#818CF8]" />
              <span>Curated Storefront Recipes (<code className="text-[#818CF8] font-mono">--recipe &lt;name&gt;</code>)</span>
            </div>
            <p className="leading-relaxed">
              You can apply pre-packaged domain blueprints tailored to specific industries with optimized schema seeds:
            </p>
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-[11px]">
              <span className="px-2 py-1 rounded bg-[#121625] text-white border border-[#23283B]">--recipe coffee</span>
              <span className="px-2 py-1 rounded bg-[#121625] text-white border border-[#23283B]">--recipe restaurant</span>
              <span className="px-2 py-1 rounded bg-[#121625] text-white border border-[#23283B]">--recipe salon</span>
              <span className="px-2 py-1 rounded bg-[#121625] text-white border border-[#23283B]">--recipe fashion</span>
            </div>
          </div>
        </section>

        {/* Smart Action Button Engine */}
        <section id="action-buttons" className="space-y-4 pt-4 border-t border-[#23283B]">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Zap className="w-5 h-5 text-emerald-400" />
            <span>Deneb ARC Smart Action Button Engine</span>
          </h2>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            When building storefronts, developers frequently add buttons such as <strong className="text-white">&ldquo;Order on WhatsApp&rdquo;</strong>, <strong className="text-white">&ldquo;Call Us&rdquo;</strong>, <strong className="text-white">&ldquo;Get Directions&rdquo;</strong>, <strong className="text-white">&ldquo;Store Location&rdquo;</strong>, or <strong className="text-white">&ldquo;Shop Collection&rdquo;</strong>.
          </p>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            When you run <code className="text-white font-mono bg-white/5 px-1.5 py-0.5 rounded">npx @deneb-ui/cli init</code>, ARC&apos;s AST engine automatically detects these buttons and converts them into <strong className="text-white">dual-editable action elements</strong>:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 space-y-2">
              <div className="font-semibold text-emerald-300 text-xs flex items-center gap-1.5">
                <Check className="w-4 h-4" />
                <span>1. Editable Label Text</span>
              </div>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                The merchant can click directly on the button text inside Fivora Studio to change &ldquo;Order on WhatsApp&rdquo; to &ldquo;Order with WhatsApp&rdquo; or any localized copy.
              </p>
              <div className="font-mono text-[11px] text-[#A5B4FC] bg-[#0A0D17] p-2 rounded border border-[#23283B]">
                data-preview-field-path=&quot;contact.whatsappLabel&quot;
              </div>
            </div>

            <div className="p-4 rounded-xl border border-[#818CF8]/20 bg-[#818CF8]/5 space-y-2">
              <div className="font-semibold text-[#A5B4FC] text-xs flex items-center gap-1.5">
                <Check className="w-4 h-4" />
                <span>2. Editable Target Link / Phone URL</span>
              </div>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                The destination URL or phone number is linked to site-data via a hidden visual marker, allowing the merchant to update the recipient phone number or map link in 1 click.
              </p>
              <div className="font-mono text-[11px] text-[#A5B4FC] bg-[#0A0D17] p-2 rounded border border-[#23283B]">
                data-preview-field-path=&quot;contact.whatsappNumber&quot;
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-[#23283B] bg-[#0A0D17] space-y-3 text-xs text-[#94A3B8]">
            <div className="font-semibold text-white">How ARC Automatically Transforms Action Buttons:</div>
            <ul className="list-disc list-inside space-y-1.5 leading-relaxed">
              <li><strong className="text-white">Tag Conversion:</strong> Seamlessly converts static <code className="text-white font-mono">&lt;button&gt;</code> elements into clickable <code className="text-white font-mono">&lt;a&gt;</code> anchors with <code className="text-white font-mono">target=&quot;_blank&quot;</code> and <code className="text-white font-mono">rel=&quot;noopener noreferrer&quot;</code>.</li>
              <li><strong className="text-white">100% Style Preservation:</strong> Preserves all existing Tailwind classes, hover transitions, shadow effects, and layout spacing without changing a single pixel of your design.</li>
              <li><strong className="text-white">SVG Icon Safety:</strong> Keeps existing icons intact while wrapping only the text in a preview-annotated span.</li>
              <li><strong className="text-white">Supported Action Intents:</strong> WhatsApp (<code className="text-white font-mono">whatsapp://</code> or <code className="text-white font-mono">https://wa.me/</code>), Direct Calling (<code className="text-white font-mono">tel:</code>), Maps & Directions (<code className="text-white font-mono">maps.google.com</code>), and Store Navigation.</li>
            </ul>
          </div>
        </section>

        {/* 1. deneb doctor */}
        <section id="doctor" className="space-y-4 pt-4 border-t border-[#23283B]">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Activity className="w-5 h-5 text-emerald-400" />
            <span>1. deneb doctor (System & Diagnostic Health Check)</span>
          </h2>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            Performs an in-depth 6-phase diagnostic check of your development environment, Next.js configuration, Manifest v2 contract, merchant site data bindings, and security cleanliness before packaging.
          </p>

          <CodeBlock
            code={`# Run diagnostic doctor check:\nnpx @deneb-ui/cli doctor\n\n# Or diagnose a specific directory:\ndeneb doctor ./templates/nextjs`}
            language="bash"
            filename="terminal"
          />

          <div className="p-4 rounded-xl border border-[#23283B] bg-[#0A0D17] text-xs text-[#94A3B8] space-y-2">
            <div className="font-semibold text-white">The 6 Doctor Diagnostic Checks:</div>
            <ul className="list-disc list-inside space-y-1">
              <li><strong className="text-white">System & Runtime:</strong> Verifies Node.js &ge; 18.0 and package manager availability.</li>
              <li><strong className="text-white">Project Dependencies:</strong> Confirms Next.js 14/15, @deneb-ui/ui, and @deneb-ui/cli.</li>
              <li><strong className="text-white">Static Export:</strong> Validates <code className="text-white font-mono">output: &apos;export&apos;</code> in next.config.</li>
              <li><strong className="text-white">Fivora Manifest v2:</strong> Checks fivora-template.json version, strict mode, and root page routes.</li>
              <li><strong className="text-white">Reactive Site Data:</strong> Verifies merchant metadata, theme color tokens, and content structure.</li>
              <li><strong className="text-white">Cleanliness & Security:</strong> Checks brand preview assets and ensures secrets isolation (no raw .env files).</li>
            </ul>
          </div>
        </section>

        {/* 2. deneb init */}
        <section id="init" className="space-y-4 pt-4 border-t border-[#23283B]">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Zap className="w-5 h-5 text-[#818CF8]" />
            <span>2. deneb init (Universal Template Converter & Initializer)</span>
          </h2>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            Runs <strong className="text-white">Deneb ARC</strong> (Adaptive Refactoring Compiler) by default — an AST pipeline that converts Next.js App Router and Pages Router storefronts into Fivora-editable templates while preserving your design.
          </p>

          <CodeBlock
            code={`# Convert storefront with Deneb ARC (default):\nnpx @deneb-ui/cli init\n\n# Preview transformation plan without modifying any files:\nnpx @deneb-ui/cli init --dry-run\n\n# Print detailed explanations of why each element was converted:\nnpx @deneb-ui/cli init --explain\n\n# Run with AI assistance (ChatGPT / OpenAI API key from .env):\nnpx @deneb-ui/cli init --ai\n\n# Test AI adaptation loop in sandbox without creating pull requests:\nnpx @deneb-ui/cli init --ai-dry-run\n\n# Apply specific industry storefront recipe:\nnpx @deneb-ui/cli init --recipe coffee\n\n# Fallback to legacy regex converter:\nnpx @deneb-ui/cli init --legacy`}
            language="bash"
            filename="terminal"
          />

          <div className="p-4 rounded-xl border border-[#23283B] bg-[#0A0D17] text-xs text-[#94A3B8] space-y-3">
            <div className="font-semibold text-white">Deneb ARC Pipeline (default):</div>
            <ul className="list-disc list-inside space-y-1.5 leading-relaxed">
              <li><strong className="text-white">Project Scanner:</strong> Discovers routes, dependencies, and reachable pages (App Router + Pages Router).</li>
              <li><strong className="text-white">Semantic Analysis:</strong> Identifies editable text, images, URLs, collections, and CTA action/label pairs.</li>
              <li><strong className="text-white">AST Transformation:</strong> Injects <code className="text-white font-mono">data-preview-field-path</code>, site-data bindings, collection markers, and span-wrapped text.</li>
              <li><strong className="text-white">Manifest Generation:</strong> Writes <code className="text-white font-mono">site-data.json</code> and <code className="text-white font-mono">fivora-template.json</code> with Fivora strict contract self-validation.</li>
              <li><strong className="text-white">Static Export Config:</strong> Configures <code className="text-white font-mono">next.config</code> for <code className="text-white font-mono">output: &apos;export&apos;</code> when needed.</li>
              <li><strong className="text-white">Safe Backup & Journal:</strong> Timestamped rollback in <code className="text-white font-mono">.deneb-backup-*</code> and run journal in <code className="text-white font-mono">.deneb/runs/</code>.</li>
            </ul>
          </div>
        </section>

        {/* 3. deneb update */}
        <section id="update" className="space-y-4 pt-4 border-t border-[#23283B]">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <RefreshCw className="w-5 h-5 text-[#818CF8]" />
            <span>3. deneb update (Update Packages & Components)</span>
          </h2>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            Upgrades <code className="text-white font-mono bg-white/5 px-1.5 py-0.5 rounded">@deneb-ui/ui</code> and <code className="text-white font-mono bg-white/5 px-1.5 py-0.5 rounded">@deneb-ui/cli</code> to the latest releases, and automatically synchronizes all installed components in <code className="text-white font-mono bg-white/5 px-1.5 py-0.5 rounded">src/components/ui/</code> with the latest registry blueprints.
          </p>

          <CodeBlock
            code={`# Update packages and installed DENEB UI components:\nnpx @deneb-ui/cli update\n\n# Or with project script:\nnpm run update:deneb`}
            language="bash"
            filename="terminal"
          />
        </section>

        {/* 4. deneb validate */}
        <section id="validate" className="space-y-4 pt-4 border-t border-[#23283B]">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span>4. deneb validate (Preflight Contract Validator)</span>
          </h2>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            Runs compliance checks against your template to verify data bindings, field paths, static markers, and zero broken links. Also supports the <code className="text-white font-mono bg-white/5 px-1.5 py-0.5 rounded">--zip</code> flag to bundle upon validation:
          </p>

          <CodeBlock
            code={`# Run preflight validation:\nnpx @deneb-ui/cli validate .\n\n# Or with skip flags for rapid local diagnostics:\nnpx @deneb-ui/cli validate . --skip-install\n\n# Validate and immediately package clean ZIP on success:\nnpx @deneb-ui/cli validate --zip`}
            language="bash"
            filename="terminal"
          />
        </section>

        {/* 5. deneb zip */}
        <section id="zip" className="space-y-4 pt-4 border-t border-[#23283B]">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <FolderArchive className="w-5 h-5 text-[#818CF8]" />
            <span>5. deneb zip / pack (Clean ZIP Packaging)</span>
          </h2>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            Packages your storefront source into an upload-ready <code className="text-white font-mono bg-white/5 px-1.5 py-0.5 rounded">fivora-template.zip</code>, automatically excluding unnecessary folders, caches, and secret files (<code className="text-white font-mono">node_modules</code>, <code className="text-white font-mono">.next</code>, <code className="text-white font-mono">.git</code>, <code className="text-white font-mono">.env*</code>, <code className="text-white font-mono">.turbo</code>, logs):
          </p>

          <CodeBlock
            code={`# Create clean template ZIP:\nnpx @deneb-ui/cli zip .\n\n# Shorthand alias:\nnpx @deneb-ui/cli pack .`}
            language="bash"
            filename="terminal"
          />
        </section>

        {/* 6. deneb validate-and-zip */}
        <section id="validate-and-zip" className="space-y-4 pt-4 border-t border-[#23283B]">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <PackageCheck className="w-5 h-5 text-[#818CF8]" />
            <span>6. deneb validate-and-zip (Validate & Package in 1 Step)</span>
          </h2>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            The recommended release command before uploading to the Fivora Developer Portal. It executes the full preflight validator first, and <strong className="text-white">only packages the clean ZIP if all checks pass 100%</strong>, guaranteeing zero marketplace rejection:
          </p>

          <CodeBlock
            code={`# Validate preflight and bundle clean ZIP:\nnpx @deneb-ui/cli validate-and-zip .\n\n# Multi-word alias:\nnpx @deneb-ui/cli validate and zip\n\n# Via npm script:\nnpm run validate-and-zip`}
            language="bash"
            filename="terminal"
          />
        </section>

        {/* 7. deneb add */}
        <section id="add" className="space-y-4 pt-4 border-t border-[#23283B]">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Terminal className="w-5 h-5 text-[#818CF8]" />
            <span>7. deneb add (Component Registry)</span>
          </h2>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            Add or update specific DENEB UI components directly into your project&apos;s <code className="text-white font-mono bg-white/5 px-1.5 py-0.5 rounded">src/components/ui/</code> directory:
          </p>

          <CodeBlock
            code={`# List all 28+ available components:\nnpx @deneb-ui/cli add list\n\n# Add high-converting commerce components:\nnpx @deneb-ui/cli add sticky-mobile-bar\nnpx @deneb-ui/cli add trust-badges\nnpx @deneb-ui/cli add product-quickview\nnpx @deneb-ui/cli add cookie-consent\n\n# Add UI & layout components:\nnpx @deneb-ui/cli add product-card\nnpx @deneb-ui/cli add contact-actions\nnpx @deneb-ui/cli add location-card\nnpx @deneb-ui/cli add whatsapp-button\nnpx @deneb-ui/cli add dialog\n\n# Install the complete component registry at once:\nnpx @deneb-ui/cli add all`}
            language="bash"
            filename="terminal"
          />
        </section>

        {/* 8. create-template */}
        <section id="create" className="space-y-4 pt-4 border-t border-[#23283B]">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Box className="w-5 h-5 text-[#818CF8]" />
            <span>8. @deneb-ui/create-template (Start from Scratch)</span>
          </h2>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            Scaffold a complete Next.js 15 App Router storefront with Tailwind CSS, built-in visual editing bindings, and pre-configured DENEB smart actions:
          </p>

          <CodeBlock
            code={`# Scaffold via create-template:\nnpx @deneb-ui/create-template my-storefront\n\n# Shorthand alias:\nnpx create-deneb my-storefront`}
            language="bash"
            filename="terminal"
          />
        </section>

        {/* 9. deneb lab */}
        <section id="lab" className="space-y-4 pt-4 border-t border-[#23283B]">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#818CF8]" />
            <span>9. deneb lab (Local Visual Editing Lab)</span>
          </h2>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            Starts the interactive Visual Editing Lab simulation at <code className="text-white font-mono bg-white/5 px-1.5 py-0.5 rounded">http://localhost:3001</code> to test live content updates and iframe messaging before submitting to Fivora:
          </p>

          <CodeBlock
            code={`npm run lab\n# Or: deneb lab .`}
            language="bash"
            filename="terminal"
          />
        </section>

        <div className="pt-8 border-t border-[#23283B] flex justify-between items-center">
          <Link
            href="/docs/setup-fivora"
            className="flex items-center gap-2 text-xs font-semibold text-[#94A3B8] hover:text-white transition-colors"
          >
            <span>← Setup Fivora Guide</span>
          </Link>
          <Link
            href="/docs/components/button"
            className="flex items-center gap-2 text-xs font-semibold text-[#818CF8] hover:text-white transition-colors"
          >
            <span>Next: Browse Components</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <TableOfContents items={tocItems} />
    </div>
  );
}
