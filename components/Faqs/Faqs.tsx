"use client"
import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMagnifyingGlass, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Scene3D from '../Scene3D/Scene3D';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqsProps {
  data: FaqItem[];
}

// Long lists (the FAQs page) get a search box; the short homepage list doesn't need one.
const SEARCH_THRESHOLD = 8;

const Faqs: React.FC<FaqsProps> = ({ data }) => {
  const [activeQuestion, setActiveQuestion] = useState<string | null>(data[0]?.question ?? null);
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return data;
    return data.filter((faq) => faq.question.toLowerCase().includes(q) || faq.answer.toLowerCase().includes(q));
  }, [data, query]);

  const toggle = (question: string) => setActiveQuestion(activeQuestion === question ? null : question);

  return (
    <section className='w-full flex justify-center px-5 md:py-28 py-16'>
      <div className='w-full max-w-[1150px] grid md:grid-cols-[400px_1fr] grid-cols-1 md:gap-14 gap-10'>
        {/* Intro + 3D card */}
        <div className='md:sticky md:top-8 self-start'>
          <span className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-30/60 text-orange-400 text-[13px] font-semibold uppercase tracking-wider' data-aos='fade-up'>
            <span className='w-2 h-2 rounded-full bg-orange-400' />
            FAQs
          </span>
          <h2 className='heading3 mt-4' data-split>Frequently asked <span className='text-orange-400'>questions</span></h2>
          <p className='text-gray-50 mt-4' data-aos='fade-up'>Everything you need to know about Crown One, from getting started to earning rewards.</p>

          <div data-aos='fade-in' className='md:mt-10 mt-8'>
            <div
              className='relative overflow-hidden rounded-[30px] shadow-xl md:h-[320px] h-[250px] p-7 flex flex-col justify-end text-white'
              style={{ background: 'linear-gradient(135deg, #ff8a4c 0%, #fe4f11 100%)' }}
              data-tilt='8'
            >
              <div
                className='absolute inset-0'
                style={{
                  backgroundImage: 'radial-gradient(rgba(255,255,255,0.28) 1.2px, transparent 1.2px)',
                  backgroundSize: '22px 22px',
                  WebkitMaskImage: 'linear-gradient(to top right, black 0%, transparent 70%)',
                  maskImage: 'linear-gradient(to top right, black 0%, transparent 70%)',
                }}
              />
              <div className='absolute -top-24 -right-16 w-72 h-72 rounded-full bg-white/20 blur-3xl' />
              <Scene3D className='!bottom-[38%] [mask-image:linear-gradient(to_bottom,black_45%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,black_45%,transparent)]' />
              <div className='relative'>
                <h3 className='heading6'>Still have questions?</h3>
                <p className='text-white/85 mt-1 !text-[14px]'>Our team is happy to help.</p>
                <Link
                  href='/contact-us'
                  className='inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-full bg-white text-orange-400 text-[14px] font-semibold shadow-md hover:gap-3 transition-all duration-300'
                >
                  Contact us
                  <FontAwesomeIcon icon={faArrowRight} className='w-3.5 h-3.5' />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Questions */}
        <div>
          {data.length > SEARCH_THRESHOLD && (
            <div className='relative mb-6' data-aos='fade-up'>
              <FontAwesomeIcon icon={faMagnifyingGlass} className='absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-20' />
              <input
                type='text'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder='Search questions...'
                className='w-full pl-12 pr-5 py-4 rounded-full bg-white border border-gray-30/60 shadow-sm text-[15px] outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-400/10 transition-all'
              />
            </div>
          )}

          <div className='flex flex-col gap-4'>
            {filtered.map((faq, index) => {
              const open = activeQuestion === faq.question;
              return (
                <div key={faq.question} data-aos='fade-up'>
                  <div
                    className={`group rounded-20 border transition-all duration-500 [perspective:1000px] ${open
                      ? 'bg-white border-orange-400/60 shadow-xl'
                      : 'bg-white border-gray-30/60 shadow-sm hover:border-orange-400/40 hover:shadow-lg'}`}
                  >
                    <button
                      type='button'
                      onClick={() => toggle(faq.question)}
                      aria-expanded={open}
                      className='w-full flex items-center md:gap-5 gap-3 text-left md:p-6 p-4'
                    >
                      <span
                        className={`shrink-0 md:w-11 md:h-11 w-9 h-9 rounded-xl flex items-center justify-center text-[13px] font-bold transition-all duration-500 ${open
                          ? 'bg-gradient-to-br from-[#ff8a4c] to-[#fe4f11] text-white shadow-lg shadow-orange-400/30 [transform:rotateY(360deg)]'
                          : 'bg-[#fff4ec] text-orange-400'}`}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className={`flex-1 font-semibold md:text-[17px] text-[15px] transition-colors duration-300 ${open ? 'text-orange-400' : 'text-black-50 group-hover:text-orange-400'}`}>
                        {faq.question}
                      </span>
                      <span
                        className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-500 ${open
                          ? 'bg-orange-400 text-white rotate-45'
                          : 'bg-gray-10 text-black-50 group-hover:bg-[#fff4ec] group-hover:text-orange-400'}`}
                      >
                        <FontAwesomeIcon icon={faPlus} className='w-3.5 h-3.5' />
                      </span>
                    </button>

                    {/* Answer unfolds downwards in 3D while its row grows */}
                    <div className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                      <div className='overflow-hidden'>
                        <div
                          className={`md:pl-[88px] md:pr-16 px-4 md:pb-6 pb-5 origin-top transition-all duration-500 ease-out ${open
                            ? 'opacity-100 [transform:rotateX(0deg)]'
                            : 'opacity-0 [transform:rotateX(-70deg)]'}`}
                        >
                          <p className='text-gray-50 md:leading-[26px] leading-[22px]'>{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {filtered.length === 0 && (
              <div className='rounded-20 border border-dashed border-gray-30 bg-white p-10 text-center'>
                <p className='font-semibold text-black-50'>No questions match &quot;{query}&quot;</p>
                <p className='text-gray-50 mt-1'>Try another keyword or <Link href='/contact-us' className='text-orange-400 font-semibold hover:underline'>contact us</Link>.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
