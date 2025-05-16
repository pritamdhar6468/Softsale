// src/components/HowItWorks.jsx
import React from "react";
import { CloudUpload, DollarSign, CheckCircle } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const HowItWorks = ({ isDarkMode }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.3 });

  return (
    <section ref={ref} className="py-16 bg-gray-50 text-center px-4 md:px-8 h-[70vh] flex flex-col justify-center items-center ">
      <h2 className="text-3xl font-bold text-blue-900 mb-8">How It Works</h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 flex-wrap">
        <AnimatePresence>
          {isInView && (
            <>
              {/* Step 1 */}
              <motion.div
                className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-full max-w-xs"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
              >
                <CloudUpload className="text-blue-300 w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold text-blue-900">Upload License</h3>
                <p className="text-gray-700 mt-2">
                  Provide the license you want to sell. It’s quick and secure.
                </p>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-full max-w-xs"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
              >
                <DollarSign className="text-yellow-300 w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold text-blue-900">Get Valuation</h3>
                <p className="text-gray-700 mt-2">
                  Receive an instant valuation for your license.
                </p>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-full max-w-xs"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, delay: 0.7, ease: "easeInOut" }}
              >
                <CheckCircle className="text-green-600 w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold text-blue-900">Get Paid</h3>
                <p className="text-gray-700 mt-2">
                  Once approved, receive your payment instantly.
                </p>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HowItWorks;
