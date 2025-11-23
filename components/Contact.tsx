"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { socialLinks, contactInfo } from "@/data/contact";
import { FaCircleInfo } from "react-icons/fa6";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-5xl font-main text-white mb-3">Get In Touch</h2>
            <p className="text-gray-400 font-sub">
              프로젝트 문의나 협업 제안이 있으시다면 언제든 연락주세요!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-linear-to-br from-purple-500/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/20">
                <h3 className="text-xl font-main text-white mb-6 flex items-center gap-2">
                  <FaCircleInfo className="w-6 h-6 text-purple-400" />
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-purple-400 mt-1" />
                    <div>
                      <p className="text-sm font-sub text-gray-400">Email</p>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="text-white font-sub hover:text-purple-400 transition-colors"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-purple-400 mt-1" />
                    <div>
                      <p className="text-sm font-sub text-gray-400">Location</p>
                      <p className="text-white font-sub">
                        {contactInfo.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Message */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <p className="text-gray-300 font-sub leading-relaxed">
                  💡 빠른 답변을 원하시면 이메일로 연락주세요. 보통 24시간
                  이내에 답변드립니다.
                </p>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-main text-white mb-6 flex items-center gap-2">
                  <Send className="w-6 h-6 text-purple-400" />
                  Social Links
                </h3>
                <div className="space-y-3">
                  {socialLinks.map((social, idx) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 10 }}
                        animate={
                          isInView
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 10 }
                        }
                        transition={{ delay: 0.5 + idx * 0.1, duration: 0.4 }}
                        className={`flex items-center gap-4 p-4 bg-linear-to-r ${social.color} rounded-xl border border-white/10 ${social.hoverColor} transition-all group`}
                      >
                        <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-all">
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-sub text-gray-400">
                            {social.name}
                          </p>
                          <p className="text-white font-sub text-sm">
                            {social.value}
                          </p>
                        </div>
                        <svg
                          className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="inline-block px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
              <p className="text-gray-400 font-sub text-sm">
                © 2025 Portfolio. Made with by sheep_right
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
