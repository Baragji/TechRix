'use client';

import { SSRSafeMotion } from '@/components/ui/SSRSafeMotion';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    setIsSubmitted(true);
    setEmail('');

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-20 bg-linear-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto px-6">
        <SSRSafeMotion
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
            <SSRSafeMotion
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <EnvelopeIcon className="w-8 h-8 text-white" />
            </SSRSafeMotion>

            <SSRSafeMotion
              as="h2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Hold dig opdateret
            </SSRSafeMotion>

            <SSRSafeMotion
              as="p"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            >
              Tilmeld dig vores nyhedsbrev og få de seneste artikler, tips og indsigter direkte i
              din indbakke.
            </SSRSafeMotion>

            {!isSubmitted ? (
              <SSRSafeMotion
                as="form"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Din email adresse"
                  required
                  className="flex-1 px-6 py-3 rounded-lg border-0 text-text-dark placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 whitespace-nowrap"
                >
                  Tilmeld dig
                </button>
              </SSRSafeMotion>
            ) : (
              <SSRSafeMotion
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-500/20 border border-green-400/30 rounded-lg p-4 max-w-md mx-auto"
              >
                <p className="text-white font-medium">
                  ✓ Tak for din tilmelding! Du vil snart modtage vores nyhedsbrev.
                </p>
              </SSRSafeMotion>
            )}

            <SSRSafeMotion
              as="p"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-sm text-blue-200 mt-4"
            >
              Vi respekterer din privatliv. Ingen spam, kun værdifuldt indhold.
            </SSRSafeMotion>
          </div>
        </SSRSafeMotion>
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { left: '15%', top: '25%', duration: 3, delay: 0 },
          { left: '85%', top: '15%', duration: 2.5, delay: 0.3 },
          { left: '25%', top: '75%', duration: 3.5, delay: 0.6 },
          { left: '75%', top: '85%', duration: 2.8, delay: 0.9 },
          { left: '45%', top: '35%', duration: 4, delay: 1.2 },
          { left: '65%', top: '55%', duration: 3.2, delay: 1.5 },
          { left: '35%', top: '45%', duration: 2.7, delay: 1.8 },
          { left: '55%', top: '65%', duration: 3.8, delay: 0.4 },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            style={{
              left: item.left,
              top: item.top,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              delay: item.delay,
            }}
          />
        ))}
      </div>
    </section>
  );
}
