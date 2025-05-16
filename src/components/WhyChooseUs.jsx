import React from 'react';
import { HandCoins, Lock, CircleDollarSign, Headphones } from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
const WhyChooseUs = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.3 });

  return (
    <section
      ref={ref}
      className='bg-amber-50 py-12 px-6 sm:px-10 md:px-16 lg:px-32 flex flex-col h-[80vh] md:flex-row items-center gap-10 justify-between'
    >
      <div className='w-full flex flex-wrap'>
        <AnimatePresence>
          {isInView && (
            <>
              <motion.div
                className='w-full md:w-1/2 mb-8 md:mb-0 '
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: 'easeInOut' }}
              >
                <h2 className='text-3xl sm:text-4xl font-bold text-blue-900 mb-4'>
                  Why Choose Us
                </h2>
                <p className='text-base sm:text-lg text-gray-600 mb-6'>
                  For over a decade, we’ve been a proud service provider,
                  earning and maintaining the trust of the community in
                  Saskatoon, Martensville, Warman, and surrounding areas.
                </p>
                <div className='space-x-4'>
                  <button className='text-red-600 font-semibold hover:underline transition'>
                    Call Now &rarr;
                  </button>
                  <button className='text-red-600 font-semibold hover:underline transition'>
                    Book Free Estimate &rarr;
                  </button>
                </div>
              </motion.div>

              <motion.div
                className='w-full md:w-1/2 grid grid-cols-1 gap-6'
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: 'easeInOut' }}
              >
                <div className='flex items-start space-x-4'>
                  <Lock className='w-8 h-8 text-yellow-500' />
                  <div>
                    <h3 className='font-semibold text-gray-800'>
                      Secure Transactions
                    </h3>
                    <p className='text-gray-600'>
                      Your software license details are protected with
                      industry-standard encryption.
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <HandCoins className='w-8 h-8 text-blue-500' />
                  <div>
                    <h3 className='font-semibold text-gray-800'>
                      Instant Valuation
                    </h3>
                    <p className='text-gray-600'>
                      Get an accurate value for your software license in
                      seconds.
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <CircleDollarSign className='w-8 h-8 text-green-500' />
                  <div>
                    <h3 className='font-semibold text-gray-800'>
                      Fair Pricing
                    </h3>
                    <p className='text-gray-600'>
                      We offer competitive prices for your software licenses.
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <Headphones className='w-8 h-8 text-orange-500' />
                  <div>
                    <h3 className='font-semibold text-gray-800'>
                      24/7 Customer Support
                    </h3>
                    <p className='text-gray-600'>
                      Our team is always here to assist you with any questions.
                    </p>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default WhyChooseUs;
