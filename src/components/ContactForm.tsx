'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `New Inquiry from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:admin@idsoftwaredev.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    setStatus('Your email client should be open. Please send the message.');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="w-full max-w-lg bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
      <h3 className="text-2xl font-bold text-center text-gray-900 mb-2">Contact Me</h3>
      <p className="text-center text-gray-600 mb-6">Have a project in mind? Let&apos;s talk.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="sr-only">Your Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="w-full p-3 rounded-md bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:outline-none transition-colors"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">Your Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            className="w-full p-3 rounded-md bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:outline-none transition-colors"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="sr-only">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell me about your project..."
            rows={5}
            className="w-full p-3 rounded-md bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:outline-none transition-colors"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-md transition-all duration-300"
        >
          Send Inquiry
        </button>
      </form>
      {status && <p className="text-center mt-4 text-green-600">{status}</p>}
      <p className="text-center text-xs text-gray-500 mt-4">
        If the button doesn&apos;t work, you can email me directly at <a href="mailto:admin@idsoftwaredev.com" className="underline hover:text-teal-600">admin@idsoftwaredev.com</a>.
      </p>
    </div>
  );
}