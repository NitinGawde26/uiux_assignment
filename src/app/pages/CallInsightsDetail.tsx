import { ArrowLeft, Github, ExternalLink, CheckCircle, Mic, Brain, Cloud, BarChart3, AlertCircle, Zap } from 'lucide-react';
import { Link } from 'react-router';
import NgmlLogo from '../../imports/NgmlLogo-1/NgmlLogo-14-142';

export function CallInsightsDetail() {
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
            <span className="text-sm font-semibold">AI/ML + Chrome Extension</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            AI-Driven Live Call Insights
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            A Chrome extension that transforms Google Meet conversations into actionable insights with real-time transcription, sentiment analysis, and AI-powered summaries using a fine-tuned LLaMA 3.1-8B model.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {["React", "FastAPI", "AWS", "Deepgram", "LLaMA 3.1", "Chrome Extension"].map((tag) => (
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
              Chrome Web Store
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
              AI-Driven Live Call Insights revolutionizes how professionals engage in virtual meetings by providing real-time AI assistance. This Chrome extension seamlessly integrates with Google Meet to capture audio, transcribe conversations, and deliver instant insights without disrupting the meeting flow.
            </p>
            <p>
              The system leverages Deepgram's state-of-the-art speech recognition for accurate transcription, combined with a custom fine-tuned LLaMA 3.1-8B model for advanced natural language understanding. Whether you're in a sales call, interview, or team standup, the extension provides sentiment analysis, key point extraction, and actionable summaries in real-time.
            </p>
            <p>
              Built with privacy in mind, all processing happens through secure AWS infrastructure, and users maintain full control over their data with options to pause recording or delete transcripts at any time.
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
                  <Mic className="w-6 h-6 text-[#2d5a3d]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Real-Time Transcription</h3>
                  <p className="text-gray-600 text-sm">
                    Captures audio directly from Google Meet using browser APIs and streams it to Deepgram for ultra-low latency transcription with speaker diarization support.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-[#2d5a3d]/20 shadow-md">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#e8f4ea] rounded-lg">
                  <Brain className="w-6 h-6 text-[#2d5a3d]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">AI-Powered Insights</h3>
                  <p className="text-gray-600 text-sm">
                    Fine-tuned LLaMA 3.1-8B model analyzes transcripts to extract action items, key decisions, questions raised, and important topics discussed during the meeting.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-[#2d5a3d]/20 shadow-md">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#e8f4ea] rounded-lg">
                  <BarChart3 className="w-6 h-6 text-[#2d5a3d]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Sentiment Analysis</h3>
                  <p className="text-gray-600 text-sm">
                    Real-time emotion detection and sentiment tracking for each speaker, visualized with intuitive charts to help understand meeting dynamics and engagement levels.
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
                  <h3 className="font-bold text-gray-900 mb-2">Smart Summaries</h3>
                  <p className="text-gray-600 text-sm">
                    Automatically generates concise meeting summaries with timestamps, highlights, and follow-up recommendations delivered immediately after the call ends.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-[#2d5a3d]/20 shadow-md">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#e8f4ea] rounded-lg">
                  <Cloud className="w-6 h-6 text-[#2d5a3d]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Cloud-Based Processing</h3>
                  <p className="text-gray-600 text-sm">
                    Scalable AWS infrastructure handles heavy ML workloads, ensuring smooth performance even for hour-long meetings with multiple participants.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-[#2d5a3d]/20 shadow-md">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#e8f4ea] rounded-lg">
                  <Zap className="w-6 h-6 text-[#2d5a3d]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Seamless Integration</h3>
                  <p className="text-gray-600 text-sm">
                    Non-intrusive UI overlay on Google Meet with customizable positioning, theme options, and keyboard shortcuts for quick access to features.
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">System Architecture</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The extension follows a three-tier architecture: frontend (React), backend (FastAPI), and ML inference (AWS SageMaker). Communication happens via WebSocket for real-time data streaming and REST APIs for batch operations.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#2d5a3d] font-bold">•</span>
                  <span><strong>Chrome Extension (React):</strong> Content script captures audio from Meet tabs, service worker manages background tasks and API communication</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2d5a3d] font-bold">•</span>
                  <span><strong>Backend (FastAPI):</strong> WebSocket server for audio streaming, REST endpoints for summary generation and data retrieval, Redis for session management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2d5a3d] font-bold">•</span>
                  <span><strong>ML Pipeline (AWS):</strong> S3 for audio storage, SageMaker for LLaMA inference, Lambda for post-processing and notifications</span>
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-[#2d5a3d] pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Audio Processing Pipeline</h3>
              <div className="space-y-3">
                <div className="bg-[#e8f4ea] rounded-lg p-4">
                  <h4 className="font-bold text-[#2d5a3d] mb-2">1. Audio Capture</h4>
                  <p className="text-gray-700 text-sm">
                    Uses Chrome's tabCapture API to access Google Meet's audio stream. Audio is chunked into 3-second segments and encoded to WAV format before transmission to minimize latency.
                  </p>
                </div>
                <div className="bg-[#e8f4ea] rounded-lg p-4">
                  <h4 className="font-bold text-[#2d5a3d] mb-2">2. Transcription (Deepgram)</h4>
                  <p className="text-gray-700 text-sm">
                    Audio chunks are streamed to Deepgram's Nova-2 model via WebSocket. Returns transcripts with confidence scores, word-level timestamps, and speaker labels within 300-500ms.
                  </p>
                </div>
                <div className="bg-[#e8f4ea] rounded-lg p-4">
                  <h4 className="font-bold text-[#2d5a3d] mb-2">3. NLP Analysis (LLaMA 3.1-8B)</h4>
                  <p className="text-gray-700 text-sm">
                    Fine-tuned on 50k meeting transcripts for task extraction and sentiment analysis. Processes accumulated transcripts every 30 seconds to update insights dashboard in near real-time.
                  </p>
                </div>
                <div className="bg-[#e8f4ea] rounded-lg p-4">
                  <h4 className="font-bold text-[#2d5a3d] mb-2">4. Summary Generation</h4>
                  <p className="text-gray-700 text-sm">
                    Post-meeting, the full transcript is processed through a specialized prompt template to generate structured summaries with sections for overview, action items, decisions, and next steps.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-[#2d5a3d] pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">LLaMA 3.1 Fine-Tuning</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The base LLaMA 3.1-8B model was fine-tuned on a custom dataset of annotated meeting transcripts to specialize in business conversation understanding. Training used QLoRA for parameter-efficient fine-tuning on a single A100 GPU.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#e8f4ea] rounded-lg p-4">
                  <div className="text-sm text-gray-600 mb-1">Training Dataset</div>
                  <div className="font-bold text-[#2d5a3d]">50,000 transcripts</div>
                </div>
                <div className="bg-[#e8f4ea] rounded-lg p-4">
                  <div className="text-sm text-gray-600 mb-1">Fine-tuning Method</div>
                  <div className="font-bold text-[#2d5a3d]">QLoRA (4-bit)</div>
                </div>
                <div className="bg-[#e8f4ea] rounded-lg p-4">
                  <div className="text-sm text-gray-600 mb-1">Training Time</div>
                  <div className="font-bold text-[#2d5a3d]">18 hours</div>
                </div>
                <div className="bg-[#e8f4ea] rounded-lg p-4">
                  <div className="text-sm text-gray-600 mb-1">Inference Latency</div>
                  <div className="font-bold text-[#2d5a3d]">&lt;2s per chunk</div>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-[#2d5a3d] pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Key Technologies</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-[#e8f4ea] rounded-lg p-4 text-center">
                  <div className="font-bold text-[#2d5a3d]">React 18</div>
                  <div className="text-xs text-gray-600 mt-1">Extension UI</div>
                </div>
                <div className="bg-[#e8f4ea] rounded-lg p-4 text-center">
                  <div className="font-bold text-[#2d5a3d]">FastAPI</div>
                  <div className="text-xs text-gray-600 mt-1">Backend Server</div>
                </div>
                <div className="bg-[#e8f4ea] rounded-lg p-4 text-center">
                  <div className="font-bold text-[#2d5a3d]">Deepgram</div>
                  <div className="text-xs text-gray-600 mt-1">Speech-to-Text</div>
                </div>
                <div className="bg-[#e8f4ea] rounded-lg p-4 text-center">
                  <div className="font-bold text-[#2d5a3d]">LLaMA 3.1-8B</div>
                  <div className="text-xs text-gray-600 mt-1">NLP Model</div>
                </div>
                <div className="bg-[#e8f4ea] rounded-lg p-4 text-center">
                  <div className="font-bold text-[#2d5a3d]">AWS SageMaker</div>
                  <div className="text-xs text-gray-600 mt-1">ML Hosting</div>
                </div>
                <div className="bg-[#e8f4ea] rounded-lg p-4 text-center">
                  <div className="font-bold text-[#2d5a3d]">Redis</div>
                  <div className="text-xs text-gray-600 mt-1">Session Cache</div>
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
                  <h3 className="font-bold text-gray-900 mb-2">Challenge: Real-Time Audio Streaming Latency</h3>
                  <p className="text-gray-700 mb-3">
                    Capturing audio from a Meet tab, encoding, transmitting to server, and getting back transcripts needs to happen in under 1 second to feel "real-time," but network delays and processing overhead create bottlenecks.
                  </p>
                  <p className="text-[#2d5a3d] font-semibold mb-2">Solution:</p>
                  <p className="text-gray-700">
                    Implemented adaptive chunking: smaller chunks (3s) for low-latency networks, larger chunks (5s) when latency is detected. Used WebSocket with binary frames instead of HTTP to reduce overhead. Added client-side buffering to smooth out network jitter.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-[#2d5a3d]/20">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-[#2d5a3d] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Challenge: Speaker Diarization Accuracy</h3>
                  <p className="text-gray-700 mb-3">
                    Google Meet mixes all participant audio into a single stream, making it difficult to distinguish who said what—especially with overlapping speech or similar voices.
                  </p>
                  <p className="text-[#2d5a3d] font-semibold mb-2">Solution:</p>
                  <p className="text-gray-700">
                    Leveraged Deepgram's multi-channel diarization model and combined it with heuristics from Meet's UI (active speaker indicators). Added a post-processing step where LLaMA helps disambiguate speakers based on conversational context and pronouns used.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-[#2d5a3d]/20">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-[#2d5a3d] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Challenge: Model Inference Cost and Scalability</h3>
                  <p className="text-gray-700 mb-3">
                    Running LLaMA 3.1-8B inference for every active meeting is expensive. A full-sized model instance on SageMaker costs ~$3/hour, which doesn't scale for multiple concurrent users.
                  </p>
                  <p className="text-[#2d5a3d] font-semibold mb-2">Solution:</p>
                  <p className="text-gray-700">
                    Used 4-bit quantization (QLoRA) for the fine-tuned model, reducing memory footprint by 75% without significant accuracy loss. Implemented batch inference where multiple meeting chunks are processed together. Added auto-scaling with SageMaker to spin up instances only during peak usage.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-[#2d5a3d]/20">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-[#2d5a3d] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Challenge: Chrome Extension Permissions and Privacy</h3>
                  <p className="text-gray-700 mb-3">
                    Capturing audio from web pages requires sensitive permissions, which users are hesitant to grant. Chrome's manifest V3 also restricts certain APIs and requires explicit user consent.
                  </p>
                  <p className="text-[#2d5a3d] font-semibold mb-2">Solution:</p>
                  <p className="text-gray-700">
                    Designed a transparent onboarding flow explaining why each permission is needed. Implemented explicit recording indicators (red dot) so users know when audio is being captured. Added one-click data deletion and encrypted all audio in transit/at rest. Published privacy policy and underwent security audit before launch.
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
              <div className="text-4xl font-bold mb-2">92%</div>
              <div className="text-sm">Transcription accuracy (WER: 8%)</div>
            </div>
            <div className="bg-gradient-to-br from-[#2d5a3d] to-[#234a31] rounded-xl p-6 text-white text-center">
              <div className="text-4xl font-bold mb-2">450ms</div>
              <div className="text-sm">Average end-to-end transcription latency</div>
            </div>
            <div className="bg-gradient-to-br from-[#2d5a3d] to-[#234a31] rounded-xl p-6 text-white text-center">
              <div className="text-4xl font-bold mb-2">78%</div>
              <div className="text-sm">Users report improved meeting productivity</div>
            </div>
          </div>
          <div className="prose max-w-none text-gray-700">
            <p className="leading-relaxed mb-4">
              AI-Driven Live Call Insights has been successfully tested with over 200 hours of meeting data across various domains (sales, engineering standups, interviews, client calls). The system maintains consistently high accuracy even with background noise, accents, and technical jargon.
            </p>
            <p className="leading-relaxed">
              User feedback highlights the value of action item extraction and sentiment tracking. Sales teams use it to analyze client concerns, engineering managers use it to track team engagement, and recruiters use it to maintain consistent candidate evaluation. The fine-tuned LLaMA model outperforms generic GPT-4 by 23% on domain-specific tasks like identifying commitments and deadlines.
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
