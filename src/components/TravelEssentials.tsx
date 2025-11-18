import { Palette, Code, Users, BarChart3, Layers, Compass } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const essentials = [
  {
    icon: Palette,
    category: "Visual Design & Tools",
    items: ["Figma", "Figma Make", "Adobe Firefly", "Adobe XD", "Sketch", "Miro", "Adobe Creative Suite", "Photoshop", "Illustrator", "InDesign"]
  },
  {
    icon: Code,
    category: "Development",
    items: ["HTML5", "CSS", "Tailwind CSS", "JavaScript", "React", "Angular", "Vue.js", "Dart", "Kotlin", "C", "C++", "Java"]
  },
  {
    icon: Users,
    category: "Product & UX Skills",
    items: ["Product Strategy", "User Journey Mapping", "A/B Testing", "Stakeholder Management", "Agile Methodology", "Lean UX", "Interaction Design", "Inclusive Design", "Typography", "UI Design"]
  },
  {
    icon: BarChart3,
    category: "Research & Analytics",
    items: ["Qualitative Research", "Quantitative Research", "Card Sorting", "Eye-tracking", "Google Analytics", "User-Centered Design", "Heuristic Evaluation", "Power BI"]
  },
  {
    icon: Layers,
    category: "Design Systems & Methods",
    items: ["Design Systems", "Responsive Web Design", "Wireframing", "Prototyping", "Motion Design", "Sketching", "Storybook", "WCAG 2.1 AA"]
  },
  {
    icon: Compass,
    category: "Tools & Platforms",
    items: ["DevOps", "AWS", "SQL", "Microsoft Office", "Visual Studio Code", "Git", "NVDA", "NVivo"]
  }
];

export function TravelEssentials() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="essentials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block mb-4 px-4 py-2 bg-neutral-900 text-white rounded-lg text-sm">
            Expertise
          </div>
          <h2 className="text-neutral-900 mb-4">Skills & Tools</h2>
          <p className="text-neutral-600">
            A comprehensive toolkit spanning design, research, development, and analytics to deliver 
            end-to-end user experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {essentials.map((essential, index) => {
            const Icon = essential.icon;
            const isActive = activeIndex === index;
            
            return (
              <motion.div
                key={index}
                className="group p-8 bg-neutral-50 rounded-2xl hover:bg-neutral-900 transition-all duration-300 border-2 border-transparent hover:border-neutral-900 cursor-pointer overflow-hidden relative"
                onHoverStart={() => setActiveIndex(index)}
                onHoverEnd={() => setActiveIndex(null)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isActive ? 1 : 0 }}
                />

                <div className="relative z-10">
                  <motion.div 
                    className="w-12 h-12 mb-4 bg-neutral-900 group-hover:bg-white rounded-xl flex items-center justify-center transition-all duration-300"
                    animate={{
                      rotate: isActive ? 360 : 0,
                      scale: isActive ? 1.1 : 1
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-6 h-6 text-white group-hover:text-neutral-900 transition-colors" />
                  </motion.div>
                  
                  <h3 className="text-neutral-900 group-hover:text-white mb-4 transition-colors">
                    {essential.category}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {essential.items.map((item, itemIndex) => (
                      <motion.span
                        key={itemIndex}
                        className="px-3 py-1 bg-white group-hover:bg-neutral-800 text-neutral-700 group-hover:text-white rounded-lg text-sm transition-all duration-300 border border-neutral-200 group-hover:border-neutral-700"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          delay: index * 0.1 + itemIndex * 0.03,
                          type: "spring",
                          stiffness: 200
                        }}
                        whileHover={{ 
                          scale: 1.15,
                          backgroundColor: "#ffffff",
                          color: "#171717",
                          borderColor: "#ffffff",
                          zIndex: 10
                        }}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Particle effect on hover */}
                {isActive && (
                  <>
                    <motion.div
                      className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full"
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 0,
                      }}
                    />
                    <motion.div
                      className="absolute bottom-4 left-4 w-2 h-2 bg-white rounded-full"
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 0.5,
                      }}
                    />
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}