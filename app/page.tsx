"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  GraduationCap,
  BookOpen,
  Award,
  Bus,
  Users,
  Compass,
  ArrowRight,
  CheckCircle2,
  Calendar,
  ChevronRight,
  ExternalLink,
  MapPin,
  Phone,
  Mail,
  Menu,
  X,
  Search,
  Sparkles,
  Building2,
  Laptop,
  ShieldCheck,
  HeartHandshake,
  FileText,
  ChevronDown,
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaculty, setActiveFaculty] = useState<"fse" | "fbs" | "fsis" | "fah" | "fl">("fse");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const notices = [
    {
      id: 1,
      tag: "Admissions",
      title: "Undergraduate & Postgraduate Admission Open for Spring 2027",
      date: "Nov 20, 2026",
      urgent: true,
    },
    {
      id: 2,
      tag: "Academic",
      title: "Autumn 2026 Semester Final Examination Schedule Published",
      date: "Nov 18, 2026",
      urgent: false,
    },
    {
      id: 3,
      tag: "Scholarship",
      title: "Application for Freedom Fighter & Need-Based Tuition Waiver (Spring 2027)",
      date: "Nov 15, 2026",
      urgent: false,
    },
    {
      id: 4,
      tag: "Research",
      title: "Call for Papers: 4th International Conference on Computing & Islamic Banking",
      date: "Nov 10, 2026",
      urgent: false,
    },
  ];

  const faculties = {
    fse: {
      name: "Faculty of Science & Engineering",
      icon: Laptop,
      description:
        "Internationally recognized engineering programs equipped with cutting-edge labs, robotics facilities, and IEB accreditations.",
      departments: [
        {
          name: "Computer Science & Engineering (CSE)",
          degree: "B.Sc. Engg.",
          duration: "4 Years",
          credits: "155 Cr",
          badge: "IEB Accredited",
        },
        {
          name: "Electrical & Electronic Engineering (EEE)",
          degree: "B.Sc. Engg.",
          duration: "4 Years",
          credits: "158 Cr",
          badge: "IEB Accredited",
        },
        {
          name: "Computer & Communication Engg. (CCE)",
          degree: "B.Sc. Engg.",
          duration: "4 Years",
          credits: "154 Cr",
          badge: "Industry Aligned",
        },
        {
          name: "Civil Engineering (CE)",
          degree: "B.Sc. Engg.",
          duration: "4 Years",
          credits: "160 Cr",
          badge: "IEB Approved",
        },
        {
          name: "Pharmacy",
          degree: "B.Pharm (Hons)",
          duration: "4 Years",
          credits: "160 Cr",
          badge: "Pharmacy Council Approved",
        },
      ],
    },
    fbs: {
      name: "Faculty of Business Studies",
      icon: Building2,
      description:
        "Developing future business leaders, ethical entrepreneurs, and finance specialists through global curriculum and case studies.",
      departments: [
        {
          name: "Bachelor of Business Administration (BBA)",
          degree: "BBA (Major in Finance/Marketing/HRM)",
          duration: "4 Years",
          credits: "128 Cr",
          badge: "Top Rated",
        },
        {
          name: "Master of Business Administration (MBA)",
          degree: "MBA & Executive MBA",
          duration: "1 - 2 Years",
          credits: "39 - 60 Cr",
          badge: "Evening/Weekend",
        },
        {
          name: "Accounting & Information Systems",
          degree: "BBA (Major in AIS)",
          duration: "4 Years",
          credits: "128 Cr",
          badge: "Professional Track",
        },
      ],
    },
    fsis: {
      name: "Faculty of Shari'ah & Islamic Studies",
      icon: BookOpen,
      description:
        "The bedrock of moral grounding at IIUC, offering profound scholarly education in Islamic Jurisprudence, Da'wah, and Quranic sciences.",
      departments: [
        {
          name: "Quranic Sciences & Islamic Studies (QSIS)",
          degree: "B.A. (Hons)",
          duration: "4 Years",
          credits: "130 Cr",
          badge: "Renowned Faculty",
        },
        {
          name: "Da'wah & Islamic Studies (DIS)",
          degree: "B.A. (Hons)",
          duration: "4 Years",
          credits: "130 Cr",
          badge: "Global Alumni",
        },
        {
          name: "Shari'ah & Islamic Law",
          degree: "B.A. / M.A.",
          duration: "4 / 1 Years",
          credits: "132 Cr",
          badge: "Judicial Track",
        },
      ],
    },
    fah: {
      name: "Faculty of Arts & Humanities",
      icon: Sparkles,
      description:
        "Cultivating linguistic mastery, literary criticism, and creative communication across international languages.",
      departments: [
        {
          name: "English Language & Literature (ELL)",
          degree: "B.A. (Hons)",
          duration: "4 Years",
          credits: "126 Cr",
          badge: "Linguistics & ELT",
        },
        {
          name: "Arabic Language & Literature (ALL)",
          degree: "B.A. (Hons)",
          duration: "4 Years",
          credits: "126 Cr",
          badge: "Translation Expert Track",
        },
      ],
    },
    fl: {
      name: "Faculty of Law",
      icon: ShieldCheck,
      description:
        "Shaping ethical jurists, legal researchers, and constitutional advocates with hands-on moot court training.",
      departments: [
        {
          name: "Bachelor of Laws (LL.B Hons)",
          degree: "LL.B (Hons)",
          duration: "4 Years",
          credits: "136 Cr",
          badge: "Moot Court Society",
        },
        {
          name: "Master of Laws (LL.M)",
          degree: "LL.M",
          duration: "1 Year",
          credits: "36 Cr",
          badge: "Postgraduate",
        },
      ],
    },
  };

  const keyStats = [
    { number: "25,000+", label: "Proud Alumni Worldwide", icon: Users },
    { number: "50+ Acres", label: "Scenic Green Campus at Kumira", icon: MapPin },
    { number: "৳18+ Crore", label: "Annual Scholarships & Waivers", icon: Award },
    { number: "80+ Buses", label: "Dedicated Student Transport Network", icon: Bus },
  ];

  const campusPillars = [
    {
      title: "Modern Science & AI Research Labs",
      description:
        "From high-performance AI workstations to advanced VLSI and robotics laboratories, students gain direct hands-on technical competence.",
      icon: Laptop,
      color: "from-emerald-500/10 to-teal-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    },
    {
      title: "Harmonious Spiritual & Academic Life",
      description:
        "Unique university ecosystem blending rigorous modern science with ethical values, moral integrity, and character building.",
      icon: HeartHandshake,
      color: "from-amber-500/10 to-orange-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    },
    {
      title: "Largest University Transit Network",
      description:
        "Over 80 modern buses link every corner of Chattogram Metropolitan with the Kumira permanent campus seamlessly every single day.",
      icon: Bus,
      color: "from-blue-500/10 to-indigo-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    },
    {
      title: "Separate Male & Female Campuses",
      description:
        "Dedicated residential halls, academic buildings, cafeterias, and recreational zones ensuring comfort, safety, and dignity for all.",
      icon: ShieldCheck,
      color: "from-purple-500/10 to-pink-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
    },
    {
      title: "Central Digital Library & Archives",
      description:
        "Access to over 120,000 physical volumes, international journals, IEEE Xplore, and JSTOR databases in an air-conditioned quiet oasis.",
      icon: BookOpen,
      color: "from-emerald-500/10 to-cyan-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20",
    },
    {
      title: "Thriving Student Clubs & Competitions",
      description:
        "IIUC Computer Club, IEEE Student Branch, Debating Society, and Sports Clubs regularly win national and global awards.",
      icon: Sparkles,
      color: "from-rose-500/10 to-red-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
    },
  ];

  const faqs = [
    {
      q: "What are the eligibility criteria for undergraduate admission at IIUC?",
      a: "Candidates must have a minimum combined GPA of 6.0 in SSC and HSC examinations (with at least GPA 2.50 in each). For engineering programs (CSE, EEE, CCE, CE), candidates must have Mathematics and Physics in their HSC/equivalent exams.",
    },
    {
      q: "Does IIUC offer merit-based scholarships or tuition fee waivers?",
      a: "Yes! IIUC offers up to 100% tuition waivers for top semester performers, GPA 5.0 holders, siblings, children of freedom fighters, and financially challenged deserving students. Over ৳18 Crore is disbursed annually.",
    },
    {
      q: "How does the daily student transport network operate?",
      a: "IIUC operates one of the largest private university transit fleets in South Asia with 80+ buses covering diverse routes across Chattogram (Chawkbazar, Bahaddarhat, Agrabad, Oxygen, GEC, Hathazari) directly to the Kumira Campus.",
    },
    {
      q: "Are the engineering programs IEB accredited?",
      a: "Yes, programs like Computer Science & Engineering (CSE) and Electrical & Electronic Engineering (EEE) hold accreditation from the Board of Accreditation for Engineering and Technical Education (BAETE) under IEB.",
    },
    {
      q: "What residential facilities are provided for female and male students?",
      a: "IIUC provides modern, secured multi-story residential halls on campus with high-speed internet, continuous power backup, hygienic dining services, and 24/7 security surveillance.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#070b12] text-slate-900 dark:text-slate-100 antialiased selection:bg-emerald-500 selection:text-white">
      {/* Top Banner Notice Bar */}
      <aside aria-label="Campus alert" className="bg-emerald-950 text-emerald-100 text-xs py-2 px-4 border-b border-emerald-900/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-emerald-500 text-emerald-950 font-bold px-2 py-0.5 rounded-full text-[11px] uppercase tracking-wider">
              Admissions Open
            </span>
            <span className="truncate">Spring 2027 Applications are live! Merit waivers up to 100% available.</span>
          </div>
          <div className="flex items-center gap-5 text-xs text-emerald-200">
            <a href="tel:+8802334461900" className="hover:text-white flex items-center gap-1 transition-colors">
              <Phone className="w-3.5 h-3.5 text-emerald-400" /> +880-2334461900
            </a>
            <span className="hidden sm:inline text-emerald-800">|</span>
            <a href="mailto:info@iiuc.ac.bd" className="hidden sm:flex hover:text-white items-center gap-1 transition-colors">
              <Mail className="w-3.5 h-3.5 text-emerald-400" /> info@iiuc.ac.bd
            </a>
            <span className="text-emerald-800">|</span>
            <a href="#portal" className="text-emerald-400 hover:text-white font-medium underline flex items-center gap-1">
              Portal Login <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </aside>

      {/* Main Navbar */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-[#090e17]/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-600 via-emerald-700 to-teal-500 p-0.5 shadow-md shadow-emerald-600/20 group-hover:scale-105 transition-transform flex items-center justify-center">
              <div className="w-full h-full bg-emerald-900 rounded-[14px] flex items-center justify-center text-white">
                <GraduationCap className="w-7 h-7 text-emerald-300 group-hover:rotate-6 transition-transform" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-900 dark:from-emerald-400 dark:via-teal-300 dark:to-emerald-200 bg-clip-text text-transparent">
                IIUC
              </span>
              <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-widest -mt-0.5">
                International Islamic University Chittagong
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-700 dark:text-slate-300">
            <a href="#about" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              About
            </a>
            <a href="#faculties" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Faculties & Degrees
            </a>
            <a href="#features" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Campus Life
            </a>
            <a href="#admissions" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Admissions
            </a>
            <a href="#notices" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Notices
            </a>
            <a href="#faqs" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              FAQ
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#portal"
              className="px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              Student Portal
            </a>
            <a
              href="#admissions"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-sm font-semibold shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2"
            >
              Apply Online <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-[#090e17] border-b border-slate-200 dark:border-slate-800 px-6 py-5 space-y-4 shadow-xl">
            <nav className="flex flex-col space-y-3 text-base font-medium text-slate-700 dark:text-slate-300">
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                About IIUC
              </a>
              <a
                href="#faculties"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                Faculties & Academic Programs
              </a>
              <a
                href="#features"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                Campus Facilities
              </a>
              <a
                href="#admissions"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                Admission Procedure
              </a>
              <a
                href="#notices"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                Notice Board
              </a>
              <a
                href="#faqs"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                Frequently Asked Questions
              </a>
            </nav>
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2.5">
              <a
                href="#portal"
                className="w-full text-center py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-sm font-semibold"
              >
                Student Portal
              </a>
              <a
                href="#admissions"
                className="w-full text-center py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-semibold shadow-md"
              >
                Apply for Spring 2027
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32 bg-gradient-to-b from-emerald-50/70 via-slate-50 to-white dark:from-[#0a121d] dark:via-[#070b12] dark:to-[#05080e]">
          {/* Subtle Background Glow Spheres */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[320px] bg-emerald-400/15 dark:bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />
          <div className="absolute -top-10 -right-20 w-[400px] h-[400px] bg-teal-400/10 dark:bg-teal-500/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Hero Copy */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-100/90 dark:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-800/80 text-emerald-800 dark:text-emerald-300 text-xs font-semibold shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Kumira Campus, Chattogram • Established 1995</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                  Excellence in <br />
                  <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400 bg-clip-text text-transparent">
                    Education, Research
                  </span>{" "}
                  & Morality.
                </h1>

                <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
                  International Islamic University Chittagong brings together world-class accredited academic degrees, cutting-edge laboratories, and profound ethical values across a 50-acre green paradise.
                </p>

                {/* Hero CTAs */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                  <a
                    href="#admissions"
                    className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold text-base shadow-xl shadow-emerald-600/30 hover:shadow-emerald-600/45 hover:-translate-y-0.5 transition-all flex items-center gap-2"
                  >
                    Apply for Spring 2027 <ArrowRight className="w-5 h-5" />
                  </a>
                  <a
                    href="#faculties"
                    className="px-6 py-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-200 font-semibold text-base hover:bg-slate-100 dark:hover:bg-slate-800/80 shadow-xs transition-colors flex items-center gap-2"
                  >
                    <BookOpen className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    Explore 30+ Programs
                  </a>
                </div>

                {/* Trust Badges */}
                <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
                  <div className="space-y-1">
                    <p className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">IIUC</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Accredited Degrees</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">Top 10</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Private Uni Ranking</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">100%</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Merit Waiver Option</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Campus Card Visual */}
              <div className="lg:col-span-5 relative">
                {/* Decorative backdrop glow */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

                <div className="relative rounded-3xl bg-white dark:bg-[#0c1422] border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-2xl space-y-6">
                  {/* Header of Card */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div>
                        <h2 className="text-base font-bold text-slate-900 dark:text-white leading-tight">
                          IIUC Kumira Campus
                        </h2>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Sitakunda, Chattogram-4318</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      Live Portal
                    </span>
                  </div>

                  {/* Highlights list */}
                  <div className="space-y-3">
                    <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between hover:border-emerald-500/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                          <Laptop className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-900 dark:text-white">Engineering & Tech</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">CSE, EEE, CCE & Civil</p>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">5 Programs</span>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between hover:border-emerald-500/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
                          <Building2 className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-900 dark:text-white">Business Studies</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">BBA, MBA & Executive MBA</p>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">Accredited</span>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between hover:border-emerald-500/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold">
                          <Bus className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-900 dark:text-white">Daily City Shuttles</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">80+ Routes Connecting City</p>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-purple-600 dark:text-purple-400">Complimentary</span>
                    </div>
                  </div>

                  {/* Urgent Announcement box in card */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-900/20 to-teal-900/20 border border-emerald-500/30 flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-slate-900 dark:text-emerald-200">
                        Spring 2027 Admission Test
                      </p>
                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                        First intake exam date: <strong>January 15, 2027</strong>. Online registration deadline approaching.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Live Notices Ticker Section */}
        <section id="notices" className="py-8 bg-white dark:bg-[#080d15] border-y border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <FileText className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  Latest University Notices & Updates
                </h3>
              </div>
              <a
                href="#all-notices"
                className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
              >
                View Notice Archives <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {notices.map((n) => (
                <div
                  key={n.id}
                  className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800/80 hover:border-emerald-500/50 transition-all hover:shadow-md flex flex-col justify-between group"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                          n.urgent
                            ? "bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20"
                            : "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                        }`}
                      >
                        {n.tag}
                      </span>
                      <span className="text-[11px] text-slate-600 dark:text-slate-400">{n.date}</span>
                    </div>
                    <p className="text-xs font-semibold text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2">
                      {n.title}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-slate-200/50 dark:border-slate-800 flex items-center justify-between text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                    <span>Read Notice</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Counter Section */}
        <section className="py-16 bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:20px_20px] opacity-40" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {keyStats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="space-y-2">
                    <div className="mx-auto w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 flex items-center justify-center text-emerald-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">{stat.number}</h4>
                    <p className="text-sm font-medium text-emerald-100/80">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-white dark:bg-[#070b12]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
                  <Compass className="w-3.5 h-3.5" /> About IIUC
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                  A World-Class Center for Higher Learning, Rooted in Values
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                  Founded in 1995 under the Private University Act, the <strong>International Islamic University Chittagong (IIUC)</strong> has emerged as one of Bangladesh&apos;s leading institutions of higher learning.
                </p>
                <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                  Located along Dhaka-Chattogram highway in Kumira, nestled against the scenic backdrop of green hills and the Bay of Bengal, IIUC offers an unparalleled serene learning atmosphere with modern multi-storied academic complexes, high-tech engineering laboratories, and peaceful residential halls.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
                    <p className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" /> UGC & Govt. Recognized
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Fully approved by the University Grants Commission of Bangladesh.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
                    <p className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Global Collaboration
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Active MOUs with universities across UK, Malaysia, Turkey, and Middle East.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white shadow-xl space-y-3">
                    <GraduationCap className="w-8 h-8 text-emerald-200" />
                    <h3 className="text-lg font-bold">Moral Integrity</h3>
                    <p className="text-xs text-emerald-50 leading-relaxed">
                      Cultivating graduates who lead with honesty, professional ethics, and service to society.
                    </p>
                  </div>
                  <div className="p-6 rounded-3xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
                    <Laptop className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Cutting-Edge STEM</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      Hands-on engineering, VLSI design, software engineering, and pharmaceutical labs.
                    </p>
                  </div>
                </div>

                <div className="space-y-4 pt-6">
                  <div className="p-6 rounded-3xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
                    <MapPin className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">50-Acre Campus</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      Clean air, mountain scenery, and eco-friendly state-of-the-art infrastructure.
                    </p>
                  </div>
                  <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white border border-slate-700 space-y-3">
                    <Award className="w-8 h-8 text-amber-400" />
                    <h3 className="text-lg font-bold">Research Grants</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Annual research funds for faculty and students published in Scopus/WoS indexed journals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Faculties & Academic Programs */}
        <section id="faculties" className="py-24 bg-slate-50 dark:bg-[#090e18] border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
                <BookOpen className="w-3.5 h-3.5" /> Academics & Degrees
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                Explore Our World-Class Faculties
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-base">
                Discover degree programs designed to ignite intellectual curiosity, professional excellence, and ethical leadership.
              </p>
            </div>

            {/* Faculty Tabs */}
            <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
              {(
                [
                  { key: "fse", label: "Science & Engineering" },
                  { key: "fbs", label: "Business Studies" },
                  { key: "fsis", label: "Shari'ah & Islamic Studies" },
                  { key: "fah", label: "Arts & Humanities" },
                  { key: "fl", label: "Law & Justice" },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveFaculty(tab.key)}
                  className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                    activeFaculty === tab.key
                      ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 scale-102"
                      : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Active Faculty Content */}
            <div className="bg-white dark:bg-[#0c1422] rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 mb-8 border-b border-slate-100 dark:border-slate-800">
                <div className="space-y-1">
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                    {faculties[activeFaculty].name}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm max-w-2xl">
                    {faculties[activeFaculty].description}
                  </p>
                </div>
                <a
                  href="#admissions"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-bold hover:bg-emerald-100 transition-colors shrink-0"
                >
                  Apply to this Faculty <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Department Cards Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {faculties[activeFaculty].departments.map((dept, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800/80 hover:border-emerald-500/60 transition-all hover:shadow-lg space-y-4 flex flex-col justify-between group"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                          {dept.badge}
                        </span>
                        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                          {dept.degree}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {dept.name}
                      </h4>
                    </div>

                    <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                      <span>Duration: {dept.duration}</span>
                      <span>{dept.credits}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Campus Life & Key Pillars */}
        <section id="features" className="py-24 bg-white dark:bg-[#070b12]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" /> Life at Kumira
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                Why Students Thrive at IIUC
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-base">
                Everything you need to grow academically, socially, and morally in an inspiring environment.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {campusPillars.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div
                    key={idx}
                    className="p-7 rounded-3xl bg-slate-50 dark:bg-[#0a111c] border border-slate-200/90 dark:border-slate-800 hover:border-emerald-500/50 hover:shadow-xl transition-all space-y-4 group"
                  >
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.color} border flex items-center justify-center transition-transform group-hover:scale-110`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Admissions Step-by-Step Section */}
        <section id="admissions" className="py-24 bg-slate-50 dark:bg-[#090e18] border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
                  <Award className="w-3.5 h-3.5" /> Admission Spring 2027
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                  Simple 4-Step Admission Process
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                  Join a community of forward-thinking scholars and innovators. Follow our streamlined admission pathway to begin your journey at IIUC.
                </p>

                <div className="p-5 rounded-2xl bg-emerald-900/10 dark:bg-emerald-950/40 border border-emerald-500/30 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-sm">
                    <Sparkles className="w-4 h-4" /> 100% Merit Waiver Opportunity
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    Students securing GPA 5.0 (without 4th subject) in SSC & HSC enjoy full waiver on tuition fees. Special waivers for siblings and sports achievers.
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href="https://iiuc.ac.bd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold text-sm shadow-lg shadow-emerald-600/30 transition-all"
                  >
                    Start Online Application <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* 4 Steps Timeline */}
              <div className="lg:col-span-7 space-y-4">
                {[
                  {
                    step: "01",
                    title: "Apply Online via IIUC Portal",
                    desc: "Fill in the basic student profile, educational records (SSC/HSC or O/A Levels), and select your desired department.",
                  },
                  {
                    step: "02",
                    title: "Admit Card & Written Assessment",
                    desc: "Download your admit card and sit for the admission assessment at Kumira campus or designated regional centers.",
                  },
                  {
                    step: "03",
                    title: "Result Publication & Interview",
                    desc: "Successful candidates receive SMS notification and appear for document verification and brief viva with the faculty panel.",
                  },
                  {
                    step: "04",
                    title: "Enrollment & Orientation",
                    desc: "Pay semester admission fees, collect your official student ID, library card, bus pass, and attend the grand campus orientation.",
                  },
                ].map((st, i) => (
                  <div
                    key={i}
                    className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#0c1422] border border-slate-200 dark:border-slate-800 flex items-start gap-5 hover:border-emerald-500/50 transition-all shadow-sm group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800/80 text-emerald-700 dark:text-emerald-300 font-black text-lg flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      {st.step}
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {st.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {st.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section id="faqs" className="py-24 bg-white dark:bg-[#070b12]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
                <Search className="w-3.5 h-3.5" /> Have Questions?
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-base">
                Find answers to common questions about admissions, facilities, transportation, and campus life.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = expandedFaq === index;
                return (
                  <div
                    key={index}
                    className="rounded-2xl bg-slate-50 dark:bg-[#0a111c] border border-slate-200 dark:border-slate-800 overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setExpandedFaq(isOpen ? null : index)}
                      className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-slate-900 dark:text-white focus:outline-none"
                    >
                      <span className="text-sm sm:text-base">{faq.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/60 dark:border-slate-800/60 pt-4">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Portal Access & Direct CTA Banner */}
        <section id="portal" className="py-20 bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-950 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-3xl border border-white/20 p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-6 shadow-2xl">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
                Ready to Shape Your Future at IIUC?
              </h2>
              <p className="text-emerald-100 text-base sm:text-lg max-w-2xl mx-auto font-normal">
                Admissions for Spring 2027 are closing soon. Take the first step towards academic distinction and moral leadership.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <a
                  href="#admissions"
                  className="px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold text-base shadow-xl transition-all"
                >
                  Apply Online Now
                </a>
                <a
                  href="tel:+8802334461900"
                  className="px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-base transition-colors flex items-center gap-2"
                >
                  <Phone className="w-5 h-5 text-emerald-300" />
                  Call Admission Helpdesk
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Comprehensive University Footer */}
      <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Brand column */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-extrabold text-white tracking-tight">IIUC</span>
                  <span className="text-[11px] text-emerald-400 font-semibold tracking-wider uppercase">
                    International Islamic University Chittagong
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed pr-6">
                A premier higher education institution dedicated to academic brilliance, ethical values, and research innovation in a scenic 50-acre Kumira campus.
              </p>
              <div className="space-y-1.5 text-xs text-slate-400">
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                  Kumira, Sitakunda, Chattogram-4318, Bangladesh
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  +880-2334461900-7, +8801720516599
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                  info@iiuc.ac.bd, admission@iiuc.ac.bd
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Academics</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#faculties" className="hover:text-emerald-400 transition-colors">Science & Engineering</a></li>
                <li><a href="#faculties" className="hover:text-emerald-400 transition-colors">Business Studies</a></li>
                <li><a href="#faculties" className="hover:text-emerald-400 transition-colors">Shari&apos;ah & Islamic Studies</a></li>
                <li><a href="#faculties" className="hover:text-emerald-400 transition-colors">Faculty of Law</a></li>
                <li><a href="#faculties" className="hover:text-emerald-400 transition-colors">Arts & Humanities</a></li>
                <li><a href="#notices" className="hover:text-emerald-400 transition-colors">Academic Calendar</a></li>
              </ul>
            </div>

            {/* Student Portals & Resources */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Portals & Services</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#portal" className="hover:text-emerald-400 transition-colors">Student Portal Login</a></li>
                <li><a href="#portal" className="hover:text-emerald-400 transition-colors">Faculty & Staff Portal</a></li>
                <li><a href="#notices" className="hover:text-emerald-400 transition-colors">Central Library & E-Journals</a></li>
                <li><a href="#features" className="hover:text-emerald-400 transition-colors">Transport Schedule (Buses)</a></li>
                <li><a href="#admissions" className="hover:text-emerald-400 transition-colors">Tuition & Waiver Policy</a></li>
                <li><a href="#faqs" className="hover:text-emerald-400 transition-colors">Alumni Network</a></li>
              </ul>
            </div>

            {/* Accreditations & Recognitions */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Accreditation</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Approved by UGC Bangladesh, Ministry of Education, and IEB BAETE. Member of Association of Universities of Asia and the Pacific (AUAP).
              </p>
              <div className="pt-2">
                <span className="inline-block px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-emerald-400 font-semibold">
                  IEB Accredited Programs
                </span>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>© 2026-2027 International Islamic University Chittagong (IIUC). All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#terms" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
              <a href="#portal" className="hover:text-emerald-400 transition-colors">Student Helpdesk</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
