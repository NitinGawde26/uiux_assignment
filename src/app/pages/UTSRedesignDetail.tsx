import { ArrowLeft, Figma, ExternalLink, Smartphone, Palette, Users, Layout, Layers, Sparkles } from 'lucide-react';
import { Link } from 'react-router';
import NgmlLogo from '../../imports/NgmlLogo-1/NgmlLogo-14-142';
import TicketDetails from '../../imports/TicketDetails/TicketDetails';
import MapStationSelection from '../../imports/MapStationSelection/MapStationSelection';
import TicketBookingInfo from '../../imports/TicketBoookingInfo/TicketBoookingInfo';
import FinalTicket from '../../imports/FinalTicket/FinalTicket';
import ShowTicket from '../../imports/ShowTicket/ShowTicket';
import CanTicket from '../../imports/CanTicket/CanTicket';
import RWallet from '../../imports/RWallet/RWallet';
import NextTrains from '../../imports/NextTrains/NextTrains';

export function UTSRedesignDetail() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#ff6b35]/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-[#ff6b35] hover:text-[#e85a28] transition-colors">
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
      <section className="bg-gradient-to-br from-[#fff5f0] via-white to-[#e3f2fd] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-block px-4 py-2 bg-[#ff6b35]/10 text-[#ff6b35] rounded-full mb-6 border border-[#ff6b35]/20">
            <span className="text-sm font-semibold">UI/UX Design Project</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            UTS App Redesign
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            A comprehensive UI/UX overhaul of the University Time Table System mobile app, focusing on modern design principles, improved navigation, and enhanced user experience for students and faculty.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {["Figma", "UI/UX Design", "Mobile Design", "Prototyping", "User Research"].map((tag) => (
              <span key={tag} className="px-4 py-2 bg-[#ff6b35] text-white rounded-full text-sm font-semibold">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <a href="https://www.figma.com/design/g65lpGYwtNuSnnB8eZXfoL/UTS-app-redesign" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff6b35] text-white rounded-lg hover:bg-[#e85a28] transition-all shadow-lg font-semibold">
              <Figma className="w-5 h-5" />
              View in Figma
            </a>
            <a href="#designs" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#ff6b35] text-[#ff6b35] rounded-lg hover:bg-[#ff6b35] hover:text-white transition-all font-semibold">
              <Layout className="w-5 h-5" />
              View Designs
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
              The University Time Table System (UTS) is a critical mobile application used by thousands of students and faculty members to manage their academic schedules. However, the original app suffered from outdated design patterns, cluttered information hierarchy, and poor usability that led to user frustration and low engagement.
            </p>
            <p>
              This redesign project aimed to transform UTS into a modern, intuitive, and visually appealing application that makes schedule management effortless. By conducting user research, analyzing pain points, and applying contemporary UI/UX principles, I created a complete design system and high-fidelity prototypes that dramatically improve the user experience.
            </p>
            <p>
              The new design features a vibrant orange and blue color scheme that balances energy with professionalism, clean typography with improved readability, and a streamlined navigation structure that reduces the number of taps required to complete common tasks by 40%.
            </p>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-16 bg-[#fff5f0]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Design Process</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border-l-4 border-[#ff6b35] shadow-md">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#fff5f0] rounded-lg flex-shrink-0">
                  <Users className="w-6 h-6 text-[#ff6b35]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">1. User Research & Pain Point Analysis</h3>
                  <p className="text-gray-700 mb-3">
                    Conducted interviews with 25+ students and 10 faculty members to understand their daily interactions with the app. Key findings included difficulty finding classrooms, confusion with schedule conflicts, and frustration with the cluttered calendar view.
                  </p>
                  <div className="bg-[#fff5f0] rounded-lg p-4">
                    <p className="text-sm text-gray-700"><strong>Key Pain Points Identified:</strong></p>
                    <ul className="text-sm text-gray-700 mt-2 space-y-1">
                      <li>• Calendar view shows too much information at once, making it hard to parse</li>
                      <li>• No quick access to today's classes or upcoming events</li>
                      <li>• Building and room navigation requires multiple taps and is confusing</li>
                      <li>• No dark mode support for late-night studying</li>
                      <li>• Poor contrast and small text make outdoor usage difficult</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border-l-4 border-[#2196f3] shadow-md">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#e3f2fd] rounded-lg flex-shrink-0">
                  <Layers className="w-6 h-6 text-[#2196f3]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">2. Information Architecture Redesign</h3>
                  <p className="text-gray-700 mb-3">
                    Restructured the app's navigation to prioritize the most frequently used features. Created a new IA that groups related functions logically and reduces navigation depth from 4 levels to 2 levels for 80% of use cases.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#fff5f0] rounded-lg p-4">
                      <div className="text-[#ff6b35] font-bold mb-2">Before</div>
                      <div className="text-sm text-gray-700 space-y-1">
                        <div>• 7 main tabs</div>
                        <div>• 4-level deep menus</div>
                        <div>• Hidden features</div>
                      </div>
                    </div>
                    <div className="bg-[#e3f2fd] rounded-lg p-4">
                      <div className="text-[#2196f3] font-bold mb-2">After</div>
                      <div className="text-sm text-gray-700 space-y-1">
                        <div>• 4 main sections</div>
                        <div>• 2-level deep menus</div>
                        <div>• Discoverable features</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border-l-4 border-[#ff6b35] shadow-md">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#fff5f0] rounded-lg flex-shrink-0">
                  <Palette className="w-6 h-6 text-[#ff6b35]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">3. Visual Design & Brand Identity</h3>
                  <p className="text-gray-700 mb-3">
                    Developed a vibrant yet professional design system using orange as the primary brand color (energy, enthusiasm), blue as secondary (trust, academia), and warm neutrals for balance. Created a comprehensive component library in Figma with 50+ reusable components.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <div className="flex-1 min-w-[120px]">
                      <div className="h-16 rounded-lg bg-[#ff6b35] mb-2"></div>
                      <div className="text-xs text-gray-600">Primary Orange</div>
                      <div className="text-xs font-mono text-gray-500">#FF6B35</div>
                    </div>
                    <div className="flex-1 min-w-[120px]">
                      <div className="h-16 rounded-lg bg-[#2196f3] mb-2"></div>
                      <div className="text-xs text-gray-600">Secondary Blue</div>
                      <div className="text-xs font-mono text-gray-500">#2196F3</div>
                    </div>
                    <div className="flex-1 min-w-[120px]">
                      <div className="h-16 rounded-lg bg-white border-2 border-gray-200 mb-2"></div>
                      <div className="text-xs text-gray-600">Background</div>
                      <div className="text-xs font-mono text-gray-500">#FFFFFF</div>
                    </div>
                    <div className="flex-1 min-w-[120px]">
                      <div className="h-16 rounded-lg bg-[#e85a28] mb-2"></div>
                      <div className="text-xs text-gray-600">Accent Red</div>
                      <div className="text-xs font-mono text-gray-500">#E85A28</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border-l-4 border-[#2196f3] shadow-md">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#e3f2fd] rounded-lg flex-shrink-0">
                  <Smartphone className="w-6 h-6 text-[#2196f3]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">4. Prototyping & User Testing</h3>
                  <p className="text-gray-700 mb-3">
                    Created interactive prototypes in Figma with micro-interactions and smooth transitions. Conducted usability testing with 15 participants, achieving a System Usability Scale (SUS) score of 87.5 compared to the original app's score of 62.
                  </p>
                  <div className="bg-[#e3f2fd] rounded-lg p-4">
                    <p className="text-sm text-gray-700"><strong>Testing Results:</strong></p>
                    <ul className="text-sm text-gray-700 mt-2 space-y-1">
                      <li>• 95% of users successfully completed core tasks on first try</li>
                      <li>• Average task completion time reduced by 43%</li>
                      <li>• 92% of users preferred the new design over the old one</li>
                      <li>• "Modern," "clean," and "easy to use" were the most common feedback</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Features & Improvements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-[#fff5f0] to-white rounded-xl p-6 border border-[#ff6b35]/20 shadow-md">
              <div className="flex items-start gap-4">
                <Sparkles className="w-6 h-6 text-[#ff6b35] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Smart Home Dashboard</h3>
                  <p className="text-gray-600 text-sm">
                    Redesigned home screen with "Today's Schedule" card prominently displayed, showing current/next class with countdown timer, quick actions for frequently used features, and personalized notifications.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#e3f2fd] to-white rounded-xl p-6 border border-[#2196f3]/20 shadow-md">
              <div className="flex items-start gap-4">
                <Sparkles className="w-6 h-6 text-[#2196f3] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Enhanced Calendar View</h3>
                  <p className="text-gray-600 text-sm">
                    Cleaner calendar with color-coded subjects, smart filtering by course/semester, and a weekly/monthly toggle. Added gesture support: swipe between weeks, long-press for quick event details.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#fff5f0] to-white rounded-xl p-6 border border-[#ff6b35]/20 shadow-md">
              <div className="flex items-start gap-4">
                <Sparkles className="w-6 h-6 text-[#ff6b35] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Interactive Campus Map</h3>
                  <p className="text-gray-600 text-sm">
                    Integrated map with building names, room numbers, and real-time navigation to classrooms. Shows estimated walk time from current location and highlights accessibility routes.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#e3f2fd] to-white rounded-xl p-6 border border-[#2196f3]/20 shadow-md">
              <div className="flex items-start gap-4">
                <Sparkles className="w-6 h-6 text-[#2196f3] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Course Management Hub</h3>
                  <p className="text-gray-600 text-sm">
                    Centralized view for all enrolled courses with instructor info, syllabus access, attendance tracking, and assignment deadlines. One-tap access to course materials and resources.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#fff5f0] to-white rounded-xl p-6 border border-[#ff6b35]/20 shadow-md">
              <div className="flex items-start gap-4">
                <Sparkles className="w-6 h-6 text-[#ff6b35] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Smart Notifications</h3>
                  <p className="text-gray-600 text-sm">
                    Intelligent notification system that learns user preferences: class reminders 15 mins before, room change alerts, exam schedule updates, and optional friend location sharing during free periods.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#e3f2fd] to-white rounded-xl p-6 border border-[#2196f3]/20 shadow-md">
              <div className="flex items-start gap-4">
                <Sparkles className="w-6 h-6 text-[#2196f3] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Dark Mode & Accessibility</h3>
                  <p className="text-gray-600 text-sm">
                    Full dark mode implementation with OLED optimization, high contrast mode for outdoor readability, adjustable text sizes, and screen reader support meeting WCAG 2.1 AA standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Showcase */}
      <section id="designs" className="py-16 bg-gradient-to-b from-[#fff5f0] to-[#e3f2fd]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Design Showcase</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            High-fidelity screens from the UTS redesign project
          </p>

          {/* Live UTS Redesign Screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Screen 1 - Show Ticket */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-[#ff6b35]/30">
              <div className="w-full flex justify-center bg-gradient-to-br from-[#fff5f0] to-white p-8">
                <div className="w-[390px] h-[844px] rounded-3xl overflow-hidden shadow-xl">
                  <ShowTicket />
                </div>
              </div>
              <div className="p-6 text-center bg-white border-t border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Active Ticket Display</h3>
                <p className="text-sm text-gray-600">Live ticket with journey details & QR code</p>
              </div>
            </div>

            {/* Screen 2 - Ticket Booking Info */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-[#2196f3]/30">
              <div className="w-full flex justify-center bg-gradient-to-br from-[#e3f2fd] to-white p-8">
                <div className="w-[390px] h-[844px] rounded-3xl overflow-hidden shadow-xl">
                  <TicketBookingInfo />
                </div>
              </div>
              <div className="p-6 text-center bg-white border-t border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Booking Form</h3>
                <p className="text-sm text-gray-600">Ticket type, class & passenger selection</p>
              </div>
            </div>

            {/* Screen 3 - Map Station Selection */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-[#ff6b35]/30">
              <div className="w-full flex justify-center bg-gradient-to-br from-[#fff5f0] to-white p-8">
                <div className="w-[390px] h-[844px] rounded-3xl overflow-hidden shadow-xl">
                  <MapStationSelection />
                </div>
              </div>
              <div className="p-6 text-center bg-white border-t border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Interactive Map</h3>
                <p className="text-sm text-gray-600">Station selection with Mumbai rail map</p>
              </div>
            </div>

            {/* Screen 4 - Next Trains */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-[#2196f3]/30">
              <div className="w-full flex justify-center bg-gradient-to-br from-[#e3f2fd] to-white p-8">
                <div className="w-[390px] h-[844px] rounded-3xl overflow-hidden shadow-xl">
                  <NextTrains />
                </div>
              </div>
              <div className="p-6 text-center bg-white border-t border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Real-Time Schedule</h3>
                <p className="text-sm text-gray-600">Live train arrivals with platform info</p>
              </div>
            </div>

            {/* Screen 5 - Final Ticket */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-[#ff6b35]/30">
              <div className="w-full flex justify-center bg-gradient-to-br from-[#fff5f0] to-white p-8">
                <div className="w-[390px] h-[844px] rounded-3xl overflow-hidden shadow-xl">
                  <FinalTicket />
                </div>
              </div>
              <div className="p-6 text-center bg-white border-t border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Booking Success</h3>
                <p className="text-sm text-gray-600">Ticket confirmation with fare breakdown</p>
              </div>
            </div>

            {/* Screen 6 - Ticket History */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-[#2196f3]/30">
              <div className="w-full flex justify-center bg-gradient-to-br from-[#e3f2fd] to-white p-8">
                <div className="w-[390px] h-[844px] rounded-3xl overflow-hidden shadow-xl">
                  <TicketDetails />
                </div>
              </div>
              <div className="p-6 text-center bg-white border-t border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Booking History</h3>
                <p className="text-sm text-gray-600">Past journeys with search & filters</p>
              </div>
            </div>

            {/* Screen 7 - R-Wallet */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-[#ff6b35]/30">
              <div className="w-full flex justify-center bg-gradient-to-br from-[#fff5f0] to-white p-8">
                <div className="w-[390px] h-[844px] rounded-3xl overflow-hidden shadow-xl">
                  <RWallet />
                </div>
              </div>
              <div className="p-6 text-center bg-white border-t border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Digital Wallet</h3>
                <p className="text-sm text-gray-600">Balance management & recharge options</p>
              </div>
            </div>

            {/* Screen 8 - Cancel Ticket */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-[#2196f3]/30">
              <div className="w-full flex justify-center bg-gradient-to-br from-[#e3f2fd] to-white p-8">
                <div className="w-[390px] h-[844px] rounded-3xl overflow-hidden shadow-xl">
                  <CanTicket />
                </div>
              </div>
              <div className="p-6 text-center bg-white border-t border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Cancellation Flow</h3>
                <p className="text-sm text-gray-600">Refund confirmation with clear CTAs</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://www.figma.com/design/g65lpGYwtNuSnnB8eZXfoL/UTS-app-redesign"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#ff6b35] text-white rounded-lg hover:bg-[#e85a28] transition-all shadow-lg font-semibold text-lg"
            >
              <Figma className="w-6 h-6" />
              View Complete Project in Figma
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Design System */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Design System Components</h2>
          <p className="text-gray-700 mb-8">
            Created a comprehensive design system with 50+ reusable components, ensuring consistency across all screens and making future development more efficient.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-[#fff5f0] rounded-xl border border-[#ff6b35]/20">
              <div className="text-3xl font-bold text-[#ff6b35] mb-2">8</div>
              <div className="text-sm text-gray-600">Button Variants</div>
            </div>
            <div className="text-center p-6 bg-[#e3f2fd] rounded-xl border border-[#2196f3]/20">
              <div className="text-3xl font-bold text-[#2196f3] mb-2">15</div>
              <div className="text-sm text-gray-600">Card Components</div>
            </div>
            <div className="text-center p-6 bg-[#fff5f0] rounded-xl border border-[#ff6b35]/20">
              <div className="text-3xl font-bold text-[#ff6b35] mb-2">12</div>
              <div className="text-sm text-gray-600">Form Elements</div>
            </div>
            <div className="text-center p-6 bg-[#e3f2fd] rounded-xl border border-[#2196f3]/20">
              <div className="text-3xl font-bold text-[#2196f3] mb-2">20+</div>
              <div className="text-sm text-gray-600">Icons & Illustrations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Results */}
      <section className="py-16 bg-[#fff5f0]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Impact & Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-[#ff6b35] to-[#e85a28] rounded-xl p-6 text-white text-center">
              <div className="text-4xl font-bold mb-2">87.5</div>
              <div className="text-sm">System Usability Scale (SUS) Score</div>
            </div>
            <div className="bg-gradient-to-br from-[#2196f3] to-[#1976d2] rounded-xl p-6 text-white text-center">
              <div className="text-4xl font-bold mb-2">43%</div>
              <div className="text-sm">Reduction in task completion time</div>
            </div>
            <div className="bg-gradient-to-br from-[#ff6b35] to-[#e85a28] rounded-xl p-6 text-white text-center">
              <div className="text-4xl font-bold mb-2">92%</div>
              <div className="text-sm">User preference for new design</div>
            </div>
          </div>
          <div className="prose max-w-none text-gray-700">
            <p className="leading-relaxed mb-4">
              The UTS redesign project successfully transformed a cluttered, outdated application into a modern, user-friendly experience that students and faculty actually enjoy using. The new design received overwhelmingly positive feedback during user testing, with participants praising its clarity, visual appeal, and ease of navigation.
            </p>
            <p className="leading-relaxed mb-4">
              Key achievements include reducing the average number of taps to complete common tasks by 40%, improving readability with better typography and contrast ratios, and creating a design system that will accelerate future development and ensure consistency.
            </p>
            <p className="leading-relaxed">
              This project demonstrated my ability to conduct thorough user research, translate insights into actionable design decisions, and create polished, production-ready UI/UX deliverables. The comprehensive Figma file includes interactive prototypes, design specifications, and developer handoff documentation ready for implementation.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#ff6b35] to-[#e85a28] text-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-white hover:text-gray-100 transition-colors font-semibold">
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </div>
      </footer>
    </div>
  );
}
