import { Mail, Linkedin, Github, Send, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export function Contact() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  return (
    <section id="contact" className="relative py-24 bg-neutral-50 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -left-20 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-50"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 -right-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-50"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-4 px-4 py-2 bg-neutral-900 text-white rounded-lg text-sm">
            Get in Touch
          </div>
          <h2 className="text-neutral-900 mb-4">Let's Create Together</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            Whether you're looking for a UX designer, researcher, or collaborator—let's connect.
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-neutral-100"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <motion.a
              href="mailto:manche.siddhi@gmail.com"
              className="flex flex-col items-center gap-3 p-6 bg-neutral-50 rounded-2xl hover:bg-neutral-900 hover:text-white transition-all group relative overflow-hidden"
              onHoverStart={() => setHoveredCard(0)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{ y: -5, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ scale: 0, borderRadius: "100%" }}
                whileHover={{ scale: 2, borderRadius: "0%" }}
                transition={{ duration: 0.5 }}
              />
              <motion.div
                animate={{ rotate: hoveredCard === 0 ? 360 : 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10"
              >
                <Mail className="w-8 h-8 text-neutral-900 group-hover:text-white" />
              </motion.div>
              <span className="text-sm relative z-10">Email</span>
              <span className="text-xs text-neutral-500 group-hover:text-white/70 relative z-10">manche.siddhi@gmail.com</span>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/siddhi-manche-969820216/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 bg-neutral-50 rounded-2xl hover:bg-neutral-900 hover:text-white transition-all group relative overflow-hidden"
              onHoverStart={() => setHoveredCard(1)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{ y: -5, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ scale: 0, borderRadius: "100%" }}
                whileHover={{ scale: 2, borderRadius: "0%" }}
                transition={{ duration: 0.5 }}
              />
              <motion.div
                animate={{ rotate: hoveredCard === 1 ? 360 : 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10"
              >
                <Linkedin className="w-8 h-8 text-neutral-900 group-hover:text-white" />
              </motion.div>
              <span className="text-sm relative z-10">LinkedIn</span>
              <span className="text-xs text-neutral-500 group-hover:text-white/70 relative z-10">Connect with me</span>
            </motion.a>

            <motion.a
              href="https://siddhidesign.github.io/Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 bg-neutral-50 rounded-2xl hover:bg-neutral-900 hover:text-white transition-all group relative overflow-hidden"
              onHoverStart={() => setHoveredCard(2)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{ y: -5, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ scale: 0, borderRadius: "100%" }}
                whileHover={{ scale: 2, borderRadius: "0%" }}
                transition={{ duration: 0.5 }}
              />
              <motion.div
                animate={{ rotate: hoveredCard === 2 ? 360 : 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10"
              >
                <Github className="w-8 h-8 text-neutral-900 group-hover:text-white" />
              </motion.div>
              <span className="text-sm relative z-10">GitHub</span>
              <span className="text-xs text-neutral-500 group-hover:text-white/70 relative z-10">View my code</span>
            </motion.a>
          </div>

          <div className="border-t border-neutral-200 pt-8">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-sm text-neutral-600 mb-2">Name</label>
                  <motion.input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-neutral-50 rounded-xl border-2 border-neutral-200 focus:border-neutral-900 focus:outline-none transition-all"
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    animate={{
                      scale: focusedField === "name" ? 1.02 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="block text-sm text-neutral-600 mb-2">Email</label>
                  <motion.input
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 bg-neutral-50 rounded-xl border-2 border-neutral-200 focus:border-neutral-900 focus:outline-none transition-all"
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    animate={{
                      scale: focusedField === "email" ? 1.02 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <label className="block text-sm text-neutral-600 mb-2">Message</label>
                <motion.textarea
                  placeholder="Tell me about your project or just say hello..."
                  rows={4}
                  className="w-full px-4 py-3 bg-neutral-50 rounded-xl border-2 border-neutral-200 focus:border-neutral-900 focus:outline-none transition-all resize-none"
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  animate={{
                    scale: focusedField === "message" ? 1.02 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full md:w-auto px-8 py-4 bg-neutral-900 text-white rounded-xl hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                Send Message
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Send className="w-4 h-4" />
                </motion.div>
              </motion.button>
            </form>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          <p className="text-neutral-500 text-sm">
            © 2024 Siddhi Manche • UX/UI Designer & Front-end Developer
          </p>
        </motion.div>
      </div>
    </section>
  );
}