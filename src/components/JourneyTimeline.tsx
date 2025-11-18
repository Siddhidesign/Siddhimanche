import { Briefcase, GraduationCap, MapPin, Calendar, Award, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";

const journeyStops = [
  {
    year: "May 2025 - Aug 2025",
    title: "FindMe",
    role: "UX/UI Design Intern",
    description: "Designed AI-driven portfolio templates using Figma and JavaScript automation scripts, streamlining portfolio creation for 500+ users.",
    location: "New York, USA",
    type: "work" as const,
    achievements: [
      "Created 15+ responsive portfolio templates",
      "Automated design-to-code workflow",
      "Improved user onboarding by 60%"
    ],
    skills: ["Figma", "JavaScript", "UX Design", "Portfolio Design"],
    color: "from-purple-500 to-pink-500"
  },
  {
    year: "2024-2026",
    title: "University of Michigan-Dearborn",
    role: "MS in Human-Centered Design and Engineering",
    description: "Teaching Assistant for Foundation of HCDE course • GPA: 3.56 • Specialization: User Experience Design",
    location: "Dearborn, Michigan",
    type: "education" as const,
    achievements: [
      "Teaching Assistant for HCDE foundations",
      "Focus on accessibility and inclusive design",
      "Advanced UX research methods"
    ],
    skills: ["UX Research", "Accessibility", "Teaching", "HCDE"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    year: "Oct 2023 - Jul 2024",
    title: "Jaihind Groups",
    role: "UX/UI Designer",
    description: "Architected internal inventory management workflow using Figma, React, and Agile sprint frameworks, reducing manual order processing time by 40% and increasing accuracy.",
    location: "Mumbai, India",
    type: "work" as const,
    achievements: [
      "40% reduction in order processing time",
      "Led 8+ sprint cycles with cross-functional teams",
      "Implemented design system for consistency"
    ],
    skills: ["Figma", "React", "Agile", "Design Systems"],
    color: "from-orange-500 to-red-500"
  },
  {
    year: "2020-2024",
    title: "University of Mumbai",
    role: "B.Tech in Electronics and Telecommunication Engineering",
    description: "Co-lead of Design Team in Google Developer Student Club • GPA: 3.32 • Specialization: AI/ML",
    location: "Mumbai, India",
    type: "education" as const,
    achievements: [
      "Co-lead of GDSC Design Team",
      "Specialized in AI/ML applications",
      "Led 10+ design workshops"
    ],
    skills: ["AI/ML", "Leadership", "Design", "GDSC"],
    color: "from-green-500 to-emerald-500"
  }
];

export function JourneyTimeline() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="timeline" className="py-24 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-neutral-900 to-neutral-700 text-white rounded-lg text-sm shadow-lg">
            Experience
          </div>
          <h2 className="text-neutral-900 mb-4">Professional Journey</h2>
          <p className="text-neutral-600">
            A timeline of my career progression, education, and key milestones in design and technology.
          </p>
        </motion.div>

        <div className="relative" ref={timelineRef}>
          {/* Animated Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-neutral-200" />
          <motion.div 
            className="absolute left-0 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-neutral-900 via-neutral-700 to-neutral-900 origin-top"
            style={{ 
              scaleY: pathLength,
              height: '100%'
            }}
          />

          <div className="space-y-12">
            {journeyStops.map((stop, index) => (
              <motion.div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 items-start md:items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                {/* Content */}
                <motion.div 
                  className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}
                  whileHover={{ scale: 1.03, y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div 
                    onClick={() => toggleExpand(index)}
                    className={`relative cursor-pointer bg-white border-2 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                      hoveredIndex === index ? 'border-neutral-900' : 'border-neutral-200'
                    }`}
                  >
                    {/* Gradient overlay on hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${stop.color} opacity-0 transition-opacity duration-300`}
                      animate={{ opacity: hoveredIndex === index ? 0.05 : 0 }}
                    />
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-3 flex-wrap">
                        <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${stop.color} text-white rounded-lg text-sm shadow-md`}>
                          {stop.type === "work" ? <Briefcase className="w-4 h-4" /> : <GraduationCap className="w-4 h-4" />}
                          <span>{stop.year}</span>
                        </div>
                        
                        {/* Animated badge */}
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: hoveredIndex === index ? 1 : 0 }}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-neutral-900 text-white rounded-full text-xs"
                        >
                          <Award className="w-3 h-3" />
                          <span>Featured</span>
                        </motion.div>
                      </div>

                      <h3 className="text-neutral-900 mb-1">{stop.title}</h3>
                      <p className="text-neutral-700 mb-3">{stop.role}</p>
                      <p className="text-neutral-600 mb-3 leading-relaxed">{stop.description}</p>
                      
                      <div className="flex items-center gap-2 text-neutral-500 text-sm mb-4">
                        <MapPin className="w-4 h-4" />
                        <span>{stop.location}</span>
                      </div>

                      {/* Skills tags - appear on hover */}
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ 
                          opacity: hoveredIndex === index ? 1 : 0,
                          height: hoveredIndex === index ? 'auto' : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-wrap gap-2 mb-4">
                          {stop.skills.map((skill, i) => (
                            <motion.span
                              key={i}
                              initial={{ scale: 0, rotate: -10 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{ delay: i * 0.05 }}
                              className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-xs border border-neutral-200"
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                      
                      {/* Expandable section */}
                      <motion.div
                        initial={false}
                        animate={{ height: expandedIndex === index ? "auto" : 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-neutral-200 mt-4">
                          <div className="flex items-center gap-2 mb-3">
                            <Award className="w-4 h-4 text-neutral-700" />
                            <p className={`text-neutral-700 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                              Key Highlights:
                            </p>
                          </div>
                          <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                            {stop.achievements.map((achievement, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="text-neutral-600 text-sm flex items-start gap-2"
                              >
                                <span className={`${index % 2 === 0 ? "order-2" : "order-1"} flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-br ${stop.color} mt-1.5 shadow-sm`} />
                                <span className={index % 2 === 0 ? "order-1" : "order-2"}>{achievement}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>

                      <motion.div 
                        className={`flex items-center gap-1 text-xs text-neutral-400 mt-4 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}
                        animate={{ y: expandedIndex === index ? 0 : [0, -3, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        <span>{expandedIndex === index ? "Click to collapse" : "Click to expand"}</span>
                        <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''}`} />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Center Marker with pulse animation */}
                <motion.div 
                  className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center flex-shrink-0 z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                >
                  {/* Pulse rings on hover */}
                  <motion.div
                    className={`absolute w-12 h-12 rounded-full bg-gradient-to-br ${stop.color} opacity-20`}
                    animate={{
                      scale: hoveredIndex === index ? [1, 1.5, 1] : 1,
                      opacity: hoveredIndex === index ? [0.2, 0, 0.2] : 0
                    }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  />
                  <motion.div
                    className={`w-5 h-5 rounded-full border-4 border-white shadow-lg bg-gradient-to-br ${stop.color}`}
                    whileHover={{ scale: 1.5, rotate: 180 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </motion.div>

                {/* Spacer for alignment */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}