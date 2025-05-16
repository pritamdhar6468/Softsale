// src/components/Testimonials.jsx
import React from "react";
import { Star } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "Software Engineer",
      company: "TechCorp",
      review:
        "SoftSell made selling my unused software licenses a breeze. Fast, secure, and great value!",
    },
    {
      name: "Sarah Lee",
      role: "IT Manager",
      company: "Cloud Solutions",
      review:
        "Amazing service! Got a fair price for my licenses and payment was instant. Highly recommend.",
    },
  ];

  const ref = React.useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.3 });

  return (
    <section ref={ref} className="py-16 bg-white text-center px-4 md:px-8 flex flex-col justify-center items-center h-[70vh]">
      <h2 className="text-3xl font-bold text-blue-900 mb-8">Customer Testimonials</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <AnimatePresence>
          {isInView &&
            testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition"
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                transition={{ duration: 0.6, delay:  0.2, ease: "easeInOut" }}
              >
                <div className="flex justify-center mb-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.review}"</p>
                <h3 className="text-lg font-semibold text-blue-900">{testimonial.name}</h3>
                <p className="text-sm text-gray-600">
                  {testimonial.role}, {testimonial.company}
                </p>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Testimonials;
