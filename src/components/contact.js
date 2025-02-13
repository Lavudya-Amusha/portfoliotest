import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold mb-10">Contact Me</h2>
      <form className="max-w-lg mx-auto">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg"
        />
        <textarea
          placeholder="Your Message"
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg"
          rows="5"
        ></textarea>
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;

