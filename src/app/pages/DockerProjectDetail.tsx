import { ArrowLeft, Github, ExternalLink, CheckCircle, Code2, GitBranch, AlertCircle, Zap } from 'lucide-react';
import { Link } from 'react-router';
import NgmlLogo from '../../imports/NgmlLogo-1/NgmlLogo-14-142';

export function DockerProjectDetail() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#2d5a3d]/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-[#2d5a3d] hover:text-[#234a31] transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Back to Portfolio</span>
            </Link>
            <div className="w-10 h-10">
              <NgmlLogo />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#e8f4ea] via-white to-[#e8f4ea] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-block px-4 py-2 bg-[#2d5a3d]/10 text-[#2d5a3d] rounded-full mb-6 border border-[#2d5a3d]/20">
            <span className="text-sm font-semibold">AI/ML Project</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Docker PR Deployment Validator
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            An intelligent agentic AI system that automatically detects, analyzes, and fixes CI/CD Docker failures in GitHub pull requests using LangGraph multi-agent architecture.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {["LangGraph", "Express.js", "GitHub API", "Gemini 2.5", "Docker", "CI/CD"].map((tag) => (
              <span key={tag} className="px-4 py-2 bg-[#2d5a3d] text-white rounded-full text-sm font-semibold">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <a href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-[#2d5a3d] text-white rounded-lg hover:bg-[#234a31] transition-all shadow-lg font-semibold">
              <Github className="w-5 h-5" />
              View on GitHub
            </a>
            <a href="#" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#2d5a3d] text-[#2d5a3d] rounded-lg hover:bg-[#2d5a3d] hover:text-white transition-all font-semibold">
              <ExternalLink className="w-5 h-5" />
              Live Demo
            </a>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Project Overview</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              The Docker PR Deployment Validator is an innovative AI-powered system designed to revolutionize the way development teams handle CI/CD pipeline failures. Built using LangGraph's multi-agent architecture, this system intelligently monitors GitHub pull requests for Docker-related deployment failures and automatically provides fixes.
            </p>
            <p>
              Traditional CI/CD pipelines require manual intervention when Docker builds fail, leading to delayed deployments and frustrated developers. This project leverages the power of AI agents to understand error logs, analyze Dockerfiles, and suggest or implement fixes automatically.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-[#e8f4ea]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-[#2d5a3d]/20 shadow-md">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#e8f4ea] rounded-lg">
                  <Zap className="w-6 h-6 text-[#2d5a3d]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Automated Failure Detection</h3>
                  <p className="text-gray-600 text-sm">
                    Continuously monitors GitHub webhooks for PR status changes and instantly identifies Docker-related CI/CD failures using pattern matching and error classification.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-[#2d5a3d]/20 shadow-md">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#e8f4ea] rounded-lg">
                  <Code2 className="w-6 h-6 text-[#2d5a3d]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Intelligent Log Analysis</h3>
                  <p className="text-gray-600 text-sm">
                    Uses Gemini 2.5 Flash to parse complex Docker error logs, extract meaningful insights, and identify the root cause of failures with high accuracy.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-[#2d5a3d]/20 shadow-md">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#e8f4ea] rounded-lg">
                  <GitBranch className="w-6 h-6 text-[#2d5a3d]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Multi-Agent Orchestration</h3>
                  <p className="text-gray-600 text-sm">
                    LangGraph coordinates specialized agents: one for analyzing errors, one for fetching PR files, and one for generating fixes—each optimized for its specific task.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-[#2d5a3d]/20 shadow-md">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#e8f4ea] rounded-lg">
                  <CheckCircle className="w-6 h-6 text-[#2d5a3d]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Automated Fix Suggestions</h3>
                  <p className="text-gray-600 text-sm">
                    Generates contextual fix suggestions as GitHub PR comments, including updated Dockerfile snippets, dependency fixes, and configuration recommendations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical Implementation</h2>

          <div className="space-y-8">
            <div className="border-l-4 border-[#2d5a3d] pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Architecture</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The system is built on a microservices architecture with an Express.js server handling GitHub webhooks. When a PR status changes, the webhook triggers the LangGraph agent pipeline.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#2d5a3d] font-bold">•</span>
                  <span><strong>Webhook Handler:</strong> Express.js server with ngrok for local development, processes GitHub webhook events</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2d5a3d] font-bold">•</span>
                  <span><strong>Agent Coordinator:</strong> LangGraph orchestrates the flow between analysis, retrieval, and fix generation agents</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2d5a3d] font-bold">•</span>
                  <span><strong>GitHub Integration:</strong> Octokit library for fetching PR files, workflow logs, and posting comments</span>
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-[#2d5a3d] pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Multi-Agent Pipeline</h3>
              <div className="space-y-3">
                <div className="bg-[#e8f4ea] rounded-lg p-4">
                  <h4 className="font-bold text-[#2d5a3d] mb-2">1. Error Classification Agent</h4>
                  <p className="text-gray-700 text-sm">
                    Analyzes CI/CD logs to categorize failures: dependency issues, syntax errors, network problems, or resource constraints. Uses prompt engineering with Gemini 2.5 Flash.
                  </p>
                </div>
                <div className="bg-[#e8f4ea] rounded-lg p-4">
                  <h4 className="font-bold text-[#2d5a3d] mb-2">2. Context Retrieval Agent</h4>
                  <p className="text-gray-700 text-sm">
                    Fetches relevant files from the PR (Dockerfile, docker-compose.yml, package.json) and extracts contextual information needed for generating accurate fixes.
                  </p>
                </div>
                <div className="bg-[#e8f4ea] rounded-lg p-4">
                  <h4 className="font-bold text-[#2d5a3d] mb-2">3. Fix Generation Agent</h4>
                  <p className="text-gray-700 text-sm">
                    Combines error analysis and file context to generate specific, actionable fixes. Formats the output as a GitHub comment with code snippets and explanations.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-[#2d5a3d] pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Key Technologies</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-[#e8f4ea] rounded-lg p-4 text-center">
                  <div className="font-bold text-[#2d5a3d]">LangGraph</div>
                  <div className="text-xs text-gray-600 mt-1">Agent Orchestration</div>
                </div>
                <div className="bg-[#e8f4ea] rounded-lg p-4 text-center">
                  <div className="font-bold text-[#2d5a3d]">Gemini 2.5 Flash</div>
                  <div className="text-xs text-gray-600 mt-1">LLM Provider</div>
                </div>
                <div className="bg-[#e8f4ea] rounded-lg p-4 text-center">
                  <div className="font-bold text-[#2d5a3d]">Express.js</div>
                  <div className="text-xs text-gray-600 mt-1">API Server</div>
                </div>
                <div className="bg-[#e8f4ea] rounded-lg p-4 text-center">
                  <div className="font-bold text-[#2d5a3d]">GitHub API</div>
                  <div className="text-xs text-gray-600 mt-1">Integration</div>
                </div>
                <div className="bg-[#e8f4ea] rounded-lg p-4 text-center">
                  <div className="font-bold text-[#2d5a3d]">Docker</div>
                  <div className="text-xs text-gray-600 mt-1">Containerization</div>
                </div>
                <div className="bg-[#e8f4ea] rounded-lg p-4 text-center">
                  <div className="font-bold text-[#2d5a3d]">TypeScript</div>
                  <div className="text-xs text-gray-600 mt-1">Language</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-16 bg-[#e8f4ea]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Challenges & Solutions</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-[#2d5a3d]/20">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-[#2d5a3d] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Challenge: Parsing Unstructured Error Logs</h3>
                  <p className="text-gray-700 mb-3">
                    Docker error logs vary significantly in format and verbosity, making automated parsing difficult. Different base images and build tools produce different error patterns.
                  </p>
                  <p className="text-[#2d5a3d] font-semibold mb-2">Solution:</p>
                  <p className="text-gray-700">
                    Implemented a two-stage approach: first extract error blocks using regex patterns, then use Gemini 2.5 Flash with carefully crafted prompts to normalize and classify errors into actionable categories.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-[#2d5a3d]/20">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-[#2d5a3d] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Challenge: Context Window Limitations</h3>
                  <p className="text-gray-700 mb-3">
                    Large PRs with extensive error logs and multiple files can exceed LLM context windows, leading to incomplete analysis.
                  </p>
                  <p className="text-[#2d5a3d] font-semibold mb-2">Solution:</p>
                  <p className="text-gray-700">
                    Implemented intelligent chunking: prioritize critical files (Dockerfile, compose files), summarize less relevant logs, and use LangGraph's state management to maintain context across agent calls.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-[#2d5a3d]/20">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-[#2d5a3d] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Challenge: Rate Limiting and API Costs</h3>
                  <p className="text-gray-700 mb-3">
                    Frequent PR updates in active repositories can trigger many webhook calls, leading to high API costs and rate limiting issues with both GitHub and Gemini APIs.
                  </p>
                  <p className="text-[#2d5a3d] font-semibold mb-2">Solution:</p>
                  <p className="text-gray-700">
                    Added debouncing logic to batch similar failures, implemented caching for repeated error patterns, and used Gemini Flash (faster and cheaper) instead of Pro for most operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Results & Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-[#2d5a3d] to-[#234a31] rounded-xl p-6 text-white text-center">
              <div className="text-4xl font-bold mb-2">85%</div>
              <div className="text-sm">Accuracy in error classification and fix suggestions</div>
            </div>
            <div className="bg-gradient-to-br from-[#2d5a3d] to-[#234a31] rounded-xl p-6 text-white text-center">
              <div className="text-4xl font-bold mb-2">60%</div>
              <div className="text-sm">Reduction in average time to resolve Docker failures</div>
            </div>
            <div className="bg-gradient-to-br from-[#2d5a3d] to-[#234a31] rounded-xl p-6 text-white text-center">
              <div className="text-4xl font-bold mb-2">&lt;3s</div>
              <div className="text-sm">Average response time for failure analysis</div>
            </div>
          </div>
          <div className="prose max-w-none text-gray-700">
            <p className="leading-relaxed">
              This project demonstrated the power of agentic AI in DevOps automation. By combining LangGraph's orchestration capabilities with modern LLMs, the system provides intelligent, context-aware assistance that significantly reduces developer frustration and deployment delays. The modular agent design also makes it easy to extend to other CI/CD platforms beyond GitHub Actions.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2d5a3d] text-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-white hover:text-[#e8f4ea] transition-colors font-semibold">
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </div>
      </footer>
    </div>
  );
}
