import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, TrendingUp, ExternalLink, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "GrocGenie",
    subtitle: "AI Food Inventory Management",
    category: "UX/UI Design • Mobile App",
    location: "University of Michigan",
    year: "2025",
    description: "Designed a 4-screen food recommendation platform using Figma and Miro to detect expiry, suggest recipes, and prevent waste.",
    image: "https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNjM0ODk0ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Figma", "Miro", "AI", "Sustainability"],
    metrics: [
      { label: "Task Efficiency", value: "42% ↑" },
      { label: "Screens", value: "4" },
      { label: "User Focus", value: "Sustainability" }
    ]
  },
  {
    title: "IRS2Go Portal Redesign",
    subtitle: "Accessibility-First Government Platform",
    category: "UX Research • Accessibility",
    location: "University Project",
    year: "2025",
    description: "Re-architected the IRS2Go portal with WCAG 2.1 AA-compliant framework, performing heuristic evaluations and user testing.",
    image: "https://images.unsplash.com/photo-1634947096506-6d9f114cf64e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2Nlc3NpYmlsaXR5JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjM0NjgyNTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["WCAG 2.1 AA", "Accessibility", "Usability Testing", "A/B Testing"],
    metrics: [
      { label: "Cognitive Load", value: "35% ↓" },
      { label: "Compliance", value: "WCAG 2.1 AA" },
      { label: "User Trust", value: "35% ↑" }
    ]
  },
  {
    title: "LLM-Powered UX Research",
    subtitle: "EV Charging Experience Analysis",
    category: "UX Research • Data Analysis",
    location: "University of Michigan",
    year: "2025",
    description: "Combined LLM-powered thematic analysis of 16,000+ EV charging reviews with interviews and statistical analysis.",
    image: "https://images.unsplash.com/photo-1587355760421-b9de3226a046?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwZXhwZXJpZW5jZSUyMGRlc2lnbnxlbnwxfHx8fDE3NjM0MjA2NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["LLM", "User Research", "ANOVA", "Statistical Analysis"],
    metrics: [
      { label: "Reviews Analyzed", value: "16,000+" },
      { label: "Key Themes", value: "6" },
      { label: "Method", value: "Mixed" }
    ]
  },
  {
    title: "Reducing Outpatient Anxiety",
    subtitle: "Healthcare Experience Research",
    category: "UX Research • Healthcare",
    location: "Research Project",
    year: "2024",
    description: "Led mixed-method user research using interviews and diary studies to uncover emotional triggers in outpatient care.",
    image: "https://images.unsplash.com/photo-1657757996603-acec063f1d9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwd29ya3NwYWNlJTIwZGVzaWdufGVufDF8fHx8MTc2MzQ1ODQ0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["User Research", "VR Prototype", "Healthcare", "NVivo"],
    metrics: [
      { label: "Anxiety Reduction", value: "40% ↓" },
      { label: "Data Points", value: "800+" },
      { label: "Deliverable", value: "VR Prototype" }
    ]
  }
];

export function Destinations() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section id="destinations" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block mb-4 px-4 py-2 bg-neutral-900 text-white rounded-lg text-sm">
            Featured Work
          </div>
          <h2 className="text-neutral-900 mb-4">Case Studies</h2>
          <p className="text-neutral-600">
            A selection of projects showcasing user research, interaction design, and measurable impact. 
            Each project demonstrates my process from problem definition to solution delivery.
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onHoverStart={() => setActiveProject(index)}
              onHoverEnd={() => setActiveProject(null)}
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                {/* Image */}
                <div className="lg:col-span-2 relative h-80 lg:h-auto overflow-hidden">
                  <motion.div
                    animate={{ scale: activeProject === index ? 1.1 : 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/40 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeProject === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Floating view icon */}
                  <motion.div
                    className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ 
                      scale: activeProject === index ? 1 : 0,
                      rotate: activeProject === index ? 0 : -180
                    }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <Eye className="w-5 h-5 text-neutral-900" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <motion.span 
                      className="px-3 py-1 bg-neutral-900 text-white rounded-lg text-sm"
                      whileHover={{ scale: 1.05 }}
                    >
                      {project.year}
                    </motion.span>
                    <span className="text-neutral-500 text-sm">{project.category}</span>
                  </div>

                  <motion.h3 
                    className="text-neutral-900 mb-2"
                    animate={{ 
                      color: activeProject === index ? "#525252" : "#171717"
                    }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-neutral-600 mb-4">{project.subtitle}</p>

                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <motion.div 
                    className="grid grid-cols-3 gap-4 mb-6 p-4 bg-neutral-50 rounded-xl border border-transparent"
                    animate={{
                      backgroundColor: activeProject === index ? "#f5f5f5" : "#fafafa",
                      borderColor: activeProject === index ? "#e5e5e5" : "transparent"
                    }}
                  >
                    {project.metrics.map((metric, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <p className="text-neutral-500 text-xs mb-1">{metric.label}</p>
                        <motion.p 
                          className="text-neutral-900"
                          whileHover={{ scale: 1.1 }}
                        >
                          {metric.value}
                        </motion.p>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        className="px-3 py-1 bg-white border border-neutral-200 text-neutral-700 rounded-lg text-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: tagIndex * 0.05 }}
                        whileHover={{ 
                          scale: 1.1, 
                          backgroundColor: "#171717",
                          color: "#ffffff",
                          borderColor: "#171717"
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  <motion.button 
                    className="inline-flex items-center gap-2 text-neutral-900 hover:gap-4 transition-all"
                    whileHover={{ x: 5 }}
                  >
                    View Case Study
                    <motion.div
                      animate={{ 
                        x: activeProject === index ? [0, 5, 0] : 0
                      }}
                      transition={{ 
                        duration: 1,
                        repeat: activeProject === index ? Infinity : 0
                      }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}