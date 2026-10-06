import React, { useState } from "react";
import {
  FaWhatsapp,
  FaTelegram,
  FaEnvelope,
  FaGlobe,
  FaLinkedin,
  FaYoutube,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaGraduationCap,
  FaBuilding,
  FaClock,
  FaCode,
  FaRegCopy,
  FaCheck,
  FaPaperPlane,
  FaStar,
  FaArrowUpRightFromSquare,
  FaUserCheck,
  FaCommentDots,
} from "react-icons/fa6";

export const SOCIAL_LINKS = [
  // Direct Contacts
  {
    name: "WhatsApp",
    handle: "+8801773511874",
    subHandle: "Direct Chat",
    category: "Direct Chat",
    role: "Instant Messaging & Voice",
    description:
      "Direct WhatsApp connection for quick project inquiries, instant messaging, and consultations.",
    link: "https://wa.me/+8801773511874",
    color: "#25D366",
    bgBadge: "bg-[#25D366]/10 text-[#25D366] border-[#25D366]/25",
    actionLabel: "Chat on WhatsApp",
    icon: <FaWhatsapp className="w-5 h-5" />,
  },
  {
    name: "Telegram",
    handle: "sabb1rhossen",
    subHandle: "Direct Chat",
    category: "Direct Chat",
    role: "Instant Messaging & Community",
    description:
      "Connect directly on Telegram for real-time discussions, dev updates, and community chats.",
    link: "https://t.me/sabb1rhossen",
    color: "#229ED9",
    bgBadge: "bg-[#229ED9]/10 text-[#229ED9] border-[#229ED9]/25",
    actionLabel: "Open Telegram",
    icon: <FaTelegram className="w-5 h-5" />,
  },
  {
    name: "Email",
    handle: "mshossen724@gmail.com",
    email: "mshossen724@gmail.com",
    subHandle: "Official Mail",
    category: "Direct Chat",
    role: "Official & Business Mail",
    description:
      "Direct email channel for business proposals, technical consulting, and formal collaboration.",
    link: "mailto:mshossen724@gmail.com",
    isEmail: true,
    color: "#EA4335",
    bgBadge: "bg-[#EA4335]/10 text-[#EA4335] border-[#EA4335]/25",
    actionLabel: "Send Email",
    icon: <FaEnvelope className="w-5 h-5" />,
  },

  // Official Platforms
  {
    name: "Portfolio",
    handle: "msabbirhossen.github.io",
    subHandle: "Personal Showcase",
    category: "Platforms",
    role: "Live Projects & Bio",
    description:
      "Explore live web apps, system design architectures, and personal engineering journey.",
    link: "https://msabbirhossen.github.io/",
    color: "#8B5CF6",
    bgBadge: "bg-purple-500/10 text-purple-600 border-purple-500/25",
    actionLabel: "Visit Portfolio",
    icon: <FaGlobe className="w-5 h-5" />,
  },
  {
    name: "LinkedIn",
    handle: "@sabb1rhossen",
    subHandle: "Professional Network",
    category: "Platforms",
    role: "Professional Network & Career",
    description:
      "Connect for collaborations, technical discussions, and professional networking.",
    link: "https://www.linkedin.com/in/sabb1rhossen/",
    color: "#0A66C2",
    bgBadge: "bg-[#0A66C2]/10 text-[#0A66C2] border-[#0A66C2]/25",
    actionLabel: "Connect on LinkedIn",
    icon: <FaLinkedin className="w-5 h-5" />,
  },
  {
    name: "YouTube",
    handle: "@sabb1rhossen",
    subHandle: "Growth Documentations",
    category: "Platforms",
    role: "Tech Content & Code Teardowns",
    description:
      "Programming walkthroughs, modern stack architectures, and real-world dev projects.",
    link: "https://www.youtube.com/@sabb1rhossen",
    color: "#FF0000",
    bgBadge: "bg-[#FF0000]/10 text-[#FF0000] border-[#FF0000]/25",
    actionLabel: "Visit YouTube",
    icon: <FaYoutube className="w-5 h-5" />,
  },
  {
    name: "GitHub",
    handle: "@MSabbirHossen",
    subHandle: "Source Repositories",
    category: "Platforms",
    role: "Open Source & Codebases",
    description:
      "Explore active repositories, stars, and full-stack personal systems codebases.",
    link: "https://github.com/MSabbirHossen",
    color: "#6366F1",
    bgBadge: "bg-indigo-500/10 text-indigo-600 border-indigo-500/25",
    actionLabel: "View GitHub",
    icon: <FaGithub className="w-5 h-5" />,
  },
  {
    name: "Facebook",
    handle: "@sabb1rhossen",
    subHandle: "Community & Discussion",
    category: "Platforms",
    role: "Community Updates & Insights",
    description:
      "Community interactions, quick programming notes, and project launch updates.",
    link: "https://www.facebook.com/sabb1rhossen/",
    color: "#1877F2",
    bgBadge: "bg-[#1877F2]/10 text-[#1877F2] border-[#1877F2]/25",
    actionLabel: "Follow on Facebook",
    icon: <FaFacebook className="w-5 h-5" />,
  },
  {
    name: "Instagram",
    handle: "@parttimecoder",
    subHandle: "Visual Stories & Work",
    category: "Platforms",
    role: "Creative Highlights & BTS",
    description:
      "Behind the scenes, developer workspace snapshots, and daily tech reflections.",
    link: "https://www.instagram.com/parttimecoder/",
    color: "#E4405F",
    bgBadge: "bg-[#E4405F]/10 text-[#E4405F] border-[#E4405F]/25",
    actionLabel: "Follow on Instagram",
    icon: <FaInstagram className="w-5 h-5" />,
  },

  // Organizations & Ventures
  {
    name: "Exploratory Training Academy",
    subHandle: "Educational Institute",
    category: "Ventures",
    role: "Tech Training & Mentorship",
    description:
      "Empowering students and aspiring software engineers with hands-on training, real projects, and modern technical skills.",
    link: null,
    isUpcoming: true,
    statusText: "Soon to be added",
    color: "#0284C7",
    bgBadge: "bg-sky-500/10 text-sky-600 border-sky-500/25",
    actionLabel: "Soon to be added",
    icon: <FaGraduationCap className="w-5 h-5" />,
  },
  {
    name: "Part-time Coder",
    subHandle: "Tech Company",
    category: "Ventures",
    role: "Software Studio & Products",
    description:
      "Engineering scalable software systems, personal productivity suites, and bespoke digital solutions.",
    link: null,
    isUpcoming: true,
    statusText: "Soon to be added",
    color: "#4F46E5",
    bgBadge: "bg-indigo-500/10 text-indigo-600 border-indigo-500/25",
    actionLabel: "Soon to be added",
    icon: <FaBuilding className="w-5 h-5" />,
  },
];

export const DeveloperInfo = ({ isCompact = false }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [filterCategory, setFilterCategory] = useState("All");
  const [feedbackText, setFeedbackText] = useState("");
  const [feedbackSent, setFeedbackSent] = useState(false);

  const handleCopyEmail = (email = "mshossen724@gmail.com") => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const getWhatsAppUrl = (text) => {
    const trimmed = text?.trim();
    return trimmed
      ? `https://wa.me/+8801773511874?text=${encodeURIComponent(trimmed)}`
      : "https://wa.me/+8801773511874";
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    const url = getWhatsAppUrl(feedbackText);
    window.open(url, "_blank", "noopener,noreferrer");
    setFeedbackSent(true);
    setTimeout(() => {
      setFeedbackText("");
      setFeedbackSent(false);
    }, 4000);
  };

  const filteredLinks =
    filterCategory === "All"
      ? SOCIAL_LINKS
      : SOCIAL_LINKS.filter((item) => item.category === filterCategory);

  if (isCompact) {
    return (
      <div className="p-4 rounded-2xl bg-white border border-gray-100 shadow-md space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white font-extrabold text-sm shadow-sm">
              MS
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-gray-900">
                MS Hossen
              </h4>
              <p className="text-xs text-gray-500 font-medium">
                Part-Time Coder • App Store Architect
              </p>
            </div>
          </div>
          <span className="badge bg-purple-100 text-purple-700 border-purple-200 text-xs font-semibold">
            Creator
          </span>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.name}
              href={s.link || "#"}
              target={s.link ? "_blank" : undefined}
              rel="noopener noreferrer"
              className={`p-2 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-600 hover:text-indigo-600 transition-all flex items-center gap-1.5 text-xs font-semibold ${!s.link ? "opacity-60 cursor-default" : "cursor-pointer"
                }`}
              title={s.name}
            >
              {s.icon}
              <span className="hidden sm:inline">{s.name}</span>
            </a>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-indigo-50 to-purple-50 py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Page Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-indigo-100">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full inline-block mb-2">
              Creator & Community
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              Developer & Community Hub
            </h1>
            <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-2xl">
              Connect with MS Hossen (Part-Time Coder), the architect behind
              Personal App Store. Reach out via WhatsApp, Telegram, Email,
              explore the Portfolio, or share feedback.
            </p>
          </div>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-2.5 flex-wrap">
            <button
              onClick={() => handleCopyEmail("mshossen724@gmail.com")}
              className="btn btn-outline border-gray-300 bg-white hover:bg-gray-100 text-gray-700 font-semibold btn-sm sm:btn-md shadow-sm"
            >
              {copiedEmail ? (
                <>
                  <FaCheck className="text-emerald-500" /> Email Copied!
                </>
              ) : (
                <>
                  <FaRegCopy /> Copy Email
                </>
              )}
            </button>
            <a
              href="https://msabbirhossen.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline border-indigo-300 bg-white hover:bg-indigo-50 text-indigo-600 font-semibold btn-sm sm:btn-md shadow-sm"
            >
              <FaGlobe /> Portfolio
            </a>
            <a
              href="https://www.linkedin.com/in/sabb1rhossen/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold border-none hover:from-indigo-700 hover:to-purple-700 btn-sm sm:btn-md shadow-md"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>

        {/* Hero Developer Showcase Card */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600/10 via-purple-600/10 to-white border border-indigo-200 p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="relative shrink-0">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 p-1 shadow-lg shadow-indigo-500/25 flex items-center justify-center">
                  <div className="w-full h-full bg-white rounded-[20px] flex items-center justify-center text-gray-900 font-black text-2xl sm:text-3xl tracking-tight">
                    MS
                  </div>
                </div>
                <span
                  className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center animate-pulse"
                  title="Active Developer"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
                    MS Hossen
                  </h2>
                  <span className="badge bg-purple-100 text-purple-700 border-purple-200 text-xs font-bold py-3 px-3">
                    Part-Time Coder
                  </span>
                  <span className="badge bg-emerald-100 text-emerald-700 border-emerald-200 text-xs font-bold py-3 px-3">
                    Available for Hire & Collabs
                  </span>
                </div>
                <p className="text-sm font-semibold text-indigo-600">
                  Full-Stack Software Engineer • Creator & Maintainer of Personal App Store
                </p>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-2xl font-medium">
                  Designing cohesive, high-performance applications and digital
                  solutions. Built with modern React 19, Tailwind CSS, DaisyUI,
                  Firebase, and system architectures designed for scale and
                  delightful user experience.
                </p>

                {/* Direct Quick Contact Badges */}
                <div className="flex items-center gap-2 pt-2 flex-wrap text-xs font-semibold">
                  <a
                    href="mailto:mshossen724@gmail.com"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 hover:text-indigo-600 transition-colors shadow-sm"
                  >
                    <FaEnvelope className="text-[#EA4335]" />
                    <span>mshossen724@gmail.com</span>
                  </a>
                  <a
                    href="https://wa.me/+8801773511874"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 hover:text-[#25D366] transition-colors shadow-sm"
                  >
                    <FaWhatsapp className="text-[#25D366]" />
                    <span>WhatsApp: +8801773511874</span>
                  </a>
                  <a
                    href="https://t.me/sabb1rhossen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 hover:text-[#229ED9] transition-colors shadow-sm"
                  >
                    <FaTelegram className="text-[#229ED9]" />
                    <span>Telegram: @sabb1rhossen</span>
                  </a>
                  <a
                    href="https://msabbirhossen.github.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 hover:text-purple-600 transition-colors shadow-sm"
                  >
                    <FaGlobe className="text-purple-500" />
                    <span>msabbirhossen.github.io</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-row md:flex-col gap-2 shrink-0 w-full md:w-auto">
              <a
                href="https://msabbirhossen.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 md:flex-none"
              >
                <button className="btn btn-outline border-indigo-300 bg-white hover:bg-indigo-50 text-indigo-600 btn-sm w-full font-bold">
                  <FaGlobe /> Visit Portfolio
                </button>
              </a>
              <a
                href="https://github.com/MSabbirHossen"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 md:flex-none"
              >
                <button className="btn btn-ghost hover:bg-white text-gray-700 btn-sm w-full font-bold">
                  <FaStar className="text-amber-500" /> Star on GitHub
                </button>
              </a>
            </div>
          </div>

          {/* Tech Stack & Core Domains Pill Strip */}
          <div className="mt-6 pt-6 border-t border-indigo-100/80 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mr-1">
              Core Toolkit:
            </span>
            {[
              "React 19",
              "Vite",
              "Tailwind CSS",
              "DaisyUI",
              "Firebase Auth",
              "Node.js & Express",
              "System Architecture",
            ].map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-xl bg-white/90 border border-indigo-100 text-gray-700 font-semibold text-[11px] shadow-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Social & Contact Channels Grid */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                Connect Across Channels & Ventures
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 font-medium">
                Direct contacts, official developer profiles, video tutorials,
                and initiatives
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex bg-white p-1 rounded-xl border border-gray-200 self-start sm:self-auto shadow-xs">
              {["All", "Direct Chat", "Platforms", "Ventures"].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setFilterCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${filterCategory === cat
                      ? "bg-indigo-600 text-white shadow-sm"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {filteredLinks.map((item) => (
              <div
                key={item.name}
                className="bg-white rounded-2xl p-5 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div className="space-y-3.5">
                  {/* Header Row: Icon + Title/Handle on left, External Link on right */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className="w-11 h-11 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-sm transition-transform group-hover:scale-105"
                        style={{ backgroundColor: item.color }}
                      >
                        {item.icon}
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-base font-extrabold text-gray-900 tracking-tight truncate">
                          {item.name}
                        </h4>
                        <span className="text-xs font-semibold text-indigo-600 block truncate">
                          {item.handle || item.subHandle}
                        </span>
                      </div>
                    </div>

                    {/* External Link Icon */}
                    <div className="shrink-0 flex items-center">
                      {item.isUpcoming ? (
                        <span className="badge bg-amber-50 text-amber-700 border-amber-200 text-xs font-bold flex items-center gap-1">
                          <FaClock className="text-amber-500" /> Soon
                        </span>
                      ) : item.isEmail ? (
                        <button
                          type="button"
                          onClick={() => handleCopyEmail(item.email)}
                          className="p-2 rounded-xl text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors cursor-pointer"
                          title="Copy Email Address"
                        >
                          {copiedEmail ? (
                            <FaCheck className="text-emerald-500" />
                          ) : (
                            <FaRegCopy />
                          )}
                        </button>
                      ) : (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                          title={`Open ${item.name}`}
                        >
                          <FaArrowUpRightFromSquare className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div>
                    <span className="badge badge-ghost text-xs font-semibold mb-2 text-gray-600">
                      {item.role || item.subHandle}
                    </span>
                    <p className="text-xs text-gray-600 font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between gap-2">
                  <span className="text-[11px] font-semibold text-gray-400">
                    {item.subHandle || item.category}
                  </span>
                  {item.isUpcoming ? (
                    <span className="text-xs font-bold text-gray-400 italic">
                      {item.statusText || "Soon to be added"}
                    </span>
                  ) : item.isEmail ? (
                    <button
                      type="button"
                      onClick={() => handleCopyEmail(item.email)}
                      className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 cursor-pointer"
                    >
                      {copiedEmail ? "Copied to clipboard" : "Copy Email"}{" "}
                      <FaRegCopy className="w-3 h-3" />
                    </button>
                  ) : (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
                    >
                      {item.actionLabel || "Visit"}{" "}
                      <FaArrowUpRightFromSquare className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision & Feedback Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* About Personal App Store Vision */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-100 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-lg font-bold">
                  <FaCode />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    About App Store Vision
                  </h3>
                  <p className="text-xs text-gray-500 font-medium">
                    Built by MS Hossen for digital innovation
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
                <p>
                  Personal App Store was built to create a streamlined, modern
                  curation of high-quality tools, utilities, and applications
                  designed to enrich everyday life and productivity.
                </p>
                <p>
                  Featuring seamless authentication, responsive interfaces,
                  real-time installation management, and developer-first
                  standards.
                </p>
              </div>
            </div>

            <div className="mt-5 p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100 space-y-1">
              <span className="text-xs font-bold text-indigo-900 block">
                Open to Feedback & Collaboration
              </span>
              <span className="text-[11px] text-gray-600 block">
                Got feature suggestions, bug reports, or partnership ideas?
                Reach out on WhatsApp or submit a note.
              </span>
            </div>
          </div>

          {/* Quick Connect & Feedback Box */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-6 sm:p-7 border border-gray-100 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-lg font-bold">
                <FaCommentDots />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Send a Note to MS Hossen
                </h3>
                <p className="text-xs text-gray-500 font-medium">
                  Direct thoughts, feedback, or queries delivered straight via
                  WhatsApp
                </p>
              </div>
            </div>

            {feedbackSent ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col items-center justify-center text-center space-y-2 my-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-md">
                  <FaCheck className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-gray-900">
                  Opening WhatsApp...
                </h4>
                <p className="text-xs text-gray-600 max-w-sm">
                  Your message is ready to send directly to Sabbir Hossen (
                  <strong className="text-gray-900">sabb1rhossen</strong>).
                </p>
                <a
                  href={getWhatsAppUrl(feedbackText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-xs font-bold text-emerald-600 hover:underline flex items-center gap-1"
                >
                  Click here if WhatsApp didn't open automatically{" "}
                  <FaArrowUpRightFromSquare className="w-3.5 h-3.5" />
                </a>
              </div>
            ) : (
              <form onSubmit={handleFeedbackSubmit} className="space-y-4">
                <div className="flex gap-2 flex-wrap">
                  {[
                    "🚀 Feature Suggestion",
                    "🐞 Bug Report",
                    "🤝 Freelance / Hire",
                    "💡 General Feedback",
                  ].map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() =>
                        setFeedbackText((prev) =>
                          prev ? `${prev}\n[Topic: ${tag}] ` : `[Topic: ${tag}] `
                        )
                      }
                      className="px-2.5 py-1 rounded-xl text-xs font-semibold bg-gray-100 hover:bg-indigo-50 hover:text-indigo-600 text-gray-700 transition-all cursor-pointer border border-gray-200"
                    >
                      {tag}
                    </button>
                  ))}
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                    Your Message / Feedback
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Share your thoughts about Personal App Store, request new apps, or say hello..."
                    value={feedbackText}
                    onChange={(e) => setFeedbackText(e.target.value)}
                    className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                  <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                    <FaUserCheck className="text-indigo-600" />
                    <span>Direct Creator Channel via WhatsApp</span>
                  </div>
                  <button
                    type="submit"
                    className="btn bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-none hover:from-indigo-700 hover:to-purple-700 shadow-md flex items-center gap-2 justify-center w-full sm:w-auto"
                  >
                    <FaPaperPlane /> Send Note to Developer
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Project Attribution Footer */}
        {/* <footer className="pt-6 border-t border-indigo-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white text-[10px] font-bold">
              MS
            </div>
            <span>
              Crafted with passion by{" "}
              <a
                href="https://msabbirhossen.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-indigo-600 hover:underline"
              >
                MS Hossen
              </a>{" "}
              (@sabb1rhossen / @parttimecoder)
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-medium">
            <span>Personal App Store</span>
            <span>•</span>
            <span>© {new Date().getFullYear()} All Rights Reserved</span>
          </div>
        </footer> */}
      </div>
    </div>
  );
};

export default DeveloperInfo;
