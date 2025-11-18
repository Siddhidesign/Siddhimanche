import { ArrowDown, Sparkles, MapPin, GraduationCap } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import profilePhoto from "figma:asset/11fa84055fe01f8cc11e6227095972e562f3a5b7.png";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const scrollToTimeline = () => {
    const element = document.getElementById("timeline");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-neutral-50"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-8 left-1/3 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 w-full"
        style={{ y, opacity }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Profile Photo - Left */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Floating particles */}
              <motion.div
                className="absolute -top-4 -right-4 text-yellow-500"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Sparkles className="w-6 h-6" />
              </motion.div>

              {/* Polaroid Frame */}
              <motion.div
                className="bg-white p-4 pb-12 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300 cursor-pointer"
                whileHover={{ scale: 1.05, rotate: 0 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-64 h-64 overflow-hidden">
                  <img
                    src={profilePhoto}
                    alt="Siddhi Manche"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Polaroid Caption */}
                <div className="mt-3 text-center">
                  <p className="text-neutral-700 text-sm" style={{ fontFamily: 'cursive' }}>
                    Design. Research. Innovate.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content - Right */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <motion.h1
                className="text-neutral-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Siddhi Manche
              </motion.h1>
            </motion.div>

            <motion.p
              className="text-neutral-700 text-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              UX/UI Designer | Front-end Developer
            </motion.p>

            <motion.p
              className="text-neutral-600 mb-12 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Crafting human-centered digital experiences through research, design, and innovation.
              Passionate about accessibility, user empowerment, and design that makes a difference.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <motion.div
                className="px-6 py-3 bg-white rounded-lg border-2 border-neutral-200 hover:border-neutral-900 transition-all cursor-pointer shadow-sm hover:shadow-md"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-neutral-500" />
                  <p className="text-neutral-500 text-sm">Location</p>
                </div>
                <p className="text-neutral-900">Dearborn, Michigan</p>
              </motion.div>
              <motion.div
                className="px-6 py-3 bg-white rounded-lg border-2 border-neutral-200 hover:border-neutral-900 transition-all cursor-pointer shadow-sm hover:shadow-md"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <GraduationCap className="w-4 h-4 text-neutral-500" />
                  <p className="text-neutral-500 text-sm">Education</p>
                </div>
                <p className="text-neutral-900">MS in HCDE - UMich</p>
              </motion.div>
              <motion.div
                className="px-6 py-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-2 border-green-200 hover:border-green-400 transition-all cursor-pointer shadow-sm hover:shadow-md"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(34, 197, 94, 0)",
                    "0 0 0 4px rgba(34, 197, 94, 0.1)",
                    "0 0 0 0 rgba(34, 197, 94, 0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <p className="text-neutral-500 text-sm mb-1">Availability</p>
                <p className="text-neutral-900 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Open to Opportunities
                </p>
              </motion.div>
            </motion.div>

            <motion.button
              onClick={scrollToTimeline}
              className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors shadow-lg hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              whileHover={{ scale: 1.05, gap: "12px" }}
              whileTap={{ scale: 0.95 }}
            >
              Explore My Work
              <motion.div
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowDown className="w-4 h-4" />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-neutral-300 rounded-full flex items-start justify-center p-1">
          <motion.div
            className="w-1.5 h-2 bg-neutral-400 rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}