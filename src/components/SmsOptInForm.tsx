'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SmsOptInForm() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [hasConsented, setHasConsented] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!hasConsented) {
      setMessage('You must agree to the terms to subscribe.');
      return;
    }
    // In a real app, you would send this to your backend (e.g., a Next.js API route)
    // which would then use the Twilio API to add the subscriber.
    console.log(`Subscribing ${phoneNumber}`);
    setMessage(`Thank you! A confirmation text will be sent to ${phoneNumber}.`);
    setPhoneNumber('');
    setHasConsented(false);
  };

  return (
    <div className="w-full max-w-lg bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
      <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">Get Project Updates via SMS</h3>
      <p className="text-center text-gray-600 mb-6">Enter your phone number to receive important updates and alerts about your project status from Idaho Software Development.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="phone" className="sr-only">Phone Number</label>
          <input
            id="phone"
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Your phone number"
            className="w-full p-3 rounded-md bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:outline-none transition-colors"
            required
          />
        </div>
        <div className="flex items-start space-x-3">
          <input
            id="consent"
            type="checkbox"
            checked={hasConsented}
            onChange={(e) => setHasConsented(e.target.checked)}
            className="h-5 w-5 mt-1 rounded border-gray-300 bg-gray-100 text-teal-600 focus:ring-teal-500"
            required
          />
          <label htmlFor="consent" className="text-sm text-gray-600">
            I agree to receive automated informational text messages from Idaho Software Development regarding my project status and milestones at the number provided. Message frequency will vary based on project activity. Msg & data rates may apply. Reply HELP for help and STOP to cancel. View our <Link href="/terms-of-service" className="underline hover:text-gray-900">Terms of Service</Link> and <Link href="/privacy-policy" className="underline hover:text-gray-900">Privacy Policy</Link>.
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-md transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
          disabled={!hasConsented}
        >
          Subscribe
        </button>
      </form>
      {message && <p className="text-center mt-4 text-green-600">{message}</p>}
    </div>
  );
}
