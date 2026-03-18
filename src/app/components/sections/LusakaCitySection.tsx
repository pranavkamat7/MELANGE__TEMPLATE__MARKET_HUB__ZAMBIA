import { motion, AnimatePresence } from "motion/react";
import { PrimaryButton } from "@/app/components/buttons/PrimaryButton";
import { useState } from "react";
import {
  Search,
  MousePointerClick,
  Share2,
  Sparkles,
  Globe,
  Brain,
  Video,
  BarChart3,
} from "lucide-react";

interface Service {
  name: string;
  description: string;
  preview: string;
  icon: React.ElementType;
}

const services: Service[] = [
  {
    name: "Search Engine Optimisation",
    description: "Dominate search results in Lusaka markets",
    preview:
      "Technical SEO, high-intent content, and local relevance signals to drive organic visibility across Zambia.",
    icon: Search,
  },
  {
    name: "Google Ads Management",
    description: "Performance-driven paid campaigns",
    preview:
      "High-ROI Google Ads across Search, YouTube, Display, and remarketing built for Lusaka businesses.",
    icon: MousePointerClick,
  },
  {
    name: "Social Media Marketing",
    description: "Strategic social presence across platforms",
    preview:
      "Social strategy and influencer campaigns for Lusaka audiences on Instagram, TikTok, YouTube, and LinkedIn.",
    icon: Share2,
  },
  {
    name: "AI Content Systems",
    description: "AI-powered content generation",
    preview:
      "Scalable AI-driven content production with authority positioning and modern discovery optimization.",
    icon: Sparkles,
  },
  {
    name: "Web Development",
    description: "High-converting web experiences",
    preview:
      "Premium web development with conversion optimization and performance-first architecture.",
    icon: Globe,
  },
  {
    name: "Answer Engine Optimization",
    description: "Optimize for AI search engines",
    preview:
      "Position your brand in AI-driven search results like ChatGPT, Gemini, and Perplexity.",
    icon: Brain,
  },
  {
    name: "Creative Production",
    description: "Premium visual content production",
    preview:
      "Premium video, short-form creative, and AI avatars designed for authority and engagement.",
    icon: Video,
  },
  {
    name: "Conversion Strategy",
    description: "Conversion rate optimization systems",
    preview:
      "Data-driven conversion optimization to maximize revenue from existing traffic and campaigns.",
    icon: BarChart3,
  },
];

export function LusakaCitySection() {
  const [hoveredService, setHoveredService] = useState<number>(0); // Desktop: hover state
  const [expandedService, setExpandedService] = useState<number | null>(0); // Mobile: expanded accordion - FIRST ONE OPEN BY DEFAULT

  return (
    <section className="relative bg-[#0B0B12] min-h-screen overflow-hidden flex items-center justify-center py-10 px-6">
      {/* Gradient Orb Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Purple Orb - Top Left */}
        <div className="absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-gradient-to-br from-[#7F4EFF]/20 to-transparent rounded-full blur-3xl" />

        {/* Pink Orb - Bottom Right */}
        <div className="absolute bottom-[5%] right-[8%] w-[800px] h-[800px] bg-gradient-to-tl from-[#D540FF]/15 via-pink-500/10 to-transparent rounded-full blur-3xl" />

        {/* Blue Accent - Center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-transparent via-[#3858FF]/8 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Main Content Container */}
      <div
        className="max-w-[1100px] mx-auto relative z-10 w-full"
        id="services"
      >
        {/* Top Typography Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            <span className="text-white">Digital Marketing </span>
            <span className="bg-gradient-to-r from-[#D540FF] via-[#7F4EFF] to-[#3858FF] bg-clip-text text-transparent">
              Zambia
            </span>
            <span className="text-white"> Brands</span>
          </h2>
          <p className="text-xl lg:text-2xl text-[#D4DBE8] max-w-3xl mx-auto leading-relaxed">
            We help companies in Zambia to grow through SEO, Google Ads, social media, AI content, and conversion systems, engineered for serious markets across the Zambia.
          </p>
        </motion.div>

        {/* Feature Card - Main Conversion Element */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Card Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#7F4EFF]/20 to-[#D540FF]/20 blur-2xl rounded-[32px]" />

          {/* Main Card */}
          <div className="relative bg-black/40 backdrop-blur-xl rounded-[32px] p-8 md:p-12 lg:p-16 border border-white/10">
            {/* Card Content */}
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                <span className="text-white">Zambia Marketing Agency</span>
                <br />
                <span className="bg-gradient-to-r from-[#D540FF] via-[#7F4EFF] to-[#3858FF] bg-clip-text text-transparent">
                  Services
                </span>
              </h3>

              <p className="text-base md:text-lg lg:text-xl text-[#D4DBE8] mb-8 md:mb-10 leading-relaxed max-w-3xl">
                Mélange Digital supports Lusaka businesses with full-spectrum
                marketing, SEO, paid search, social media strategy, AI-driven
                content, and high-converting web experiences. From visibility to
                demand capture, we build structured growth systems designed to
                help brands compete and win in Zambia's most competitive
                industries.
              </p>

              {/* DESKTOP: Service Grid Selector (HOVER-BASED) */}
              <div className="hidden lg:block mb-10">
                {/* Ambient Glow Pulse Container */}
                <motion.div
                  className="relative"
                  animate={{
                    boxShadow: [
                      "0 0 40px rgba(127, 78, 255, 0.15)",
                      "0 0 60px rgba(213, 64, 255, 0.2)",
                      "0 0 40px rgba(127, 78, 255, 0.15)",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {/* 2-Row Service Grid */}
                  <div
                    className="grid grid-cols-4 gap-4 p-6 rounded-2xl"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(11, 11, 18, 0.6), rgba(15, 23, 42, 0.5))",
                      border: "1px solid rgba(127, 78, 255, 0.2)",
                      backdropFilter: "blur(20px)",
                    }}
                  >
                    {services.map((service, index) => {
                      const Icon = service.icon;
                      const isActive = hoveredService === index;

                      return (
                        <div
                          key={index}
                          onMouseEnter={() => setHoveredService(index)}
                          className="relative group cursor-pointer"
                        >
                          {/* Tile Background */}
                          <motion.div
                            className="relative rounded-xl p-4 transition-all duration-300"
                            animate={{
                              y: isActive ? -4 : 0,
                            }}
                            style={{
                              background: isActive
                                ? "linear-gradient(135deg, rgba(213, 64, 255, 0.12), rgba(127, 78, 255, 0.1))"
                                : "linear-gradient(135deg, rgba(11, 11, 18, 0.8), rgba(15, 23, 42, 0.6))",
                              border: isActive
                                ? "1.5px solid rgba(127, 78, 255, 0.6)"
                                : "1px solid rgba(127, 78, 255, 0.2)",
                              boxShadow: isActive
                                ? "0 8px 32px rgba(127, 78, 255, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05) inset"
                                : "0 2px 8px rgba(0, 0, 0, 0.2)",
                            }}
                          >
                            {/* Hover Glow */}
                            <motion.div
                              className="absolute inset-0 rounded-xl pointer-events-none"
                              style={{
                                background:
                                  "radial-gradient(circle at 50% 50%, rgba(127, 78, 255, 0.2), transparent 70%)",
                              }}
                              animate={{
                                opacity: isActive ? 0.6 : 0,
                              }}
                              transition={{ duration: 0.3 }}
                            />

                            {/* Selected Inner Glow */}
                            <AnimatePresence>
                              {isActive && (
                                <motion.div
                                  className="absolute inset-0 rounded-xl pointer-events-none"
                                  style={{
                                    background:
                                      "radial-gradient(circle at 50% 0%, rgba(213, 64, 255, 0.15), transparent 60%)",
                                  }}
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                />
                              )}
                            </AnimatePresence>

                            {/* Content */}
                            <div className="relative flex flex-col gap-2">
                              {/* Icon */}
                              <Icon
                                className="w-5 h-5 transition-colors duration-300"
                                style={{
                                  color: isActive ? "#A78BFA" : "#D4DBE8",
                                }}
                              />

                              {/* Label */}
                              <div
                                className="text-sm font-semibold leading-tight transition-colors duration-300"
                                style={{
                                  color: isActive ? "#FFFFFF" : "#D4DBE8",
                                }}
                              >
                                {service.name}
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>

                {/* Service Preview Block - Always Visible on Desktop */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={hoveredService}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 p-6 rounded-xl"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(11, 11, 18, 0.4), rgba(15, 23, 42, 0.3))",
                      border: "1px solid rgba(127, 78, 255, 0.15)",
                    }}
                  >
                    <h3 className="text-lg font-bold mb-2 bg-gradient-to-r from-[#D540FF] via-[#7F4EFF] to-[#3858FF] bg-clip-text text-transparent">
                      {services[hoveredService].name}
                    </h3>
                    <p className="text-sm text-[#D4DBE8]/80 leading-relaxed">
                      {services[hoveredService].preview}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* MOBILE: Vertical Accordion (EXPAND-BASED) */}
              <div className="lg:hidden mb-8">
                <div className="space-y-3">
                  {services.map((service, index) => {
                    const Icon = service.icon;
                    const isExpanded = expandedService === index;

                    return (
                      <div key={index}>
                        {/* Service Card Button */}
                        <motion.button
                          onClick={() =>
                            setExpandedService(isExpanded ? null : index)
                          }
                          className="w-full text-left"
                          whileTap={{ scale: 0.98 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div
                            className="relative rounded-xl p-4 transition-all duration-300"
                            style={{
                              background: isExpanded
                                ? "linear-gradient(135deg, rgba(213, 64, 255, 0.12), rgba(127, 78, 255, 0.1))"
                                : "linear-gradient(135deg, rgba(11, 11, 18, 0.8), rgba(15, 23, 42, 0.6))",
                              border: isExpanded
                                ? "1.5px solid rgba(127, 78, 255, 0.5)"
                                : "1px solid rgba(127, 78, 255, 0.2)",
                              boxShadow: isExpanded
                                ? "0 8px 24px rgba(127, 78, 255, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05) inset"
                                : "0 4px 12px rgba(0, 0, 0, 0.3)",
                              backdropFilter: "blur(10px)",
                            }}
                          >
                            {/* Expanded Gradient Edge Glow */}
                            <AnimatePresence>
                              {isExpanded && (
                                <motion.div
                                  className="absolute inset-0 rounded-xl pointer-events-none"
                                  style={{
                                    background:
                                      "linear-gradient(90deg, rgba(213, 64, 255, 0.3) 0%, transparent 50%, rgba(56, 88, 255, 0.3) 100%)",
                                  }}
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                />
                              )}
                            </AnimatePresence>

                            {/* Content */}
                            <div className="relative flex items-center gap-4">
                              {/* Icon */}
                              <div
                                className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300"
                                style={{
                                  background: isExpanded
                                    ? "linear-gradient(135deg, rgba(213, 64, 255, 0.2), rgba(127, 78, 255, 0.15))"
                                    : "rgba(127, 78, 255, 0.1)",
                                }}
                              >
                                <Icon
                                  className="w-5 h-5 transition-colors duration-300"
                                  style={{
                                    color: isExpanded ? "#A78BFA" : "#D4DBE8",
                                  }}
                                />
                              </div>

                              {/* Text */}
                              <div className="flex-1">
                                <div
                                  className="text-sm font-semibold mb-0.5 transition-colors duration-300"
                                  style={{
                                    color: isExpanded ? "#FFFFFF" : "#D4DBE8",
                                  }}
                                >
                                  {service.name}
                                </div>
                                <div
                                  className="text-xs transition-colors duration-300"
                                  style={{
                                    color: isExpanded
                                      ? "rgba(212, 219, 232, 0.7)"
                                      : "rgba(212, 219, 232, 0.5)",
                                  }}
                                >
                                  {service.description}
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.button>

                        {/* Inline Expanded Description - Mobile Only */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div
                                className="mt-2 p-4 rounded-xl"
                                style={{
                                  background:
                                    "linear-gradient(135deg, rgba(11, 11, 18, 0.6), rgba(15, 23, 42, 0.4))",
                                  border: "1px solid rgba(127, 78, 255, 0.2)",
                                }}
                              >
                                <p className="text-sm text-[#D4DBE8]/80 leading-relaxed">
                                  {service.preview}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex justify-center lg:justify-start">
                <a href="https://melangedigital.co/services">
                  <PrimaryButton>Explore</PrimaryButton>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
