import { Target, Users, Lightbulb, Heart } from "lucide-react";
import { motion } from "framer-motion";

export function AboutMe() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4 px-4 py-2 bg-neutral-900 text-white rounded-lg text-sm">
              About Me
            </div>
            <motion.h2
              className="text-neutral-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Designing with Purpose, Creating with Empathy
            </motion.h2>
            <div className="space-y-4 text-neutral-600">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                I'm a UX/UI Designer and Front-end Developer pursuing my Master's in Human-Centered Design
                and Engineering at the University of Michigan-Dearborn. My journey in design is driven by
                a passion for creating accessible, inclusive digital experiences that solve real problems.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                With a background spanning AI-driven design systems, healthcare UX research, and
                accessibility-focused interfaces, I bring a unique blend of technical expertise and
                human-centered thinking to every project.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Currently serving as a Teaching Assistant for the Foundation of HCDE course, I'm constantly
                learning and sharing knowledge about the principles that make great design work.
              </motion.p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            <motion.div
              className="p-6 bg-neutral-50 rounded-2xl hover:bg-neutral-900 hover:text-white transition-all group cursor-pointer border-2 border-transparent hover:border-neutral-900"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Target className="w-10 h-10 text-neutral-900 group-hover:text-white mb-4" />
              </motion.div>
              <h3 className="text-neutral-900 group-hover:text-white mb-2">User-Centered</h3>
              <p className="text-neutral-600 group-hover:text-white/80 text-sm">
                Every design decision starts with understanding user needs and behaviors
              </p>
            </motion.div>

            <motion.div
              className="p-6 bg-neutral-50 rounded-2xl hover:bg-neutral-900 hover:text-white transition-all group cursor-pointer border-2 border-transparent hover:border-neutral-900"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Users className="w-10 h-10 text-neutral-900 group-hover:text-white mb-4" />
              </motion.div>
              <h3 className="text-neutral-900 group-hover:text-white mb-2">Accessible</h3>
              <p className="text-neutral-600 group-hover:text-white/80 text-sm">
                WCAG 2.1 AA compliant designs that work for everyone
              </p>
            </motion.div>

            <motion.div
              className="p-6 bg-neutral-50 rounded-2xl hover:bg-neutral-900 hover:text-white transition-all group cursor-pointer border-2 border-transparent hover:border-neutral-900"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Lightbulb className="w-10 h-10 text-neutral-900 group-hover:text-white mb-4" />
              </motion.div>
              <h3 className="text-neutral-900 group-hover:text-white mb-2">Innovative</h3>
              <p className="text-neutral-600 group-hover:text-white/80 text-sm">
                Leveraging AI and emerging tech to solve complex problems
              </p>
            </motion.div>

            <motion.div
              className="p-6 bg-neutral-50 rounded-2xl hover:bg-neutral-900 hover:text-white transition-all group cursor-pointer border-2 border-transparent hover:border-neutral-900"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                whileHover={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.4 }}
              >
                <Heart className="w-10 h-10 text-neutral-900 group-hover:text-white mb-4" />
              </motion.div>
              <h3 className="text-neutral-900 group-hover:text-white mb-2">Impact-Driven</h3>
              <p className="text-neutral-600 group-hover:text-white/80 text-sm">
                Focused on measurable outcomes that improve lives
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}