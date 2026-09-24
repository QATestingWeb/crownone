"use client"
import React, { useRef, useState } from 'react';
import { FaCheckCircle, FaExclamationCircle, FaPaperPlane } from 'react-icons/fa';
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
    <div className='md:col-span-3 md:p-10 p-6' data-aos-desktop="fade-left" data-aos-mobile="fade-up">
      <h2 className="md:text-[28px] text-[22px] font-bold">Send us a message</h2>
      <p className="text-gray-50 mt-1 mb-8">Fill in the form below and we&apos;ll get back to you shortly.</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          <Field id="name" label="Full name" value={formData.name} onChange={handleChange} />
          <Field id="email" label="Email address" type="email" value={formData.email} onChange={handleChange} />
          <Field id="contact" label="Phone number" type="tel" value={formData.contact} onChange={handleChange} />
          <Field id="address" label="Address" value={formData.address} onChange={handleChange} />
        </div>
        <Field id="message" label="Your message" value={formData.message} onChange={handleChange} multiline />

        <Recaptcha ref={recaptchaRef} siteKey={recaptchaSiteKey} onChange={setRecaptchaToken} />

        {error ? (
          <div role="alert" className="flex items-center gap-2 rounded-10 border border-[#fecaca] bg-[#fef2f2] px-4 py-3 text-sm text-[#b91c1c]">
            <FaExclamationCircle className="shrink-0" /> {error}
          </div>
        ) : null}
        {success ? (
          <div role="status" className="flex items-center gap-2 rounded-10 border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
            <FaCheckCircle className="shrink-0" /> {success}
          </div>
        ) : null}

        <button
          type="submit"
          disabled={isSubmitting}
          className="group self-start inline-flex items-center justify-center gap-3 rounded-full px-8 py-3 text-white font-semibold shadow-lg shadow-orange-400/30 hover:shadow-orange-400/50 hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-400/40 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
          style={{ background: 'linear-gradient(135deg, #ff8a4c 0%, #fe4f11 100%)' }}
        >
          {isSubmitting ? (
            <>
              <span className="w-4 h-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

type FieldProps = {
  id: keyof FormData;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: string;
  multiline?: boolean;
};

// Input with a floating label: the label sits inside the field and slides up on focus or once filled.
const Field: React.FC<FieldProps> = ({ id, label, value, onChange, type = 'text', multiline }) => {
  const inputClass = "peer block w-full rounded-20 border border-gray-30 bg-gray-100 px-5 pt-6 pb-2 text-[15px] text-black-70 placeholder-transparent transition-colors duration-300 hover:border-gray-20 focus:border-orange-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-orange-400/15";
  return (
    <div className="relative">
      {multiline ? (
        <textarea id={id} name={id} value={value} onChange={onChange} required placeholder={label} rows={5} className={`${inputClass} resize-none`} />
      ) : (
        <input id={id} name={id} type={type} value={value} onChange={onChange} required placeholder={label} className={inputClass} />
      )}
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-5 top-2 text-[12px] font-medium text-gray-90 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-[15px] peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:text-[12px] peer-focus:font-medium peer-focus:text-orange-600"
      >
        {label}
      </label>
    </div>
  );
};

export default Form;
