import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto relative z-10 w-full">
        {/* Heading with better visibility */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 md:p-10 shadow-xl border border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Information - Left Side */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white mb-2">Contact Details</h3>
              <p className="text-gray-300 mb-6">
                I'm always open to discussing new projects or opportunities. Feel free to reach out!
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-500/20 p-3 rounded-lg mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-white text-lg">Phone</h4>
                    <p className="text-gray-300 mt-1">7007997658</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-500/20 p-3 rounded-lg mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-white text-lg">Email</h4>
                    <p className="text-gray-300 mt-1">arpit.sri2011@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Right Side */}
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200"
                    placeholder="Type your message here"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3.5 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/20"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;