import type { PropsWithChildren, ReactNode } from 'react';
import { useState, useRef, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';

import caretIcon from '/caret.svg';

interface AccordionProps {
  title: ReactNode;
}

export const Accordion = ({
  title,
  children,
}: PropsWithChildren<AccordionProps>) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
      } else {
        contentRef.current.style.maxHeight = '0px';
      }
    }
  }, [isOpen]);

  return (
    <div className='bg-gray-200 rounded'>
      <div
        className='flex justify-between items-center p-2 cursor-pointer'
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className='text-lg font-medium'>{title}</span>
        <img
          className={twMerge(
            'h-4 w-4 duration-300',
            isOpen ? 'rotate-180' : 'rotate-0'
          )}
          src={caretIcon}
        />
      </div>
      <div
        ref={contentRef}
        className={`bg-gray-100 transition-max-height duration-300 ease-in-out overflow-hidden max-h-0`}
      >
        <div className='p-4 border-t border-gray-200 overflow-auto max-h-[300px]'>
          {children}
        </div>
      </div>
    </div>
  );
};
