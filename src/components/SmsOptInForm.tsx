'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SmsOptInForm() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [nonMarketingConsent, setNonMarketingConsent] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!marketingConsent && !nonMarketingConsent) {
      setMessage('Please consent to at least one option to subscribe.');
      return;
    }
    // In a real app, you would send this to your backend (e.g., a Next.js API route)
    // which would then use the Twilio API to add the subscriber.
    console.log(`Subscribing ${phoneNumber} (marketing=${marketingConsent}, nonMarketing=${nonMarketingConsent})`);
    setMessage(`Thank you! A confirmation text will be sent to ${phoneNumber}.`);
    setPhoneNumber('');
    setMarketingConsent(false);
    setNonMarketingConsent(false);
  };

  return (
    <div className="w-full max-w-lg bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
      <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">SMS Opt-In</h3>
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
            id="consent-marketing"
            type="checkbox"
            checked={marketingConsent}
            onChange={(e) => setMarketingConsent(e.target.checked)}
            className="h-5 w-5 mt-1 rounded border-gray-300 bg-gray-100 text-teal-600 focus:ring-teal-500"
          />
          <label htmlFor="consent-marketing" className="text-sm text-gray-600">
            I consent to receive marketing text messages from Idaho Software Development at the phone number provided. Frequency may vary. Message &amp; data rates may apply. Text HELP for assistance, reply STOP to opt out.
          </label>
        </div>

        <div className="flex items-start space-x-3">
          <input
            id="consent-nonmarketing"
            type="checkbox"
            checked={nonMarketingConsent}
            onChange={(e) => setNonMarketingConsent(e.target.checked)}
            className="h-5 w-5 mt-1 rounded border-gray-300 bg-gray-100 text-teal-600 focus:ring-teal-500"
          />
          <label htmlFor="consent-nonmarketing" className="text-sm text-gray-600">
            I consent to receive non-marketing text messages from Idaho Software Development about my order updates, appointment reminders etc. Message &amp; data rates may apply.
          </label>
        </div>
        <div className="text-center">


          <p className="text-sm text-teal-700">
            <Link href="/terms-of-service" className="font-semibold underline hover:text-teal-900">Terms of Service</Link>
            {" "}&amp;{" "}
            <Link href="/privacy-policy" className="font-semibold underline hover:text-teal-900">Privacy Policy</Link>
          </p>
        </div>
        <button
          type="submit"
          className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-md transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
          disabled={!marketingConsent && !nonMarketingConsent}
        >
          Subscribe
        </button>
        <div className="text-center">

          <a
            href="mailto:support@idsoftwaredev.com"
            className="text-center font-semibold text-teal-700 underline text-xs hover:text-teal-900"
          >
            support@idsoftwaredev.com
          </a>
        </div>
      </form>
      {message && <p className="text-center mt-4 text-green-600">{message}</p>}
    </div>
  );
}
