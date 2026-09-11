"use client"
import React, { useRef, useState } from 'react';
import Recaptcha, { RecaptchaHandle } from '../../../../components/Recaptcha/Recaptcha';

interface FormData {
  name: string;
  email: string;
  contact: string;
  address: string;
  message: string;
}

type FormProps = {
  recaptchaSiteKey?: string;
};

const emptyForm: FormData = {
  name: '',
  email: '',
  contact: '',
  address: '',
  message: ''
};

const Form: React.FC<FormProps> = ({ recaptchaSiteKey }) => {
  const recaptchaRef = useRef<RecaptchaHandle>(null);
  const [formData, setFormData] = useState<FormData>(emptyForm);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!recaptchaToken) {
      setError('Please complete the reCAPTCHA.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken,
        }),
      });

      const result = (await response.json()) as { success?: boolean; error?: string };

      if (!response.ok || !result.success) {
        setError(result.error || 'Something went wrong. Please try again.');
        recaptchaRef.current?.reset();
        return;
      }

      setSuccess('Thank you. Your message has been sent.');
      setFormData(emptyForm);
      recaptchaRef.current?.reset();
    } catch {
      setError('Something went wrong. Please try again.');
      recaptchaRef.current?.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='md:w-[50%] md:flex  md:justify-end md:mt-0 mt-10 '>
    <div className=" bg-white shadow-md rounded-md p-6 md:w-[80%]">
      <h2 className="heading5 font-bold mb-6 text-center">Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-orange-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-orange-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact:</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-orange-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-orange-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-orange-400"
          />
        </div>
        <Recaptcha ref={recaptchaRef} siteKey={recaptchaSiteKey} onChange={setRecaptchaToken} />
        {error ? (
          <p className="mb-4 text-center text-sm text-red-600">{error}</p>
        ) : null}
        {success ? (
          <p className="mb-4 text-center text-sm text-green-600">{success}</p>
        ) : null}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-400 focus:outline-none focus:ring-2 focus:border-orange-400 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
        
      </form>
    </div>
    </div>
  );
};

export default Form;
